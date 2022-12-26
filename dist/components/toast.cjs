"use strict";const t=require("./shorty-1329a513.cjs"),m=require("./event-listener-2a5f29ed.cjs"),l=require("./fadeClass-a4944cf1.cjs"),h=require("./showClass-2174a6d6.cjs"),S=require("./dataBsDismiss-4ee313a7.cjs"),G=require("./dataBsToggle-c8bc9e7f.cjs"),p=require("./getTargetElement-379ad550.cjs"),N=require("./base-component.cjs"),a="toast",C="Toast",D=`.${a}`,Q=`[${S.dataBsDismiss}="${a}"]`,E=`[${G.dataBsToggle}="${a}"]`,r="showing",b="hide",k={animation:!0,autohide:!0,delay:5e3},g=s=>t.Ln(s,C),y=s=>new $(s),u=t.Wn(`show.bs.${a}`),M=t.Wn(`shown.bs.${a}`),f=t.Wn(`hide.bs.${a}`),B=t.Wn(`hidden.bs.${a}`),w=s=>{const{element:e,options:n}=s;t.Nn(e,r),t.Gn.clear(e,r),t.Q(e,M),n.autohide&&t.Gn.set(e,()=>s.hide(),n.delay,a)},T=s=>{const{element:e}=s;t.Nn(e,r),t.Nn(e,h.showClass),t.Mn(e,b),t.Gn.clear(e,a),t.Q(e,B)},W=s=>{const{element:e,options:n}=s;t.Mn(e,r),n.animation?(t.Qn(e),t.zn(e,()=>T(s))):T(s)},H=s=>{const{element:e,options:n}=s;t.Gn.set(e,()=>{t.Nn(e,b),t.Qn(e),t.Mn(e,h.showClass),t.Mn(e,r),n.animation?t.zn(e,()=>w(s)):w(s)},17,r)},v=(s,e)=>{const n=e?m.E:m.r,{element:o,triggers:i,dismiss:c,options:q}=s;c&&n(c,t.ut,s.hide),q.autohide&&[t.tt,t.et,t.mt,t.gt].forEach(d=>n(o,d,z)),i.length&&i.forEach(d=>n(d,t.ut,x))},I=s=>{t.Gn.clear(s.element,a),v(s)},x=s=>{const{target:e}=s,n=e&&t.de(e,E),o=n&&p.getTargetElement(n),i=o&&g(o);i&&(n&&n.tagName==="A"&&s.preventDefault(),i.relatedTarget=n,i.show())},z=s=>{const e=s.target,n=g(e),{type:o,relatedTarget:i}=s;!n||e===i||e.contains(i)||([t.mt,t.tt].includes(o)?t.Gn.clear(e,a):t.Gn.set(e,()=>n.hide(),n.options.delay,a))};class $ extends N{static selector=D;static init=y;static getInstance=g;constructor(e,n){super(e,n);const{element:o,options:i}=this;i.animation&&!t.kn(o,l.fadeClass)?t.Mn(o,l.fadeClass):!i.animation&&t.kn(o,l.fadeClass)&&t.Nn(o,l.fadeClass),this.dismiss=t.go(Q,o),this.triggers=[...t.bo(E,t.d(o))].filter(c=>p.getTargetElement(c)===o),this.show=this.show.bind(this),this.hide=this.hide.bind(this),v(this,!0)}get name(){return C}get defaults(){return k}get isShown(){return t.kn(this.element,h.showClass)}show(){const{element:e,isShown:n}=this;if(e&&!n){if(t.Q(e,u),u.defaultPrevented)return;H(this)}}hide(){const{element:e,isShown:n}=this;if(e&&n){if(t.Q(e,f),f.defaultPrevented)return;W(this)}}dispose(){const{element:e,isShown:n}=this;n&&t.Nn(e,h.showClass),I(this),super.dispose()}}module.exports=$;
//# sourceMappingURL=toast.cjs.map