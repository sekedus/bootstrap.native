"use strict";const o=require("./base-component-CEXwoid1.js"),v=require("./fadeClass-Co6nOzNJ.js"),r=require("./showClass-D_Ms1FgG.js"),a=require("./popupContainer-B1-dZ_ye.js"),R="Modal",k="Offcanvas",q="fixed-top",x="fixed-bottom",h="sticky-top",C="position-sticky",m=s=>[...o.Go(q,s),...o.Go(x,s),...o.Go(h,s),...o.Go(C,s),...o.Go("is-fixed",s)],E=s=>{const e=o.So(s);o.Eo(e,{paddingRight:"",overflow:""});const t=m(e);t.length&&t.forEach(c=>{o.Eo(c,{paddingRight:"",marginRight:""})})},y=s=>{const{clientWidth:e}=o.S(s),{innerWidth:t}=o.ve(s);return Math.abs(t-e)},I=(s,e)=>{const t=o.So(s),c=parseInt(o.g(t,"paddingRight"),10),l=o.g(t,"overflow")==="hidden"&&c?0:y(s),p=m(t);e&&(o.Eo(t,{overflow:"hidden",paddingRight:`${c+l}px`}),p.length&&p.forEach(i=>{const w=o.g(i,"paddingRight");if(i.style.paddingRight=`${parseInt(w,10)+l}px`,[h,C].some(d=>o.Zn(i,d))){const d=o.g(i,"marginRight");i.style.marginRight=`${parseInt(d,10)-l}px`}}))},u="backdrop",g=`${a.modalString}-${u}`,f=`${a.offcanvasString}-${u}`,S=`.${a.modalString}.${r.showClass}`,b=`.${a.offcanvasString}.${r.showClass}`,n=o.se("div"),O=s=>o.Ro(`${S},${b}`,o.d(s)),$=s=>{const e=s?g:f;[g,f].forEach(t=>{o.Yn(n,t)}),o.qn(n,e)},G=(s,e,t)=>{$(t),a.appendPopup(n,o.So(s)),e&&o.qn(n,v.fadeClass)},P=()=>{o.Zn(n,r.showClass)||(o.qn(n,r.showClass),o.bo(n))},A=()=>{o.Yn(n,r.showClass)},T=s=>{O(s)||(o.Yn(n,v.fadeClass),a.removePopup(n,o.So(s)),E(s))},V=s=>o.m(s)&&o.g(s,"visibility")!=="hidden"&&s.offsetParent!==null;exports.appendOverlay=G;exports.getCurrentOpen=O;exports.hideOverlay=A;exports.isVisible=V;exports.measureScrollbar=y;exports.modalActiveSelector=S;exports.modalComponent=R;exports.offcanvasActiveSelector=b;exports.offcanvasComponent=k;exports.overlay=n;exports.removeOverlay=T;exports.setScrollbar=I;exports.showOverlay=P;exports.toggleOverlayType=$;
//# sourceMappingURL=isVisible-Bxf-Wn7_.js.map