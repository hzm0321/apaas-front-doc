"use strict";(self.webpackChunkapaas_front_doc=self.webpackChunkapaas_front_doc||[]).push([[3089],{80046:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(67294),a=n(86010),l=n(52263),o=n(1944),i=n(35281),s=n(39058),c=n(99703),p=n(90197),m=n(79985);function u(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,l.Z)(),{blogDescription:a,blogTitle:i,permalink:s}=t,c="/"===s?n:i;return r.createElement(r.Fragment,null,r.createElement(o.d,{title:c,description:a}),r.createElement(p.Z,{tag:"blog_posts_list"}))}function d(e){const{metadata:t,items:n,sidebar:a}=e;return r.createElement(s.Z,{sidebar:a},r.createElement(m.Z,{items:n}),r.createElement(c.Z,{metadata:t}))}function g(e){return r.createElement(o.FG,{className:(0,a.Z)(i.k.wrapper.blogPages,i.k.page.blogListPage)},r.createElement(u,e),r.createElement(d,e))}},99703:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(95999),l=n(32244);function o(e){const{metadata:t}=e,{previousPage:n,nextPage:o}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&r.createElement(l.Z,{permalink:n,title:r.createElement(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&r.createElement(l.Z,{permalink:o,title:r.createElement(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},79985:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(9460),l=n(30390);function o(e){let{items:t,component:n=l.Z}=e;return r.createElement(r.Fragment,null,t.map((e=>{let{content:t}=e;return r.createElement(a.n,{key:t.metadata.permalink,content:t},r.createElement(n,null,r.createElement(t,null)))})))}},56815:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(87462),a=n(67294),l=n(35742);var o=n(1686);var i=n(39960);var s=n(34673);var c=n(92503);function p(e){return a.createElement(c.Z,e)}var m=n(27390),u=n(91470),d=n(23612),g=n(62015);var f=n(6591),b=n(98886),E=n(52263),h=n(96486);const Z="d714b";const v={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(l.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?a.createElement("code",e):a.createElement(o.Z,e)},a:function(e){return a.createElement(i.Z,e)},pre:function(e){var t;return a.createElement(o.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(s.Z,(0,r.Z)({},e,{summary:n}),l)},ul:m.Z,img:u.Z,h1:e=>a.createElement(p,(0,r.Z)({as:"h1"},e)),h2:e=>a.createElement(p,(0,r.Z)({as:"h2"},e)),h3:e=>a.createElement(p,(0,r.Z)({as:"h3"},e)),h4:e=>a.createElement(p,(0,r.Z)({as:"h4"},e)),h5:e=>a.createElement(p,(0,r.Z)({as:"h5"},e)),h6:e=>a.createElement(p,(0,r.Z)({as:"h6"},e)),admonition:d.Z,intro:function(e){let{type:t}=e;const n=(0,a.useMemo)((()=>({must:{bg:"#f53f3f",text:"\u5fc5\u987b"},forbidden:{bg:"#f53f3f",text:"\u7981\u6b62"},should:{bg:"#ffb400",text:"\u5e94\u5f53"},shouldNot:{bg:"#ffb400",text:"\u4e0d\u5e94"},optional:{bg:"#0fc6c2",text:"\u53ef\u9009"},draft:{bg:"#86909c",text:"\u63d0\u6848"}}[t])),[t]);return a.createElement(g.Z,{style:{border:"none",fontSize:"14px"},color:n.bg},n.text)},maintainer:function(e){let{title:t="\u6b64\u7bc7\u7ef4\u62a4\u8005",authors:n=[]}=e;const{siteConfig:r}=(0,E.Z)(),l=r.customFields.authors,o=(0,a.useMemo)((()=>{const e=[];return n.forEach((t=>{(0,h.has)(l,t)&&e.push(l[t])})),e}),[n,l]);return a.createElement(f.C.Group,{className:Z},a.createElement("span",{style:{marginRight:"18px"}}," ",t,":"),o.map((e=>a.createElement(b.Z,{getPopupContainer:e=>null==e?void 0:e.parentNode,title:e.job_no+" "+e.name,placement:"top"},a.createElement(f.C,{onClick:()=>{var t;(t=e.url)&&window.open(t)},alt:e.name,src:e.image_url,style:{cursor:"pointer"}})))))}}},22492:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(61378),l=n(96486);const o=(0,r.forwardRef)(((e,t)=>{let{enabled:n,steps:o,options:i={},initialStep:s,onExit:c,onBeforeExit:p,onBeforeChange:m,onAfterChange:u,onChange:d,onComplete:g}=e;const f=(0,r.useRef)((0,a.Z)());(0,r.useImperativeHandle)(t,(()=>f.current)),(0,r.useEffect)((()=>{n?(b(),E()):f.current.exit()}),[n,o,s]),(0,r.useEffect)((()=>()=>{f.current.exit()}),[]);const b=()=>{f.current.setOptions({nextLabel:'<span style="display: inline-block">\u4e0b\u4e00\u6b65</span>',prevLabel:'<span style="display: inline-block">\u4e0a\u4e00\u6b65</span>',doneLabel:'<span style="display: inline-block">\u5b8c\u6210</span>',buttonClass:"c7n-pro-btn-wrapper c7n-pro-btn c7n-pro-btn-raised c7n-pro-btn-default",...i,steps:o}),c&&f.current.onexit(c),(0,l.isUndefined)(p)||f.current.onbeforeexit(p),m&&f.current.onbeforechange(m),u&&f.current.onafterchange(u),d&&f.current.onchange(d),g&&f.current.oncomplete(g)},E=(0,r.useCallback)((()=>{n&&!(0,l.isEmpty)(o)&&f.current.start(),(0,l.isNumber)(s)&&f.current.goToStepNumber(s+1)}),[n,o,s]);return null})),i={React:r,...r,Intro:o,introJs:a.Z}}}]);