"use strict";var P=Object.defineProperty;var k=(n,s,t)=>s in n?P(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t;var g=(n,s,t)=>(k(n,typeof s!="symbol"?s+"":s,t),t);const e=require("@thednp/shorty"),H=require("@thednp/event-listener"),E=require("./collapsingClass-889bd3db.js"),d=require("./activeClass-a1284579.js"),h=require("./fadeClass-a4944cf1.js"),m=require("./showClass-2174a6d6.js"),p=require("./dropdownClasses-c131c53f.js"),D=require("./dataBsToggle-c8bc9e7f.js"),w=require("./getTargetElement-93cf2bb8.js"),_=require("./base-component-f3cef043.js"),f="tab",B="Tab",L=`[${D.dataBsToggle}="${f}"]`,I=n=>e.getInstance(n,B),j=n=>new u(n),b=e.createCustomEvent(`show.bs.${f}`),q=e.createCustomEvent(`shown.bs.${f}`),T=e.createCustomEvent(`hide.bs.${f}`),M=e.createCustomEvent(`hidden.bs.${f}`),v=new Map,x=n=>{const{tabContent:s,nav:t}=n;s&&e.hasClass(s,E.collapsingClass)&&(s.style.height="",e.removeClass(s,E.collapsingClass)),t&&e.Timer.clear(t)},$=n=>{const{element:s,tabContent:t,content:a,nav:l}=n,{tab:r}=e.isHTMLElement(l)&&v.get(l)||{tab:null};if(t&&a&&e.hasClass(a,h.fadeClass)){const{currentHeight:o,nextHeight:i}=v.get(s)||{currentHeight:0,nextHeight:0};o===i?x(n):setTimeout(()=>{t.style.height=`${i}px`,e.reflow(t),e.emulateTransitionEnd(t,()=>x(n))},50)}else l&&e.Timer.clear(l);q.relatedTarget=r,e.dispatchEvent(s,q)},S=n=>{const{element:s,content:t,tabContent:a,nav:l}=n,{tab:r,content:o}=l&&v.get(l)||{tab:null,content:null};let i=0;if(a&&t&&e.hasClass(t,h.fadeClass)&&([o,t].forEach(c=>{e.isHTMLElement(c)&&e.addClass(c,"overflow-hidden")}),i=e.isHTMLElement(o)?o.scrollHeight:0),b.relatedTarget=r,M.relatedTarget=s,e.dispatchEvent(s,b),!b.defaultPrevented){if(t&&e.addClass(t,d.activeClass),o&&e.removeClass(o,d.activeClass),a&&t&&e.hasClass(t,h.fadeClass)){const c=t.scrollHeight;v.set(s,{currentHeight:i,nextHeight:c,tab:null,content:null}),e.addClass(a,E.collapsingClass),a.style.height=`${i}px`,e.reflow(a),[o,t].forEach(C=>{C&&e.removeClass(C,"overflow-hidden")})}t&&t&&e.hasClass(t,h.fadeClass)?setTimeout(()=>{e.addClass(t,m.showClass),e.emulateTransitionEnd(t,()=>{$(n)})},1):(t&&e.addClass(t,m.showClass),$(n)),r&&e.dispatchEvent(r,M)}},y=n=>{const{nav:s}=n;if(!e.isHTMLElement(s))return{tab:null,content:null};const t=e.getElementsByClassName(d.activeClass,s);let a=null;t.length===1&&!p.dropdownMenuClasses.some(r=>e.hasClass(t[0].parentElement,r))?[a]=t:t.length>1&&(a=t[t.length-1]);const l=e.isHTMLElement(a)?w.getTargetElement(a):null;return{tab:a,content:l}},A=n=>{if(!e.isHTMLElement(n))return null;const s=e.closest(n,`.${p.dropdownMenuClasses.join(",.")}`);return s?e.querySelector(`.${p.dropdownMenuClasses[0]}-toggle`,s):null},N=n=>{const s=I(n.target);s&&(n.preventDefault(),s.show())};class u extends _.BaseComponent{constructor(t){super(t);g(this,"_toggleEventListeners",t=>{(t?H.addListener:H.removeListener)(this.element,e.mouseclickEvent,N)});const{element:a}=this,l=w.getTargetElement(a);if(l){const r=e.closest(a,".nav"),o=e.closest(l,".tab-content");this.nav=r,this.content=l,this.tabContent=o,this.dropdown=A(a);const{tab:i}=y(this);if(r&&!i){const c=e.querySelector(L,r),C=c&&w.getTargetElement(c);C&&(e.addClass(c,d.activeClass),e.addClass(C,m.showClass),e.addClass(C,d.activeClass),e.setAttribute(a,e.ariaSelected,"true"))}this._toggleEventListeners(!0)}}get name(){return B}show(){const{element:t,content:a,nav:l,dropdown:r}=this;if(!(l&&e.Timer.get(l))&&!e.hasClass(t,d.activeClass)){const{tab:o,content:i}=y(this);if(l&&v.set(l,{tab:o,content:i,currentHeight:0,nextHeight:0}),T.relatedTarget=t,e.isHTMLElement(o)&&(e.dispatchEvent(o,T),!T.defaultPrevented)){e.addClass(t,d.activeClass),e.setAttribute(t,e.ariaSelected,"true");const c=e.isHTMLElement(o)&&A(o);if(c&&e.hasClass(c,d.activeClass)&&e.removeClass(c,d.activeClass),l){const C=()=>{o&&(e.removeClass(o,d.activeClass),e.setAttribute(o,e.ariaSelected,"false")),r&&!e.hasClass(r,d.activeClass)&&e.addClass(r,d.activeClass)};i&&(e.hasClass(i,h.fadeClass)||a&&e.hasClass(a,h.fadeClass))?e.Timer.set(l,C,1):C()}i&&(e.removeClass(i,m.showClass),e.hasClass(i,h.fadeClass)?e.emulateTransitionEnd(i,()=>S(this)):S(this))}}}dispose(){this._toggleEventListeners(),super.dispose()}}g(u,"selector",L),g(u,"init",j),g(u,"getInstance",I);module.exports=u;
//# sourceMappingURL=tab.cjs.map
