"use strict";const e=require("./base-component-DaZCwW-u.js"),i=require("./event-listener-BQdA_KAC.js"),u=require("./fadeClass-Co6nOzNJ.js"),r=require("./showClass-D_Ms1FgG.js"),h=require("./dataBsDismiss-CMHF7If_.js"),n="alert",a="Alert",v=`.${n}`,p=`[${h.dataBsDismiss}="${n}"]`,C=t=>e.to(t,a),E=t=>new d(t),c=e.vo(`close.bs.${n}`),q=e.vo(`closed.bs.${n}`),l=t=>{const{element:s}=t;e.q(s,q),t._toggleEventListeners(),t.dispose(),s.remove()};class d extends e.BaseComponent{static selector=v;static init=E;static getInstance=C;dismiss;constructor(s){super(s),this.dismiss=e.Ro(p,this.element),this._toggleEventListeners(!0)}get name(){return a}close=()=>{const{element:s}=this;s&&e.Yn(s,r.showClass)&&(e.q(s,c),c.defaultPrevented||(e.Zn(s,r.showClass),e.Yn(s,u.fadeClass)?e.ro(s,()=>l(this)):l(this)))};_toggleEventListeners=s=>{const m=s?i.E:i.r,{dismiss:o,close:g}=this;o&&m(o,e.mt,g)};dispose(){this._toggleEventListeners(),super.dispose()}}module.exports=d;
//# sourceMappingURL=alert.cjs.map
