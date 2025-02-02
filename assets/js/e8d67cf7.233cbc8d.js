"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[253],{9292:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>a});const d=JSON.parse('{"id":"features/middlewares","title":"Middleware Management","description":"Middleware in file-express-router allows you to handle requests and responses by adding layers of logic between the client and your route handlers. You can apply middleware at the directory or file level, giving you flexibility and control over how you manage requests. Additionally, error handling is streamlined with built-in support for error middleware, and the order in which middleware is applied can be controlled.","source":"@site/docs/features/middlewares.md","sourceDirName":"features","slug":"/features/middlewares","permalink":"/file-express-router/docs/features/middlewares","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/middlewares.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"HTTP Method Handlers","permalink":"/file-express-router/docs/features/http-methods"},"next":{"title":"Tutorials","permalink":"/file-express-router/docs/category/tutorials"}}');var n=i(4848),l=i(8453);const t={},s="Middleware Management",o={},a=[{value:"Directory-Level Middleware",id:"directory-level-middleware",level:2},{value:"File-Level Middleware",id:"file-level-middleware",level:2},{value:"Error Middleware",id:"error-middleware",level:2},{value:"Multiple Middleware",id:"multiple-middleware",level:2},{value:"Middleware Ordering",id:"middleware-ordering",level:2}];function c(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"middleware-management",children:"Middleware Management"})}),"\n",(0,n.jsxs)(r.p,{children:["Middleware in ",(0,n.jsx)(r.code,{children:"file-express-router"})," allows you to handle requests and responses by adding layers of logic between the client and your route handlers. You can apply middleware at the directory or file level, giving you flexibility and control over how you manage requests. Additionally, error handling is streamlined with built-in support for error middleware, and the order in which middleware is applied can be controlled."]}),"\n",(0,n.jsx)(r.h2,{id:"directory-level-middleware",children:"Directory-Level Middleware"}),"\n",(0,n.jsxs)(r.p,{children:["You can apply middleware to all routes within a specific directory by placing a ",(0,n.jsx)(r.code,{children:"_middleware.ts"})," file in that directory. This is ideal for scenarios like user authentication or logging, where the same middleware logic should be applied to multiple routes."]}),"\n",(0,n.jsx)(r.p,{children:"Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:'title="routes/users/_middleware.ts"',children:"export const handler = (req, res, next) => {\r\n  console.log('Middleware applied to all user routes');\r\n  next();\r\n};\n"})}),"\n",(0,n.jsx)(r.h2,{id:"file-level-middleware",children:"File-Level Middleware"}),"\n",(0,n.jsx)(r.p,{children:"File-level middleware applies only to the specific route file in which it\u2019s defined. This gives you fine-grained control over which routes should use specific middleware, making it easy to customize behavior for individual routes."}),"\n",(0,n.jsx)(r.p,{children:"Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:'title="routes/users/[id].ts"',children:"export const middleware = (req, res, next) => {\r\n  console.log('Middleware applied to the user ID route');\r\n  next();\r\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," File-level middleware is defined in the route file itself, not in a separate ",(0,n.jsx)(r.code,{children:"_middleware.ts"})," file."]}),"\n",(0,n.jsx)(r.h2,{id:"error-middleware",children:"Error Middleware"}),"\n",(0,n.jsx)(r.p,{children:"Error middleware allows you to handle any errors that arise during the request lifecycle. By defining error-handling middleware, you can centralize error logic and keep your route handlers focused on business logic."}),"\n",(0,n.jsx)(r.p,{children:"Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:'title="routes/_error.ts"',children:"export const handler = (err, req, res, next) => {\r\n  console.error('Error occurred:', err);\r\n  res.status(500).json({ message: 'Internal Server Error' });\r\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," Error middleware is defined in a ",(0,n.jsx)(r.code,{children:"_error.ts"})," file and is executed when an error is passed to the ",(0,n.jsx)(r.code,{children:"next()"})," function. If the error is normally thrown, it will not be caught by the error middleware. Error middleware only runs when ",(0,n.jsx)(r.code,{children:"next(err)"})," is called within a route or another middleware."]}),"\n",(0,n.jsx)(r.h2,{id:"multiple-middleware",children:"Multiple Middleware"}),"\n",(0,n.jsxs)(r.p,{children:["You can apply multiple middleware functions to a route by defining an array of middleware functions in the ",(0,n.jsx)(r.code,{children:"middleware"})," property of the route file or ",(0,n.jsx)(r.code,{children:"handler"})," property of the directory middleware file. Middleware functions are executed in the order they are defined."]}),"\n",(0,n.jsx)(r.p,{children:"Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:'title="routes/users/[id].ts"',children:"const authenticate = (req, res, next) => {\r\n  console.log('Authenticating user...');\r\n  next();\r\n};\r\n\r\nconst authorize = (req, res, next) => {\r\n  console.log('Authorizing user...');\r\n  next();\r\n};\r\n\r\nexport const middleware = [authenticate, authorize];\n"})}),"\n",(0,n.jsxs)(r.p,{children:["In this example, the ",(0,n.jsx)(r.code,{children:"authenticate"})," middleware function is executed first, followed by the ",(0,n.jsx)(r.code,{children:"authorize"})," middleware function. This allows you to define a sequence of middleware functions to process requests in the desired order."]}),"\n",(0,n.jsx)(r.h2,{id:"middleware-ordering",children:"Middleware Ordering"}),"\n",(0,n.jsxs)(r.p,{children:["The order in which middleware is applied is crucial, as it determines the flow of execution. In ",(0,n.jsx)(r.code,{children:"file-express-router"}),", middleware is executed in the order it is defined. Make sure to define middleware in the correct sequence to avoid unexpected behavior."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Directory-level middleware"})," is applied first, followed by ",(0,n.jsx)(r.strong,{children:"file-level middleware"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Error middleware is executed last, after all route handlers and other middleware have been processed."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Proper ordering ensures that requests are processed in the desired sequence, and errors are handled appropriately."})]})}function u(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,r,i)=>{i.d(r,{R:()=>t,x:()=>s});var d=i(6540);const n={},l=d.createContext(n);function t(e){const r=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),d.createElement(l.Provider,{value:r},e.children)}}}]);