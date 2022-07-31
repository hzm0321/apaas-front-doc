"use strict";(self.webpackChunkapaas_front_doc=self.webpackChunkapaas_front_doc||[]).push([[901],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},k=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=d(t),u=r,c=s["".concat(o,".").concat(u)]||s[u]||m[u]||i;return t?a.createElement(c,l(l({ref:n},k),{},{components:t})):a.createElement(c,l({ref:n},k))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=s;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9363:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:5},l="5. \u7c7b\u578b\u7cfb\u7edf",p={unversionedId:"type-system",id:"type-system",title:"5. \u7c7b\u578b\u7cfb\u7edf",description:"5.1. \u7c7b\u578b\u63a8\u5bfc",source:"@site/docs/5.type-system.md",sourceDirName:".",slug:"/type-system",permalink:"/docs/type-system",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5.type-system.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. \u4ee3\u7801\u7ba1\u7406",permalink:"/docs/code-management"},next:{title:"6. React",permalink:"/docs/react"}},o={},d=[{value:"5.1. \u7c7b\u578b\u63a8\u5bfc",id:"51-\u7c7b\u578b\u63a8\u5bfc",level:3},{value:"5.1.1. \u8fd4\u56de\u7c7b\u578b",id:"511-\u8fd4\u56de\u7c7b\u578b",level:4},{value:"5.2. <code>null</code> \u8fd8\u662f <code>undefined</code> \uff1f",id:"52-null-\u8fd8\u662f-undefined-",level:3},{value:"5.2.1. \u53ef\u7a7a/\u672a\u5b9a\u4e49\u7c7b\u578b\u522b\u540d",id:"521-\u53ef\u7a7a\u672a\u5b9a\u4e49\u7c7b\u578b\u522b\u540d",level:4},{value:"5.2.2. \u53ef\u9009\u53c2\u6570\uff08<code>?</code>\uff09 \u8fd8\u662f <code>undefined</code> \u7c7b\u578b\uff1f",id:"522-\u53ef\u9009\u53c2\u6570-\u8fd8\u662f-undefined-\u7c7b\u578b",level:4},{value:"5.3. \u7ed3\u6784\u7c7b\u578b \u4e0e \u6307\u540d\u7c7b\u578b",id:"53-\u7ed3\u6784\u7c7b\u578b-\u4e0e-\u6307\u540d\u7c7b\u578b",level:3},{value:"5.4. <code>interface</code> \u8fd8\u662f <code>type</code>\uff1f",id:"54-interface-\u8fd8\u662f-type",level:3},{value:"5.5. <code>Array&lt;T&gt;</code> \u7c7b\u578b",id:"55-arrayt-\u7c7b\u578b",level:3},{value:"5.6. \u7d22\u5f15\u7c7b\u578b <code>{[key: string]: number}</code>",id:"56-\u7d22\u5f15\u7c7b\u578b-key-string-number",level:3},{value:"5.7. \u6620\u5c04\u7c7b\u578b\u4e0e\u6761\u4ef6\u7c7b\u578b",id:"57-\u6620\u5c04\u7c7b\u578b\u4e0e\u6761\u4ef6\u7c7b\u578b",level:3},{value:"5.8. <code>any</code> \u7c7b\u578b",id:"58-any-\u7c7b\u578b",level:3},{value:"5.9. \u5305\u88c5\u7c7b\u578b",id:"59-\u5305\u88c5\u7c7b\u578b",level:3},{value:"5.10. \u53ea\u6709\u6cdb\u578b\u7684\u8fd4\u56de\u7c7b\u578b",id:"510-\u53ea\u6709\u6cdb\u578b\u7684\u8fd4\u56de\u7c7b\u578b",level:3},{value:"5.11. \u7c7b\u578b\u64cd\u4f5c\u7b26",id:"511-\u7c7b\u578b\u64cd\u4f5c\u7b26",level:3}],k={toc:d};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"5-\u7c7b\u578b\u7cfb\u7edf"},"5. \u7c7b\u578b\u7cfb\u7edf"),(0,r.kt)("h3",{id:"51-\u7c7b\u578b\u63a8\u5bfc"},"5.1. \u7c7b\u578b\u63a8\u5bfc"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6240\u6709\u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\uff08\u5305\u62ec\u53d8\u91cf\u3001\u5b57\u6bb5\u3001\u8fd4\u56de\u503c\uff0c\u7b49\u7b49\uff09\uff0c\u90fd\u53ef\u4ee5\u4f9d\u8d56 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u7f16\u8bd1\u5668\u6240\u5b9e\u73b0\u7684\u7c7b\u578b\u63a8\u5bfc\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const x = 15;  // x \u7684\u7c7b\u578b\u53ef\u4ee5\u63a8\u5bfc\u5f97\u51fa.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u53ef\u9009\u3011"))," \u5f53\u53d8\u91cf\u6216\u53c2\u6570\u88ab\u521d\u59cb\u5316\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," \uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," \uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," \uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"RegExp")," \u6b63\u5219\u8868\u8fbe\u5f0f\u5b57\u9762\u91cf\u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," \u8868\u8fbe\u5f0f\u65f6\uff0c\u7531\u4e8e\u660e\u663e\u80fd\u591f\u63a8\u5bfc\u51fa\u7c7b\u578b\uff0c\u56e0\u6b64\u5e94\u5f53\u7701\u7565\u7c7b\u578b\u8bb0\u53f7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u53ef\u4ee5\u7701\u7565 boolean \uff0c\u6dfb\u52a0 boolean \u8bb0\u53f7\u5bf9\u63d0\u9ad8\u53ef\u8bfb\u6027\u6ca1\u6709\u4efb\u4f55\u5e2e\u52a9\uff01\nconst x: boolean = true;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4e0d\u8981\u8fd9\u6837\u505a\uff01Set \u7c7b\u578b\u663e\u7136\u53ef\u4ee5\u4ece\u521d\u59cb\u5316\u8bed\u53e5\u4e2d\u63a8\u5bfc\u5f97\u51fa\u3002\nconst x: Set<string> = new Set();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5e94\u5f53\u8fd9\u6837\u505a\uff01\u4f9d\u8d56 TypeScript \u7684\u7c7b\u578b\u63a8\u5bfc\u3002\nconst x = new Set<string>();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tips\uff1a")," \u5bf9\u4e8e\u66f4\u4e3a\u590d\u6742\u7684\u8868\u8fbe\u5f0f\uff0c\u7c7b\u578b\u8bb0\u53f7\u6709\u52a9\u4e8e\u63d0\u9ad8\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u3002"),(0,r.kt)("h4",{id:"511-\u8fd4\u56de\u7c7b\u578b"},"5.1.1. \u8fd4\u56de\u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u5e94\u5f53\u3011"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u4f1a\u81ea\u52a8\u63a8\u5bfc\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u7c7b\u578b\uff0c\u4f46\u662f\u5bf9\u96be\u4ee5\u7406\u89e3\u7684\u590d\u6742\u8fd4\u56de\u7c7b\u578b\u5e94\u5f53\u4f7f\u7528\u7c7b\u578b\u8bb0\u53f7\u8fdb\u884c\u9610\u660e\u3002"),(0,r.kt)("h3",{id:"52-null-\u8fd8\u662f-undefined-"},"5.2. ",(0,r.kt)("inlineCode",{parentName:"h3"},"null")," \u8fd8\u662f ",(0,r.kt)("inlineCode",{parentName:"h3"},"undefined")," \uff1f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," \u7c7b\u578b\u3002\u53ef\u7a7a\u7c7b\u578b\u53ef\u4ee5\u901a\u8fc7\u8054\u5408\u7c7b\u578b\u5b9e\u73b0\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"string | null")," \u3002\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," \u4e5f\u662f\u7c7b\u4f3c\u7684\u3002\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\n\u7684\u8054\u5408\u7c7b\u578b\uff0c\u5e76\u65e0\u7279\u6b8a\u7684\u8bed\u6cd5\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u4ee3\u7801\u4e2d\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u6807\u8bb0\u7f3a\u5c11\u7684\u503c\uff0c\u8fd9\u91cc\u5e76\u65e0\u901a\u7528\u7684\u89c4\u5219\u7ea6\u5b9a\u5e94\u5f53\u4f7f\u7528\u5176\u4e2d\u7684\u67d0\u4e00\u79cd\u3002\u8bb8\u591a ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")," API \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," \uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"Map.get"),"\n\uff09\uff0c\u7136\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"DOM")," API \u4e2d\u5219\u66f4\u591a\u5730\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"Element.getAttribute")," \uff09\uff0c\u56e0\u6b64\uff0c\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," \u7684\u9009\u62e9\u53d6\u51b3\u4e8e\u5f53\u524d\u7684\u4e0a\u4e0b\u6587\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u5e94\u5f53\u3011"))," \u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u7684\u7a7a\u503c\u5e94\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u5bf9\u4e8e\u57fa\u672c\u7c7b\u578b\u7684\u7a7a\u503c\u5e94\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002"),(0,r.kt)("h4",{id:"521-\u53ef\u7a7a\u672a\u5b9a\u4e49\u7c7b\u578b\u522b\u540d"},"5.2.1. \u53ef\u7a7a/\u672a\u5b9a\u4e49\u7c7b\u578b\u522b\u540d"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u63d0\u6848\u3011"))," \u4e0d\u5e94\u4e3a\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"|null")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"|undefined"),"\n\u7684\u8054\u5408\u7c7b\u578b\u521b\u5efa\u7c7b\u578b\u522b\u540d\u3002\u8fd9\u79cd\u53ef\u7a7a\u7684\u522b\u540d\u901a\u5e38\u610f\u5473\u7740\u7a7a\u503c\u5728\u5e94\u7528\u4e2d\u4f1a\u88ab\u5c42\u5c42\u4f20\u9012\uff0c\u5e76\u4e14\u5b83\u63a9\u76d6\u4e86\u5bfc\u81f4\u7a7a\u503c\u51fa\u73b0\u7684\u6e90\u5934\u3002\u53e6\u5916\uff0c\u8fd9\u79cd\u522b\u540d\u4e5f\u8ba9\u7c7b\u6216\u63a5\u53e3\u4e2d\u7684\u67d0\u4e2a\u503c\u4f55\u65f6\u6709\u53ef\u80fd\u4e3a\u7a7a\u53d8\u5f97\u4e0d\u786e\u5b9a\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u63d0\u6848\u3011"))," \u56e0\u6b64\uff0c\u4ee3\u7801\u5fc5\u987b\u5728\u4f7f\u7528\u522b\u540d\u65f6\u624d\u5141\u8bb8\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"|null")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"|undefined")," \u3002\u540c\u65f6\uff0c\u4ee3\u7801\u5e94\u5f53\u5728\u7a7a\u503c\u51fa\u73b0\u4f4d\u7f6e\u7684\u9644\u8fd1\u5bf9\u5176\u8fdb\u884c\u5904\u7406\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4e0d\u8981\u8fd9\u6837\u505a\uff01\u4e0d\u8981\u5728\u521b\u5efa\u522b\u540d\u7684\u65f6\u5019\u5305\u542b undefined \uff01\ntype CoffeeResponse = Latte | Americano | undefined;\n\nclass CoffeeService {\n  getLatte(): CoffeeResponse {\n  };\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5e94\u5f53\u8fd9\u6837\u505a\uff01\u5728\u4f7f\u7528\u522b\u540d\u7684\u65f6\u5019\u8054\u5408 undefined \uff01\ntype CoffeeResponse = Latte | Americano;\n\nclass CoffeeService {\n  getLatte(): CoffeeResponse | undefined {\n  };\n}\n")),(0,r.kt)("h4",{id:"522-\u53ef\u9009\u53c2\u6570-\u8fd8\u662f-undefined-\u7c7b\u578b"},"5.2.2. \u53ef\u9009\u53c2\u6570\uff08",(0,r.kt)("inlineCode",{parentName:"h4"},"?"),"\uff09 \u8fd8\u662f ",(0,r.kt)("inlineCode",{parentName:"h4"},"undefined")," \u7c7b\u578b\uff1f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u652f\u6301\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," \u521b\u5efa\u53ef\u9009\u53c2\u6570\u548c\u53ef\u9009\u5b57\u6bb5\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CoffeeOrder {\n  sugarCubes: number;\n  milk?: Whole | LowFat | HalfHalf;\n}\n\nfunction pourCoffee(volume?: Milliliter) {\n}\n")),(0,r.kt)("p",null,"\u53ef\u9009\u53c2\u6570\u5b9e\u9645\u4e0a\u9690\u5f0f\u5730\u5411\u7c7b\u578b\u4e2d\u8054\u5408\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"|undefined")," \u3002\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u5728\u6784\u9020\u7c7b\u5b9e\u4f8b\u6216\u8c03\u7528\u65b9\u6cd5\u65f6\uff0c\u53ef\u9009\u53c2\u6570\u53ef\u4ee5\u88ab\u76f4\u63a5\u7701\u7565\u3002\u4f8b\u5982\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"{sugarCubes: 1}")," \u662f\u4e00\u4e2a\u5408\u6cd5\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"CoffeeOrder")," \uff0c\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"milk"),"\n\u5b57\u6bb5\u662f\u53ef\u9009\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u5e94\u5f53\u3011"))," \u5e94\u5f53\u4f7f\u7528\u53ef\u9009\u5b57\u6bb5\uff08\u5bf9\u4e8e\u7c7b\u6216\u8005\u63a5\u53e3\uff09\u548c\u53ef\u9009\u53c2\u6570\u800c\u975e\u8054\u5408 ",(0,r.kt)("inlineCode",{parentName:"p"},"|undefined")," \u7c7b\u578b\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u5e94\u5f53\u3011"))," \u5bf9\u4e8e\u7c7b\uff0c\u5e94\u5f53\u5c3d\u53ef\u80fd\u907f\u514d\u4f7f\u7528\u53ef\u9009\u5b57\u6bb5\uff0c\u5c3d\u53ef\u80fd\u521d\u59cb\u5316\u6bcf\u4e00\u4e2a\u5b57\u6bb5\u3002"),(0,r.kt)("h3",{id:"53-\u7ed3\u6784\u7c7b\u578b-\u4e0e-\u6307\u540d\u7c7b\u578b"},"5.3. \u7ed3\u6784\u7c7b\u578b \u4e0e \u6307\u540d\u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u7684\u7c7b\u578b\u7cfb\u7edf\u4f7f\u7528\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"\u7ed3\u6784\u7c7b\u578b"),"\u800c\u975e",(0,r.kt)("inlineCode",{parentName:"p"},"\u6307\u540d\u7c7b\u578b"),"\u3002\u5177\u4f53\u5730\u8bf4\uff0c\u4e00\u4e2a\u503c\uff0c\u5982\u679c\u5b83\u62e5\u6709\u67d0\u4e2a\u7c7b\u578b\u7684\u6240\u6709\u5c5e\u6027\uff0c\u4e14\u6240\u6709\u5c5e\u6027\u7684\u7c7b\u578b\u80fd\u591f\u9012\u5f52\u5730\u4e00\u4e00\u5339\u914d\uff0c\u5219\u8fd9\u4e2a\u503c\u4e0e\u8fd9\u4e2a\u7c7b\u578b\u4e5f\u662f\u5339\u914d\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u5e94\u5f53\u3011"))," \u5728\u63d0\u4f9b\u57fa\u4e8e\u7ed3\u6784\u7c7b\u578b\u7684\u5b9e\u73b0\u65f6\uff0c\u5e94\u5f53\u5728\u7b26\u53f7\u7684\u58f0\u660e\u4f4d\u7f6e\u663e\u5f0f\u5730\u5305\u542b\u5176\u7c7b\u578b\uff0c\u4f7f\u7c7b\u578b\u68c0\u67e5\u548c\u9519\u8bef\u68c0\u6d4b\u80fd\u591f\u66f4\u51c6\u786e\u5730\u5de5\u4f5c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4e0d\u8981\u8fd9\u6837\u505a\uff01\nconst badFoo = {\n  a: 123,\n  b: 'abc',\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5e94\u5f53\u8fd9\u6837\u505a\uff01\nconst foo: Foo = {\n  a: 123,\n  b: 'abc',\n}\n")),(0,r.kt)("h3",{id:"54-interface-\u8fd8\u662f-type"},"5.4. ",(0,r.kt)("inlineCode",{parentName:"h3"},"interface")," \u8fd8\u662f ",(0,r.kt)("inlineCode",{parentName:"h3"},"type"),"\uff1f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u652f\u6301\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," \u4e3a\u7c7b\u578b\u547d\u540d\u3002\u8fd9\u4e00\u529f\u80fd\u53ef\u4ee5\u7528\u4e8e\u57fa\u672c\u7c7b\u578b\u3001\u8054\u5408\u7c7b\u578b\u3001\u5143\u7ec4\u4ee5\u53ca\u5176\u5b83\u7c7b\u578b\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u5e94\u5f53\u3011"))," \u5bf9\u4e8e\u7528\u4e8e\u5bf9\u8c61\u7684\u7c7b\u578b\u65f6\uff0c\u5e94\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," \uff0c\u800c\u975e\u5bf9\u8c61\u5b57\u9762\u91cf\u8868\u8fbe\u5f0f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4e0d\u8981\u8fd9\u6837\u505a\uff01\ntype User = {\n  firstName: string,\n  lastName: string,\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5e94\u5f53\u8fd9\u6837\u505a\uff01\ninterface User {\n  firstName: string;\n  lastName: string;\n}\n")),(0,r.kt)("p",null,"\u533a\u522b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," \u4e0d\u53ef\u91cd\u53e0\uff0c\u4f5c\u7528\u57df\u5185\u552f\u4e00\u3002",(0,r.kt)("inlineCode",{parentName:"li"},"interface")," \u53ef\u91cd\u53e0\u3002\u6b64\u7279\u6027\u53ef\u4ee5\u6781\u5176\u65b9\u4fbf\u5730\u5bf9\u5168\u5c40\u53d8\u91cf\u3001\u7b2c\u4e09\u65b9\u5e93\u7684\u7c7b\u578b\u505a\u6269\u5c55\u3002",(0,r.kt)("inlineCode",{parentName:"li"},"type")," \u652f\u6301\u7ec4\u5408\u7c7b\u578b\uff0c\u4ea4\u53c9\u7c7b\u578b\uff0c\u800c\u63a5\u53e3\u7c7b\u578b\u65e0\u6cd5\u8986\u76d6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interface")," \u53ef\u88ab\u7ee7\u627f\u548c\u5b9e\u73b0\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"type")," \u4e0d\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interface")," \u53ea\u80fd\u58f0\u660e\u5bf9\u8c61\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," \u53ef\u4ee5\u58f0\u660e\u5143\u7ec4\u3001\u8054\u5408\u7c7b\u578b\u3001\u4ea4\u53c9\u7c7b\u578b\u3001\u539f\u59cb\u7c7b\u578b\uff0c\u4e5f\u5305\u62ec\u5bf9\u8c61\u3002")),(0,r.kt)("h3",{id:"55-arrayt-\u7c7b\u578b"},"5.5. ",(0,r.kt)("inlineCode",{parentName:"h3"},"Array<T>")," \u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u5e94\u5f53\u3011"))," \u5bf9\u4e8e\u7b80\u5355\u7c7b\u578b\uff08\u540d\u79f0\u4e2d\u53ea\u5305\u542b\u5b57\u6bcd\u3001\u6570\u5b57\u548c\u70b9 . \u7684\u7c7b\u578b\uff09\uff0c\u5e94\u5f53\u4f7f\u7528\u6570\u7ec4\u7684\u8bed\u6cd5\u7cd6 ",(0,r.kt)("inlineCode",{parentName:"p"},"T[]")," \uff0c\u800c\u975e\u66f4\u957f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Array<T>")," \u5f62\u5f0f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u5e94\u5f53\u3011"))," \u5bf9\u4e8e\u5176\u5b83\u590d\u6742\u7684\u7c7b\u578b\uff0c\u5219\u5e94\u5f53\u4f7f\u7528\u8f83\u957f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Array<T>")," \u3002"),(0,r.kt)("p",null,"\u8fd9\u6761\u89c4\u5219\u4e5f\u9002\u7528\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly T[]")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadonlyArray<T>")," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4e0d\u8981\u8fd9\u6837\u505a\uff01\nconst f: Array<string>;            // \u8bed\u6cd5\u7cd6\u5199\u6cd5\u66f4\u77ed\u3002\nconst g: ReadonlyArray<string>;\nconst h: { n: number, s: string }[]; // \u5927\u62ec\u53f7\u548c\u4e2d\u62ec\u53f7\u8ba9\u8fd9\u884c\u4ee3\u7801\u96be\u4ee5\u9605\u8bfb\u3002\nconst i: (string | number)[];\nconst j: readonly (string | number)[];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5e94\u5f53\u8fd9\u6837\u505a\uff01\nconst a: string[];\nconst b: readonly string[];\nconst c: ns.MyObj[];\nconst d: Array<string | number>;\nconst e: ReadonlyArray<string | number>;\n")),(0,r.kt)("h3",{id:"56-\u7d22\u5f15\u7c7b\u578b-key-string-number"},"5.6. \u7d22\u5f15\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"h3"},"{[key: string]: number}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u53ef\u9009\u3011"))," \u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u4e2d\uff0c\u5e94\u5f53\u4e3a\u952e\u63d0\u4f9b\u4e00\u4e2a\u6709\u610f\u4e49\u7684\u6807\u7b7e\u540d\u3002\uff08\u5f53\u7136\uff0c\u8fd9\u4e2a\u6807\u7b7e\u53ea\u6709\u5728\u6587\u6863\u4e2d\u6709\u5b9e\u9645\u610f\u4e49\uff0c\u5728\u5176\u5b83\u573a\u5408\u662f\u65e0\u7528\u7684\u3002\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4e0d\u8981\u8fd9\u6837\u505a\uff01\nconst users: { [key: string]: number } = {name: 'foo'};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5e94\u5f53\u8fd9\u6837\u505a\uff01\nconst users: { [userName: string]: number } = {name: 'foo'};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u53ef\u9009\u3011"))," \u76f8\u6bd4\u4f7f\u7528\u4e0a\u9762\u7684\u8fd9\u79cd\u5f62\u5f0f\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u4e2d\u5e94\u5f53\u8003\u8651\u4f7f\u7528 ES6 \u65b0\u589e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"Set")," \u7c7b\u578b\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," \u7c7b\u578b\u7684\u952e\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Set")," \u7c7b\u578b\u7684\u5143\u7d20\u90fd\u5141\u8bb8\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," \u4ee5\u5916\u7684\u5176\u4ed6\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"Tips\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u5185\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Record<Keys, ValueType>")," \u5141\u8bb8\u4f7f\u7528\u5df2\u5b9a\u4e49\u7684\u4e00\u7ec4\u952e\u521b\u5efa\u7c7b\u578b\u3002\u5b83\u4e0e\u5173\u8054\u6570\u7ec4\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u952e\u662f\u9759\u6001\u786e\u5b9a\u7684\u3002"),(0,r.kt)("h3",{id:"57-\u6620\u5c04\u7c7b\u578b\u4e0e\u6761\u4ef6\u7c7b\u578b"},"5.7. \u6620\u5c04\u7c7b\u578b\u4e0e\u6761\u4ef6\u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6620\u5c04\u7c7b\u578b")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6761\u4ef6\u7c7b\u578b")," \u8ba9\u7a0b\u5e8f\u5458\u80fd\u591f\u5728\u5df2\u6709\u7c7b\u578b\u7684\u57fa\u7840\u4e0a\u6784\u5efa\u51fa\u65b0\u7684\u7c7b\u578b\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u7684\u6807\u51c6\u5e93\u4e2d\u6709\u8bb8\u591a\u7c7b\u578b\u8fd0\u7b97\u7b26\u90fd\u662f\u57fa\u4e8e\u8fd9\u4e00\u673a\u5236\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"Record")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"Partial"),"\n\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," \u7b49\u7b49\uff09\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5de5\u5177\u51fd\u6570\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Partial")," \u5b9e\u73b0\uff1a"),(0,r.kt)("p",null,"\u5c06\u4e00\u4e2a\u7c7b\u578b\u7684\u6240\u6709\u5c5e\u6027\u53d8\u4e3a\u53ef\u9009\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Partial<T> = {\n  [P in keyof T]?: T[P];\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Required")," \u5b9e\u73b0\uff1a"),(0,r.kt)("p",null,"\u5c06\u4e00\u4e2a\u7c7b\u578b\u7684\u6240\u6709\u5c5e\u6027\u53d8\u4e3a\u5fc5\u9009\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Required<T> = {\n  [P in keyof T]-?: T[P]; // - \u53f7\u8868\u793a\u53bb\u9664\u53ef\u9009\u5c5e\u6027\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," \u5b9e\u73b0\uff1a"),(0,r.kt)("p",null,"\u5c06\u4e00\u4e2a\u7c7b\u578b\u7684\u6240\u6709\u5c5e\u6027\u53d8\u4e3a\u53ea\u8bfb\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Readonly<T> = {\n  readonly [P in keyof T]: T[P];\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Pick")," \u5b9e\u73b0\uff1a"),(0,r.kt)("p",null,"\u4ece\u7ed9\u5b9a\u7684\u7c7b\u578b\u4e2d\u9009\u53d6\u6307\u5b9a\u7684\u952e\u503c\uff0c\u7136\u540e\u7ec4\u6210\u4e00\u4e2a\u65b0\u7684\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Pick<T, K extends keyof T> = {\n  [P in K]: T[P];\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Record")," \u5b9e\u73b0\uff1a"),(0,r.kt)("p",null,"\u4f7f\u7528\u4f20\u5165\u7684\u6cdb\u578b\u53c2\u6570\u5206\u522b\u4f5c\u4e3a\u63a5\u53e3\u7c7b\u578b\u7684\u5c5e\u6027\u548c\u503c\uff0c\u751f\u6210\u63a5\u53e3\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Record<K extends keyof any, T> = {\n  [P in K]: T;\n};\n")),(0,r.kt)("h3",{id:"58-any-\u7c7b\u578b"},"5.8. ",(0,r.kt)("inlineCode",{parentName:"h3"},"any")," \u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u5e94\u5f53\u3011"))," \u5e94\u5f53\u5c3d\u53ef\u80fd\u51cf\u5c11\u9879\u76ee\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," \u51fa\u73b0\u7684\u9891\u7387\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown")," \u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4e0d\u8981\u8fd9\u6837\u505a\uff01\nconst danger: any = value /* \u8fd9\u662f\u4efb\u610f\u4e00\u4e2a\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c */;\ndanger.whoops();  // \u5b8c\u5168\u672a\u7ecf\u68c0\u67e5\u7684\u8bbf\u95ee\uff01\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5e94\u5f53\u8fd9\u6837\u505a\uff01\n// \u53ef\u4ee5\u5c06\u4efb\u4f55\u503c\uff08\u5305\u62ec null \u548c undefined\uff09\u8d4b\u7ed9 val\uff0c\n// \u4f46\u5728\u7f29\u7a84\u7c7b\u578b\u6216\u8005\u7c7b\u578b\u8f6c\u6362\u4e4b\u524d\u5e76\u4e0d\u80fd\u4f7f\u7528\u5b83\u3002\nconst val: unknown = value;\n")),(0,r.kt)("h3",{id:"59-\u5305\u88c5\u7c7b\u578b"},"5.9. \u5305\u88c5\u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u3010\u4e0d\u5e94\u3011"))," \u4e0d\u8981\u4f7f\u7528\u5982\u4e0b\u51e0\u79cd\u7c7b\u578b\uff0c\u5b83\u4eec\u662f JavaScript \u4e2d\u57fa\u672c\u7c7b\u578b\u7684\u5305\u88c5\u7c7b\u578b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"Number")," \u3002\u5b83\u4eec\u7684\u542b\u4e49\u548c\u5bf9\u5e94\u7684\u57fa\u672c\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," \u7565\u6709\u4e0d\u540c\u3002\u4efb\u4f55\u65f6\u5019\uff0c\u90fd\u5e94\u5f53\u4f7f\u7528\u540e\u8005\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Object")," \u3002\u5b83\u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"{}")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},"object")," \u7c7b\u4f3c\uff0c\u4f46\u5305\u542b\u7684\u8303\u56f4\u7565\u5fae\u66f4\u5927\u3002\u5e94\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"{}")," \u8868\u793a\u201c\u5305\u62ec\u9664 ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," \u4e4b\u5916\u6240\u6709\u7c7b\u578b\u201d\u7684\u7c7b\u578b\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),"\n\u8868\u793a\u201c\u6240\u6709\u57fa\u672c\u7c7b\u578b\u4ee5\u5916\u201d\u7684\u7c7b\u578b\uff08\u8fd9\u91cc\u7684\u201c\u6240\u6709\u57fa\u672c\u7c7b\u578b\u201d\u5305\u62ec\u4e0a\u6587\u4e2d\u63d0\u5230\u7684\u57fa\u672c\u7c7b\u578b\uff0c ",(0,r.kt)("inlineCode",{parentName:"li"},"symbol")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"bigint")," \uff09\u3002")),(0,r.kt)("h3",{id:"510-\u53ea\u6709\u6cdb\u578b\u7684\u8fd4\u56de\u7c7b\u578b"},"5.10. \u53ea\u6709\u6cdb\u578b\u7684\u8fd4\u56de\u7c7b\u578b"),(0,r.kt)("p",null,"\u4e0d\u8981\u521b\u5efa\u8fd4\u56de\u7c7b\u578b\u53ea\u6709\u6cdb\u578b\u7684 API\u3002\u5982\u679c\u73b0\u6709\u7684 API \u4e2d\u5b58\u5728\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f7f\u7528\u65f6\u5e94\u5f53\u663e\u5f0f\u5730\u6807\u660e\u6cdb\u578b\u53c2\u6570\u7c7b\u578b\u3002"),(0,r.kt)("h3",{id:"511-\u7c7b\u578b\u64cd\u4f5c\u7b26"},"5.11. \u7c7b\u578b\u64cd\u4f5c\u7b26"),(0,r.kt)("p",null,"\u76ee\u524d\u9879\u76ee\u4e0a\u652f\u6301\u7684\u7c7b\u578b\u64cd\u4f5c\u7b26\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"typeof"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"instanceof"),"\uff1a\u8fd4\u56de\u66f4\u8be6\u7ec6\u7684\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keyof"),"\uff1a\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\u79f0\u7684\u5b57\u7b26\u4e32\u6570\u7ec4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"O[K]"),"\uff1a\u8fd4\u56de\u5bf9\u8c61 ",(0,r.kt)("inlineCode",{parentName:"li"},"K")," \u7684\u503c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[K in O]"),"\uff1a\u9010\u4e00\u6620\u5c04 ",(0,r.kt)("inlineCode",{parentName:"li"},"O")," \u7684\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"li"},"readonly")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"li"},"?"),"\uff1a\u6dfb\u52a0\u3001\u5220\u9664\u3001\u53ea\u8bfb\u3001\u53ef\u9009\u7684\u7c7b\u578b\u4fee\u9970\u7b26"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x ? Y : Z"),"\uff1a\u6cdb\u578b\u3001\u7c7b\u578b\u522b\u540d\u3001\u51fd\u6570\u53c2\u6570\u7c7b\u578b\u7684\u6761\u4ef6\u7c7b\u578b\u5224\u65ad"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"!"),": \u975e\u7a7a\u65ad\u8a00"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"="),": \u6cdb\u578b\u7684\u9ed8\u8ba4\u503c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"as"),": \u7c7b\u578b\u65ad\u8a00"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is"),": \u7c7b\u578b\u8c13\u8bcd\uff0c\u8f85\u52a9\u7c7b\u578b\u63a8\u65ad")))}m.isMDXComponent=!0}}]);