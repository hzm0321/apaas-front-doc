"use strict";(self.webpackChunkapaas_front_doc=self.webpackChunkapaas_front_doc||[]).push([[466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(n),k=r,u=c["".concat(o,".").concat(k)]||c[k]||s[k]||l;return n?a.createElement(u,p(p({ref:t},d),{},{components:n})):a.createElement(u,p({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},p="2. \u8bed\u6cd5\u89c4\u8303",i={unversionedId:"grammar-specification",id:"grammar-specification",title:"2. \u8bed\u6cd5\u89c4\u8303",description:"2.1. \u6807\u8bc6\u7b26",source:"@site/docs/2.grammar-specification.md",sourceDirName:".",slug:"/grammar-specification",permalink:"/apaas-front-doc/docs/grammar-specification",draft:!1,editUrl:"https://github.com/hzm0321/apaas-front-doc/blob/master/docs/2.grammar-specification.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. \u524d\u8a00",permalink:"/apaas-front-doc/docs/developStyle"},next:{title:"3. \u8bed\u8a00\u7279\u6027",permalink:"/apaas-front-doc/docs/language-featuremd"}},o={},m=[{value:"2.1. \u6807\u8bc6\u7b26",id:"21-\u6807\u8bc6\u7b26",level:3},{value:"2.1.1. \u547d\u540d\u89c4\u8303",id:"211-\u547d\u540d\u89c4\u8303",level:4},{value:'2.1.1.1. <intro type="should" /> \u7f29\u5199',id:"2111--\u7f29\u5199",level:5},{value:'2.1.1.2. <intro type="should" /> \u7f8e\u5143\u7b26\u53f7 $',id:"2112--\u7f8e\u5143\u7b26\u53f7-",level:5},{value:'2.1.2. <intro type="should" /> \u522b\u540d',id:"212--\u522b\u540d",level:4},{value:"2.1.3. \u547d\u540d\u98ce\u683c",id:"213-\u547d\u540d\u98ce\u683c",level:4},{value:"2.1.4. \u63cf\u8ff0\u6027\u547d\u540d",id:"214-\u63cf\u8ff0\u6027\u547d\u540d",level:4},{value:"2.2 \u6ce8\u91ca\u4e0e\u6587\u6863",id:"22-\u6ce8\u91ca\u4e0e\u6587\u6863",level:3},{value:"2.2.1. \u7528 JSDoc \u8fd8\u662f \u6ce8\u91ca\uff1f",id:"221-\u7528-jsdoc-\u8fd8\u662f-\u6ce8\u91ca",level:4},{value:"2.2.2. JSDoc \u89c4\u8303",id:"222-jsdoc-\u89c4\u8303",level:4},{value:"2.2.3. \u7701\u7565\u5bf9\u4e8e <code>TypeScript</code> \u800c\u8a00\u591a\u4f59\u7684\u6ce8\u91ca",id:"223-\u7701\u7565\u5bf9\u4e8e-typescript-\u800c\u8a00\u591a\u4f59\u7684\u6ce8\u91ca",level:4},{value:"2.2.4. \u4e0d\u5e94\u4f7f\u7528 <code>@override</code>",id:"224-\u4e0d\u5e94\u4f7f\u7528-override",level:4},{value:"2.2.5. \u6ce8\u91ca\u5fc5\u987b\u8a00\u4e4b\u6709\u7269",id:"225-\u6ce8\u91ca\u5fc5\u987b\u8a00\u4e4b\u6709\u7269",level:4},{value:"2.2.6. \u53c2\u6570\u5c5e\u6027\u6ce8\u91ca",id:"226-\u53c2\u6570\u5c5e\u6027\u6ce8\u91ca",level:4},{value:"2.2.7. \u5c06\u6587\u6863\u7f6e\u4e8e\u88c5\u9970\u5668\u4e4b\u524d",id:"227-\u5c06\u6587\u6863\u7f6e\u4e8e\u88c5\u9970\u5668\u4e4b\u524d",level:4}],d={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-\u8bed\u6cd5\u89c4\u8303"},"2. \u8bed\u6cd5\u89c4\u8303"),(0,r.kt)("h3",{id:"21-\u6807\u8bc6\u7b26"},"2.1. \u6807\u8bc6\u7b26"),(0,r.kt)("h4",{id:"211-\u547d\u540d\u89c4\u8303"},"2.1.1. \u547d\u540d\u89c4\u8303"),(0,r.kt)("p",null,"\u5728 TypeScript \u4e2d\uff0c\u6807\u8bc6\u7b26\u53ea\u80fd\u4f7f\u7528 ASCII \u7801\u8868\u4e2d\u7684\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"("),"\u3002\u56e0\u6b64\uff0c\u5408\u6cd5\u7684\u6807\u8bc6\u7b26\u53ef\u4ee5\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"[\\)\\w]+")," \u8fdb\u884c\u5339\u914d\u3002\u6839\u636e\u6807\u8bc6\u7b26\u7684\u7528\u9014\u4e0d\u540c\uff0c\u4f7f\u7528\u7684\u547d\u540d\u6cd5\u4e5f\u4e0d\u540c\uff0c\u5982\u4e0b\u8868\u6240\u793a\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u547d\u540d\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5206\u7c7b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e15\u65af\u5361\u547d\u540d\u6cd5\uff08",(0,r.kt)("inlineCode",{parentName:"td"},"UpperCamelCase")," \uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7c7b\u3001\u63a5\u53e3\u3001\u7c7b\u578b\u3001\u679a\u4e3e\u3001\u88c5\u9970\u5668\u3001\u7c7b\u578b\u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9a7c\u5cf0\u5f0f\u547d\u540d\u6cd5\uff08",(0,r.kt)("inlineCode",{parentName:"td"},"lowerCamelCase")," \uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u3001\u53c2\u6570\u3001\u51fd\u6570\u3001\u65b9\u6cd5\u3001\u5c5e\u6027\u3001\u6a21\u5757\u522b\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5168\u5927\u5199\u4e0b\u5212\u7ebf\u547d\u540d\u6cd5\uff08",(0,r.kt)("inlineCode",{parentName:"td"},"CONSTANT_CASE"),"\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40\u5e38\u91cf\u3001\u679a\u4e3e\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u79c1\u6709\u6210\u5458\u547d\u540d\u6cd5\uff08",(0,r.kt)("inlineCode",{parentName:"td"},"#ident")," \uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5141\u8bb8\u4f7f\u7528")))),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("intro",{type:"must"})," \u679a\u4e3e\u503c\u7684\u58f0\u660e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'enum FieldNames {\n  NAME = "name",\n  TENANT_ID = "tenantId",\n}\n\n// \u5982\u679c\u662f\u7ec4\u4ef6\u53ef\u9009\u5c5e\u6027\u503c\uff0c\u53ef\u7528\u5168\u5c0f\u5199\u4f5c\u4e3a key\n enum ButtonSizes {\n   default = "default",\n   small = "small",\n   large = "large",\n }\n\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("intro",{type:"must"})," \u5e38\u91cf\u7684\u58f0\u660e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// \u5e38\u91cf\u5bf9\u8c61\u65b9\u5f0f\u4e00\nconst FIELD_NAMES = {\n  TENANT_ID: "tenantId",\n};\n// \u5e38\u91cf\u5bf9\u8c61\u65b9\u5f0f\u4e8c\nconst FIELD_NAMES = {\n  tenantId: "tenantId",\n};\n// \u57fa\u672c\u7c7b\u578b\u5e38\u91cf\nconst TENANT_ID = "tenantId";\n// \u7c7b\u4e2d\u7684\u5e38\u91cf\nclass FieldName {\n  private static MAX_SIZE = 1024;\n}\n')),(0,r.kt)("p",null,"   Tips\uff1a\u5982\u679c\u5f3a\u70c8\u8981\u6c42\u5e38\u91cf\u5bf9\u8c61\u65e0\u6cd5\u4fee\u6539\uff0c\u5219\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.freeze(obj)")," \u51bb\u7ed3\u5bf9\u8c61\u3002\u8be5\u51bb\u7ed3\u65b9\u5f0f\u53ea\u80fd\u51bb\u7ed3\u4e00\u5c42\uff0c\u51bb\u7ed3\u5168\u90e8\u9700\u8981\u66f4\u6df1\u5c42\u6b21\u7684\u64cd\u4f5c\u3002"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("intro",{type:"must"})," \u63a5\u53e3\u7684\u58f0\u660e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FieldNameProps {\n  name: string;\n  tenantId: string;\n}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("intro",{type:"must"})," \u7c7b\u7684\u79c1\u6709\u6210\u5458\u58f0\u660e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class FieldName {\n  private name: string;\n  // #name: string; \u7981\u6b62\u4f7f\u7528\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u7c7b\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"public/private/protect")," \u533a\u522b\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"public"),"\uff1a\u516c\u6709\u6210\u5458\uff0c\u53ef\u4ee5\u88ab\u5916\u90e8\u8bbf\u95ee\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u6210\u5458\u90fd\u662f public\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"private"),"\uff1a\u79c1\u6709\u6210\u5458\uff0c\u53ea\u80fd\u5728\u7c7b\u5185\u90e8\u8bbf\u95ee\uff0c\u4e0d\u80fd\u88ab\u5916\u90e8\u8bbf\u95ee\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"protect"),"\uff1a\u4fdd\u62a4\u6210\u5458\uff0c\u53ea\u80fd\u5728\u7c7b\u5185\u90e8\u8bbf\u95ee\uff0c\u53ef\u4ee5\u88ab\u7ee7\u627f\u3002"))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("intro",{type:"must"})," \u7c7b\u578b\u53c2\u6570\u58f0\u660e",(0,r.kt)("p",{parentName:"li"},"\u7c7b\u578b\u53c2\u6570\u65e2\u53ef\u4ee5\u4f7f\u7528\u5355\u4e2a\u5927\u5199\u5b57\u6bcd\uff08\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"\uff09\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5e15\u65af\u5361\u547d\u540d\u6cd5\uff08\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"UpperCamelCase"),"\uff09"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"}," class FieldName<T> {\n   name: T;\n   constructor(name: T) {\n     this.name = name;\n   }\n }\n")),(0,r.kt)("h5",{id:"2111--\u7f29\u5199"},"2.1.1.1. ",(0,r.kt)("intro",{type:"should"})," \u7f29\u5199"),(0,r.kt)("p",null,"\u7f29\u5199\u5e94\u88ab\u89c6\u4e3a\u4e00\u4e2a\u8bcd\u3002\u4f8b\u5982\uff0c\u5e94\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"loadHttpUrl"),"\uff0c\u800c\u975e ",(0,r.kt)("inlineCode",{parentName:"p"},"loadHTTPURL"),"\u3002\u5e73\u53f0\u6709\u7279\u6b8a\u8981\u6c42\u7684\u6807\u8bc6\u7b26\u4f8b\u5916\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"\u3002"),(0,r.kt)("h5",{id:"2112--\u7f8e\u5143\u7b26\u53f7-"},"2.1.1.2. ",(0,r.kt)("intro",{type:"should"})," \u7f8e\u5143\u7b26\u53f7 $"),(0,r.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6807\u8bc6\u7b26\u4e0d\u5e94\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"$"),"\uff0c\u9664\u975e\u4e3a\u4e86\u4e0e\u7b2c\u4e09\u65b9\u6846\u67b6\u7684\u547d\u540d\u89c4\u8303\u4fdd\u6301\u4e00\u81f4\u3002\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"jQuery"),"\u3002"),(0,r.kt)("h4",{id:"212--\u522b\u540d"},"2.1.2. ",(0,r.kt)("intro",{type:"should"})," \u522b\u540d"),(0,r.kt)("p",null,"\u5728\u4e3a\u4e00\u4e2a\u5df2\u6709\u7684\u6807\u8bc6\u7b26\u521b\u5efa\u5177\u6709\u5c40\u90e8\u4f5c\u7528\u57df\u7684\u522b\u540d\u65f6\uff0c\u522b\u540d\u7684\u547d\u540d\u65b9\u5f0f\u5e94\u5f53\u4e0e\u73b0\u6709\u7684\u6807\u8bc6\u7b26\u548c\u73b0\u6709\u7684\u547d\u540d\u89c4\u8303",(0,r.kt)("inlineCode",{parentName:"p"},"\u4fdd\u6301\u4e00\u81f4"),"\u3002\u58f0\u660e\u522b\u540d\u65f6\uff0c\u5e94\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," \uff08\u5982\u679c\u5b83\u662f\u4e00\u4e2a\u53d8\u91cf\uff09\u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly")," \uff08\u5982\u679c\u5b83\u662f\u7c7b\u91cc\u7684\u4e00\u4e2a\u5b57\u6bb5\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const {Foo} = SomeType;\nconst CAPACITY = 5;\n\nclass Teapot {\n  readonly BrewStateEnum = BrewStateEnum;\n  readonly CAPACITY = CAPACITY;\n}\n")),(0,r.kt)("h4",{id:"213-\u547d\u540d\u98ce\u683c"},"2.1.3. \u547d\u540d\u98ce\u683c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u4e2d\u7684\u7c7b\u578b\u8868\u8fbe\u4e86\u4e30\u5bcc\u7684\u4fe1\u606f\uff0c\u56e0\u6b64\u5728\u8d77\u540d\u65f6\u4e0d\u5e94\u4e0e\u7c7b\u578b\u4e2d\u6240\u643a\u5e26\u7684\u4fe1\u606f\u91cd\u590d\u3002\u592a\u77ed\u7684\u6807\u8bc6\u7b26\u5f80\u5f80\u4e0d\u77e5\u6240\u4e91\u3002\u8f83\u957f\u7684\u6807\u8bc6\u7b26\u901a\u5e38\u4f7f\u5185\u5bb9\u66f4\u5177\u53ef\u8bfb\u6027\uff0c\u4f46\u662f\u4e5f\u4f1a\u964d\u4f4e\u53ef\u8bfb\u6027\u3002\n\u547d\u540d\u5e94\u8be5\u7b26\u5408\u4e24\u4e2a\u6761\u4ef6: ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6e05\u6670"),"\uff08\u77e5\u9053\u5b83\u662f\u4ec0\u4e48\uff09\u5e76\u4e14",(0,r.kt)("inlineCode",{parentName:"p"},"\u51c6\u786e"),"\uff08\u77e5\u9053\u5b83\u4e0d\u662f\u4ec0\u4e48\uff09\u3002\u4e0b\u9762\u6709\u4e00\u4e9b\u6709\u7528\u7684\u6307\u5bfc\u65b9\u9488\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7701\u7565\u90a3\u4e9b\u53d8\u91cf\u7c7b\u578b\u975e\u5e38\u660e\u786e\u7684\u63cf\u8ff0\u8bed"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4e0d\u597d\u7684, \u7c7b\u578b\u58f0\u660e\u5df2\u7ecf\u544a\u8bc9\u6211\u4eec\uff0c\u5b83\u662f array \u4e86\nconst namesArray: string[] = ['a', 'b', 'c'];\n\n// \u597d\u7684\nconst names: string[] = [\"a\", \"b\", \"c\"];\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7701\u7565\u90a3\u4e9b\u53d8\u91cf\u7c7b\u578b\u975e\u5e38\u660e\u786e\u7684\u63cf\u8ff0\u8bed"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u8fc7\u4e8e\u5177\u4f53\u7684\u540d\u5b57\uff0c\u5f88\u96be\u8bfb:\nlet finalBattleMostDangerousBossMonster;\nlet nonTypicalMonthlyPayments;\n// \u597d\u7684\uff0c\u5047\u5982\u6ca1\u6709\u4f1a\u5f15\u8d77\u6b67\u4e49\u7684\u5176\u5b83monsters\u6216payments:\nlet boss;\nlet payments;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7701\u7565\u90a3\u4e9b\u4ece\u4e0a\u4e0b\u6587\u4e2d\u53ef\u4ee5\u5f97\u5230\u7684\u63cf\u8ff0\u4fe1\u606f"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class AnnualHolidaySale {\n  // \u4e0d\u597d\u7684\uff0c\u91cd\u590d\u4e86\u4e0a\u4e0b\u6587\n  annualSaleRebate;\n\n  promoteHolidaySale() {\n  }\n}\n\nclass AnnualHolidaySale {\n  // \u597d\u7684\n  rebate;\n\n  promote() {\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7701\u7565\u90a3\u4e9b\u53ef\u4ee5\u5230\u5904\u4f7f\u7528\u7684\u6807\u8bc6\u7b26"),"\n\u4f8b\u5982\uff1adata, state, amount, number, value, manager, engine, object, entity, instance, helper, util, broker, metadata,\nprocess, handle, context\u3002\n\u5f53\u7136\u4e5f\u6709\u4e00\u4e9b\u4f8b\u5916\u60c5\u51b5\uff0c\u6b64\u65f6\u8981\u52a0\u5165\u4f60\u81ea\u5df1\u7684\u5224\u65ad\u3002\u8fc7\u957f\u7684\u547d\u540d\u4ecd\u65e7\u6bd4\u592a\u77ed\u7684\u547d\u540d\u597d\u3002")),(0,r.kt)("h4",{id:"214-\u63cf\u8ff0\u6027\u547d\u540d"},"2.1.4. \u63cf\u8ff0\u6027\u547d\u540d"),(0,r.kt)("p",null,"\u547d\u540d\u5e94\u5f53\u5177\u6709\u63cf\u8ff0\u6027\u4e14\u6613\u4e8e\u8bfb\u8005\u7406\u89e3\u3002\u4e0d\u8981\u4f7f\u7528\u5bf9\u9879\u76ee\u4ee5\u5916\u7684\u7528\u6237\u800c\u8a00\u542b\u7cca\u4e0d\u6e05\u6216\u5e76\u4e0d\u719f\u6089\u7684\u7f29\u5199\uff0c\u4e0d\u8981\u901a\u8fc7\u5220\u51cf\u5355\u8bcd\u4e2d\u7684\u5b57\u6bcd\u6765\u5f3a\u884c\u521b\u9020\u7f29\u5199\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u89c4\u5219\u7684\u4f8b\u5916\u662f\uff0c\u5bf9\u4e0d\u8d85\u8fc7\u5341\u884c\u7684\u4f5c\u7528\u57df\u4e2d\u7684\u53d8\u91cf\uff0c\u4ee5\u53ca\u5185\u90e8 API \u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528\u77ed\u53d8\u91cf\u540d\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"j")," \u7b49\u53ea\u6709\u5355\u4e2a\u5b57\u6bcd\u7684\u53d8\u91cf\u540d\uff09\u3002"),(0,r.kt)("h3",{id:"22-\u6ce8\u91ca\u4e0e\u6587\u6863"},"2.2 \u6ce8\u91ca\u4e0e\u6587\u6863"),(0,r.kt)("h4",{id:"221-\u7528-jsdoc-\u8fd8\u662f-\u6ce8\u91ca"},"2.2.1. \u7528 JSDoc \u8fd8\u662f \u6ce8\u91ca\uff1f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TypesScript")," \u4e2d\u6709\u4e24\u79cd\u7c7b\u578b\u7684\u6ce8\u91ca\uff1aJSDoc ",(0,r.kt)("inlineCode",{parentName:"p"},"/** ... */")," \u548c\u666e\u901a\u6ce8\u91ca ",(0,r.kt)("inlineCode",{parentName:"p"},"// ...")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"/* ... */")," \u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6587\u6863\uff0c\u4e5f\u5c31\u662f\u7528\u6237\u5e94\u5f53\u9605\u8bfb\u7684\u6ce8\u91ca\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"/** JSDoc */")," \u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5b9e\u73b0\u8bf4\u660e\uff0c\u4e5f\u5c31\u662f\u53ea\u548c\u4ee3\u7801\u672c\u8eab\u7684\u5b9e\u73b0\u7ec6\u8282\u6709\u5173\u7684\u6ce8\u91ca\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"// \u884c\u6ce8\u91ca")," \u3002")),(0,r.kt)("intro",{type:"must"}),(0,r.kt)("p",null,"\u5bf9\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"\u5de5\u5177\u65b9\u6cd5\u6216\u516c\u7528\u7a0b\u5ea6\u6bd4\u8f83\u9ad8\u7684\u7ec4\u4ef6"),"\u5185\u7684\u65b9\u6cd5\uff0c\u65b9\u6cd5\u6ce8\u91ca\u5fc5\u987b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"/** JSDoc */")," \u3002\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"JSDoc \u6ce8\u91ca"),"\u80fd\u591f\u4e3a\u5de5\u5177\uff08\u4f8b\u5982\u7f16\u8f91\u5668\u6216\u6587\u6863\u751f\u6210\u5668\uff09\u6240\u8bc6\u522b\uff0c\u800c\u666e\u901a\u6ce8\u91ca\u53ea\u80fd\u4f9b\u4eba\u9605\u8bfb\u3002"),(0,r.kt)("h4",{id:"222-jsdoc-\u89c4\u8303"},"2.2.2. JSDoc \u89c4\u8303"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"JSDoc\u6ce8\u91ca")," \u4e00\u822c\u5e94\u8be5\u653e\u7f6e\u5728\u65b9\u6cd5\u6216\u51fd\u6570\u58f0\u660e\u4e4b\u524d\uff0c\u5b83\u5fc5\u987b\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"/**")," \u5f00\u59cb\uff0c\u4ee5\u4fbf\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"JSDoc\u89e3\u6790\u5668"),"\u8bc6\u522b\u3002\u5176\u4ed6\u4efb\u4f55\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"/*"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"/***")," \u6216\u8005\u8d85\u8fc73\u4e2a\u661f\u53f7\u7684\u6ce8\u91ca\uff0c\u90fd\u5c06\u88ab ",(0,r.kt)("inlineCode",{parentName:"p"},"JSDoc\u89e3\u6790\u5668"),"\u5ffd\u7565\u3002"),(0,r.kt)("p",null,"\u6bd4\u8f83\u5e38\u7528\u7684\u6709\u5982\u4e0b\u51e0\u4e2a\u6807\u7b7e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@param"),"\uff1a\u6307\u5b9a\u53c2\u6570\u7684\u540d\u79f0\u548c\u63cf\u8ff0\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * @param wording \u9700\u8981\u8bf4\u7684\u53e5\u5b50\n */\nfunction say(wording) {\n  console.log(wording);\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@returns"),"\uff1a\u6307\u5b9a\u8fd4\u56de\u503c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/*\n * @return \u8fd4\u56de\u503c\u63cf\u8ff0\n */\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@copyright"),"\uff1a\u4ee3\u7801\u7684\u7248\u6743\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@author"),"\uff1a\u4ee3\u7801\u7684\u4f5c\u8005\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@version"),"\uff1a\u4ee3\u7801\u7684\u7248\u672c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@constructor"),"\uff1a\u6307\u5b9a\u6784\u9020\u51fd\u6570\u7684\u540d\u79f0\u3002")),(0,r.kt)("h4",{id:"223-\u7701\u7565\u5bf9\u4e8e-typescript-\u800c\u8a00\u591a\u4f59\u7684\u6ce8\u91ca"},"2.2.3. \u7701\u7565\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"h4"},"TypeScript")," \u800c\u8a00\u591a\u4f59\u7684\u6ce8\u91ca"),(0,r.kt)("intro",{type:"shouldNot"}),(0,r.kt)("p",null,"\u4e0d\u5e94\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"@param")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"@return")," \u6ce8\u91ca\u4e2d\u58f0\u660e\u7c7b\u578b\uff0c\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u672c\u8eab\u5df2\u7ecf\u5305\u542b\u4e86\u7c7b\u578b\u3002\u4e0d\u5e94\u5728\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"implements")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"private")," \u7b49\u5173\u952e\u5b57\u7684\u5730\u65b9\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@implements")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"@enum")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"@private")," \u7b49\u6ce8\u91ca\u3002"),(0,r.kt)("h4",{id:"224-\u4e0d\u5e94\u4f7f\u7528-override"},"2.2.4. \u4e0d\u5e94\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h4"},"@override")),(0,r.kt)("intro",{type:"shouldNot"}),(0,r.kt)("p",null,"\u4e0d\u5e94\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@override")," \u6ce8\u91ca\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"@override")," \u5e76\u4e0d\u4f1a\u88ab\u7f16\u8bd1\u5668\u89c6\u4e3a\u5f3a\u5236\u6027\u7ea6\u675f\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u6ce8\u91ca\u4e0e\u5b9e\u73b0\u4e0a\u7684\u4e0d\u4e00\u81f4\u6027\u3002\u5982\u679c\u7eaf\u7cb9\u4e3a\u4e86\u6587\u6863\u6dfb\u52a0\u8fd9\u4e00\u6ce8\u91ca\uff0c\u53cd\u800c\u4ee4\u4eba\u56f0\u60d1\u3002"),(0,r.kt)("h4",{id:"225-\u6ce8\u91ca\u5fc5\u987b\u8a00\u4e4b\u6709\u7269"},"2.2.5. \u6ce8\u91ca\u5fc5\u987b\u8a00\u4e4b\u6709\u7269"),(0,r.kt)("p",null,"\u867d\u7136\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u6587\u6863\u5bf9\u4ee3\u7801\u5341\u5206\u6709\u76ca\uff0c\u4f46\u5bf9\u4e8e\u90a3\u4e9b\u5e76\u4e0d\u7528\u4e8e\u5bfc\u51fa\u7684\u7b26\u53f7\uff0c\u6709\u65f6\u5176\u51fd\u6570\u6216\u53c2\u6570\u7684\u540d\u79f0\u4e0e\u7c7b\u578b\u4fbf\u8db3\u4ee5\u63cf\u8ff0\u81ea\u8eab\u4e86\u3002"),(0,r.kt)("intro",{type:"shouldNot"}),(0,r.kt)("p",null,"\u6ce8\u91ca\u4e0d\u5e94\u7167\u6284\u53c2\u6570\u7c7b\u578b\u548c\u53c2\u6570\u540d\uff0c\u5982\u4e0b\u9762\u7684\u53cd\u9762\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4e0d\u8981\u8fd9\u6837\u505a\uff01\u8fd9\u4e2a\u6ce8\u91ca\u6ca1\u6709\u4efb\u4f55\u6709\u610f\u4e49\u7684\u5185\u5bb9\u3002\n/** @param fooBarService Foo \u5e94\u7528\u7684 Bar \u670d\u52a1 */\n")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u53ea\u6709\u5f53\u9700\u8981\u6dfb\u52a0\u989d\u5916\u4fe1\u606f\u65f6\u624d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@param")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"@return")," \u6ce8\u91ca\uff0c\u5176\u5b83\u60c5\u51b5\u4e0b\u76f4\u63a5\u7701\u7565\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * \u53d1\u9001 POST \u8bf7\u6c42\uff0c\u5f00\u59cb\u716e\u5496\u5561\n * @param amountLitres \u716e\u5496\u5561\u7684\u91cf\uff0c\u6ce8\u610f\u548c\u716e\u9505\u7684\u5c3a\u5bf8\u5bf9\u5e94\uff01\n */\nbrew(amountLitres: number, logger: Logger) {\n    // ...\n}\n")),(0,r.kt)("h4",{id:"226-\u53c2\u6570\u5c5e\u6027\u6ce8\u91ca"},"2.2.6. \u53c2\u6570\u5c5e\u6027\u6ce8\u91ca"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e3a\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\u6dfb\u52a0\u8bbf\u95ee\u9650\u5b9a\u7b26\uff0c\u53c2\u6570\u5c5e\u6027\u540c\u65f6\u521b\u5efa\u4e86\u6784\u9020\u51fd\u6570\u53c2\u6570\u548c\u7c7b\u6210\u5458\u3002\u4f8b\u5982\uff0c\u5982\u4e0b\u7684\u6784\u9020\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Foo {\n    constructor(private readonly bar: Bar) { }\n}\n")),(0,r.kt)("p",null,"\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo")," \u7c7b\u521b\u5efa\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bar")," \u7c7b\u578b\u7684\u6210\u5458 ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8981\u4e3a\u8fd9\u4e9b\u6210\u5458\u6dfb\u52a0\u6587\u6863\uff0c\u5e94\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"JSDoc")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"@param")," \u6ce8\u91ca\uff0c\u8fd9\u6837\u7f16\u8f91\u5668\u4f1a\u5728\u8c03\u7528\u6784\u9020\u51fd\u6570\u548c\u8bbf\u95ee\u5c5e\u6027\u65f6\u663e\u793a\u5bf9\u5e94\u7684\u6587\u6863\u63cf\u8ff0\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/** \u8fd9\u4e2a\u7c7b\u6f14\u793a\u4e86\u5982\u4f55\u4e3a\u53c2\u6570\u5c5e\u6027\u6dfb\u52a0\u6587\u6863 */\nclass ParamProps {\n    /**\n     * @param percolator \u716e\u5496\u5561\u6240\u7528\u7684\u5496\u5561\u58f6\u3002\n     * @param beans \u716e\u5496\u5561\u6240\u7528\u7684\u5496\u5561\u8c46\u3002\n     */\n    constructor(\n        private readonly percolator: Percolator,\n        private readonly beans: CoffeeBean[]) {}\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/** \u8fd9\u4e2a\u7c7b\u6f14\u793a\u4e86\u5982\u4f55\u4e3a\u666e\u901a\u6210\u5458\u6dfb\u52a0\u6587\u6863 */\nclass OrdinaryClass {\n    /** \u4e0b\u6b21\u8c03\u7528 brew() \u65f6\u6240\u7528\u7684\u5496\u5561\u8c46\u3002 */\n    nextBean: CoffeeBean;\n\n    constructor(initialBean: CoffeeBean) {\n        this.nextBean = initialBean;\n    }\n}\n")),(0,r.kt)("h4",{id:"227-\u5c06\u6587\u6863\u7f6e\u4e8e\u88c5\u9970\u5668\u4e4b\u524d"},"2.2.7. \u5c06\u6587\u6863\u7f6e\u4e8e\u88c5\u9970\u5668\u4e4b\u524d"),(0,r.kt)("intro",{type:"must"}),(0,r.kt)("p",null,"\u6587\u6863\u3001\u65b9\u6cd5\u6216\u8005\u5c5e\u6027\u5982\u679c\u540c\u65f6\u5177\u6709\u88c5\u9970\u5668\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Component"),"\uff09\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"JSDoc \u6ce8\u91ca"),"\uff0c\u5e94\u5f53\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"JSDoc")," \u7f6e\u4e8e\u88c5\u9970\u5668\u4e4b\u524d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/** \u6253\u5370 \"bar\" \u7684\u7ec4\u4ef6\u3002 */\n@Component({\n    selector: 'foo',\n    template: 'bar',\n})\nexport class FooComponent {}\n")),(0,r.kt)("intro",{type:"forbidden"}),(0,r.kt)("p",null,"\u7981\u6b62\u5c06 JSDoc \u7f6e\u4e8e\u88c5\u9970\u5668\u548c\u88ab\u88c5\u9970\u7684\u5bf9\u8c61\u4e4b\u95f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4e0d\u8981\u8fd9\u6837\u505a\uff01JSDoc \u88ab\u653e\u5728\u88c5\u9970\u5668 @Component \u548c\u7c7b FooComponent \u4e2d\u95f4\u4e86\uff01\n@Component({\n    selector: 'foo',\n    template: 'bar',\n})\n/** \u6253\u5370 \"bar\" \u7684\u7ec4\u4ef6\u3002 */\nexport class FooComponent {}\n")))}s.isMDXComponent=!0}}]);