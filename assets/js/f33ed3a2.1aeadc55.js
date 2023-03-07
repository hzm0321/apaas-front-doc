"use strict";(self.webpackChunkapaas_front_doc=self.webpackChunkapaas_front_doc||[]).push([[3875],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),d=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),u=d(n),k=r,N=u["".concat(i,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(N,o(o({ref:e},s),{},{components:n})):a.createElement(N,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3115:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:9},o="9.2. \u516c\u5171 hooks",p={unversionedId:"business/9.2.hooks",id:"business/9.2.hooks",title:"9.2. \u516c\u5171 hooks",description:"9.2.1. \u6279\u91cf DataSet \u4e8b\u4ef6\u76d1\u542c\uff08useDataSetEvents\uff09",source:"@site/docs/9.business/9.2.hooks.md",sourceDirName:"9.business",slug:"/business/9.2.hooks",permalink:"/apaas-front-doc/docs/business/9.2.hooks",draft:!1,editUrl:"https://github.com/hzm0321/apaas-front-doc/blob/master/docs/9.business/9.2.hooks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"9.1. \u516c\u5171\u4e1a\u52a1\u7ec4\u4ef6",permalink:"/apaas-front-doc/docs/business/9.1.components"},next:{title:"9.3. \u516c\u5171\u5de5\u5177\u65b9\u6cd5",permalink:"/apaas-front-doc/docs/business/9.3.utils"}},i={},d=[{value:"9.2.1. \u6279\u91cf DataSet \u4e8b\u4ef6\u76d1\u542c\uff08<code>useDataSetEvents</code>\uff09",id:"921-\u6279\u91cf-dataset-\u4e8b\u4ef6\u76d1\u542cusedatasetevents",level:3},{value:"<strong>\u4f7f\u7528\u793a\u4f8b</strong>",id:"\u4f7f\u7528\u793a\u4f8b",level:4},{value:"<strong>API</strong>",id:"api",level:4},{value:"<strong>\u53c2\u6570</strong>",id:"\u53c2\u6570",level:4},{value:"9.2.2. \u52a8\u6001\u6e32\u67d3\u4e1a\u52a1\u5bf9\u8c61\u5b57\u6bb5\u64cd\u4f5c\u7b26\u5bf9\u5e94\u7684\u7ec4\u4ef6(<code>useBusinessObjectOperator</code>)",id:"922-\u52a8\u6001\u6e32\u67d3\u4e1a\u52a1\u5bf9\u8c61\u5b57\u6bb5\u64cd\u4f5c\u7b26\u5bf9\u5e94\u7684\u7ec4\u4ef6usebusinessobjectoperator",level:3},{value:"<strong>\u57fa\u7840\u7528\u6cd5</strong>",id:"\u57fa\u7840\u7528\u6cd5",level:4},{value:"<strong>\u81ea\u5b9a\u4e49\u6e32\u67d3</strong>",id:"\u81ea\u5b9a\u4e49\u6e32\u67d3",level:4},{value:"<strong>\u53c2\u6570</strong>",id:"\u53c2\u6570-1",level:4},{value:"<strong>\u8fd4\u56de\u503c</strong>",id:"\u8fd4\u56de\u503c",level:4},{value:"<strong>FAQ</strong>",id:"faq",level:4}],s={toc:d};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"92-\u516c\u5171-hooks"},"9.2. \u516c\u5171 hooks"),(0,r.kt)("h3",{id:"921-\u6279\u91cf-dataset-\u4e8b\u4ef6\u76d1\u542cusedatasetevents"},"9.2.1. \u6279\u91cf DataSet \u4e8b\u4ef6\u76d1\u542c\uff08",(0,r.kt)("inlineCode",{parentName:"h3"},"useDataSetEvents"),"\uff09"),(0,r.kt)("p",null,"\u652f\u6301\u76d1\u542c\u540c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"DataSet")," \u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u5355\u4e2a\u6216\u591a\u4e2a"),"\u4e8b\u4ef6\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"DataSet")," \u5b9e\u4f8b\u53d8\u5316\u65f6\uff0c\u4f1a\u91cd\u65b0\u751f\u6210\u65b0\u7684\u76d1\u542c\u3002"),(0,r.kt)("h4",{id:"\u4f7f\u7528\u793a\u4f8b"},(0,r.kt)("strong",{parentName:"h4"},"\u4f7f\u7528\u793a\u4f8b")),(0,r.kt)("p",null,"\u5355\u4e2a\u4e8b\u4ef6\u76d1\u542c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useDataSetEvents(ds,'update',()=>{XXX})\n")),(0,r.kt)("p",null,"\u591a\u4e2a\u4e8b\u4ef6\u4f9d\u6b21\u76d1\u542c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useDataSetEvents(ds,['select','unSelect'],[()=>{XXX},()=>{XXX}])\n")),(0,r.kt)("p",null,"\u4e00\u4e2a\u56de\u8c03\u76d1\u542c\u591a\u4e2a\u4e8b\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useDataSetEvents(ds,['select','unSelect'],()=>{XXX})\n")),(0,r.kt)("p",null,"\u53ea\u76d1\u542c\u4e00\u6b21\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useDataSetEvents(ds,'select','unSelect',()=>{XXX},{once:true})\n")),(0,r.kt)("p",null,"\u4f20\u5165\u914d\u7f6e\u9879 ",(0,r.kt)("inlineCode",{parentName:"p"},"once")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u5373\u53ef\u3002"),(0,r.kt)("h4",{id:"api"},(0,r.kt)("strong",{parentName:"h4"},"API")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"useDataSetEvents(\n  dataSet: DataSet,\n  eventNames: string | string[],\n  handler: CallableFunction | CallableFunction[],\n  options?: AddEventListenerOptions\n)\n")),(0,r.kt)("h4",{id:"\u53c2\u6570"},(0,r.kt)("strong",{parentName:"h4"},"\u53c2\u6570")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSet"),(0,r.kt)("td",{parentName:"tr",align:null},"DataSet \u5b9e\u4f8b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DataSet")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventNames"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \u23ae string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handler"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u51fd\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CallableFunction \u23ae CallableFunction[]")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options\uff08\u53ef\u9009\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Options")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"once"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u9879\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"handler")," \u5728\u6dfb\u52a0\u4e4b\u540e\u6700\u591a\u53ea\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"td"},"\u4e00\u6b21"),"\u3002\u5982\u679c\u662f ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"handler")," \u4f1a\u5728\u5176\u88ab\u8c03\u7528\u4e4b\u540e\u81ea\u52a8\u79fb\u9664\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"capture"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u9879\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"handler")," \u4f1a\u5728\u8be5 DataSet \u7c7b\u578b\u7684\u4e8b\u4ef6\u6355\u83b7\u9636\u6bb5\u4f20\u64ad\u5230\u8be5 ",(0,r.kt)("inlineCode",{parentName:"td"},"EventTarget")," \u65f6\u89e6\u53d1\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"passive"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u9879\uff0c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u8868\u793a ",(0,r.kt)("inlineCode",{parentName:"td"},"handler")," \u6c38\u8fdc\u4e0d\u4f1a\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"preventDefault()")," \u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("maintainer",{title:"\u6b64 hook \u7ef4\u62a4\u8005",authors:["hzm"]}),(0,r.kt)("h3",{id:"922-\u52a8\u6001\u6e32\u67d3\u4e1a\u52a1\u5bf9\u8c61\u5b57\u6bb5\u64cd\u4f5c\u7b26\u5bf9\u5e94\u7684\u7ec4\u4ef6usebusinessobjectoperator"},"9.2.2. \u52a8\u6001\u6e32\u67d3\u4e1a\u52a1\u5bf9\u8c61\u5b57\u6bb5\u64cd\u4f5c\u7b26\u5bf9\u5e94\u7684\u7ec4\u4ef6(",(0,r.kt)("inlineCode",{parentName:"h3"},"useBusinessObjectOperator"),")"),(0,r.kt)("p",null,"\u4e3b\u8981\u7528\u4e8e\u63a5\u6536\u4e1a\u52a1\u5bf9\u8c61\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"businessObjectCode")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"businessObjectFieldCode"),", \u786e\u5b9a\u64cd\u4f5c\u7b26\u548c\u9009\u62e9\u5b8c\u64cd\u4f5c\u7b26\u540e\u8fd4\u56de\u7684\u7ec4\u4ef6\u3002  "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useBusinessObjectOperator")," \u4e2d\u4f7f\u7528\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://ahooks.js.org/zh-CN/"},"ahooks")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest")," \u65b9\u6cd5, \u4f1a\u5bf9\u63a5\u53e3\u8bf7\u6c42\u7ed3\u679c\u8fdb\u884c\u7f13\u5b58,\u5982\u679c\u4e0d\u540c\u9875\u9762\u4f20\u5165\u76f8\u540c",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e1a\u52a1\u5bf9\u8c61 code")," \u4f1a\u76f4\u63a5\u8bfb\u53d6\u4e0a\u4e00\u6b21\u63a5\u53e3\u8bf7\u6c42\u8fc7\u7684\u7ed3\u679c\u3002"),(0,r.kt)("h4",{id:"\u57fa\u7840\u7528\u6cd5"},(0,r.kt)("strong",{parentName:"h4"},"\u57fa\u7840\u7528\u6cd5")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useBusinessObjectOperator")," \u9700\u8981\u63a5\u6536 ",(0,r.kt)("inlineCode",{parentName:"p"},"businessObjectCode")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"businessObjectFieldCode")," \u4e24\u4e2a\u53c2\u6570\uff0c\u9875\u9762\u4e0a\u81f3\u5c11\u8981\u6709\u4e00\u4e2a\u9009\u62e9\u4e1a\u52a1\u5bf9\u8c61\u7684\u7ec4\u4ef6\u4ea7\u751f\u9009\u62e9\u5b8c\u7684\u7ed3\u679c\u3002\n\u8fd9\u4e2a\u7ec4\u4ef6\u7531\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u9875\u9762\u4e0a\u4e5f\u9700\u8981\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Select")," \u7ec4\u4ef6\u7528\u4e8e\u6e32\u67d3\u64cd\u4f5c\u7b26\u7684\u9009\u62e9\u3002\u5f53\u4f20\u5165\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"businessObjectCode")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"businessObjectFieldCode")," \u53c2\u6570\uff0c\u63a5\u53e3\u4f1a\u8fdb\u884c\u8bf7\u6c42\u540e\u7aef\u7ed3\u679c\uff0c\u8fd4\u56de\u503c\u7b2c\u4e00\u4e2a\u53c2\u6570\u8fd4\u56de\u9875\u9762\u4e0a\u9700\u8981\u5c55\u793a\u7684\u64cd\u4f5c\u7b26\u9009\u9879\u3002\u9700\u8981\u628a\u7528\u6237\u9009\u62e9\u5b8c\u7684\u7ed3\u679c\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u5165\u53c2\u3002"),(0,r.kt)("p",null,"\u9009\u62e9\u5b8c\u4e1a\u52a1\u5bf9\u8c61\u548c\u64cd\u4f5c\u7b26\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"useBusinessObjectOperator")," \u8fd4\u56de\u503c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f1a\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"\u7ec4\u4ef6JSX\u5143\u7d20"),"\uff0c\u5f00\u53d1\u8005\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"React.cloneElement")," \u81ea\u5b9a\u4e49\u6ce8\u5165\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"\u6216\u8005"),"\u4f7f\u7528\u8fd4\u56de\u7684\u5de5\u5177\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"renderComponent"),"\n\u6765\u6e32\u67d3\u7ec4\u4ef6."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"enum FieldsNames {\n  BUSINESS_OBJECT = 'businessObject',\n  OPERATOR_TYPE = 'operatorType',\n  VALUE = 'value',\n}\n\nconst Demo = () => {\n  const dataSet = new DataSet({\n    autoCreate: true,\n    fields: [\n      {\n        name: FieldsNames.BUSINESS_OBJECT,\n        lovCode: 'HMDE.BUSINESS_OBJECT.SITE',\n        type: FieldType.object,\n      },\n      {\n        name: FieldsNames.OPERATOR_TYPE,\n        textField: 'meaning',\n        valueField: 'value',\n        type: FieldType.string,\n      },\n      {\n        name: FieldsNames.VALUE,\n        type: FieldType.string,\n      },\n    ]\n  });\n\n  const [optionalOperators, dynamicComponent, dComponentOptionalProps] = useBusinessObjectOperator(\n    {\n      businessObjectCode: dataSet.current?.get(FieldNames.BUSINESS_OBJECT)?.businessObjectCode,\n      businessObjectFieldCode: dataSet.current?.get(FieldNames.BUSINESS_OBJECT)?.businessObjectFieldCode,\n    },\n    dataSet.current?.get(FieldNames.OPERATOR_TYPE)\n  );\n\n  const renderDynamicComponent = () => {\n    if (!dynamicComponent) return null;\n    const { componentName, componentProps, renderComponent } = dComponentOptionalProps;\n    return renderComponent(dataSet, FieldsNames.VALUE, {\n      arrayConnector: ',', // \u517c\u5bb9\u540e\u7aef\u5b57\u7b26\u4e32\u5b58\u50a8,\u5982\u679c\u662f\u6570\u7ec4, \u5219\u4f7f\u7528\u8fd9\u4e2a\u8fde\u63a5\u7b26\u8f6c\u6210\u6570\u7ec4\n      handleRenderProps() {\n        // \u52a8\u6001\u6ce8\u5165\u6e32\u67d3\u65f6\u7ec4\u4ef6\u6240\u9700\u7684 props\n        if (componentProps.range) {\n          return { label: 'test-range' };\n        }\n        return { label: 'test' };\n      },\n    });\n  }\n\n  return (\n    <Form dataSet={dataSet}>\n      <Lov name=\"businessObject\" />\n      <Select name=\"operatorType\" options={optionalOperators} notFoundContent={dComponentOptionalProps.loading ? '\u52a0\u8f7d\u4e2d...' : '\u6682\u65e0\u6570\u636e'} />\n      {dataSet.current?.get('operatorType') && renderDynamicComponent()}\n    </Form>\n  )\n}\n\n")),(0,r.kt)("h4",{id:"\u81ea\u5b9a\u4e49\u6e32\u67d3"},(0,r.kt)("strong",{parentName:"h4"},"\u81ea\u5b9a\u4e49\u6e32\u67d3")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useBusinessObjectOperator")," \u8fd4\u56de\u7684\u7ec4\u4ef6\u662f\u4e00\u4e2a JSX \u5143\u7d20,\u56e0\u6b64\u60f3\u8981\u6ce8\u5165\u5c5e\u6027\u5fc5\u987b\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"React.cloneElement")," \u6765\u5b9e\u73b0."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"enum FieldNames {\n  BUSINESS_OBJECT = 'businessObject',\n  OPERATOR_TYPE = 'operatorType',\n  VALUE = 'value',\n}\n\nconst Demo = () => {\n  const dataSet = new DataSet({\n    autoCreate: true,\n    fields: [\n      {\n        name: FieldNames.BUSINESS_OBJECT,\n        lovCode: 'HMDE.BUSINESS_OBJECT.SITE',\n      },\n      {\n        name: FieldNames.OPERATOR_TYPE,\n        textField: 'meaning',\n        valueField: 'value',\n      },\n      {\n        name: FieldNames.VALUE,\n        type: FieldType.string,\n      },\n    ]\n  });\n\n  const [optionalOperators, dynamicComponent, dComponentOptionalProps] = useBusinessObjectOperator(\n    {\n      businessObjectCode: dataSet.current?.get(FieldNames.BUSINESS_OBJECT)?.businessObjectCode,\n      businessObjectFieldCode: dataSet.current?.get(FieldNames.BUSINESS_OBJECT)?.businessObjectFieldCode,\n    },\n    dataSet.current?.get(FieldNames.OPERATOR_TYPE)\n  );\n\n  const renderDynamicComponent = () => {\n    if (!dynamicComponent) return null;\n    const { componentName, componentProps, renderComponent } = dComponentOptionalProps;\n    // \u4f7f\u7528 `React.cloneElement` \u6765\u6ce8\u5165\u5c5e\u6027\n    const cloneComponent = (_props) =>\n      React.cloneElement(dynamicComponent, {\n        name: 'value',\n        label: 'test',\n        ..._props,\n      });\n\n    const popupProps: any = {\n      popupStyle: { zIndex: 1 },\n      getPopupContainer: (triggerNode) => triggerNode?.parentNode as HTMLElement,\n    };\n\n    switch (componentName) {\n      case 'Select':\n      case 'Lov':\n        // getDataSetProps \u4e3a\u63d0\u4f9b\u7684\u5de5\u5177\u51fd\u6570, \u7528\u4e8e\u8f85\u52a9\u751f\u6210 Select/Lov \u7ec4\u4ef6\u7684 dataSet(\u4e3b\u8981\u662f lookupCode \u548c lovCode)\n        popupProps.dataSet = new DataSet(\n          getDataSetProps({ dataKey: FieldNames.VALUE, parentDataSet: dataSet })\n        );\n        return cloneComponent(popupProps);\n      case 'DatePicker':\n      case 'DateTimePicker':\n        return cloneComponent(popupProps);\n      default:\n        return cloneComponent({});\n    }\n  }\n\n  return (\n    <Form dataSet={dataSet}>\n      <Lov name=\"businessObject\" />\n      <Select name=\"operatorType\" options={optionalOperators} notFoundContent={dComponentOptionalProps.loading ? '\u52a0\u8f7d\u4e2d...' : '\u6682\u65e0\u6570\u636e'} />\n      {dataSet.current?.get('operatorType') && renderDynamicComponent()}\n    </Form>\n  )\n}\n\n")),(0,r.kt)("h4",{id:"\u53c2\u6570-1"},(0,r.kt)("strong",{parentName:"h4"},"\u53c2\u6570")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"businessObject"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e1a\u52a1\u5bf9\u8c61\u5b57\u6bb5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{businessObjectCode:string, businessObjectFieldCode:string }")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectedOperatorType"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u7684\u64cd\u4f5c\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c"},(0,r.kt)("strong",{parentName:"h4"},"\u8fd4\u56de\u503c")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"optionalOperators"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u53ef\u9009\u7684\u7ed9\u53d7\u63a7 Select \u7ec4\u4ef6\u7684\u64cd\u4f5c\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DataSet")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"component"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u64cd\u4f5c\u7b26\u4ea7\u751f\u7684\u7ec4\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JSX Element")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"componentOptionalProps"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e9b\u8f85\u52a9\u5b57\u6bb5\u548c\u5de5\u5177\u51fd\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ComponentOptionalProps")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ComponentOptionalProps")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customOptionList"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e1a\u52a1\u5bf9\u8c61\u81ea\u5b9a\u4e49\u7684\u96c6\u5408\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CustomOptionList")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lovCode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u503c\u96c6 code(\u6ce8\u610f\u533a\u5206 Select \u548c Lov \u7ec4\u4ef6)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u8f93"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"componentName"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"componentProps"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getDataSetProps"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5de5\u5177\u51fd\u6570\u8f85\u52a9\u751f\u6210 Select Lov \u7ec4\u4ef6\u7684 ds \u5bf9\u8c61"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"({dataKey?:string;parentDataSet?: DataSet \u23ae Record; fieldProps:FieldProps })=> DataSetProps")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compatibleArray"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9\u6570\u7ec4\u683c\u5f0f\u7684\u5de5\u5177\u65b9\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(ds:DataSet \u23ae Record, dataKey:string, arrayConnector?:string)=> void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"renderComponent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e32\u67d3\u7ec4\u4ef6\u7684\u8f85\u52a9\u65b9\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(ds: DataSet \u23ae Record, dataKey: string,{arrayConnector?:string,handleRenderProps?: ()=> Object, selectLovFieldProps: FieldProps})=>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6574\u7684\u540e\u7aef\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BusinessObjectOperatorProps")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loading"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3 loading \u72b6\u6001"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"faq"},(0,r.kt)("strong",{parentName:"h4"},"FAQ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. \u5728\u4f7f\u7528\u5b57\u6bb5\u94bb\u53d6\u7ec4\u4ef6\u4f20\u5165\u4e1a\u52a1\u5bf9\u8c61\u53c2\u6570\u65f6\u6ce8\u610f\u4e8b\u9879")),(0,r.kt)("p",null,"\u56e0\u4e3a\u5b57\u6bb5\u94bb\u53d6\u7ec4\u4ef6\u5141\u8bb8\u9009\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"\u5173\u8054\u7684\u4e1a\u52a1\u5bf9\u8c61"),"\uff0c\u6240\u4ee5\u5728\u4f7f\u7528\u65f6\u9700\u8981\u6ce8\u610f\u8981\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"useBusinessObjectOperator")," \u4f20\u5165\u6700\u540e\u4e00\u4e2a\u94bb\u53d6\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"businessObjectCode"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<DrillComponent\n  businessObjectCode={businessObjectCode}\n  drillMainKeyType={EDrillMainKeyType.ALL}\n  onChange={(res)=>{\n    // This will right\n    // res.businessObjectCode \u5c31\u662f\u8fd4\u56de\u7684\u5b57\u6bb5\u94bb\u53d6\u7ec4\u4ef6\u6700\u540e\u4e00\u5c42\u7684\u4e1a\u52a1\u5bf9\u8c61\u7f16\u7801\n  }}\n/>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. \u5bf9\u4e8e\u8fd4\u56de\u6570\u7ec4\u6570\u503c\u7684\u7ec4\u4ef6\uff08\u591a\u9009\u3001\u8303\u56f4\u7c7b\u578b\u7ec4\u4ef6\uff09\uff0c\u5982\u4f55\u4ee5\u5b57\u7b26\u4e32\u5f62\u5f0f\u4f20\u7ed9\u540e\u7aef\uff1f"),"  "),(0,r.kt)("p",null,"\u5728\u4e00\u90e8\u5206\u573a\u666f\u4e2d\uff0c\u540e\u7aef\u4ec5\u63a5\u6536\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u6570\u503c\uff0c\u56e0\u6b64\u5728\u56de\u663e\u548c\u63d0\u4ea4\u6570\u636e\u662f\u8981\u5206\u522b\u505a\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u53ef\u4ee5\u4f7f\u7528\u5de5\u5177\u65b9\u6cd5 ",(0,r.kt)("inlineCode",{parentName:"p"},"renderComponent")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"arrayConnector")," \u53c2\u6570\u5904\u7406\u56de\u663e\u7684\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"  const renderDynamicComponent = () => {\n    if (!dynamicComponent) return null;\n    const { componentName, componentProps, renderComponent } = dComponentOptionalProps;\n    return renderComponent(dataSet, FieldsNames.VALUE, {\n      // \u517c\u5bb9\u540e\u7aef\u5b57\u7b26\u4e32\u5b58\u50a8,\u5982\u679c\u662f\u6570\u7ec4, \u5219\u4f7f\u7528\u8fd9\u4e2a\u8fde\u63a5\u7b26\u8f6c\u6210\u6570\u7ec4\n      // This will right\n      arrayConnector: ',', \n      // ......\n    });\n  }\n")),(0,r.kt)("p",null,"\u5728\u63d0\u4ea4\u6570\u636e\u65f6\uff0c\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"toString")," \u65b9\u6cd5\u8f6c\u6210\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const demoDS = (): DataSetProps => ({\n  // ......\n  transport: {\n    update: ({ data }) => {\n      const _data = Array.isArray(data) ? data[0] : { __id: "", _status: "" };\n      // \u6570\u7ec4\u7c7b\u578b\n      _data.permissionDataFilterList = _data.permissionDataFilterList.map(\n        (v) => ({\n          ...v,\n          // \u4f7f\u7528 toString \u628a\u6570\u7ec4\u8f6c\u6210\u5b57\u7b26\u4e32\n          // This will right\n          rightValue: v.rightValue?.toString(), \n        })\n      );\n      return {\n        url: `XXXXXX`,\n        method: "PUT",\n        data: _data,\n      };\n    },\n  },\n});\n')),(0,r.kt)("maintainer",{title:"\u6b64 hook \u7ef4\u62a4\u8005",authors:["hzm"]}))}m.isMDXComponent=!0}}]);