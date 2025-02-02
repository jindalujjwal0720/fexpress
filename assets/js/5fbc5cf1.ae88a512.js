"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[624],{9362:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"api","title":"API Reference","description":"Router","source":"@site/docs/api.md","sourceDirName":".","slug":"/api","permalink":"/file-express-router/docs/api","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Authentication System","permalink":"/file-express-router/docs/tutorials/basic-authentication"}}');var s=r(4848),t=r(8453);const o={},l="API Reference",c={},d=[{value:"Router",id:"router",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"dir",id:"dir",level:3},{value:"logger",id:"logger",level:3},{value:"include",id:"include",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"api-reference",children:"API Reference"})}),"\n",(0,s.jsx)(n.h2,{id:"router",children:"Router"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Router"})," function is the main entry point for the library. It initializes the router with the provided configuration and automatically loads and registers routes from the specified directory."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type"}),": ",(0,s.jsx)(n.code,{children:"function"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Initializes the router with the provided configuration. It automatically loads and registers routes from the specified directory."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"})," (object)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dir"})," (string) ",(0,s.jsx)(n.strong,{children:"Required"}),": The root directory where route files are located."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"logger"})," (boolean) ",(0,s.jsx)(n.strong,{children:"Optional"}),": A flag to enable or disable logging. Default is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"include"})," (string[]) ",(0,s.jsx)(n.strong,{children:"Optional"}),": An array of file extensions to include when searching for route files. Default is ",(0,s.jsx)(n.code,{children:"['.js', '.ts']"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Router"})," function accepts an object with the following configuration options:"]}),"\n",(0,s.jsx)(n.h3,{id:"dir",children:"dir"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Required"}),": Yes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": The root directory where your route files are located. This is where the router will search for route files to register automatically."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"logger",children:"logger"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Required"}),": No"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default"}),": ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": A flag to enable or disable logging. When set to ",(0,s.jsx)(n.code,{children:"true"}),", the router will log information about registered routes and middleware."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"include",children:"include"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Required"}),": No"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type"}),": ",(0,s.jsx)(n.code,{children:"string[]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default"}),": ",(0,s.jsx)(n.code,{children:"['.js', '.ts']"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": An array of file extensions to include when searching for route files. By default, the router will only include ",(0,s.jsx)(n.code,{children:".js"})," and ",(0,s.jsx)(n.code,{children:".ts"})," files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Allowed Values"}),": ",(0,s.jsx)(n.code,{children:"['.js', '.ts']"})]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var i=r(6540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);