"use strict";(self.webpackChunkapaas_front_doc=self.webpackChunkapaas_front_doc||[]).push([[723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),d=m(n),s=r,c=d["".concat(i,".").concat(s)]||d[s]||u[s]||l;return n?a.createElement(c,o(o({ref:t},k),{},{components:n})):a.createElement(c,o({ref:t},k))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:4},o="4. \u4ee3\u7801\u7ba1\u7406",p={unversionedId:"code-management",id:"code-management",title:"4. \u4ee3\u7801\u7ba1\u7406",description:"4.1. \u6a21\u5757",source:"@site/docs/4.code-management.md",sourceDirName:".",slug:"/code-management",permalink:"/docs/code-management",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4.code-management.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. \u8bed\u8a00\u7279\u6027",permalink:"/docs/language-featuremd"},next:{title:"5. \u7c7b\u578b\u7cfb\u7edf",permalink:"/docs/type-system"}},i={},m=[{value:"4.1. \u6a21\u5757",id:"41-\u6a21\u5757",level:3},{value:"4.1.1. \u5bfc\u5165\u8def\u5f84",id:"411-\u5bfc\u5165\u8def\u5f84",level:4},{value:"4.1.2. \u5bfc\u5165\u987a\u5e8f",id:"412-\u5bfc\u5165\u987a\u5e8f",level:4},{value:"4.1.3. \u7528 <code>namespace</code> \u8fd8\u662f <code>module</code>\uff1f",id:"413-\u7528-namespace-\u8fd8\u662f-module",level:4},{value:"4.2. \u5bfc\u51fa",id:"42-\u5bfc\u51fa",level:3},{value:"4.2.1. \u53ef\u53d8\u5bfc\u51fa",id:"421-\u53ef\u53d8\u5bfc\u51fa",level:4},{value:"4.2.2. \u5bb9\u5668\u7c7b",id:"422-\u5bb9\u5668\u7c7b",level:4},{value:"4.3. \u5bfc\u5165",id:"43-\u5bfc\u5165",level:3},{value:"4.3.1. \u9009\u62e9\u6a21\u5757\u5bfc\u5165\u8fd8\u662f\u89e3\u6784\u5bfc\u5165\uff1f",id:"431-\u9009\u62e9\u6a21\u5757\u5bfc\u5165\u8fd8\u662f\u89e3\u6784\u5bfc\u5165",level:4},{value:"4.3.2. \u91cd\u547d\u540d\u5bfc\u5165",id:"432-\u91cd\u547d\u540d\u5bfc\u5165",level:4},{value:"4.3.3. <code>import type</code> \u548c <code>export type</code>",id:"433-import-type-\u548c-export-type",level:4}],k={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"4-\u4ee3\u7801\u7ba1\u7406"},"4. \u4ee3\u7801\u7ba1\u7406"),(0,r.kt)("h3",{id:"41-\u6a21\u5757"},"4.1. \u6a21\u5757"),(0,r.kt)("p",null,"\u9879\u76ee\u4e0a\u8def\u5f84\u6a21\u5757\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hzero-front")," \u8def\u5f84\u524d\u7f00",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"components/*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"utils/*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"services/*")))),(0,r.kt)("li",{parentName:"ul"},"\u516c\u5171\u4f9d\u8d56\u5305 ",(0,r.kt)("inlineCode",{parentName:"li"},"hzero-front-apaas")," \u8def\u5f84\u524d\u7f00",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@apaas/*")))),(0,r.kt)("li",{parentName:"ul"},"\u5b50\u5305 ",(0,r.kt)("inlineCode",{parentName:"li"},"hzero-front-hlod")," \u8def\u5f84\u524d\u7f00",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@/*")))),(0,r.kt)("li",{parentName:"ul"},"\u5b50\u5305 ",(0,r.kt)("inlineCode",{parentName:"li"},"hzero-front-hmde")," \u8def\u5f84\u524d\u7f00",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@/*"))))),(0,r.kt)("h4",{id:"411-\u5bfc\u5165\u8def\u5f84"},"4.1.1. \u5bfc\u5165\u8def\u5f84"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u5fc5\u987b\u3011"))," \u5728\u5f15\u7528\u903b\u8f91\u4e0a\u5c5e\u4e8e\u540c\u4e00\u9879\u76ee\u7684\u6587\u4ef6\u65f6\uff0c\u5e94\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84 ",(0,r.kt)("inlineCode",{parentName:"p"},"./foo")," \uff0c\u4e0d\u8981\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84 ",(0,r.kt)("inlineCode",{parentName:"p"},"@/to/foo")," \u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u5e94\u5f53\u3011"))," \u5e94\u5c3d\u53ef\u80fd\u5730\u9650\u5236\u7236\u5c42\u7ea7\u7684\u6570\u91cf\uff08\u907f\u514d\u51fa\u73b0\u8bf8\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"../../../")," \u7684\u8def\u5f84\uff09\uff0c\u8fc7\u591a\u7684\u5c42\u7ea7\u4f1a\u5bfc\u81f4\u6a21\u5757\u548c\u8def\u5f84\u7ed3\u6784\u96be\u4ee5\u7406\u89e3\u3002"),(0,r.kt)("h4",{id:"412-\u5bfc\u5165\u987a\u5e8f"},"4.1.2. \u5bfc\u5165\u987a\u5e8f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u5fc5\u987b\u3011"))," \u5728\u8def\u5f84\u5bfc\u5165\u987a\u5e8f\u4e0a\uff0c\u62c6\u5206\u4e3a\u4e09\u5c42\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u5c42\uff1a\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," \u5305\u4e2d\u7684\u5bfc\u5165\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"import { Button } from 'choerodon-ui/pro'")," \u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u5c42\uff1a\u4ece\u9879\u76ee\u5f53\u524d\u6240\u5904\u6a21\u5757\u7684\u5168\u5c40\u522b\u540d\u914d\u7f6e\u4e2d\u5bfc\u5165\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"import { lowcodeRequest } from '@/utils/lowcodeRequest'"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u5c42\uff1a\u4ece\u5f53\u524d\u6587\u4ef6\u9644\u8fd1\u8def\u5f84\u6587\u4ef6\u5bfc\u5165\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"import styles from './index.less'"),"\u3002")),(0,r.kt)("p",null,"\u6bcf\u5c42\u4e4b\u95f4\u7528\u6362\u884c\u7b26\u8fdb\u884c\u9694\u79bb\u3002"),(0,r.kt)("h4",{id:"413-\u7528-namespace-\u8fd8\u662f-module"},"4.1.3. \u7528 ",(0,r.kt)("inlineCode",{parentName:"h4"},"namespace")," \u8fd8\u662f ",(0,r.kt)("inlineCode",{parentName:"h4"},"module"),"\uff1f"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u6709\u4e24\u79cd\u7ec4\u7ec7\u4ee3\u7801\u7684\u65b9\u5f0f\uff1a\u547d\u540d\u7a7a\u95f4\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"namespace"),"\uff09\u548c\u6a21\u5757\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"module"),"\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u4e0d\u5e94\u3011"))," \u4e0d\u5141\u8bb8\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace"),"\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u4e2d\u5fc5\u987b\u4f7f\u7528\u6a21\u5757\uff08\u5373 ES6 \u6a21\u5757 \uff09\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728\u5f15\u7528\u5176\u5b83\u6587\u4ef6\u4e2d\u7684\u4ee3\u7801\u65f6\u5fc5\u987b\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"import {foo} from 'bar'"),"\n\u7684\u5f62\u5f0f\u8fdb\u884c\u5bfc\u5165\u548c\u5bfc\u51fa\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u4e0d\u5e94\u3011"))," \u4e0d\u5141\u8bb8\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace Foo { ... }")," \u7684\u5f62\u5f0f\u7ec4\u7ec7\u4ee3\u7801\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," \u53ea\u80fd\u5728\u6240\u7528\u7684\u5916\u90e8\u7b2c\u4e09\u65b9\u5e93\u6709\u8981\u6c42\u65f6\u624d\u80fd\u4f7f\u7528\u3002\u5982\u679c\u9700\u8981\u5728\u8bed\u4e49\u4e0a\u5bf9\u4ee3\u7801\u5212\u5206\u547d\u540d\u7a7a\u95f4\uff0c\u5e94\u5f53\u901a\u8fc7\u5206\u6210\u4e0d\u540c\u6587\u4ef6\u7684\u65b9\u5f0f\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u4e0d\u5e94\u3011"))," \u4e0d\u5141\u8bb8\u5728\u5bfc\u5165\u65f6\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," \u5173\u952e\u5b57\uff08\u5f62\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"import x = require('...');")," \uff09\u3002\u5e94\u5f53\u4f7f\u7528 ES6 \u7684\u6a21\u5757\u8bed\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4e0d\u8981\u8fd9\u6837\u505a\uff01\u4e0d\u8981\u4f7f\u7528\u547d\u540d\u7a7a\u95f4\uff01\nnamespace Rocket {\n  function launch() {\n  }\n}\n\n// \u4e0d\u8981\u8fd9\u6837\u505a\uff01\u4e0d\u8981\u4f7f\u7528 <reference> \uff01\n/// <reference path=\"...\"/>\n\n// \u4e0d\u8981\u8fd9\u6837\u505a\uff01\u4e0d\u8981\u4f7f\u7528 require() \uff01\nimport x = require('mydep');\n")),(0,r.kt)("p",null,"\u533a\u522b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u547d\u540d\u7a7a\u95f4\u662f\u4f4d\u4e8e\u5168\u5c40\u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u4e00\u4e2a\u666e\u901a\u7684\u5e26\u6709\u540d\u5b57\u7684  ",(0,r.kt)("inlineCode",{parentName:"li"},"JavaScript"),"  \u5bf9\u8c61\uff0c\u4f7f\u7528\u8d77\u6765\u5341\u5206\u5bb9\u6613\u3002\u4f46\u5c31\u50cf\u5176\u5b83\u7684\u5168\u5c40\u547d\u540d\u7a7a\u95f4\u6c61\u67d3\u4e00\u6837\uff0c\u5b83\u5f88\u96be\u53bb\u8bc6\u522b\u7ec4\u4ef6\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u5c24\u5176\u662f\u5728\u5927\u578b\u7684\u5e94\u7528\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u50cf\u547d\u540d\u7a7a\u95f4\u4e00\u6837\uff0c\u6a21\u5757\u53ef\u4ee5\u5305\u542b\u4ee3\u7801\u548c\u58f0\u660e\u3002\u4e0d\u540c\u7684\u662f\u6a21\u5757\u53ef\u4ee5\u58f0\u660e\u5b83\u7684\u4f9d\u8d56\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6b63\u5e38\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"TypeScript")," \u9879\u76ee\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5e76\u4e0d\u5efa\u8bae\u7528\u547d\u540d\u7a7a\u95f4\uff0c\u4f46\u901a\u5e38\u5728\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"d.ts")," \u6587\u4ef6\u6807\u8bb0 ",(0,r.kt)("inlineCode",{parentName:"li"},"js")," \u5e93\u7c7b\u578b\u7684\u65f6\u5019\u4f7f\u7528\u547d\u540d\u7a7a\u95f4\uff0c\u4e3b\u8981\u4f5c\u7528\u662f\u7ed9\u7f16\u8bd1\u5668\u7f16\u5199\u4ee3\u7801\u7684\u65f6\u5019\u53c2\u8003\u4f7f\u7528\u3002")),(0,r.kt)("h3",{id:"42-\u5bfc\u51fa"},"4.2. \u5bfc\u51fa"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u53ef\u9009\u3011"))," \u5982\u679c\u53ef\u80fd\uff0c\u5c3d\u91cf\u7684\u4f7f\u7528\u5177\u540d\u7684\u5bfc\u51fa\u58f0\u660e\uff0c\u51cf\u5c11\u9ed8\u8ba4\u5bfc\u51fa\u7684\u4f7f\u7528\u3002\u56e0\u4e3a\u8fd9\u6837\u80fd\u591f\u4fdd\u8bc1\u6240\u6709\u7684\u5bfc\u5165\u8bed\u53e5\u90fd\u9075\u5faa\u7edf\u4e00\u7684\u8303\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4f7f\u7528\u5177\u540d\u5bfc\u51fa\nexport class Foo {\n}\n\n// \u4f7f\u7528\nimport {Foo} from './foo';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4f7f\u7528\u9ed8\u8ba4\u5bfc\u51fa\nexport default class Foo {\n}\n// \u9ed8\u8ba4\u5bfc\u51fa\u4f1a\u9020\u6210\u5982\u4e0b\u7684\u5f0a\u7aef\nimport Foo from './foo';  // \u8fd9\u4e2a\u8bed\u53e5\u662f\u5408\u6cd5\u7684\u3002\nimport Bar from './foo';  // \u8fd9\u4e2a\u8bed\u53e5\u4e5f\u662f\u5408\u6cd5\u7684\u3002\n")),(0,r.kt)("h4",{id:"421-\u53ef\u53d8\u5bfc\u51fa"},"4.2.1. \u53ef\u53d8\u5bfc\u51fa"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u7981\u6b62\u3011"))," \u867d\u7136\u6280\u672f\u4e0a\u53ef\u4ee5\u5b9e\u73b0\uff0c\u4f46\u662f\u53ef\u53d8\u5bfc\u51fa\u4f1a\u9020\u6210\u96be\u4ee5\u7406\u89e3\u548c\u8c03\u8bd5\u7684\u4ee3\u7801\uff0c\u5c24\u5176\u662f\u5bf9\u4e8e\u5728\u591a\u4e2a\u6a21\u5757\u4e2d\u7ecf\u8fc7\u4e86\u591a\u6b21\u91cd\u65b0\u5bfc\u51fa\u7684\u7b26\u53f7\u3002\u8fd9\u6761\u89c4\u5219\u7684\u4e00\u4e2a\u4f8b\u5b50\u662f\uff0c\u4e0d\u5141\u8bb8\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"export let")," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4e0d\u8981\u8fd9\u6837\u505a\uff01\nexport let foo = 3;\n// \u5728\u7eaf ES6 \u73af\u5883\u4e2d\uff0c\u53d8\u91cf foo \u662f\u4e00\u4e2a\u53ef\u53d8\u503c\uff0c\u5bfc\u5165\u4e86 foo \u7684\u4ee3\u7801\u4f1a\u89c2\u5bdf\u5230\u5b83\u7684\u503c\u5728\u4e00\u79d2\u949f\u4e4b\u540e\u53d1\u751f\u4e86\u6539\u53d8\u3002\n// \u5728 TypeScript \u4e2d\uff0c\u5982\u679c foo \u88ab\u53e6\u4e00\u4e2a\u6587\u4ef6\u91cd\u65b0\u5bfc\u51fa\u4e86\uff0c\u5bfc\u5165\u8be5\u6587\u4ef6\u7684\u4ee3\u7801\u5219\u4e0d\u4f1a\u89c2\u5bdf\u5230\u53d8\u5316\u3002\nwindow.setTimeout(() => {\n  foo = 4;\n}, 1000 /* ms */);\n")),(0,r.kt)("p",null,"\u5982\u679c\u786e\u5b9e\u9700\u8981\u5141\u8bb8\u5916\u90e8\u4ee3\u7801\u5bf9\u53ef\u53d8\u503c\u8fdb\u884c\u8bbf\u95ee\uff0c\u5e94\u5f53\u63d0\u4f9b\u4e00\u4e2a\u663e\u5f0f\u7684\u53d6\u503c\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5e94\u5f53\u8fd9\u6837\u505a\uff01\nlet foo = 3;\nwindow.setTimeout(() => {\n  foo = 4;\n}, 1000 /* ms */);\n\n// \u4f7f\u7528\u663e\u5f0f\u7684\u53d6\u503c\u5668\u5bf9\u53ef\u53d8\u5bfc\u51fa\u8fdb\u884c\u8bbf\u95ee\u3002\nexport function getFoo() {\n  return foo;\n};\n")),(0,r.kt)("h4",{id:"422-\u5bb9\u5668\u7c7b"},"4.2.2. \u5bb9\u5668\u7c7b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u4e0d\u5e94\u3011"))," \u4e0d\u8981\u4e3a\u4e86\u5b9e\u73b0\u547d\u540d\u7a7a\u95f4\u521b\u5efa\u542b\u6709\u9759\u6001\u65b9\u6cd5\u6216\u5c5e\u6027\u7684\u5bb9\u5668\u7c7b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4e0d\u8981\u8fd9\u6837\u505a\uff01\nexport class Container {\n  static FOO = 1;\n\n  static bar() {\n    return 1;\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u5e94\u5f53\u3011"))," \u5e94\u5f53\u5c06\u8fd9\u4e9b\u65b9\u6cd5\u548c\u5c5e\u6027\u8bbe\u4e3a\u5355\u72ec\u5bfc\u51fa\u7684\u5e38\u6570\u548c\u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5e94\u5f53\u8fd9\u6837\u505a\uff01\nexport const FOO = 1;\n\nexport function bar() {\n  return 1;\n}\n")),(0,r.kt)("h3",{id:"43-\u5bfc\u5165"},"4.3. \u5bfc\u5165"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ES6")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u4e2d\uff0c\u5bfc\u5165\u8bed\u53e5\u5171\u6709\u56db\u79cd\u53d8\u4f53\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5bfc\u5165\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7528\u9014"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6a21\u5757"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"import * as foo from '...';")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript \u5bfc\u5165\u65b9\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u89e3\u6784"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"import {SomeThing} from '...';")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript \u5bfc\u5165\u65b9\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"import SomeThing from '...';")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ea\u7528\u4e8e\u5916\u90e8\u4ee3\u7801\u7684\u7279\u6b8a\u9700\u6c42")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u526f\u4f5c\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"import '...';")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ea\u7528\u4e8e\u52a0\u8f7d\u67d0\u4e9b\u5e93\u7684\u526f\u4f5c\u7528\uff08\u4f8b\u5982\u81ea\u5b9a\u4e49\u5143\u7d20\uff09")))),(0,r.kt)("h4",{id:"431-\u9009\u62e9\u6a21\u5757\u5bfc\u5165\u8fd8\u662f\u89e3\u6784\u5bfc\u5165"},"4.3.1. \u9009\u62e9\u6a21\u5757\u5bfc\u5165\u8fd8\u662f\u89e3\u6784\u5bfc\u5165\uff1f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u53ef\u9009\u3011"))," \u6839\u636e\u4f7f\u7528\u573a\u666f\u7684\u4e0d\u540c\uff0c\u6a21\u5757\u5bfc\u5165\u548c\u89e3\u6784\u5bfc\u5165\u5206\u522b\u6709\u5176\u5404\u81ea\u7684\u4f18\u52bf\u3002"),(0,r.kt)("p",null,"\u6a21\u5757\u5bfc\u5165\u4f18\u52bf\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6a21\u5757\u5bfc\u5165\u8bed\u53e5\u4e3a\u6574\u4e2a\u6a21\u5757\u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u79f0\uff0c\u6a21\u5757\u4e2d\u7684\u6240\u6709\u7b26\u53f7\u90fd\u901a\u8fc7\u8fd9\u4e2a\u540d\u79f0\u8fdb\u884c\u8bbf\u95ee\uff0c\u8fd9\u4e3a\u4ee3\u7801\u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u53ef\u8bfb\u6027\uff0c\u540c\u65f6\u4ee4\u6a21\u5757\u4e2d\u7684\u6240\u6709\u7b26\u53f7\u53ef\u4ee5\u8fdb\u884c\u81ea\u52a8\u8865\u5168\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u4e86\u5bfc\u5165\u8bed\u53e5\u7684\u6570\u91cf\uff08\u6a21\u5757\u4e2d\u7684\u6240\u6709\u7b26\u53f7\u90fd\u53ef\u4ee5\u4f7f\u7528\uff09\uff0c\u964d\u4f4e\u4e86\u547d\u540d\u51b2\u7a81\u7684\u51fa\u73b0\u51e0\u7387\uff0c\u540c\u65f6\u8fd8\u5141\u8bb8\u4e3a\u88ab\u5bfc\u5165\u7684\u6a21\u5757\u63d0\u4f9b\u4e00\u4e2a\u7b80\u6d01\u7684\u540d\u79f0\u3002")),(0,r.kt)("p",null,"\u89e3\u6784\u5bfc\u5165\u4f18\u52bf\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u6bcf\u4e00\u4e2a\u88ab\u5bfc\u5165\u7684\u7b26\u53f7\u63d0\u4f9b\u4e00\u4e2a\u5c40\u90e8\u7684\u540d\u79f0\uff0c\u8fd9\u6837\u5728\u4f7f\u7528\u88ab\u5bfc\u5165\u7684\u7b26\u53f7\u65f6\uff0c\u4ee3\u7801\u53ef\u4ee5\u66f4\u7b80\u6d01\u3002")),(0,r.kt)("h4",{id:"432-\u91cd\u547d\u540d\u5bfc\u5165"},"4.3.2. \u91cd\u547d\u540d\u5bfc\u5165"),(0,r.kt)("p",null,"\u5728\u4ee3\u7801\u4e2d\uff0c\u5e94\u5f53\u901a\u8fc7\u4f7f\u7528\u6a21\u5757\u5bfc\u5165\u6216\u91cd\u547d\u540d\u5bfc\u51fa\u89e3\u51b3\u547d\u540d\u51b2\u7a81\u3002\u6b64\u5916\uff0c\u5728\u9700\u8981\u65f6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u91cd\u547d\u540d\u5bfc\u5165\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"import {SomeThing as SomeOtherThing}")," \uff09\u3002"),(0,r.kt)("p",null,"\u5728\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\u4e0b\uff0c\u91cd\u547d\u540d\u5bfc\u5165\u53ef\u80fd\u8f83\u4e3a\u6709\u7528\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u907f\u514d\u4e0e\u5176\u5b83\u5bfc\u5165\u7684\u7b26\u53f7\u4ea7\u751f\u547d\u540d\u51b2\u7a81\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u88ab\u5bfc\u5165\u7b26\u53f7\u7684\u540d\u79f0\u662f\u81ea\u52a8\u751f\u6210\u7684\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u88ab\u5bfc\u5165\u7b26\u53f7\u7684\u540d\u79f0\u4e0d\u80fd\u6e05\u6670\u5730\u63cf\u8ff0\u5176\u81ea\u8eab\uff0c\u9700\u8981\u901a\u8fc7\u91cd\u547d\u540d\u63d0\u9ad8\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\uff0c\u5982\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"RxJS")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"from")," \u51fd\u6570\u91cd\u547d\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"observableFrom")," \u3002")),(0,r.kt)("h4",{id:"433-import-type-\u548c-export-type"},"4.3.3. ",(0,r.kt)("inlineCode",{parentName:"h4"},"import type")," \u548c ",(0,r.kt)("inlineCode",{parentName:"h4"},"export type")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u7981\u6b62\u3011"))," \u4e0d\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"import type ... from")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"export type ... from")," \u3002"),(0,r.kt)("p",null,"Tips\uff1a\u8fd9\u4e00\u89c4\u5219\u4e0d\u9002\u7528\u4e8e\u5bfc\u51fa\u7c7b\u578b\u5b9a\u4e49\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"export type Foo = ...;")," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4e0d\u8981\u8fd9\u6837\u505a\uff01\nimport type {Foo} from './foo';\n\nexport type {Bar} from './bar';\n")),(0,r.kt)("p",null,"\u5e94\u5f53\u4f7f\u7528\u5e38\u89c4\u7684\u5bfc\u5165\u8bed\u53e5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5e94\u5f53\u8fd9\u6837\u505a\uff01\nimport {Foo} from './foo';\n\nexport {Bar} from './bar';\n")))}u.isMDXComponent=!0}}]);