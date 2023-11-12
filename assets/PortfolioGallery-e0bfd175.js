import{V as Z}from"./VContainer-cdabf61f.js";import{m as W,a as J,u as x,M as K,c as p,V as Y}from"./VGrid-44c903b7.js";import{i as ee,f as k,V as te,w as ne,p as oe,s as se}from"./VBtn-1b08af10.js";import{ac as A,p as B,n as ae,l as b,q as ie,u as le,_ as M,r as P,c as g,s as I,x as C,b as ue,m as l,U as j,V as re,I as ce,y as de,o as ve,R as F,A as _,d as T,i as fe,Z as me,X as he,C as $,D as ge,E as D,P as ye,Q as Ve}from"./index-69e07e0b.js";import{u as we}from"./ssrBoot-a9be4715.js";import"./VIcon-13f49e1f.js";const Ce=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:a}=e,i=.5,s=16;e.offsetX=t-o,e.offsetY=a-n,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&a<n-s&&e.up(e),e.down&&a>n+s&&e.down(e))};function Be(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function Ie(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),Ce(o)}function _e(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function xe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Be(t,o),touchend:t=>Ie(t,o),touchmove:t=>_e(t,o)}}function be(e,o){var d;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,a=(t==null?void 0:t.options)??{passive:!0},i=(d=o.instance)==null?void 0:d.$.uid;if(!n||!i)return;const s=xe(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[i]=s,A(s).forEach(u=>{n.addEventListener(u,s[u],a)})}function ke(e,o){var i,s;const t=(i=o.value)!=null&&i.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const a=t._touchHandlers[n];A(a).forEach(d=>{t.removeEventListener(d,a[d])}),delete t._touchHandlers[n]}const G={mounted:be,unmounted:ke},z=Symbol.for("vuetify:v-window"),O=Symbol.for("vuetify:v-window-group"),N=B({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...W(),...J(),...ae()},"VWindow"),R=b()({name:"VWindow",directives:{Touch:G},props:N(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=ie(e),{isRtl:a}=le(),{t:i}=M(),s=ee(e,O),d=P(),u=g(()=>a.value?!e.reverse:e.reverse),v=I(!1),V=g(()=>{const c=e.direction==="vertical"?"y":"x",y=(u.value?!v.value:v.value)?"-reverse":"";return`v-window-${c}${y}-transition`}),m=I(0),h=P(void 0),w=g(()=>s.items.value.findIndex(c=>s.selected.value.includes(c.id)));C(w,(c,f)=>{const y=s.items.value.length,L=y-1;y<=2?v.value=c<f:c===L&&f===0?v.value=!0:c===0&&f===L?v.value=!1:v.value=c<f}),ue(z,{transition:V,isReversed:v,transitionCount:m,transitionHeight:h,rootRef:d});const r=g(()=>e.continuous||w.value!==0),S=g(()=>e.continuous||w.value!==s.items.value.length-1);function E(){r.value&&s.prev()}function X(){S.value&&s.next()}const q=g(()=>{const c=[],f={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${u.value?"right":"left"}`,onClick:s.prev,ariaLabel:i("$vuetify.carousel.prev")};c.push(r.value?t.prev?t.prev({props:f}):l(k,f,null):l("div",null,null));const y={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${u.value?"left":"right"}`,onClick:s.next,ariaLabel:i("$vuetify.carousel.next")};return c.push(S.value?t.next?t.next({props:y}):l(k,y,null):l("div",null,null)),c}),Q=g(()=>e.touch===!1?e.touch:{...{left:()=>{u.value?E():X()},right:()=>{u.value?X():E()},start:f=>{let{originalEvent:y}=f;y.stopPropagation()}},...e.touch===!0?{}:e.touch});return x(()=>j(l(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var c,f;return[l("div",{class:"v-window__container",style:{height:h.value}},[(c=t.default)==null?void 0:c.call(t,{group:s}),e.showArrows!==!1&&l("div",{class:"v-window__controls"},[q.value])]),(f=t.additional)==null?void 0:f.call(t,{group:s})]}}),[[re("touch"),Q.value]])),{group:s}}}),Pe=B({color:String,cycle:Boolean,delimiterIcon:{type:ce,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...N({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),Te=b()({name:"VCarousel",props:Pe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=de(e,"modelValue"),{t:a}=M(),i=P();let s=-1;C(n,u),C(()=>e.interval,u),C(()=>e.cycle,v=>{v?u():window.clearTimeout(s)}),ve(d);function d(){!e.cycle||!i.value||(s=window.setTimeout(i.value.group.next,+e.interval>0?+e.interval:6e3))}function u(){window.clearTimeout(s),window.requestAnimationFrame(d)}return x(()=>{const v=R.filterProps(e);return l(R,_({ref:i},v,{modelValue:n.value,"onUpdate:modelValue":V=>n.value=V,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:T(e.height)},e.style]}),{default:t.default,additional:V=>{let{group:m}=V;return l(F,null,[!e.hideDelimiters&&l("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[m.items.value.length>0&&l(te,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[m.items.value.map((h,w)=>{const r={id:`carousel-item-${h.id}`,"aria-label":a("$vuetify.carousel.ariaLabel.delimiter",w+1,m.items.value.length),class:[m.isSelected(h.id)&&"v-btn--active"],onClick:()=>m.select(h.id,!0)};return t.item?t.item({props:r,item:h}):l(k,_(h,r),null)})]})]),e.progress&&l(ne,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(m.getItemIndex(n.value)+1)/m.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),Se=B({eager:Boolean},"lazy");function Ee(e,o){const t=I(!1),n=g(()=>t.value||e.eager||o.value);C(o,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:n,onAfterLeave:a}}const U=B({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...W(),...oe(),...Se()},"VWindowItem"),H=b()({name:"VWindowItem",directives:{Touch:G},props:U(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=fe(z),a=se(e,O),{isBooted:i}=we();if(!n||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=I(!1),d=g(()=>i.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function u(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function v(){var r;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=T((r=n.rootRef.value)==null?void 0:r.clientHeight)),n.transitionCount.value+=1)}function V(){u()}function m(r){s.value&&he(()=>{!d.value||!s.value||!n||(n.transitionHeight.value=T(r.clientHeight))})}const h=g(()=>{const r=n.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof r!="string"?n.transition.value:r,onBeforeEnter:v,onAfterEnter:u,onEnterCancelled:V,onBeforeLeave:v,onAfterLeave:u,onLeaveCancelled:V,onEnter:m}:!1}),{hasContent:w}=Ee(e,a.isSelected);return x(()=>l(K,{transition:h.value,disabled:!i.value},{default:()=>{var r;return[j(l("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[w.value&&((r=t.default)==null?void 0:r.call(t))]),[[me,a.isSelected.value]])]}})),{groupItem:a}}}),Xe=B({...p(),...U()},"VCarouselItem"),Le=b()({name:"VCarouselItem",inheritAttrs:!1,props:Xe(),setup(e,o){let{slots:t,attrs:n}=o;x(()=>{const a=Y.filterProps(e),i=H.filterProps(e);return l(H,_({class:"v-carousel-item"},i),{default:()=>[l(Y,_(n,a),t)]})})}}),Ae={__name:"PortfolioGallery",setup(e){const o=["/assets/bgeo.jpeg","/assets/networkofnetworks.jpg","/assets/orionNebula.jpg"];return(t,n)=>($(),ge(Z,null,{default:D(()=>[l(Te,{"hide-delimiter-background":""},{default:D(()=>[($(),ye(F,null,Ve(o,a=>l(Le,{src:a,key:a,"min-height":"500",cover:""},null,8,["src"])),64))]),_:1})]),_:1}))}};export{Ae as default};
