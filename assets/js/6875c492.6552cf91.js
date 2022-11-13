"use strict";(self.webpackChunkapaas_front_doc=self.webpackChunkapaas_front_doc||[]).push([[8610],{9703:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(5999),l=n(2244);function o(e){const{metadata:t}=e,{previousPage:n,nextPage:o}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(l.Z,{permalink:n,title:a.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&a.createElement(l.Z,{permalink:o,title:a.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(9460),l=n(390);function o(e){let{items:t,component:n=l.Z}=e;return a.createElement(a.Fragment,null,t.map((e=>{let{content:t}=e;return a.createElement(r.n,{key:t.metadata.permalink,content:t},a.createElement(n,null,a.createElement(t,null)))})))}},1714:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(7294),r=n(6010),l=n(5999),o=n(8824),s=n(1944),i=n(5281),c=n(9960),p=n(9058),u=n(9703),m=n(197),g=n(9985);function d(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const n=d(t);return a.createElement(a.Fragment,null,a.createElement(s.d,{title:n}),a.createElement(m.Z,{tag:"blog_tags_posts"}))}function f(e){let{tag:t,items:n,sidebar:r,listMetadata:o}=e;const s=d(t);return a.createElement(p.Z,{sidebar:r},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,s),a.createElement(c.Z,{href:t.allTagsPath},a.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.createElement(g.Z,{items:n}),a.createElement(u.Z,{metadata:o}))}function b(e){return a.createElement(s.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},a.createElement(h,e),a.createElement(f,e))}},6815:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),l=n(5742);var o=n(1686);var s=n(9960);var i=n(4673);var c=n(2503);function p(e){return r.createElement(c.Z,e)}var u=n(7390),m=n(1470),g=n(3612),d=n(656);var h=n(8480),f=n(3661),b=n(2263),E=n(6486);const Z="d714b";const v={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return r.createElement(e.props.originalType,a)}return e}(e):e));return r.createElement(l.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?r.createElement("code",e):r.createElement(o.Z,e)},a:function(e){return r.createElement(s.Z,e)},pre:function(e){var t;return r.createElement(o.Z,(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),l=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(i.Z,(0,a.Z)({},e,{summary:n}),l)},ul:u.Z,img:m.Z,h1:e=>r.createElement(p,(0,a.Z)({as:"h1"},e)),h2:e=>r.createElement(p,(0,a.Z)({as:"h2"},e)),h3:e=>r.createElement(p,(0,a.Z)({as:"h3"},e)),h4:e=>r.createElement(p,(0,a.Z)({as:"h4"},e)),h5:e=>r.createElement(p,(0,a.Z)({as:"h5"},e)),h6:e=>r.createElement(p,(0,a.Z)({as:"h6"},e)),admonition:g.Z,intro:function(e){let{type:t}=e;const n=(0,r.useMemo)((()=>({must:{bg:"#f53f3f",text:"\u5fc5\u987b"},forbidden:{bg:"#f53f3f",text:"\u7981\u6b62"},should:{bg:"#ffb400",text:"\u5e94\u5f53"},shouldNot:{bg:"#ffb400",text:"\u4e0d\u5e94"},optional:{bg:"#0fc6c2",text:"\u53ef\u9009"},draft:{bg:"#86909c",text:"\u63d0\u6848"}}[t])),[t]);return r.createElement(d.Z,{style:{border:"none",fontSize:"14px"},color:n.bg},n.text)},maintainer:function(e){let{title:t="\u6b64\u7bc7\u7ef4\u62a4\u8005",authors:n=[]}=e;const{siteConfig:a}=(0,b.Z)(),l=a.customFields.authors,o=(0,r.useMemo)((()=>{const e=[];return n.forEach((t=>{(0,E.has)(l,t)&&e.push(l[t])})),e}),[n,l]);return r.createElement(h.C.Group,{className:Z},r.createElement("span",{style:{marginRight:"18px"}}," ",t,":"),o.map((e=>r.createElement(f.Z,{getPopupContainer:e=>null==e?void 0:e.parentNode,title:e.job_no+" "+e.name,placement:"top"},r.createElement(h.C,{onClick:()=>{var t;(t=e.url)&&window.open(t)},alt:e.name,src:e.image_url,style:{cursor:"pointer"}})))))}}},6521:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(1378),l=n(3425),o=n(6486);const s=(0,a.forwardRef)(((e,t)=>{let{steps:n,options:l={},initialStep:s,onExit:i,onBeforeExit:c,onBeforeChange:p,onAfterChange:u,onChange:m,onComplete:g}=e;const d=(0,a.useRef)((0,r.Z)());(0,a.useImperativeHandle)(t,(()=>d.current)),(0,a.useEffect)((()=>{h(),f()}),[n,s]),(0,a.useEffect)((()=>()=>{d.current.exit()}),[]);const h=()=>{d.current.setOptions({nextLabel:'<span style="display: inline-block">\u4e0b\u4e00\u6b65</span>',prevLabel:'<span style="display: inline-block">\u4e0a\u4e00\u6b65</span>',doneLabel:'<span style="display: inline-block">\u5b8c\u6210</span>',buttonClass:"c7n-pro-btn-wrapper c7n-pro-btn c7n-pro-btn-raised c7n-pro-btn-default",...l,steps:n}),i&&d.current.onexit(i),(0,o.isUndefined)(c)||d.current.onbeforeexit(c),p&&d.current.onbeforechange(p),u&&d.current.onafterchange(u),m&&d.current.onchange(m),g&&d.current.oncomplete(g)},f=(0,a.useCallback)((()=>{(0,o.isEmpty)(n)||d.current.start(),(0,o.isNumber)(s)&&d.current.goToStepNumber(s+1)}),[n,s]);return null})),i={React:a,...a,Button:l.Z,Intro:s,introJs:r.Z}}}]);