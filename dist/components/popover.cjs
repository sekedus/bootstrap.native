"use strict";var a=Object.defineProperty;var c=(t,o,e)=>o in t?a(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e;var r=(t,o,e)=>(c(t,typeof o!="symbol"?o+"":o,e),e);const p=require("@thednp/shorty"),l=require("./dataBsToggle-c8bc9e7f.js"),s=require("./tooltip-ddfd360d.js");require("@thednp/event-listener");require("./showClass-2174a6d6.js");require("./popupContainer-edee469f.js");require("./fadeClass-a4944cf1.js");require("./base-component-f3cef043.js");const u=`[${l.dataBsToggle}="${s.popoverString}"],[data-tip="${s.popoverString}"]`,g=p.ObjectAssign({},s.tooltipDefaults,{template:s.getTipTemplate(s.popoverString),content:"",dismissible:!1,btnClose:'<button class="btn-close" aria-label="Close"></button>'}),b=t=>p.getInstance(t,s.popoverComponent),m=t=>new i(t);class i extends s.Tooltip{constructor(e,n){super(e,n);r(this,"show",()=>{super.show();const{options:e,btn:n}=this;e.dismissible&&n&&setTimeout(()=>p.focus(n),17)})}get name(){return s.popoverComponent}get defaults(){return g}}r(i,"selector",u),r(i,"init",m),r(i,"getInstance",b),r(i,"styleTip",s.styleTip);module.exports=i;
//# sourceMappingURL=popover.cjs.map
