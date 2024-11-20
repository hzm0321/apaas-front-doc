"use strict";(self.webpackChunkapaas_front_doc=self.webpackChunkapaas_front_doc||[]).push([[3089],{46:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(7294),a=n(6010),o=n(2263),l=n(1944),i=n(5281),s=n(9058),c=n(9703),p=n(197),m=n(9985);function u(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,o.Z)(),{blogDescription:a,blogTitle:i,permalink:s}=t,c="/"===s?n:i;return r.createElement(r.Fragment,null,r.createElement(l.d,{title:c,description:a}),r.createElement(p.Z,{tag:"blog_posts_list"}))}function d(e){const{metadata:t,items:n,sidebar:a}=e;return r.createElement(s.Z,{sidebar:a},r.createElement(m.Z,{items:n}),r.createElement(c.Z,{metadata:t}))}function g(e){return r.createElement(l.FG,{className:(0,a.Z)(i.k.wrapper.blogPages,i.k.page.blogListPage)},r.createElement(u,e),r.createElement(d,e))}},9703:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(5999),o=n(2244);function l(e){const{metadata:t}=e,{previousPage:n,nextPage:l}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&r.createElement(o.Z,{permalink:n,title:r.createElement(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&r.createElement(o.Z,{permalink:l,title:r.createElement(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(9460),o=n(390);function l(e){let{items:t,component:n=o.Z}=e;return r.createElement(r.Fragment,null,t.map((e=>{let{content:t}=e;return r.createElement(a.n,{key:t.metadata.permalink,content:t},r.createElement(n,null,r.createElement(t,null)))})))}},737:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(7462),a=n(7294),o=n(5742);var l=n(9017);var i=n(9960);var s=n(4673);var c=n(2503);function p(e){return a.createElement(c.Z,e)}var m=n(7390),u=n(1470),d=n(3612),g=n(656);var f=n(1066),b=n(4979),h=n(2263),E=n(6486);const Z="d714b";var v=n(844);var y=n(5893);function x(e){let{id:t,host:r,repo:o,repoId:l,category:i,categoryId:s,mapping:c,term:p,strict:m,reactionsEnabled:u,emitMetadata:d,inputPosition:g,theme:f,lang:b,loading:h}=e;const[E,Z]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{E||(n.e(7526).then(n.bind(n,7526)),Z(!0))}),[]),E?(0,y.jsx)("giscus-widget",{id:t,host:r,repo:o,repoid:l,category:i,categoryid:s,mapping:c,term:p,strict:m,reactionsenabled:u,emitmetadata:d,inputposition:g,theme:f,lang:b,loading:h}):null}const C={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(o.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?a.createElement("code",e):a.createElement(l.Z,e)},a:function(e){return a.createElement(i.Z,e)},pre:function(e){var t;return a.createElement(l.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(s.Z,(0,r.Z)({},e,{summary:n}),o)},ul:m.Z,img:u.Z,h1:e=>a.createElement(p,(0,r.Z)({as:"h1"},e)),h2:e=>a.createElement(p,(0,r.Z)({as:"h2"},e)),h3:e=>a.createElement(p,(0,r.Z)({as:"h3"},e)),h4:e=>a.createElement(p,(0,r.Z)({as:"h4"},e)),h5:e=>a.createElement(p,(0,r.Z)({as:"h5"},e)),h6:e=>a.createElement(p,(0,r.Z)({as:"h6"},e)),admonition:d.Z,intro:function(e){let{type:t}=e;const n=(0,a.useMemo)((()=>({must:{bg:"#f53f3f",text:"\u5fc5\u987b"},forbidden:{bg:"#f53f3f",text:"\u7981\u6b62"},should:{bg:"#ffb400",text:"\u5e94\u5f53"},shouldNot:{bg:"#ffb400",text:"\u4e0d\u5e94"},optional:{bg:"#0fc6c2",text:"\u53ef\u9009"},draft:{bg:"#86909c",text:"\u63d0\u6848"}}[t])),[t]);return a.createElement(g.Z,{style:{border:"none",fontSize:"14px"},color:n.bg},n.text)},maintainer:function(e){let{title:t="\u6b64\u7bc7\u7ef4\u62a4\u8005",authors:n=[]}=e;const{siteConfig:r}=(0,h.Z)(),o=r.customFields.authors,l=(0,a.useMemo)((()=>{const e=[];return n.forEach((t=>{(0,E.has)(o,t)&&e.push(o[t])})),e}),[n,o]);return a.createElement(f.C.Group,{className:Z},a.createElement("span",{style:{marginRight:"18px"}}," ",t,":"),l.map((e=>a.createElement(b.Z,{getPopupContainer:e=>null==e?void 0:e.parentNode,title:e.job_no+" "+e.name,placement:"top"},a.createElement(f.C,{onClick:()=>{var t;(t=e.url)&&window.open(t)},alt:e.name,src:e.image_url,style:{cursor:"pointer"}})))))},warn:function(){return a.createElement(v.Z,{style:{color:"#ffcd36",fontSize:20}})},comment:function(){return a.createElement("div",{style:{marginTop:20}},a.createElement(x,{repo:"hzm0321/apaas-front-doc",repoId:"R_kgDOHvsbLQ",category:"Announcements",categoryId:"DIC_kwDOHvsbLc4CkZrz",strict:"0",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:"light",lang:"zh-CN"}))}}},6521:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(1378),o=n(11),l=n(6486);const i=(0,r.forwardRef)(((e,t)=>{let{steps:n,options:o={},initialStep:i,onExit:s,onBeforeExit:c,onBeforeChange:p,onAfterChange:m,onChange:u,onComplete:d}=e;const g=(0,r.useRef)((0,a.Z)());(0,r.useImperativeHandle)(t,(()=>g.current)),(0,r.useEffect)((()=>{f(),b()}),[n,i]),(0,r.useEffect)((()=>()=>{g.current.exit()}),[]);const f=()=>{g.current.setOptions({nextLabel:'<span style="display: inline-block">\u4e0b\u4e00\u6b65</span>',prevLabel:'<span style="display: inline-block">\u4e0a\u4e00\u6b65</span>',doneLabel:'<span style="display: inline-block">\u5b8c\u6210</span>',buttonClass:"c7n-pro-btn-wrapper c7n-pro-btn c7n-pro-btn-raised c7n-pro-btn-default",...o,steps:n}),s&&g.current.onexit(s),(0,l.isUndefined)(c)||g.current.onbeforeexit(c),p&&g.current.onbeforechange(p),m&&g.current.onafterchange(m),u&&g.current.onchange(u),d&&g.current.oncomplete(d)},b=(0,r.useCallback)((()=>{(0,l.isEmpty)(n)||g.current.start(),(0,l.isNumber)(i)&&g.current.goToStepNumber(i+1)}),[n,i]);return null})),s={React:r,...r,Button:o.Z,Intro:i,introJs:a.Z}}}]);