import{p as I,g as b,e as B,b as y,i as V,t as w,c as h,k as C,x as E,a as k,y as P,o as M,T as U,ap as $,f as q}from"./index-97d3aae3.js";const O=I({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),R=I({value:null,disabled:Boolean,selectedClass:String},"group-item");function T(t,r){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const e=b("useGroupItem");if(!e)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const n=B();y(Symbol.for(`${r.description}:id`),n);const l=V(r,null);if(!l){if(!d)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${r.description}`)}const m=w(t,"value"),p=h(()=>!!(l.disabled.value||t.disabled));l.register({id:n,value:m,disabled:p},e),C(()=>{l.unregister(n)});const f=h(()=>l.isSelected(n)),v=h(()=>f.value&&[l.selectedClass.value,t.selectedClass]);return E(f,g=>{e.emit("group:selected",{value:g})}),{id:n,isSelected:f,toggle:()=>l.select(n,!f.value),select:g=>l.select(n,g),selectedClass:v,value:m,disabled:p,group:l}}function W(t,r){let d=!1;const e=k([]),n=P(t,"modelValue",[],s=>s==null?[]:S(e,$(s)),s=>{const i=F(e,s);return t.multiple?i:i[0]}),l=b("useGroup");function m(s,i){const o=s,u=Symbol.for(`${r.description}:id`),c=q(u,l==null?void 0:l.vnode).indexOf(i);c>-1?e.splice(c,0,o):e.push(o)}function p(s){if(d)return;f();const i=e.findIndex(o=>o.id===s);e.splice(i,1)}function f(){const s=e.find(i=>!i.disabled);s&&t.mandatory==="force"&&!n.value.length&&(n.value=[s.id])}M(()=>{f()}),C(()=>{d=!0});function v(s,i){const o=e.find(u=>u.id===s);if(!(i&&(o!=null&&o.disabled)))if(t.multiple){const u=n.value.slice(),a=u.findIndex(G=>G===s),c=~a;if(i=i??!c,c&&t.mandatory&&u.length<=1||!c&&t.max!=null&&u.length+1>t.max)return;a<0&&i?u.push(s):a>=0&&!i&&u.splice(a,1),n.value=u}else{const u=n.value.includes(s);if(t.mandatory&&u)return;n.value=i??!u?[s]:[]}}function g(s){if(t.multiple,n.value.length){const i=n.value[0],o=e.findIndex(c=>c.id===i);let u=(o+s)%e.length,a=e[u];for(;a.disabled&&u!==o;)u=(u+s)%e.length,a=e[u];if(a.disabled)return;n.value=[e[u].id]}else{const i=e.find(o=>!o.disabled);i&&(n.value=[i.id])}}const x={register:m,unregister:p,selected:n,select:v,disabled:w(t,"disabled"),prev:()=>g(e.length-1),next:()=>g(1),isSelected:s=>n.value.includes(s),selectedClass:h(()=>t.selectedClass),items:h(()=>e),getItemIndex:s=>A(e,s)};return y(r,x),x}function A(t,r){const d=S(t,[r]);return d.length?t.findIndex(e=>e.id===d[0]):-1}function S(t,r){const d=[];return r.forEach(e=>{const n=t.find(m=>U(e,m.value)),l=t[e];(n==null?void 0:n.value)!=null?d.push(n.id):l!=null&&d.push(l.id)}),d}function F(t,r){const d=[];return r.forEach(e=>{const n=t.findIndex(l=>l.id===e);if(~n){const l=t[n];d.push(l.value!=null?l.value:n)}}),d}export{R as a,T as b,O as m,W as u};
