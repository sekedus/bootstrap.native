"use strict";var bt=Object.defineProperty;var Et=(s,i,o)=>i in s?bt(s,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[i]=o;var v=(s,i,o)=>Et(s,typeof i!="symbol"?i+"":i,o);const t=require("@thednp/shorty"),O=require("@thednp/event-listener"),Ct=require("./index-C8qIpGHG.js"),Tt=require("./dataBsToggle-Dj-Ng54N.js"),et=require("./showClass-D_Ms1FgG.js"),D=require("./popupContainer-DIlSFkzD.js"),nt=require("./fadeClass-Co6nOzNJ.js"),wt=require("./base-component-DBcDoOjV.js"),Y="popover",it="Popover",w="tooltip",dt=s=>{const i=s===w,o=i?`${s}-inner`:`${s}-body`,e=i?"":`<h3 class="${s}-header"></h3>`,n=`<div class="${s}-arrow"></div>`,l=`<div class="${o}"></div>`;return`<div class="${s}" role="${w}">${e+n+l}</div>`},ht={top:"top",bottom:"bottom",left:"start",right:"end"},st=s=>{const i=/\b(top|bottom|start|end)+/,{element:o,tooltip:e,container:n,options:l,arrow:r}=s;// istanbul ignore else @preserve
if(e){const u={...ht},f=t.isRTL(o);t.setElementStyle(e,{top:"",left:"",right:"",bottom:""});const c=s.name===it,{offsetWidth:d,offsetHeight:h}=e,{clientWidth:P,clientHeight:E,offsetWidth:B}=t.getDocumentElement(o);let{placement:a}=l;const{clientWidth:C,offsetWidth:T}=n,H=t.getElementStyle(n,"position")==="fixed",p=Math.abs(H?C-T:P-B),x=f&&H?p:0,y=P-(f?0:p)-1,{width:g,height:b,left:m,right:gt,top:q}=t.getBoundingClientRect(o,!0),{x:G,y:_}={x:m,y:q};t.setElementStyle(r,{top:"",left:"",right:"",bottom:""});let A=0,k="",$=0,V="",W="",J="",X="";const N=r.offsetWidth||0,L=r.offsetHeight||0,Z=N/2;let I=q-h-L<0,F=q+h+b+L>=E,j=m-d-N<x,z=m+d+g+N>=y;const K=["left","right"],tt=["top","bottom"];I=K.includes(a)?q+b/2-h/2-L<0:I,F=K.includes(a)?q+h/2+b/2+L>=E:F,j=tt.includes(a)?m+g/2-d/2<x:j,z=tt.includes(a)?m+d/2+g/2>=y:z,a=K.includes(a)&&j&&z?"top":a,a=a==="top"&&I?"bottom":a,a=a==="bottom"&&F?"top":a,a=a==="left"&&j?"right":a,a=a==="right"&&z?"left":a,e.className.includes(a)||(e.className=e.className.replace(i,u[a]));// istanbul ignore else @preserve
K.includes(a)?(a==="left"?$=G-d-(c?N:0):$=G+g+(c?N:0),I&&F?(A=0,k=0,W=q+b/2-L/2):I?(A=_,k="",W=b/2-N):F?(A=_-h+b,k="",W=h-b/2-N):(A=_-h/2+b/2,W=h/2-L/2)):tt.includes(a)&&(a==="top"?A=_-h-(c?L:0):A=_+b+(c?L:0),j?($=0,J=G+g/2-Z):z?($="auto",V=0,X=g/2+y-gt-Z):($=G-d/2+g/2,J=d/2-Z)),t.setElementStyle(e,{top:`${A}px`,bottom:k===""?"":`${k}px`,left:$==="auto"?$:`${$}px`,right:V!==""?`${V}px`:""});// istanbul ignore else @preserve
t.isHTMLElement(r)&&(W!==""&&(r.style.top=`${W}px`),J!==""?r.style.left=`${J}px`:X!==""&&(r.style.right=`${X}px`));const vt=t.createCustomEvent(`updated.bs.${t.toLowerCase(s.name)}`);t.dispatchEvent(o,vt)}},ot={template:dt(w),title:"",customClass:"",trigger:"hover focus",placement:"top",sanitizeFn:void 0,animation:!0,delay:200,container:document.body,content:"",dismissible:!1,btnClose:""},pt="data-original-title",M="Tooltip",S=(s,i,o)=>{// istanbul ignore else @preserve
if(t.isString(i)&&i.length){let e=i.trim();t.isFunction(o)&&(e=o(e));const l=new DOMParser().parseFromString(e,"text/html");s.append(...l.body.childNodes)}else t.isHTMLElement(i)?s.append(i):(t.isNodeList(i)||t.isArray(i)&&i.every(t.isNode))&&s.append(...i)},yt=s=>{const i=s.name===M,{id:o,element:e,options:n}=s,{title:l,placement:r,template:u,animation:f,customClass:c,sanitizeFn:d,dismissible:h,content:P,btnClose:E}=n,B=i?w:Y,a={...ht};let C=[],T=[];t.isRTL(e)&&(a.left="end",a.right="start");const Q=`bs-${B}-${a[r]}`;let H;if(t.isHTMLElement(u))H=u;else{const x=t.createElement("div");S(x,u,d),H=x.firstChild}s.tooltip=t.isHTMLElement(H)?H.cloneNode(!0):void 0;const{tooltip:p}=s;// istanbul ignore else @preserve
if(p){t.setAttribute(p,"id",o),t.setAttribute(p,"role",w);const x=i?`${w}-inner`:`${Y}-body`,y=i?null:t.querySelector(`.${Y}-header`,p),g=t.querySelector(`.${x}`,p);s.arrow=t.querySelector(`.${B}-arrow`,p);const{arrow:b}=s;if(t.isHTMLElement(l))C=[l.cloneNode(!0)];else{const m=t.createElement("div");S(m,l,d),C=[...m.childNodes]}if(t.isHTMLElement(P))T=[P.cloneNode(!0)];else{const m=t.createElement("div");S(m,P,d),T=[...m.childNodes]}if(h)if(l)if(t.isHTMLElement(E))C=[...C,E.cloneNode(!0)];else{const m=t.createElement("div");S(m,E,d),C=[...C,m.firstChild]}else{// istanbul ignore else @preserve
if(y&&y.remove(),t.isHTMLElement(E))T=[...T,E.cloneNode(!0)];else{const m=t.createElement("div");S(m,E,d),T=[...T,m.firstChild]}}// istanbul ignore else @preserve
if(i)l&&g&&S(g,l,d);else{// istanbul ignore else @preserve
l&&y&&S(y,C,d);// istanbul ignore else @preserve
P&&g&&S(g,T,d),s.btn=t.querySelector(".btn-close",p)||void 0}t.addClass(p,"position-fixed"),t.addClass(b,"position-absolute");// istanbul ignore else @preserve
t.hasClass(p,B)||t.addClass(p,B);// istanbul ignore else @preserve
f&&!t.hasClass(p,nt.fadeClass)&&t.addClass(p,nt.fadeClass);// istanbul ignore else @preserve
c&&!t.hasClass(p,c)&&t.addClass(p,c);// istanbul ignore else @preserve
t.hasClass(p,Q)||t.addClass(p,Q)}},$t=s=>{const i=["HTML","BODY"],o=[];let{parentNode:e}=s;for(;e&&!i.includes(e.nodeName);){e=t.getParentNode(e);// istanbul ignore else @preserve
t.isShadowRoot(e)||t.isTableElement(e)||o.push(e)}return o.find((n,l)=>t.getElementStyle(n,"position")!=="relative"&&o.slice(l+1).every(r=>t.getElementStyle(r,"position")==="static")?n:null)||t.getDocument(s).body},Lt=`[${Tt.dataBsToggle}="${w}"],[data-tip="${w}"]`,mt="title";let lt=s=>t.getInstance(s,M);const St=s=>new R(s),Pt=s=>{const{element:i,tooltip:o,container:e,offsetParent:n}=s;t.removeAttribute(i,t.ariaDescribedBy),D.removePopup(o,e===n?e:n)},U=s=>{const{tooltip:i,container:o,offsetParent:e}=s;return i&&D.hasPopup(i,o===e?o:e)},Ht=(s,i)=>{const{element:o}=s;s._toggleEventListeners();// istanbul ignore else @preserve
t.hasAttribute(o,pt)&&s.name===M&&ft(s);// istanbul ignore else @preserve
i&&i()},ut=(s,i)=>{const o=i?O.addListener:O.removeListener,{element:e}=s;o(t.getDocument(e),t.touchstartEvent,s.handleTouch,t.passiveHandler)},at=s=>{const{element:i}=s,o=t.createCustomEvent(`shown.bs.${t.toLowerCase(s.name)}`);ut(s,!0),t.dispatchEvent(i,o),t.Timer.clear(i,"in")},rt=s=>{const{element:i}=s,o=t.createCustomEvent(`hidden.bs.${t.toLowerCase(s.name)}`);ut(s),Pt(s),t.dispatchEvent(i,o),t.Timer.clear(i,"out")},ct=(s,i)=>{const o=i?O.addListener:O.removeListener,{element:e}=s,n=t.closest(e,`.${D.modalString}`),l=t.closest(e,`.${D.offcanvasString}`);i?s._observer.observe(s.element):s._observer.disconnect(),n&&o(n,`hide.bs.${D.modalString}`,s.handleHide),l&&o(l,`hide.bs.${D.offcanvasString}`,s.handleHide)},ft=(s,i)=>{const o=[pt,mt],{element:e}=s;t.setAttribute(e,o[i?0:1],i||t.getAttribute(e,o[0])||""),t.removeAttribute(e,o[i?1:0])};class R extends wt.BaseComponent{constructor(o,e){super(o,e);v(this,"handleFocus",()=>t.focus(this.element));v(this,"handleShow",()=>this.show());v(this,"handleHide",()=>this.hide());v(this,"update",()=>{st(this)});v(this,"toggle",()=>{const{tooltip:o}=this;o&&!U(this)?this.show():this.hide()});v(this,"handleTouch",({target:o})=>{const{tooltip:e,element:n}=this;// istanbul ignore if @preserve
e&&e.contains(o)||o===n||o&&n.contains(o)||this.hide()});v(this,"_toggleEventListeners",o=>{const e=o?O.addListener:O.removeListener,{element:n,options:l,btn:r}=this,{trigger:u}=l,c=!!(this.name!==M&&l.dismissible);// istanbul ignore else @preserve
u.includes("manual")||(this.enabled=!!o,u.split(" ").forEach(h=>{// istanbul ignore else @preserve
if(h===t.mousehoverEvent){e(n,t.mousedownEvent,this.handleShow),e(n,t.mouseenterEvent,this.handleShow);// istanbul ignore else @preserve
c||(e(n,t.mouseleaveEvent,this.handleHide),e(t.getDocument(n),t.touchstartEvent,this.handleTouch,t.passiveHandler))}else if(h===t.mouseclickEvent)e(n,h,c?this.handleShow:this.toggle);else if(h===t.focusEvent){e(n,t.focusinEvent,this.handleShow);// istanbul ignore else @preserve
c||e(n,t.focusoutEvent,this.handleHide);// istanbul ignore else @preserve
t.isApple&&e(n,t.mouseclickEvent,this.handleFocus)}// istanbul ignore else @preserve
c&&r&&e(r,t.mouseclickEvent,this.handleHide)}))});const{element:n}=this,l=this.name===M,r=l?w:Y,u=l?M:it;// istanbul ignore next @preserve: this is to set Popover too
lt=c=>t.getInstance(c,u),this.enabled=!0,this.id=`${r}-${t.getUID(n,r)}`;const{options:f}=this;if(!(!f.title&&l||!l&&!f.content)){t.ObjectAssign(ot,{titleAttr:""});// istanbul ignore else @preserve
t.hasAttribute(n,mt)&&l&&typeof f.title=="string"&&ft(this,f.title),this.container=$t(n),this.offsetParent=["sticky","fixed"].some(c=>t.getElementStyle(this.container,"position")===c)?this.container:t.getDocument(this.element).body,yt(this),this._observer=new Ct.D(()=>this.update()),this._toggleEventListeners(!0)}}get name(){return M}get defaults(){return ot}show(){const{options:o,tooltip:e,element:n,container:l,offsetParent:r,id:u}=this,{animation:f}=o,c=t.Timer.get(n,"out"),d=l===r?l:r;t.Timer.clear(n,"out"),e&&!c&&!U(this)&&t.Timer.set(n,()=>{const h=t.createCustomEvent(`show.bs.${t.toLowerCase(this.name)}`);t.dispatchEvent(n,h);// istanbul ignore else @preserve
if(!h.defaultPrevented){D.appendPopup(e,d),t.setAttribute(n,t.ariaDescribedBy,`#${u}`),this.update(),ct(this,!0);// istanbul ignore else @preserve
t.hasClass(e,et.showClass)||t.addClass(e,et.showClass);// istanbul ignore else @preserve
f?t.emulateTransitionEnd(e,()=>at(this)):at(this)}},17,"in")}hide(){const{options:o,tooltip:e,element:n}=this,{animation:l,delay:r}=o;t.Timer.clear(n,"in");// istanbul ignore else @preserve
e&&U(this)&&t.Timer.set(n,()=>{const u=t.createCustomEvent(`hide.bs.${t.toLowerCase(this.name)}`);t.dispatchEvent(n,u);// istanbul ignore else @preserve
if(!u.defaultPrevented){this.update(),t.removeClass(e,et.showClass),ct(this);// istanbul ignore else @preserve
l?t.emulateTransitionEnd(e,()=>rt(this)):rt(this)}},r+17,"out")}enable(){const{enabled:o}=this;// istanbul ignore else @preserve
o||(this._toggleEventListeners(!0),this.enabled=!o)}disable(){const{tooltip:o,enabled:e}=this;// istanbul ignore else @preserve
e&&(o&&U(this)&&this.hide(),this._toggleEventListeners(),this.enabled=!e)}toggleEnabled(){this.enabled?this.disable():this.enable()}dispose(){const{tooltip:o,options:e}=this,n={...this,name:this.name},l=()=>setTimeout(()=>Ht(n,()=>super.dispose()),17);e.animation&&U(n)?(this.options.delay=0,this.hide(),t.emulateTransitionEnd(o,l)):l()}}v(R,"selector",Lt),v(R,"init",St),v(R,"getInstance",lt),v(R,"styleTip",st);exports.Tooltip=R;exports.getTipTemplate=dt;exports.popoverComponent=it;exports.popoverString=Y;exports.styleTip=st;exports.tooltipDefaults=ot;
//# sourceMappingURL=tooltip-BG3vXGWl.js.map
