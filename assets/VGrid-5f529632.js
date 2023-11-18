import{p as y,g as Y,c as S,d as v,l as I,m as l,aj as Z,A as O,Y as Q,ar as A,s as z,r as F,x,X as p,Z as ee,K as B,O as te,P as ne,L as ae,aq as q,av as D,aw as W,ax as re,ay as se,az as ie,a6 as le,ao as oe,J as ue,n as ce,q as de,aA as ge,t as ve,aB as me,aC as fe}from"./index-ed066a3f.js";const V=y({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function P(e){const a=Y("useRender");a.render=e}const he=y({tag:{type:String,default:"div"}},"tag");const Se=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function ye(e){return{dimensionStyles:S(()=>({height:v(e.height),maxHeight:v(e.maxHeight),maxWidth:v(e.maxWidth),minHeight:v(e.minHeight),minWidth:v(e.minWidth),width:v(e.width)}))}}function be(e){return{aspectStyles:S(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const E=y({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...V(),...Se()},"VResponsive"),H=I()({name:"VResponsive",props:E(),setup(e,a){let{slots:n}=a;const{aspectStyles:t}=be(e),{dimensionStyles:o}=ye(e);return P(()=>{var s;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[o.value,e.style]},[l("div",{class:"v-responsive__sizer",style:t.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&l("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),Ce=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),k=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:o,...s}=e,{component:i=Q,...d}=typeof t=="object"?t:{};return Z(i,O(typeof t=="string"?{name:o?"":t}:d,s,{disabled:o}),n)};function _e(e,a){if(!A)return;const n=a.modifiers||{},t=a.value,{handler:o,options:s}=typeof t=="object"?t:{handler:t,options:{}},i=new IntersectionObserver(function(){var m;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const u=(m=e._observe)==null?void 0:m[a.instance.$.uid];if(!u)return;const g=d.some(b=>b.isIntersecting);o&&(!n.quiet||u.init)&&(!n.once||g||u.init)&&o(g,d,f),g&&n.once?M(e,a):u.init=!0},s);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:i},i.observe(e)}function M(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const ze={mounted:_e,unmounted:M},ke=ze,xe=y({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...E(),...V(),...Ce()},"VImg"),Ne=I()({name:"VImg",directives:{intersect:ke},props:xe(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const o=z(""),s=F(),i=z(e.eager?"loading":"idle"),d=z(),f=z(),u=S(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=S(()=>u.value.aspect||d.value/f.value||0);x(()=>e.src,()=>{m(i.value!=="idle")}),x(g,(r,c)=>{!r&&c&&s.value&&_(s.value)}),p(()=>m());function m(r){if(!(e.eager&&r)&&!(A&&!r&&!e.eager)){if(i.value="loading",u.value.lazySrc){const c=new Image;c.src=u.value.lazySrc,_(c,null)}u.value.src&&ee(()=>{var c;n("loadstart",((c=s.value)==null?void 0:c.currentSrc)||u.value.src),setTimeout(()=>{var h;if((h=s.value)!=null&&h.complete){if(s.value.naturalWidth||C(),i.value==="error")return;g.value||_(s.value,null),i.value==="loading"&&b()}else g.value||_(s.value),R()})})}}function b(){var r;R(),_(s.value),i.value="loaded",n("load",((r=s.value)==null?void 0:r.currentSrc)||u.value.src)}function C(){var r;i.value="error",n("error",((r=s.value)==null?void 0:r.currentSrc)||u.value.src)}function R(){const r=s.value;r&&(o.value=r.currentSrc||r.src)}let w=-1;function _(r){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const h=()=>{clearTimeout(w);const{naturalHeight:$,naturalWidth:j}=r;$||j?(d.value=j,f.value=$):!r.complete&&i.value==="loading"&&c!=null?w=window.setTimeout(h,c):(r.currentSrc.endsWith(".svg")||r.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,f.value=1)};h()}const T=S(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),U=()=>{var h;if(!u.value.src||i.value==="idle")return null;const r=l("img",{class:["v-img__img",T.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:b,onError:C},null),c=(h=t.sources)==null?void 0:h.call(t);return l(k,{transition:e.transition,appear:!0},{default:()=>[B(c?l("picture",{class:"v-img__picture"},[c,r]):r,[[ae,i.value==="loaded"]])]})},G=()=>l(k,{transition:e.transition},{default:()=>[u.value.lazySrc&&i.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",T.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),J=()=>t.placeholder?l(k,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,K=()=>t.error?l(k,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,X=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=z(!1);{const r=x(g,c=>{c&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),r())})}return P(()=>{const r=H.filterProps(e);return B(l(H,O({class:["v-img",{"v-img--booting":!N.value},e.class],style:[{width:v(e.width==="auto"?d.value:e.width)},e.style]},r,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(ne,null,[l(U,null,null),l(G,null,null),l(X,null,null),l(J,null,null),l(K,null,null)]),default:t.default}),[[te("intersect"),{handler:m,options:e.options},null,{once:!0}]])}),{currentSrc:o,image:s,state:i,naturalWidth:d,naturalHeight:f}}});function L(e){return D(()=>{const a=[],n={};if(e.value.background)if(W(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&re(e.value.background)){const t=se(e.value.background);if(t.a==null||t.a===1){const o=ie(t);n.color=o,n.caretColor=o}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(W(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function Ie(e,a){const n=S(()=>({text:q(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:o}=L(n);return{textColorClasses:t,textColorStyles:o}}function $e(e,a){const n=S(()=>({background:q(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:o}=L(n);return{backgroundColorClasses:t,backgroundColorStyles:o}}const Ve=["x-small","small","default","large","x-large"],Pe=y({size:{type:[String,Number],default:"default"}},"size");function Re(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:le();return D(()=>{let n,t;return oe(Ve,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:v(e.size),height:v(e.size)}),{sizeClasses:n,sizeStyles:t}})}const we=y({color:String,start:Boolean,end:Boolean,icon:ue,...V(),...Pe(),...he({tag:"i"}),...ce()},"VIcon"),je=I()({name:"VIcon",props:we(),setup(e,a){let{attrs:n,slots:t}=a;const o=F(),{themeClasses:s}=de(e),{iconData:i}=ge(S(()=>o.value||e.icon)),{sizeClasses:d}=Re(e),{textColorClasses:f,textColorStyles:u}=Ie(ve(e,"color"));return P(()=>{var m,b;const g=(m=t.default)==null?void 0:m.call(t);return g&&(o.value=(b=me(g).filter(C=>C.type===fe&&C.children&&typeof C.children=="string")[0])==null?void 0:b.children),l(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",s.value,d.value,f.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[d.value?void 0:{fontSize:v(e.size),height:v(e.size),width:v(e.size)},u.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[g]})}),{}}});export{ke as I,k as M,Ne as V,he as a,$e as b,Se as c,ye as d,je as e,Ie as f,Ce as g,xe as h,Pe as i,Re as j,L as k,V as m,P as u};
