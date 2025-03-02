import { ErrorRequestHandler, RequestHandler, Router } from 'express';
import { ALLOWED_EXTENSION, FileSystemEntry } from './files';

const RESERVED_FILE_NAMES = ['_middleware', '_error'];

enum RESERVED_FILE {
  MIDDLEWARE = '_middleware',
  ERROR = '_error',
}

export const getGenericHandler = async (source: string) => {
  if (!source) return undefined;
  const fileExports = await import(source);
  return fileExports.handler as
    | RequestHandler
    | ErrorRequestHandler
    | RequestHandler[]
    | ErrorRequestHandler[]
    | undefined;
};

export const isParameter = (segment: string): [boolean, string] => {
  const regex = /^\[(\w+)\]$/;
  const match = segment.match(regex);
  if (match) {
    return [true, match[1]];
  }
  return [false, segment];
};

export const registerRoute = async (
  router: Router,
  entry: FileSystemEntry,
  preMiddleware: RequestHandler | RequestHandler[] | undefined = undefined,
  postMiddleware: RequestHandler | RequestHandler[] | undefined = undefined,
) => {
  if (RESERVED_FILE_NAMES.includes(entry.name)) {
    return;
  }

  const [isParam, name] = isParameter(entry.name);
  let route = isParam ? `/:${name}` : `/${entry.name}`;

  if (entry.type === 'directory') {
    const childRouter = Router({ mergeParams: true });
    await registerRoutes(
      childRouter,
      entry.children,
      preMiddleware,
      postMiddleware,
    );
    router.use(route, childRouter);
    return;
  }

  // check if the file is a javascript or typescript file
  if (
    entry.extension !== ALLOWED_EXTENSION.JS &&
    entry.extension !== ALLOWED_EXTENSION.TS
  ) {
    return;
  }

  const fileExports = await import(entry.path);
  const { get, post, put, patch, del, middleware } = fileExports;

  // register pre middlewares
  if (preMiddleware) router.use(preMiddleware);
  if (middleware) router.use(middleware);

  // handle index routes
  if (name === 'index') route = '/';

  const handlers = [
    { method: 'get', handler: get },
    { method: 'post', handler: post },
    { method: 'put', handler: put },
    { method: 'patch', handler: patch },
    { method: 'delete', handler: del },
  ] as const;
  handlers.forEach(({ method, handler }) => {
    if (handler) {
      router[method](route, handler);
    }
  });

  // register post middlewares
  if (postMiddleware) router.use(postMiddleware);
};

export const registerRoutes = async (
  router: Router,
  entries: FileSystemEntry[],
  preMiddleware: RequestHandler | RequestHandler[] | undefined = undefined,
  postMiddleware: RequestHandler | RequestHandler[] | undefined = undefined,
) => {
  // check if there is a middleware file
  const middlewareEntry = entries.find(
    (entry) => entry.name === RESERVED_FILE.MIDDLEWARE && entry.type === 'file',
  );
  const localMiddleware = (await getGenericHandler(
    middlewareEntry?.path || '',
  )) as RequestHandler;

  // register pre middlewares
  if (preMiddleware) router.use(preMiddleware);
  if (localMiddleware) router.use(localMiddleware);

  // register routes
  for (const entry of entries) {
    if (RESERVED_FILE_NAMES.includes(entry.name)) {
      continue;
    }
    await registerRoute(router, entry);
  }

  // register post middlewares
  if (postMiddleware) router.use(postMiddleware);

  // check if there is an error middleware file
  const errorEntry = entries.find(
    (entry) => entry.name === RESERVED_FILE.ERROR && entry.type === 'file',
  );
  const errorMiddleware = (await getGenericHandler(
    errorEntry?.path || '',
  )) as ErrorRequestHandler;
  if (errorMiddleware) router.use(errorMiddleware);
};
