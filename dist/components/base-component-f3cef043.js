"use strict";var a=Object.defineProperty;var h=(n,e,s)=>e in n?a(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var i=(n,e,s)=>(h(n,typeof e!="symbol"?e+"":e,s),s);const t=require("@thednp/shorty"),l="5.0.13",c=l;class m{constructor(e,s){i(this,"_toggleEventListeners",()=>{});const r=t.querySelector(e);if(!r)throw t.isString(e)?Error(`${this.name} Error: "${e}" is not a valid selector.`):Error(`${this.name} Error: your target is not an instance of HTMLElement.`);const o=t.Data.get(r,this.name);o&&o._toggleEventListeners(),this.element=r,this.options=this.defaults&&t.ObjectKeys(this.defaults).length?t.normalizeOptions(r,this.defaults,s||{},"bs"):{},t.Data.set(r,this.name,this)}get version(){return c}get name(){return"BaseComponent"}get defaults(){return{}}dispose(){t.Data.remove(this.element,this.name),t.ObjectKeys(this).forEach(e=>{delete this[e]})}}exports.BaseComponent=m;
//# sourceMappingURL=base-component-f3cef043.js.map
