"use strict";(self.webpackChunkapaas_front_doc=self.webpackChunkapaas_front_doc||[]).push([[85],{4247:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var l=t(7294),a=t(6010),r=t(1944),i=t(5281),c=t(2164),o=t(5042),s=t(9407);const m="mdxPageWrapper_j9I6";function d(e){const{content:n}=e,{metadata:{title:t,description:d,frontMatter:u}}=n,{wrapperClassName:f,hide_table_of_contents:v}=u;return l.createElement(r.FG,{className:(0,a.Z)(null!=f?f:i.k.wrapper.mdxPages,i.k.page.mdxPage)},l.createElement(r.d,{title:t,description:d}),l.createElement(c.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,a.Z)("row",m)},l.createElement("div",{className:(0,a.Z)("col",!v&&"col--8")},l.createElement("article",null,l.createElement(o.Z,null,l.createElement(n,null)))),!v&&n.toc.length>0&&l.createElement("div",{className:"col col--2"},l.createElement(s.Z,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},9407:(e,n,t)=>{t.d(n,{Z:()=>o});var l=t(7462),a=t(7294),r=t(6010),i=t(3743);const c="tableOfContents_bqdL";function o(e){let{className:n,...t}=e;return a.createElement("div",{className:(0,r.Z)(c,"thin-scrollbar",n)},a.createElement(i.Z,(0,l.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,n,t)=>{t.d(n,{Z:()=>v});var l=t(7462),a=t(7294),r=t(6668);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const l=t.slice(2,e.level);e.parentIndex=Math.max(...l),t[e.level]=n}));const l=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):l.push(a)})),l}function c(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return n.flatMap((e=>{const n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:l});return function(e){return e.level>=t&&e.level<=l}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function s(e,n){var t;let{anchorTopOffset:l}=n;const a=e.find((e=>o(e).top>=l));if(a){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:null!=(r=e[e.indexOf(a)-1])?r:null}return null!=(t=e[e.length-1])?t:null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),c=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const l=[];for(let a=n;a<=t;a+=1)l.push("h"+a+".anchor");return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),o=s(c,{anchorTopOffset:t.current}),m=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:l,isChild:r}=e;return n.length?a.createElement("ul",{className:r?void 0:t},n.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:l}))))):null}const f=a.memo(u);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...v}=e;const p=(0,r.L)(),g=null!=m?m:p.tableOfContents.minHeadingLevel,h=null!=u?u:p.tableOfContents.maxHeadingLevel,E=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>c({toc:i(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:g,maxHeadingLevel:h});return d((0,a.useMemo)((()=>{if(o&&s)return{linkClassName:o,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:h}}),[o,s,g,h])),a.createElement(f,(0,l.Z)({toc:E,className:t,linkClassName:o},v))}},1904:(e,n,t)=>{t.d(n,{Z:()=>p});var l=t(7462),a=t(7294),r=t(5742);var i=t(814);var c=t(9960);var o=t(4673);var s=t(2503);function m(e){return a.createElement(s.Z,e)}var d=t(7390),u=t(1470),f=t(3612),v=t(6356);const p={head:function(e){const n=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(r.Z,e,n)},code:function(e){const n=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>{var t;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&n.includes(null==(t=e.props)?void 0:t.mdxType)}))?a.createElement("code",e):a.createElement(i.Z,e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){var n;return a.createElement(i.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:{...e})},details:function(e){const n=a.Children.toArray(e.children),t=n.find((e=>{var n;return a.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),r=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return a.createElement(o.Z,(0,l.Z)({},e,{summary:t}),r)},ul:d.Z,img:u.Z,h1:e=>a.createElement(m,(0,l.Z)({as:"h1"},e)),h2:e=>a.createElement(m,(0,l.Z)({as:"h2"},e)),h3:e=>a.createElement(m,(0,l.Z)({as:"h3"},e)),h4:e=>a.createElement(m,(0,l.Z)({as:"h4"},e)),h5:e=>a.createElement(m,(0,l.Z)({as:"h5"},e)),h6:e=>a.createElement(m,(0,l.Z)({as:"h6"},e)),admonition:f.Z,intro:function(e){let{type:n}=e;const t=(0,a.useMemo)((()=>({must:{bg:"#00b42a",text:"\u5fc5\u987b"},forbidden:{bg:"#f53f3f",text:"\u7981\u6b62"},should:{bg:"#165dff",text:"\u5e94\u5f53"},shouldNot:{bg:"#ffb400",text:"\u4e0d\u5e94"},optional:{bg:"#0fc6c2",text:"\u53ef\u9009"},draft:{bg:"#86909c",text:"\u63d0\u6848"}}[n])),[n]);return a.createElement(v.Vp,{borderRadius:"4px",variant:"solid",paddingX:"8px",verticalAlign:"middle",fontSize:"14px",backgroundColor:t.bg,color:"white"},t.text)}}}}]);