import{d as pe,r,a as E,p as A,o as ke,n as Ae,b as Me,c as q,w as fe,e as Oe,h as b,f as ve,i as w,g as P,j as G,k as Be,l as U,m as $,q as ge,s as Ce,F as Le,t as je,u as Ee,v as Ne,x as be,y as De}from"./index.53e555af.js";/**
 * Vue 3 Carousel 0.1.46
 * (c) 2022
 * @license MIT
 */const g={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},he={itemsToShow:{default:g.itemsToShow,type:Number},itemsToScroll:{default:g.itemsToScroll,type:Number},wrapAround:{default:g.wrapAround,type:Boolean},snapAlign:{default:g.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:g.transition,type:Number},breakpoints:{default:g.breakpoints,type:Object},autoplay:{default:g.autoplay,type:Number},pauseAutoplayOnHover:{default:g.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:g.mouseDrag,type:Boolean},touchDrag:{default:g.touchDrag,type:Boolean},dir:{default:g.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}};function Ve(e,a){let n;return function(...s){n&&clearTimeout(n),n=setTimeout(()=>{e(...s),n=null},a)}}function Ie(e,a){let n;return function(...s){const l=this;n||(e.apply(l,s),n=!0,setTimeout(()=>n=!1,a))}}function ze(e){var a,n,s;return e?((n=(a=e[0])===null||a===void 0?void 0:a.type)===null||n===void 0?void 0:n.name)==="CarouselSlide"?e:((s=e[0])===null||s===void 0?void 0:s.children)||[]:[]}function Pe(e,a){if(e.wrapAround)return a-1;switch(e.snapAlign){case"start":return a-e.itemsToShow;case"end":return a-1;case"center":case"center-odd":return a-Math.ceil(e.itemsToShow/2);case"center-even":return a-Math.ceil(e.itemsToShow/2);default:return 0}}function $e(e){if(e.wrapAround)return 0;switch(e.snapAlign){case"start":return 0;case"end":return e.itemsToShow-1;case"center":case"center-odd":return Math.floor((e.itemsToShow-1)/2);case"center-even":return Math.floor((e.itemsToShow-2)/2);default:return 0}}function me(e,a,n,s){return e.wrapAround?a:Math.min(Math.max(a,s),n)}function Re({slidesBuffer:e,currentSlide:a,snapAlign:n,itemsToShow:s,wrapAround:l,slidesCount:d}){let u=e.indexOf(a);if(u===-1&&(u=e.indexOf(Math.ceil(a))),n==="center"||n==="center-odd"?u-=(s-1)/2:n==="center-even"?u-=(s-2)/2:n==="end"&&(u-=s-1),!l){const i=d-s,v=0;u=Math.max(Math.min(u,i),v)}return u}var He=pe({name:"Carousel",props:he,setup(e,{slots:a,emit:n,expose:s}){var l;const d=r(null),u=r([]),i=r([]),v=r(0),c=r(1);let f,M,T=r({}),y=Object.assign({},g);const o=E(Object.assign({},y)),p=r((l=o.modelValue)!==null&&l!==void 0?l:0),ye=r(0),J=r(0),B=r(0),C=r(0);A("config",o),A("slidesBuffer",i),A("slidesCount",c),A("currentSlide",p),A("maxSlide",B),A("minSlide",C);function K(){const t=Object.assign(Object.assign({},e),e.settings);T=r(Object.assign({},t.breakpoints)),y=Object.assign(Object.assign({},t),{settings:void 0,breakpoints:void 0}),Q(y)}function N(){const t=Object.keys(T.value).map(m=>Number(m)).sort((m,S)=>+S-+m);let h=Object.assign({},y);t.some(m=>window.matchMedia(`(min-width: ${m}px)`).matches?(h=Object.assign(Object.assign({},h),T.value[m]),!0):!1),Q(h)}function Q(t){for(let h in t)o[h]=t[h]}const _e=Ve(()=>{T.value&&(N(),L()),D()},16);function D(){if(!d.value)return;const t=d.value.getBoundingClientRect();v.value=t.width/o.itemsToShow}function L(){c.value=Math.max(u.value.length,1),!(c.value<=0)&&(J.value=Math.ceil((c.value-1)/2),B.value=Pe(o,c.value),C.value=$e(o),p.value=me(o,p.value,B.value,C.value))}function V(){const t=[...Array(c.value).keys()];if(o.wrapAround&&o.itemsToShow+1<=c.value){let S=(o.itemsToShow!==1?Math.round((c.value-o.itemsToShow)/2):0)-p.value;if(o.snapAlign==="end"?S+=Math.floor(o.itemsToShow-1):(o.snapAlign==="center"||o.snapAlign==="center-odd")&&S++,S<0)for(let x=S;x<0;x++)t.push(Number(t.shift()));else for(let x=0;x<S;x++)t.unshift(Number(t.pop()))}i.value=t}ke(()=>{T.value&&(N(),L()),Ae(()=>setTimeout(D,16)),ne(),window.addEventListener("resize",_e,{passive:!0})}),Me(()=>{M&&clearTimeout(M),f&&clearInterval(f)});let _=!1;const I={x:0,y:0},z={x:0,y:0},O=E({x:0,y:0}),R=r(!1),Se=()=>{R.value=!0},xe=()=>{R.value=!1};function Z(t){_=t.type==="touchstart",!(!_&&t.button!==0||j.value)&&(_||t.preventDefault(),I.x=_?t.touches[0].clientX:t.clientX,I.y=_?t.touches[0].clientY:t.clientY,document.addEventListener(_?"touchmove":"mousemove",ee,!0),document.addEventListener(_?"touchend":"mouseup",te,!0))}const ee=Ie(t=>{z.x=_?t.touches[0].clientX:t.clientX,z.y=_?t.touches[0].clientY:t.clientY;const h=z.x-I.x,m=z.y-I.y;O.y=m,O.x=h},16);function te(){const t=o.dir==="rtl"?-1:1,h=Math.sign(O.x)*.4,m=Math.round(O.x/v.value+h)*t;let S=me(o,p.value-m,B.value,C.value);if(m&&!_){const x=Y=>{Y.stopPropagation(),window.removeEventListener("click",x,!0)};window.addEventListener("click",x,!0)}k(S),O.x=0,O.y=0,document.removeEventListener(_?"touchmove":"mousemove",ee,!0),document.removeEventListener(_?"touchend":"mouseup",te,!0)}function ne(){!o.autoplay||o.autoplay<=0||(f=setInterval(()=>{o.pauseAutoplayOnHover&&R.value||H()},o.autoplay))}function ae(){f&&(clearInterval(f),f=null),ne()}const j=r(!1);function k(t,h=!1){if(p.value===t||j.value)return;ae();const m=c.value-1;if(t>m)return k(t-c.value);if(t<0)return k(t+c.value);j.value=!0,ye.value=p.value,p.value=t,h||n("update:modelValue",p.value),M=setTimeout(()=>{o.wrapAround&&V(),j.value=!1},o.transition)}function H(){let t=p.value+o.itemsToScroll;o.wrapAround||(t=Math.min(t,B.value)),k(t)}function oe(){let t=p.value-o.itemsToScroll;o.wrapAround||(t=Math.max(t,C.value)),k(t)}const se={slideTo:k,next:H,prev:oe};A("nav",se);const ie=q(()=>Re({slidesBuffer:i.value,itemsToShow:o.itemsToShow,snapAlign:o.snapAlign,wrapAround:Boolean(o.wrapAround),currentSlide:p.value,slidesCount:c.value}));A("slidesToScroll",ie);const Te=q(()=>{const t=o.dir==="rtl"?-1:1,h=ie.value*v.value*t;return{transform:`translateX(${O.x-h}px)`,transition:`${j.value?o.transition:0}ms`}});function le(){K()}function re(){K(),N(),L(),V(),D(),ae()}function ce(){L(),V()}Object.keys(he).forEach(t=>{["modelValue"].includes(t)||fe(()=>e[t],re)}),le(),Oe(()=>{const t=c.value!==u.value.length;e.modelValue!==void 0&&p.value!==e.modelValue&&k(Number(e.modelValue),!0),t&&ce()});const ue={config:o,slidesBuffer:i,slidesCount:c,slideWidth:v,currentSlide:p,maxSlide:B,minSlide:C,middleSlide:J};s({updateBreakpointsConfigs:N,updateSlidesData:L,updateSlideWidth:D,updateSlidesBuffer:V,initCarousel:le,restartCarousel:re,updateCarousel:ce,slideTo:k,next:H,prev:oe,nav:se,data:ue});const W=a.default||a.slides,X=a.addons,de=E(ue);return()=>{const t=ze(W==null?void 0:W(de)),h=(X==null?void 0:X(de))||[];u.value=t,t.forEach((x,Y)=>x.props.index=Y);const m=b("ol",{class:"carousel__track",style:Te.value,onMousedown:o.mouseDrag?ve(Z,["capture"]):null,onTouchstart:o.touchDrag?ve(Z,["capture"]):null},t),S=b("div",{class:"carousel__viewport"},m);return b("section",{ref:d,class:{carousel:!0,"carousel--rtl":o.dir==="rtl"},dir:o.dir,"aria-label":"Gallery",onMouseenter:Se,onMouseleave:xe},[S,h])}}});const We={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},F=e=>{const a=e.name;if(!a||typeof a!="string")return;const n=We[a],s=b("path",{d:n}),l=e.title||a,d=b("title",l);return b("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:l},[d,s])};F.props={name:String,title:String};const Xe=(e,{slots:a,attrs:n})=>{const{next:s,prev:l}=a||{},d=w("config",E(Object.assign({},g))),u=w("maxSlide",r(1)),i=w("minSlide",r(1)),v=w("currentSlide",r(1)),c=w("nav",{}),f=d.dir==="rtl",M=b("button",{type:"button",class:["carousel__prev",!d.wrapAround&&v.value<=i.value&&"carousel__prev--in-active",n==null?void 0:n.class],"aria-label":"Navigate to previous slide",onClick:c.prev},(l==null?void 0:l())||b(F,{name:f?"arrowRight":"arrowLeft"})),T=b("button",{type:"button",class:["carousel__next",!d.wrapAround&&v.value>=u.value&&"carousel__next--in-active",n==null?void 0:n.class],"aria-label":"Navigate to next slide",onClick:c.next},(s==null?void 0:s())||b(F,{name:f?"arrowLeft":"arrowRight"}));return[M,T]};var Ye=pe({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(e,{slots:a}){const n=w("config",E(Object.assign({},g))),s=w("slidesBuffer",r([])),l=w("currentSlide",r(0)),d=w("slidesToScroll",r(0)),u=r(e.index);n.wrapAround&&(i(),fe(s,i));function i(){u.value=s.value.indexOf(e.index)}const v=q(()=>{const y=n.itemsToShow;return{width:`${1/y*100}%`,order:u.value.toString()}}),c=()=>e.index===l.value,f=()=>{const y=Math.ceil(d.value),o=Math.floor(d.value+n.itemsToShow);return s.value.slice(y,o).includes(e.index)},M=()=>e.index===s.value[Math.ceil(d.value)-1],T=()=>e.index===s.value[Math.floor(d.value+n.itemsToShow)];return()=>{var y;return b("li",{style:v.value,class:{carousel__slide:!0,"carousel__slide--active":c(),"carousel__slide--visible":f(),"carousel__slide--prev":M(),"carousel__slide--next":T()}},(y=a.default)===null||y===void 0?void 0:y.call(a))}}});const Ue=()=>{const e=w("maxSlide",r(1)),a=w("minSlide",r(1)),n=w("currentSlide",r(1)),s=w("nav",{});function l(i){s.slideTo(i)}const d=i=>{const v=n.value;return v===i||v>e.value&&i>=e.value||v<a.value&&i<=a.value},u=[];for(let i=a.value;i<e.value+1;i++){const v=b("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":d(i)},"aria-label":`Navigate to slide ${i+1}`,onClick:()=>l(i)}),c=b("li",{class:"carousel__pagination-item",key:i},v);u.push(c)}return b("ol",{class:"carousel__pagination"},u)},qe=(e,a)=>{const n=e.__vccOpts||e;for(const[s,l]of a)n[s]=l;return n},Ge={components:{Carousel:He,Slide:Ye,Pagination:Ue,Navigation:Xe}};function Fe(e,a,n,s,l,d){const u=P("slide"),i=P("navigation"),v=P("pagination"),c=P("carousel");return G(),Be(c,{"items-to-show":1.5},{addons:U(()=>[$(i),$(v)]),default:U(()=>[(G(),ge(Le,null,Ce(5,f=>$(u,{key:f},{default:U(()=>[je(Ee(f),1)]),_:2},1024)),64))]),_:1},8,["items-to-show"])}const we=qe(Ge,[["render",Fe]]),Je={class:"content"},Ke=De('<section class="hero reveal"><div class="hero-img mb_parallax_container" id="mb_parallax_one"></div><h1 class="reveal__content">Yuu-gen</h1><p class="reveal__content">There is no strife, no prejudice, no national conflict in outer space as yet. Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain? Why, 35 years ago, fly the Atlantic? Why does Rice play Texas? We choose to go to the moon.</p><p class="reveal__content">We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p></section><section class="main-2h"><h2>Featured Events:</h2><div class="tabset"><input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked><label for="tab1">M\xE4rzen x Vault</label><input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"><label for="tab2">Rauchbier</label><input type="radio" name="tabset" id="tab3" aria-controls="dunkles"><label for="tab3">Dunkles Bock</label><div class="tab-panels"><section id="marzen" class="tab-panel"><div class="tab-img-wrp"><div class="tab-img"><h1>Hello</h1></div><div class="tab-img-2"><h1>Hello</h1></div></div><h2>6A. M\xE4rzen</h2><p><strong><span class="highlight">Overall Impression:</span></strong> An elegant, malty German amber lager with a clean, rich, toasty and bready malt flavor, restrained bitterness, and a dry finish that encourages another drink. The overall malt impression is soft, elegant, and complex, with a rich aftertaste that is never cloying or heavy.</p></section><section id="rauchbier" class="tab-panel"><h2>6B. Rauchbier</h2><div class="tab-img"></div><p><strong>Overall Impression:</strong> An elegant, malty German amber lager with a balanced, complementary beechwood smoke character. Toasty-rich malt in aroma and flavor, restrained bitterness, low to high smoke flavor, clean fermentation profile, and an attenuated finish are characteristic.</p></section><section id="dunkles" class="tab-panel"><h2>6C. Dunkles Bock</h2><p><strong>Overall Impression:</strong> A dark, strong, malty German lager beer that emphasizes the malty-rich and somewhat toasty qualities of continental malts without being sweet in the finish.</p><div class="tab-img"></div></section></div></div></section><section class="marq-container"><span class="sliding"><span>Berlin</span><span> // </span><span>Stuttgart</span><span> // </span><span>Cape Town</span><span> // </span><span>Seo</span></span></section>',3),Qe={class:"main-2-o"},Ze=be("h2",null,"Our Team:",-1),et={components:{Slider:we}},nt=Object.assign(et,{__name:"Home",async setup(e){let a,n;const s=async()=>{await new Promise(l=>setTimeout(l,800))};return[a,n]=Ne(()=>s()),await a,n(),(l,d)=>(G(),ge("div",Je,[Ke,be("section",Qe,[Ze,$(we)])]))}});export{nt as default};