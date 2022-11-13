"use strict";(self.webpackChunkapaas_front_doc=self.webpackChunkapaas_front_doc||[]).push([[7749],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={id:"developStyle",sidebar_position:1},l="1. \u524d\u8a00",i={unversionedId:"developStyle",id:"developStyle",title:"1. \u524d\u8a00",description:"1.1. \u7b80\u4ecb",source:"@site/docs/1.foreword.md",sourceDirName:".",slug:"/developStyle",permalink:"/apaas-front-doc/docs/developStyle",draft:!1,editUrl:"https://github.com/hzm0321/apaas-front-doc/blob/master/docs/1.foreword.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"developStyle",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"2. \u8bed\u6cd5\u89c4\u8303",permalink:"/apaas-front-doc/docs/grammar-specification"}},p={},c=[{value:"1.1. \u7b80\u4ecb",id:"11-\u7b80\u4ecb",level:3},{value:"1.2. \u66f4\u65b0\u5386\u53f2",id:"12-\u66f4\u65b0\u5386\u53f2",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"1-\u524d\u8a00"},"1. \u524d\u8a00"),(0,n.kt)("h3",{id:"11-\u7b80\u4ecb"},"1.1. \u7b80\u4ecb"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"apaas \u9879\u76ee\u524d\u7aef\u5f00\u53d1\u89c4\u8303"),"\u57fa\u4e8e ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/zh-google-styleguide/zh-google-styleguide"},"zh-google-styleguide")," \u548c ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/styleguide"},"Google Style Guides")," \u5185\u90e8\u7248\u672c\uff0c\u7ed3\u5408 apaas \u9879\u76ee\u524d\u7aef\u81ea\u8eab\u5f00\u53d1\u7279\u6027\u6240\u884d\u751f\u51fa\u6765\u7684\u89c4\u8303\u3002\n\u672c\u89c4\u8303\u5bf9\u4ee3\u7801\u89c4\u8303\u6027\u6307\u793a\u7ea7\u522b\u5206\u4e3a\u4ee5\u4e0b\u7b49\u7ea7\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("intro",{type:"must"}),"\uff1a\u4e25\u683c\u6309\u7167\u89c4\u8303\u8981\u6c42\u7684\u4e66\u5199\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("intro",{type:"forbidden"}),"\uff1a\u7edd\u5bf9\u4e0d\u80fd\u5728\u672c\u89c4\u8303\u4e2d\u51fa\u73b0\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("intro",{type:"should"}),"\uff1a\u63a8\u8350\u6309\u7167\u89c4\u8303\u8981\u6c42\u7684\u53bb\u505a\uff0c\u5728\u7279\u5b9a\u7684\u60c5\u51b5\u4e0b\u53ef\u80fd\u5b58\u5728\u7279\u6b8a\u60c5\u51b5\u53ef\u4ee5\u5ffd\u7565\uff0c\u5fc5\u987b\u52a0\u6ce8\u91ca\u8bf4\u660e\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("intro",{type:"shouldNot"}),"\uff1a\u5728\u672c\u89c4\u8303\u4e2d\u4e0d\u5e94\u8be5\u51fa\u73b0\uff0c\u5728\u7279\u5b9a\u7684\u60c5\u51b5\u4e0b\u53ef\u80fd\u5b58\u5728\u7279\u6b8a\u60c5\u51b5\u53ef\u4ee5\u5ffd\u7565\uff0c\u5fc5\u987b\u52a0\u6ce8\u91ca\u8bf4\u660e\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("intro",{type:"optional"}),"\uff1a\u53ef\u9009\u62e9\u7684\u89c4\u8303\u8981\u6c42\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("intro",{type:"draft"}),"\uff1a\u6682\u672a\u6b63\u5f0f\u5f62\u6210\u89c4\u8303\uff0c\u8fd8\u5904\u4e8e\u8ba8\u8bba\u9636\u6bb5\u3002")),(0,n.kt)("h3",{id:"12-\u66f4\u65b0\u5386\u53f2"},"1.2. \u66f4\u65b0\u5386\u53f2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2022\u5e7408\u670817\u65e5\uff1a\u9884\u8ba1\u63d0\u4ea4\u7b2c\u4e00\u4e2a\u8349\u6848\u7248\u672c\u3002"),(0,n.kt)("li",{parentName:"ul"},"2022\u5e7409\u670826\u65e5\uff1a\u53d1\u5e03 v1 \u8349\u6848\u7248\u672c\u3002")),(0,n.kt)("h3",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zh-google-styleguide/zh-google-styleguide"},"zh-google-styleguide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/google/styleguide"},"Google Style Guides")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://react-typescript-cheatsheet.netlify.app/docs/basic/troubleshooting/operators"},"React TypeScript Cheatsheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/"},"TypeScript Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/react-api.html"},"React \u9876\u5c42 API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/"},"React DOC(beta)"))),(0,n.kt)("maintainer",{authors:["hzm"]}))}u.isMDXComponent=!0}}]);