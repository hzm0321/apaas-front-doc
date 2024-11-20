"use strict";(self.webpackChunkapaas_front_doc=self.webpackChunkapaas_front_doc||[]).push([[624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:9},l="9.3. \u516c\u5171\u5de5\u5177\u65b9\u6cd5",i={unversionedId:"business/9.3.utils",id:"business/9.3.utils",title:"9.3. \u516c\u5171\u5de5\u5177\u65b9\u6cd5",description:"9.3.1. isResponse",source:"@site/docs/9.business/9.3.utils.md",sourceDirName:"9.business",slug:"/business/9.3.utils",permalink:"/apaas-front-doc/docs/business/9.3.utils",draft:!1,editUrl:"https://github.com/hzm0321/apaas-front-doc/blob/master/docs/9.business/9.3.utils.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"9.2. \u516c\u5171 hooks",permalink:"/apaas-front-doc/docs/business/9.2.hooks"},next:{title:"10. \u793e\u533a\u7ec4\u4ef6",permalink:"/apaas-front-doc/docs/community/"}},o={},p=[{value:"9.3.1. isResponse",id:"931-isresponse",level:3},{value:"9.3.2. \u8bf7\u6c42\u53d6\u6d88",id:"932-\u8bf7\u6c42\u53d6\u6d88",level:3},{value:"9.3.2. cachedRequest \u51fd\u6570\u5f0f\u8bf7\u6c42\u7f13\u5b58",id:"932-cachedrequest-\u51fd\u6570\u5f0f\u8bf7\u6c42\u7f13\u5b58",level:3},{value:"<strong>\u53c2\u6570</strong>",id:"\u53c2\u6570",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"93-\u516c\u5171\u5de5\u5177\u65b9\u6cd5"},"9.3. \u516c\u5171\u5de5\u5177\u65b9\u6cd5"),(0,r.kt)("h3",{id:"931-isresponse"},"9.3.1. isResponse"),(0,r.kt)("p",null,"\u4ece hzero-front \u7684\u5de5\u5177\u65b9\u6cd5 ",(0,r.kt)("inlineCode",{parentName:"p"},"getResponse")," \u5347\u7ea7\u800c\u6765\u3002\u5728\u5224\u65ad\u8bf7\u6c42\u662f\u5426\u6210\u529f\u7684\u540c\u65f6\u5141\u8bb8\u63a5\u6536\u4e00\u4e2a\u6cdb\u578b\u53bb\u5b9a\u4e49\u8fd4\u56de\u503c\u3002"),(0,r.kt)("p",null,"\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// This will right\nimport { isResponse } from 'hzero-front-apaas/lib/utils/request';\n\ninterface Person {\n  name: string;\n}\n\nfunction App() {\n  const [data, setData] = React.useState<Record<string, any>>();\n\n  React.useEffect(() => {\n    const fetchData = async () => {\n      const response = await request('/api/test');\n      // This will right\n      if (isResponse<Person>(response)) {\n        setData(response); // response \u7c7b\u578b\u4e3a Person\n      } else {\n        console.error(response); // response \u7c7b\u578b\u4e3a any\n      }\n    };\n    fetchData();\n  }, []);\n\n  return (\n    <div>\n      {data?.name}\n    </div>\n  );\n}\n")),(0,r.kt)("maintainer",{title:"\u6b64\u65b9\u6cd5\u7ef4\u62a4\u8005",authors:["hzm"]}),(0,r.kt)("h3",{id:"932-\u8bf7\u6c42\u53d6\u6d88"},"9.3.2. \u8bf7\u6c42\u53d6\u6d88"),(0,r.kt)("p",null,"\u5728 aPaas \u9879\u76ee\u4e2d\u63a5\u53e3\u8bf7\u6c42\u4e3b\u8981\u5206\u4e3a2\u79cd\u7c7b\u578b\u2014\u2014 ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),"\u3002\u90a3\u4e48\u8fd9\u4e24\u79cd\u8bf7\u6c42\u7684\u53d6\u6d88\u65b9\u5f0f\u4e5f\u4e0d\u540c\u3002\u7edf\u4e00\u91c7\u7528\u5982\u4e0b2\u79cd\u65b9\u5f0f\u8fdb\u884c\u53d6\u6d88\u3002"),(0,r.kt)("p",null,"fetch \u8bf7\u6c42\u53d6\u6d88\u65b9\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u63a5\u53e3\u8bf7\u6c42\nasync function sendQuestion(\n  body: { question: string },\n  options?: Record<string, any>, // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u5fc5\u987b\u9884\u7559 options \u53c2\u6570\uff0c\u7528\u4e8e\u6dfb\u52a0\u53d6\u6d88\u8bf7\u6c42\u7684 token\n) {\n  return request(`${lowcodeOrganizationURL({ route: HZERO_HMDE })}/xxx/chat`, {\n    method: 'POST',\n    body,\n    ...options,\n  });\n}\n\n// \u4f7f\u7528\u7684\u7ec4\u4ef6\nconst App: React.FC<Props> = () => {\n  // This will right\n  const { run, cancel } = useCancelRequest(sendQuestion); // \u4f7f\u7528 useCancelRequest \u5305\u88c5\u8bf7\u6c42\u65b9\u6cd5\n  \n  useEffect(() => {\n    run({ question: '\u4f60\u597d' }); // \u4f7f\u7528\u5305\u88c5\u540e\u7684\u65b9\u6cd5\u53d1\u8d77\u8bf7\u6c42\n  }, []);\n\n  return (\n    <button type=\"button\" onClick={()=> cancel()}>\n      \u53d6\u6d88\n    </button>\n  );\n};\n")),(0,r.kt)("p",null,"axios \u8bf7\u6c42\u53d6\u6d88\u65b9\u5f0f\uff08\u4e00\u822c\u7528\u4e8e DS \u7684\u63a5\u53e3\u8bf7\u6c42\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const App: React.FC<Props> = () => {\n\n  const cancelRequestRef = useRef(axios.CancelToken.source());\n\n  const demoDs = useMemo(\n    () =>\n      new DataSet({\n        autoQuery: true,\n        //... \u5176\u4ed6\u914d\u7f6e\n        transport: {\n          read: ({ data }) => {\n            return {\n              url: `${lowcodeOrganizationURL({ route: HZERO_HMDE })}/xxxxx`,\n              method: 'GET',\n              body: data,\n              // This will right\n              cancelToken: cancelRequestRef.current.token,\n            };\n          },\n        },\n      }),\n    []\n  );\n\n  return (\n    <button type=\"button\" onClick={()=> cancelRequestRef.current.cancel()}>\n      \u53d6\u6d88\n    </button>\n  );\n};\n")),(0,r.kt)("maintainer",{title:"\u6b64\u65b9\u6cd5\u7ef4\u62a4\u8005",authors:["hzm"]}),(0,r.kt)("h3",{id:"932-cachedrequest-\u51fd\u6570\u5f0f\u8bf7\u6c42\u7f13\u5b58"},"9.3.2. cachedRequest \u51fd\u6570\u5f0f\u8bf7\u6c42\u7f13\u5b58"),(0,r.kt)("p",null,"\u9879\u76ee\u4e2d\u867d\u7136\u91c7\u7528\u4e86 ahooks \u4e2d\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://ahooks.js.org/zh-CN/hooks/use-request/index"},"uesRequest")," \u4f5c\u4e3a\u8bf7\u6c42\u7684 hook\uff0c\u4f46\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"uesRequest")," \u9700\u8981\u4f20\u5165\u7684\u7f13\u5b58\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheKey")," \u65b9\u6cd5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"uesRequest")," \u521d\u59cb\u5316\u7684\u65f6\u5019\u9700\u8981\u786e\u5b9a\u4e14\u65e0\u6cd5\u5728\u624b\u52a8\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\u5b9e\u65f6\u53d8\u66f4\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\u9879\u76ee\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"uesRequest")," \u53d1\u8d77\u8bf7\u6c42\u7684\u5199\u6cd5\u5e76\u4e0d\u591a, \u6240\u4ee5\u5c01\u88c5\u4e86\u4e00\u4e2a\u9488\u5bf9\u51fd\u6570\u5f0f\u8bf7\u6c42\u7f13\u5b58\u7684\u65b9\u6cd5 ",(0,r.kt)("inlineCode",{parentName:"p"},"cachedRequest"),", \u5728\u4ee3\u7801\u6539\u52a8\u91cf\u6700\u5c0f\u7684\u60c5\u51b5\u4e0b, \u5b9e\u73b0\u63a5\u53e3\u8bf7\u6c42\u7f13\u5b58\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cachedRequest"),"\u4f1a\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheKey")," \u5bf9\u540c\u65f6\u6b63\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"\u5e76\u53d1\u7684\u8bf7\u6c42"),"\u8fdb\u884c\u7f13\u5b58, ",(0,r.kt)("inlineCode",{parentName:"p"},"\u540e\u53d1\u8d77\u7684\u8bf7\u6c42\u4f1a\u7b49\u5f85\u7b2c\u4e00\u4e2a\u53d1\u8d77\u8bf7\u6c42\u7684\u8fd4\u56de\u7ed3\u679c"),"\u3002\u7f13\u5b58\u6709\u6548\u65f6\u95f4\u9ed8\u8ba4 ",(0,r.kt)("inlineCode",{parentName:"p"},"10 \u79d2"),"(\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," \u53c2\u6570\u8fdb\u884c\u914d\u7f6e)\u3002\u5728\u7f13\u5b58\u6709\u6548\u65f6\u95f4\u5185\u76f8\u540c ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheKey")," \u7684\u8bf7\u6c42\u4f1a\u590d\u7528\u4e0a\u4e00\u8f6e\u8bf7\u6c42\u7684\u7ed3\u679c\u3002\u7f13\u5b58\u6709\u6548\u65f6\u95f4\u8fc7\u540e, \u518d\u8c03\u7528\u65b9\u6cd5\u4f1a\u91cd\u65b0\u53d1\u8d77\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570"},(0,r.kt)("strong",{parentName:"h4"},"\u53c2\u6570")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f02\u6b65\u65b9\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(...args: any[]) => Promise<any>")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheKey"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u552f\u4e00\u6807\u8bc6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options\uff08\u53ef\u9009\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ICacheRequestOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"options")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheResultMap\uff08\u53ef\u9009\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u7684\u7ed3\u679c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Map<string, any>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_cacheResultMap"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cachePendingPromiseMap\uff08\u53ef\u9009\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u7684\u6b63\u5728\u8fdb\u884c\u7684\u63a5\u53e3\u8bf7\u6c42"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Map<string, Promise<any>>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_cachePendingPromiseMap"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheTime\uff08\u53ef\u9009\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u6709\u6548\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1000 * 10"),"(10\u79d2)")))),(0,r.kt)("h4",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u666e\u901a\u8bf7\u6c42\u7f13\u5b58")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { cachedRequest } from 'hzero-front-apaas/lib/utils/request';\n\n// \u6a21\u62df\u7684\u4e00\u4e2a\u63a5\u53e3\u8bf7\u6c42\nconst fetchData = async ({id, keyword}) => {\n  return request(`/api/test/${id}?keyword=${keyword}`);\n};\n\nconst App: React.FC<Props> = () => {\n  const [data, setData] = useState<any>();\n\n  useEffect(() => {\n    const query = {\n      id: '1',\n      keyword: 'test',\n    };\n    // \u786e\u5b9a\u7f13\u5b58\u6807\u8bc6(\u672a\u63d0\u4f9b\u7269\u7406\u9694\u79bb,\u63a8\u8350\u4f7f\u7528\u6a21\u5757 + \u65b9\u6cd5\u540d + \u53c2\u6570\u5e8f\u5217\u5316\u4f5c\u4e3a\u7f13\u5b58\u6807\u8bc6)\n    const cacheKey = `hmde-fetchData-${JSON.stringify(query)}`;\n    // \u5bf9\u666e\u901a\u8bf7\u6c42\u4f7f\u7528 cachedRequest \u5305\u88c5\n    // This will right\n    cachedRequest(()=>fetchData(query), cacheKey).then((res) => {\n      setData(res);\n    });\n  }, []);\n\n  return (\n    <div>\n      {data?.name}\n    </div>\n  );\n};\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u4f9b\u8bf7\u6c42\u7f13\u5b58\u7a7a\u95f4\u4ee5\u7269\u7406\u9694\u79bb\u907f\u514d\u7f13\u5b58\u91cd\u590d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { cachedRequest } from 'hzero-front-apaas/lib/utils/request';\n\n// \u6a21\u62df\u7684\u4e00\u4e2a\u63a5\u53e3\u8bf7\u6c42\nconst fetchData = async ({id, keyword}) => {\n  return request(`/api/test/${id}?keyword=${keyword}`);\n};\n\n// This will right\nconst cacheResultMap = new Map<string, any>();\n// This will right\nconst cachePendingPromiseMap = new Map<string, Promise<any>>();\n\nconst App: React.FC<Props> = () => {\n  const [data, setData] = useState<any>();\n\n  useEffect(() => {\n    const query = {\n      id: '1',\n      keyword: 'test',\n    };\n    // \u786e\u5b9a\u7f13\u5b58\u6807\u8bc6(\u63d0\u4f9b\u4e86\u7269\u7406\u9694\u79bb, \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u53c2\u6570\u5e8f\u5217\u5316\u4f5c\u4e3a\u7f13\u5b58\u6807\u8bc6)\n    const cacheKey = JSON.stringify(query);\n    // \u5bf9\u666e\u901a\u8bf7\u6c42\u4f7f\u7528 cachedRequest \u5305\u88c5\n    cachedRequest(()=>fetchData(query), cacheKey, {\n      // This will right\n      cacheResultMap,\n      // This will right\n      cachePendingPromiseMap,\n    }).then((res) => {\n      setData(res);\n    });\n  }, []);\n\n  return (\n    <div>\n      {data?.name}\n    </div>\n  );\n};\n")),(0,r.kt)("maintainer",{title:"\u6b64\u65b9\u6cd5\u7ef4\u62a4\u8005",authors:["hzm"]}),(0,r.kt)("comment",null))}c.isMDXComponent=!0}}]);