import{l as R,_ as r,e as d,p as v,k as S,C as V,D as O,E as T,F as P,i as p,G as b,j as A,d as i,t as j,H as N,f as k,I as $}from"./entry.9ed58ab6.js";import{u as B}from"./asyncData.7cfc0d68.js";import{h as c,e as w,j as x}from"./query.1f33bc44.js";import{w as y,s as C,u as M,a as z}from"./utils.eb133ee7.js";import"./ContentDoc.ebf5227d.js";import"./ContentList.e617f270.js";import"./ContentQuery.faf8a05a.js";import"./ContentRenderer.caf4f0b7.js";import"./ContentRendererMarkdown.ad0b7f68.js";import"./ContentSlot.431c9ca0.js";import"./DocumentDrivenEmpty.582eeaef.js";import"./DocumentDrivenNotFound.06fb690f.js";import"./Markdown.2704577c.js";import"./ProseCode.a1f8eaa7.js";import{u as H}from"./composables.5640e21e.js";import"./_commonjsHelpers.f057b259.js";const F=async t=>{var o,_;const{content:e}=R().public,n=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};e.locales.length&&((_=(o=n.where)==null?void 0:o.find(u=>u._locale))!=null&&_._locale||(n.where=n.where||[],n.where.push({_locale:e.defaultLocale})));const l=e.experimental.stripQueryParameters?y(`/navigation/${`${c(n)}.${e.integrity}`}/${w(n)}.json`):y(`/navigation/${c(n)}.${e.integrity}.json`);if(C())return(await r(()=>import("./client-db.fe1cdac6.js"),["./client-db.fe1cdac6.js","./entry.9ed58ab6.js","./entry.75022d04.css","./utils.eb133ee7.js","./query.1f33bc44.js","./_commonjsHelpers.f057b259.js"],import.meta.url).then(u=>u.generateNavigation))(n);const a=await $fetch(l,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:x(n),previewToken:M("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const q=d({emits:{error(t){return!0}},setup(t,{slots:e,emit:n}){const l=v(null),a=S();return V(o=>{if(!a.isHydrating)return n("error",o),l.value=o,!1}),()=>{var o,_;return l.value?(o=e.error)==null?void 0:o.call(e,{error:l}):(_=e.default)==null?void 0:_.call(e)}}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),Q=d({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:n}){const l=v(!1);return O(()=>{l.value=!0}),a=>{var u;if(l.value)return(u=e.default)==null?void 0:u.call(e);const o=e.fallback||e.placeholder;if(o)return o();const _=a.fallback||a.placeholder||"",m=a.fallbackTag||a.placeholderTag||"span";return T(m,n,_)}}}),g=new WeakMap;function G(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(n,...l)=>{var a;if(n.mounted$){const o=t.render(n,...l);return o.children===null||typeof o.children=="string"?P(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):p(o)}else return p("div",(a=n.$attrs)!=null?a:n._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(n,l)=>{var o;const a=v(!1);return O(()=>{a.value=!0}),Promise.resolve(((o=t.setup)==null?void 0:o.call(t,n,l))||{}).then(_=>typeof _!="function"?{..._,mounted$:a}:(...m)=>{if(a.value){const u=_(...m);return u.children===null||typeof u.children=="string"?P(u.type,u.props,u.children,u.patchFlag,u.dynamicProps,u.shapeFlag):p(u)}else return p("div",l.attrs)})},g.set(t,e),e}const W=Object.freeze(Object.defineProperty({__proto__:null,default:Q,createClientOnly:G},Symbol.toStringTag,{value:"Module"})),Y=d({name:"DevOnly",setup(t,e){return()=>null}}),J=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),K=d({name:"ServerPlaceholder",render(){return T("div")}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),Z=d({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const n=tt({duration:t.duration,throttle:t.throttle}),l=S();return l.hook("page:start",n.start),l.hook("page:finish",n.finish),b(()=>n.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${n.progress.value}%`,height:`${t.height}px`,opacity:n.isLoading.value?1:0,background:t.color,backgroundSize:`${100/n.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function tt(t){const e=v(0),n=v(!1),l=A(()=>1e4/t.duration);let a=null,o=null;function _(){u(),e.value=0,n.value=!0,t.throttle?o=setTimeout(E,t.throttle):E()}function m(){e.value=100,I()}function u(){clearInterval(a),clearTimeout(o),a=null,o=null}function L(D){e.value=Math.min(100,e.value+D)}function I(){u(),setTimeout(()=>{n.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){a=setInterval(()=>{L(l.value)},100)}return{progress:e,isLoading:n,start:_,finish:m,clear:u}}const et=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),rt=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(n,l)=>(H(()=>t({...rt(n),...l.attrs},l)),()=>{var a,o;return e?(o=(a=l.slots).default)==null?void 0:o.call(a):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},it=d({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a;const n={...t},l=(((a=e.default)==null?void 0:a.call(e))||[]).filter(({children:o})=>o).map(({children:o})=>o).join("");return l&&(n.children=l),{noscript:[n]}})}),nt=d({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),ot=d({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),at=d({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var l,a,o;return{title:((o=(a=(l=e.default)==null?void 0:l.call(e))==null?void 0:a[0])==null?void 0:o.children)||null}})}),lt=d({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),ut=d({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a,o,_;const n={...t},l=(_=(o=(a=e.default)==null?void 0:a.call(e))==null?void 0:o[0])==null?void 0:_.children;return l&&(n.children=l),{style:[n]}})}),_t=d({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,l;return(l=(n=e.slots).default)==null?void 0:l.call(n)}}),dt=d({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),mt=d({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),s=Object.freeze(Object.defineProperty({__proto__:null,NoScript:it,Link:nt,Base:ot,Title:at,Meta:lt,Style:ut,Head:_t,Html:dt,Body:mt},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./Book.4e9e70ce.js"),["./Book.4e9e70ce.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./CallToAction.43e9b939.js"),["./CallToAction.43e9b939.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./SocialMedia.49263016.js"),["./SocialMedia.49263016.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Writer.66b4852f.js"),["./Writer.66b4852f.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentDoc.ebf5227d.js"),["./ContentDoc.ebf5227d.js","./entry.9ed58ab6.js","./entry.75022d04.css","./composables.5640e21e.js","./ContentRenderer.caf4f0b7.js","./ContentRendererMarkdown.ad0b7f68.js","./_commonjsHelpers.f057b259.js","./ContentQuery.faf8a05a.js","./asyncData.7cfc0d68.js","./query.1f33bc44.js","./utils.eb133ee7.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentList.e617f270.js"),["./ContentList.e617f270.js","./ContentQuery.faf8a05a.js","./entry.9ed58ab6.js","./entry.75022d04.css","./asyncData.7cfc0d68.js","./query.1f33bc44.js","./utils.eb133ee7.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>st),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentQuery.faf8a05a.js"),["./ContentQuery.faf8a05a.js","./entry.9ed58ab6.js","./entry.75022d04.css","./asyncData.7cfc0d68.js","./query.1f33bc44.js","./utils.eb133ee7.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRenderer.caf4f0b7.js"),["./ContentRenderer.caf4f0b7.js","./ContentRendererMarkdown.ad0b7f68.js","./entry.9ed58ab6.js","./entry.75022d04.css","./_commonjsHelpers.f057b259.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRendererMarkdown.ad0b7f68.js"),["./ContentRendererMarkdown.ad0b7f68.js","./entry.9ed58ab6.js","./entry.75022d04.css","./_commonjsHelpers.f057b259.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentSlot.431c9ca0.js"),["./ContentSlot.431c9ca0.js","./utils.eb133ee7.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenEmpty.582eeaef.js"),["./DocumentDrivenEmpty.582eeaef.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenNotFound.06fb690f.js"),["./DocumentDrivenNotFound.06fb690f.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Markdown.2704577c.js"),["./Markdown.2704577c.js","./ContentSlot.431c9ca0.js","./utils.eb133ee7.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseA.9a05c4c6.js"),["./ProseA.9a05c4c6.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseBlockquote.aa623843.js"),["./ProseBlockquote.aa623843.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCode.a1f8eaa7.js"),["./ProseCode.a1f8eaa7.js","./entry.9ed58ab6.js","./entry.75022d04.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCodeInline.b8ea0a9c.js"),["./ProseCodeInline.b8ea0a9c.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseEm.b893c263.js"),["./ProseEm.b893c263.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH1.0a5f68f3.js"),["./ProseH1.0a5f68f3.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH2.da626a82.js"),["./ProseH2.da626a82.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH3.a6e3e7f2.js"),["./ProseH3.a6e3e7f2.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH4.5de298ff.js"),["./ProseH4.5de298ff.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH5.1d08d3d7.js"),["./ProseH5.1d08d3d7.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH6.76737410.js"),["./ProseH6.76737410.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseHr.8d7543fa.js"),["./ProseHr.8d7543fa.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseImg.1a996995.js"),["./ProseImg.1a996995.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseLi.bf6d2619.js"),["./ProseLi.bf6d2619.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseOl.750b3d3f.js"),["./ProseOl.750b3d3f.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseP.67dde0e4.js"),["./ProseP.67dde0e4.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseStrong.a46ae9da.js"),["./ProseStrong.a46ae9da.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTable.05ec92bb.js"),["./ProseTable.05ec92bb.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTbody.db1c728a.js"),["./ProseTbody.db1c728a.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTd.4bb448f3.js"),["./ProseTd.4bb448f3.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTh.66323778.js"),["./ProseTh.66323778.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseThead.8dbbde03.js"),["./ProseThead.8dbbde03.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTr.fc208b14.js"),["./ProseTr.fc208b14.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseUl.99fa0e15.js"),["./ProseUl.99fa0e15.js","./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./welcome.ce962837.js"),["./welcome.ce962837.js","./composables.5640e21e.js","./entry.9ed58ab6.js","./entry.75022d04.css","./asyncData.7cfc0d68.js","./query.1f33bc44.js","./utils.eb133ee7.js","./ContentDoc.ebf5227d.js","./ContentRenderer.caf4f0b7.js","./ContentRendererMarkdown.ad0b7f68.js","./_commonjsHelpers.f057b259.js","./ContentQuery.faf8a05a.js","./ContentList.e617f270.js","./ContentSlot.431c9ca0.js","./DocumentDrivenEmpty.582eeaef.js","./DocumentDrivenNotFound.06fb690f.js","./Markdown.2704577c.js","./ProseCode.a1f8eaa7.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.9ed58ab6.js").then(t=>t.a2),["./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>W),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.9ed58ab6.js").then(t=>t.a0),["./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.9ed58ab6.js").then(t=>t.a1),["./entry.9ed58ab6.js","./entry.75022d04.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.NoScript));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Link));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Base));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Title));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Meta));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Style));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Head));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Html));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Body));const pt=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=j(t),n=A(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&N("dd-navigation").value){const{navigation:a}=z();return{navigation:a}}const{data:l}=await B(`content-navigation-${c(n.value)}`,()=>F(n.value));return{navigation:l}},render(t){const e=k(),{navigation:n}=t,l=_=>p($,{to:_._path},()=>_.title),a=(_,m)=>p("ul",m?{"data-level":m}:null,_.map(u=>u.children?p("li",null,[l(u),a(u.children,m+1)]):p("li",null,l(u)))),o=_=>a(_,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):o(n)}}),st=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"}));export{pt as default};
