"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("./shorty-1329a513.cjs"),v=require("./fadeClass-a4944cf1.cjs"),a=require("./showClass-2174a6d6.cjs"),r=require("./offcanvasString-90a219fe.cjs"),g=require("./scrollbar.cjs"),i=require("./popupContainer.cjs"),d="backdrop",c=`${r.modalString}-${d}`,l=`${r.offcanvasString}-${d}`,p=`.${r.modalString}.${a.showClass}`,f=`.${r.offcanvasString}.${a.showClass}`,s=o.$t("div"),y=e=>o.go(`${p},${f}`,o.d(e)),C=e=>{const n=e?c:l;[c,l].forEach(t=>{o.Nn(s,t)}),o.Mn(s,n)},u=(e,n,t)=>{C(t),i.appendPopup(s,o.Jn(e)),n&&o.Mn(s,v.fadeClass)},O=()=>{o.kn(s,a.showClass)||(o.Mn(s,a.showClass),o.Qn(s))},S=()=>{o.Nn(s,a.showClass)},h=e=>{y(e)||(o.Nn(s,v.fadeClass),i.removePopup(s,o.Jn(e)),g.resetScrollbar(e))};exports.appendOverlay=u;exports.getCurrentOpen=y;exports.hideOverlay=S;exports.modalActiveSelector=p;exports.modalBackdropClass=c;exports.offcanvasActiveSelector=f;exports.offcanvasBackdropClass=l;exports.overlay=s;exports.removeOverlay=h;exports.showOverlay=O;exports.toggleOverlayType=C;
//# sourceMappingURL=backdrop.cjs.map