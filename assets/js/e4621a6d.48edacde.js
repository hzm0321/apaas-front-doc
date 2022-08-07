"use strict";(self.webpackChunkapaas_front_doc=self.webpackChunkapaas_front_doc||[]).push([[816],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return t?a.createElement(k,p(p({ref:n},u),{},{components:t})):a.createElement(k,p({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={sidebar_position:6},p="6. React",i={unversionedId:"react",id:"react",title:"6. React",description:"6.1. \u6982\u8ff0",source:"@site/docs/6.react.md",sourceDirName:".",slug:"/react",permalink:"/apaas-front-doc/docs/react",draft:!1,editUrl:"https://github.com/hzm0321/apaas-front-doc/blob/master/docs/6.react.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. \u7c7b\u578b\u7cfb\u7edf",permalink:"/apaas-front-doc/docs/type-system"},next:{title:"7. \u72b6\u6001\u7ba1\u7406",permalink:"/apaas-front-doc/docs/state-management"}},l={},s=[{value:"6.1. \u6982\u8ff0",id:"61-\u6982\u8ff0",level:3},{value:"6.2. \u7ec4\u4ef6\u7c7b\u578b",id:"62-\u7ec4\u4ef6\u7c7b\u578b",level:3},{value:"6.2.1. \u51fd\u6570\u7ec4\u4ef6",id:"621-\u51fd\u6570\u7ec4\u4ef6",level:3},{value:"6.2.2. \u8def\u7531\u7ec4\u4ef6",id:"622-\u8def\u7531\u7ec4\u4ef6",level:3},{value:"6.3. Hooks \u7c7b\u578b",id:"63-hooks-\u7c7b\u578b",level:3},{value:"6.3.1. <code>useState</code>",id:"631-usestate",level:4},{value:"6.3.2. <code>useEffect/useLayoutEffect</code>",id:"632-useeffectuselayouteffect",level:4},{value:"6.3.3. <code>useMemo/useCallback</code>",id:"633-usememousecallback",level:4},{value:"6.3.4. <code>useRef</code>",id:"634-useref",level:4},{value:"6.3.5. <code>useImperativeHandle</code>",id:"635-useimperativehandle",level:4},{value:"6.3.6. <code>useContext</code>",id:"636-usecontext",level:4},{value:"6.3.10. <code>\u81ea\u5b9a\u4e49 hooks</code>",id:"6310-\u81ea\u5b9a\u4e49-hooks",level:4},{value:"6.4. \u8868\u5355\u4e8b\u4ef6",id:"64-\u8868\u5355\u4e8b\u4ef6",level:3},{value:"6.5. <code>cloneElement</code>",id:"65-cloneelement",level:3}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"6-react"},"6. React"),(0,r.kt)("h3",{id:"61-\u6982\u8ff0"},"6.1. \u6982\u8ff0"),(0,r.kt)("p",null,"\u76ee\u524d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u5df2\u7ecf\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," \u4e0a\u5f97\u5230\u4e86\u826f\u597d\u7684\u652f\u6301\u3002\u9879\u76ee\u4e0a\u76ee\u524d\u91c7\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"React 16")," \u7248\u672c\u7528\u505a\u5f00\u53d1\u3002\u6b64\u89c4\u8303\u4f1a\u5b9a\u4e49\u4e00\u4e9b\u6211\u4eec\u65e5\u5e38\u4f7f\u7528 React API \u6240\u9700\u6ce8\u5165\u7684\u7c7b\u578b\u3002"),(0,r.kt)("h3",{id:"62-\u7ec4\u4ef6\u7c7b\u578b"},"6.2. \u7ec4\u4ef6\u7c7b\u578b"),(0,r.kt)("h3",{id:"621-\u51fd\u6570\u7ec4\u4ef6"},"6.2.1. \u51fd\u6570\u7ec4\u4ef6"),(0,r.kt)("intro",{type:"must"}),(0,r.kt)("p",null,"\u51fd\u6570\u7ec4\u4ef6\u91c7\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"React.FC")," \u7c7b\u578b\u8fdb\u884c\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Props {\n  message: string;\n}\n\nconst App: React.FC<Props> = ({message, children}) => (\n  <div>{message}{children}</div>\n);\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"React.FC")," \u4e0d\u4ec5\u6821\u9a8c\u7ec4\u4ef6\u53c2\u6570\u7c7b\u578b\u548c\u8fd4\u56de\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactElement"),"\uff0c\u4ed6\u540c\u65f6\u53c8\u6821\u9a8c\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"displayName"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"propTypes"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"defaultProps"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"contextTypes")," \u5c5e\u6027\u7c7b\u578b\u3002")),(0,r.kt)("h3",{id:"622-\u8def\u7531\u7ec4\u4ef6"},"6.2.2. \u8def\u7531\u7ec4\u4ef6"),(0,r.kt)("intro",{type:"must"}),(0,r.kt)("p",null,"\u9879\u76ee\u4e0a\u4f7f\u7528\u8f83\u65e7\u7248\u672c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dva")," \u8fdb\u884c\u8def\u7531\u7ba1\u7406\uff0c\u56e0\u6b64\u76ee\u524d\u4e0d\u652f\u6301 hooks \u7684\u65b9\u5f0f\u76f4\u63a5\u83b7\u53d6\u9875\u9762\u8def\u7531\u3002\u975e\u9876\u5c42\u7ec4\u4ef6\u9700\u8981\u901a\u8fc7\u9ad8\u9636\u7ec4\u4ef6\u7684\u65b9\u5f0f\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"withRouter")," \u5305\u88c5\u7ec4\u4ef6\u6765\u83b7\u53d6\u8def\u7531\u53c2\u6570\u3002\n\u90a3\u4e48\u9876\u5c42\u7ec4\u4ef6\u6216\u8def\u7531\u5305\u88c5\u7ec4\u4ef6\u7684\u7c7b\u578b\u5b9a\u4e49\u5c31\u5e94\u5f53\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router")," \u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"RouteComponentProps")," \u7ee7\u627f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {RouteComponentProps} from 'react-router';\n\ninterface Props extends RouteComponentProps {\n  message: string;\n}\n\nconst App: React.FC<Props> = ({message, children, history}) => (\n  <div>{message}{children}</div>\n);\n")),(0,r.kt)("p",null,"\u5982\u679c\u8def\u7531\u7ec4\u4ef6\u63a5\u6536\u8def\u7531\u53c2\u6570\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"RouteComponentProps")," \u63d0\u4f9b\u7684\u6cdb\u578b\u53c2\u6570\u6ce8\u5165\u8def\u7531\u53c2\u6570\u7c7b\u578b\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"RouteComponentProps")," \u5141\u8bb8\u63a5\u65363\u4e2a\u6cdb\u578b\u53c2\u6570\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u8def\u7531 ",(0,r.kt)("inlineCode",{parentName:"li"},"params")," \u53c2\u6570\u7684\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8def\u7531 ",(0,r.kt)("inlineCode",{parentName:"li"},"statusCode")," \u53c2\u6570\uff0c\u8868\u793a\u5f53\u524d\u8def\u7531\u72b6\u6001\u7f16\u7801\u662f 404\u3001500 \u8fd8\u662f\u5176\u4ed6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u8def\u7531 ",(0,r.kt)("inlineCode",{parentName:"li"},"state")," \u53c2\u6570\u7684\u7c7b\u578b\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {RouteComponentProps} from 'react-router';\n\ninterface Props extends RouteComponentProps<{\n  id: string;\n  type: string;\n},\n  { statusCode: number },\n  {\n    readonly: boolean;\n  }> {\n  message: string;\n}\n\nconst App: React.FC<Props> = ({\n                                history, \n                                match: {params: {id, type}},\n                                location: {state},\n                                message,\n                                children,\n                              }) => (\n  <div>{message}{children}</div>\n);\n")),(0,r.kt)("h3",{id:"63-hooks-\u7c7b\u578b"},"6.3. Hooks \u7c7b\u578b"),(0,r.kt)("h4",{id:"631-usestate"},"6.3.1. ",(0,r.kt)("inlineCode",{parentName:"h4"},"useState")),(0,r.kt)("intro",{type:"optional"}),(0,r.kt)("p",null,"useState \u63a5\u6536\u4e00\u4e2a\u6cdb\u578b\u6307\u5b9a\u5176\u4f20\u5165\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5982\u679c\u4e0d\u4f20\u5165\u5219 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u6839\u636e\u521d\u59cb\u503c\u8fdb\u884c\u7c7b\u578b\u63a8\u65ad\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const [user, setUser] = useState<string>('\u5f20\u4e09');\n")),(0,r.kt)("intro",{type:"must"}),(0,r.kt)("p",null,"\u5982\u679c\u8981\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," \u521d\u59cb\u503c\u8bbe\u7f6e\u4e00\u4e2a\u7a7a\u503c\uff0c\u53ef\u4ee5\u628a\u7a7a\u503c\u6dfb\u52a0\u5230\u6cdb\u578b\u4e2d\uff0c\u6216\u8005\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," \u51fd\u6570\u4e2d\u76f4\u63a5\u8bbe\u7f6e\u521d\u59cb\u503c\uff0c\u7981\u6b62\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"as")," \u8986\u76d6\u521d\u59cb\u503c\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const [user, setUser] = useState<User | null>(null);\n")),(0,r.kt)("h4",{id:"632-useeffectuselayouteffect"},"6.3.2. ",(0,r.kt)("inlineCode",{parentName:"h4"},"useEffect/useLayoutEffect")),(0,r.kt)("intro",{type:"must"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," \u90fd\u7528\u4e8e\u6267\u884c\u526f\u4f5c\u7528\uff0c\u5e76",(0,r.kt)("inlineCode",{parentName:"p"},"\u8fd4\u56de\u4e00\u4e2a\u53ef\u9009\u7684\u6e05\u7406\u51fd\u6570"),"\uff0c\u8fd9\u610f\u5473\u7740\u5982\u679c\u5b83\u4eec\u4e0d\u5904\u7406\u8fd4\u56de\u503c\uff0c\u5c31\u4e0d\u9700\u8981\u7c7b\u578b\u3002\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\n\u65f6\uff0c\u6ce8\u610f\u4e0d\u8981\u8fd4\u56de\u975e ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," \u7684\u5185\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u4e0d\u8981\u8fd9\u6837\u505a\nconst DelayedEffect: React.FC<{ timerMs: number }> = ({timerMs}) => {\n  const {timerMs} = props;\n\n  useEffect(\n    () =>\n      setTimeout(() => {\n        /* do stuff */\n      }, timerMs),\n    [timerMs]\n  );\n  return null;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u5e94\u5f53\u8fd9\u6837\u505a\nconst DelayedEffect: React.FC<{ timerMs: number }> = ({timerMs}) => {\n  const {timerMs} = props;\n\n  useEffect(() => {\n    setTimeout(() => {\n      /* do stuff */\n    }, timerMs);\n  }, [timerMs]);\n  return null;\n}\n")),(0,r.kt)("h4",{id:"633-usememousecallback"},"6.3.3. ",(0,r.kt)("inlineCode",{parentName:"h4"},"useMemo/useCallback")),(0,r.kt)("intro",{type:"optional"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useMemo")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," \u90fd\u53ef\u9009\u63a5\u6536\u4e00\u4e2a\u6cdb\u578b\uff0c\u7528\u4e8e\u6307\u5b9a\u8fd4\u56de\u503c\u7c7b\u578b\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u5219\u901a\u8fc7\u7c7b\u578b\u63a8\u65ad\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const App: React.FC<{}> = () => {\n\n  const randomNum = useMemo<number>(() => {\n    return Math.random();\n  }, [])\n\n  return <div>{randomNum}</div>\n};\n")),(0,r.kt)("h4",{id:"634-useref"},"6.3.4. ",(0,r.kt)("inlineCode",{parentName:"h4"},"useRef")),(0,r.kt)("intro",{type:"should"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useRef")," \u8fd4\u56de\u4e86\u4e00\u4e2a\u5f15\u7528\uff0c\u8be5\u5f15\u7528\u7c7b\u578b\u53ef\u4ee5\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"\u53ea\u8bfb"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"\u53ef\u4fee\u6539"),"\uff0c\u5e94\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"useRef")," \u663e\u5f0f\u6307\u5b9a\u6cdb\u578b\uff0c\u5c3d\u91cf\u51cf\u5c11\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const numberRef = useRef<number>(0);\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"useRef")," \u7684\u7c7b\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"\u53ef\u4fee\u6539"),"\uff0c\u5c31\u9700\u8981\u5728\u6cdb\u578b\u53c2\u6570\u4e2d\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"| null"))),(0,r.kt)("intro",{type:"should"}),(0,r.kt)("p",null,"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"useRef")," \u7ed1\u5b9a\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"DOM")," \u5143\u7d20\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u63d0\u4f9b\u5143\u7d20\u7c7b\u578b\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u4f5c\u4e3a\u521d\u59cb\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Props {\n}\n\nconst App: React.FC<Props> = ({children}) => {\n  const divRef = useRef<HTMLDivElement>(null);\n\n  return <div ref={divRef}>{children}</div>\n};\n")),(0,r.kt)("intro",{type:"should"}),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5df2\u77e5\u5143\u7d20\u7684\u6807\u7b7e\uff0c\u5fc5\u987b\u4f7f\u7528\u5bf9\u5e94\u6807\u7b7e\u7684 HTMLElement \u7c7b\u578b\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," \u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLDivElement"),"\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," \u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLInputElement"),"\n\u3002\u4e0d\u5e94\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLElement"),"\u3002"),(0,r.kt)("h4",{id:"635-useimperativehandle"},"6.3.5. ",(0,r.kt)("inlineCode",{parentName:"h4"},"useImperativeHandle")),(0,r.kt)("intro",{type:"should"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useImperativeHandle")," \u5e94\u5f53\u642d\u914d ",(0,r.kt)("inlineCode",{parentName:"p"},"forwardRef")," \u8fdb\u884c\u4f7f\u7528\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"forwardRef")," \u9700\u901a\u8fc7\u6cdb\u578b\u5b9a\u4e49\u5206\u522b\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," \u548c \u7ec4\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," \u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface RefProps {\n  getName: () => string;\n}\n\ninterface Props {\n  message: string;\n}\n\nconst App = forwardRef<RefProps, Props>(({message, children}, ref) => {\n\n  useImperativeHandle(ref, () => ({\n    getName() {\n      return 'hello';\n    },\n  }));\n\n  return <div>{message}{children}</div>\n});\n\nconst Use: React.FC<{}> = () => {\n  const appRef = useRef<RefProps>(null)\n  return <App message=\"hello\" ref={appRef} />\n}\n")),(0,r.kt)("h4",{id:"636-usecontext"},"6.3.6. ",(0,r.kt)("inlineCode",{parentName:"h4"},"useContext")),(0,r.kt)("intro",{type:"should"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useContext")," \u9700\u8981\u642d\u914d ",(0,r.kt)("inlineCode",{parentName:"p"},"createContext")," \u8fdb\u884c\u4f7f\u7528\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"createContext")," \u5728\u521b\u5efa\u7684\u65f6\u5019\u5141\u8bb8\u63a5\u6536\u4e00\u4e2a\u6cdb\u578b\u7528\u4e8e\u6307\u5b9a\u8fd4\u56de\u7684\u4e0a\u4e0b\u6587\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {createContext} from "react";\n\ninterface AppContextInterface {\n  name: string;\n  author: string;\n  url: string;\n}\n\nconst AppCtx = createContext<AppContextInterface | null>(null);\n\n// Provider in your app\nconst sampleAppContext: AppContextInterface = {\n  name: "Using React Context in a Typescript App",\n  author: "thehappybug",\n  url: "http://www.example.com",\n};\n\nexport const App = () => (\n  <AppCtx.Provider value={sampleAppContext}>...</AppCtx.Provider>\n);\n\n// Consume in your app\nimport {useContext} from "react";\n\nexport const PostInfo: React.FC<{}> = () => {\n  const appContext = useContext(AppCtx);\n  return (\n    <div>\n      Name: {appContext.name}, Author: {appContext.author}, Url:{" "}\n      {appContext.url}\n    </div>\n  );\n};\n')),(0,r.kt)("h4",{id:"6310-\u81ea\u5b9a\u4e49-hooks"},"6.3.10. ",(0,r.kt)("inlineCode",{parentName:"h4"},"\u81ea\u5b9a\u4e49 hooks")),(0,r.kt)("p",null,"\u5982\u679c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"\u81ea\u5b9a\u4e49 hooks")," \u4e2d\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u4f1a\u63a8\u65ad\u51fa\u4e00\u4e2a\u8054\u5408\u7c7b\u578b\u800c\u4e0d\u662f\u5143\u7ec4\u7c7b\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"as const"),"\uff0c\u628a\u8fd4\u56de\u7684\u6570\u7ec4\u6307\u5b9a\u6210\u5143\u7ec4\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import {useState} from "react";\n\nexport function useLoading() {\n  const [isLoading, setState] = useState(false);\n  const load = (aPromise: Promise<any>) => {\n    setState(true);\n    return aPromise.finally(() => setState(false));\n  };\n  return [isLoading, load] as const; // \u4f7f\u7528 [boolean, typeof load] \u4ee3\u66ff (boolean | typeof load)[]\n}\n')),(0,r.kt)("h3",{id:"64-\u8868\u5355\u4e8b\u4ef6"},"6.4. \u8868\u5355\u4e8b\u4ef6"),(0,r.kt)("h3",{id:"65-cloneelement"},"6.5. ",(0,r.kt)("inlineCode",{parentName:"h3"},"cloneElement")),(0,r.kt)("intro",{type:"should"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"React.cloneElement")," \u53ef\u4ee5\u7528\u6765\u590d\u5236\u5143\u7d20\uff0c\u5e76\u4e14\u53ef\u4ee5\u6dfb\u52a0\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"React.cloneElement")," \u5141\u8bb8\u4f20\u5165\u4e00\u4e2a\u6cdb\u578b\u53c2\u6570\uff0c\u7528\u4e8e\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," \u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {Button} from \"choerodon-ui/pro\";\n// ...\nconst btn = <Button />;\nReact.cloneElement<typeof Button>(btn, {\n  color: 'primary',\n})\n")))}c.isMDXComponent=!0}}]);