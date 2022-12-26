"use strict";const t=require("./shorty-1329a513.cjs"),P=require("./event-listener-2a5f29ed.cjs"),u=require("./activeClass-a1284579.cjs"),E=require("./getTargetElement-379ad550.cjs"),X=require("./base-component.cjs"),p="carousel",S="Carousel",x=`[data-bs-ride="${p}"]`,l=`${p}-item`,G="data-bs-slide-to",g="data-bs-slide",v="paused",I={pause:"hover",keyboard:!1,touch:!0,interval:5e3},f=n=>t.Ln(n,S),L=n=>new R(n);let m=0,$=0,C=0;const M=t.Wn(`slide.bs.${p}`),H=t.Wn(`slid.bs.${p}`),w=n=>{const{index:i,direction:s,element:e,slides:a,options:r}=n;if(n.isAnimating&&f(e)){const c=A(n),o=s==="left"?"next":"prev",d=s==="left"?"start":"end";t.Mn(a[i],u.activeClass),t.Nn(a[i],`${l}-${o}`),t.Nn(a[i],`${l}-${d}`),t.Nn(a[c],u.activeClass),t.Nn(a[c],`${l}-${d}`),t.Q(e,H),t.Gn.clear(e,g),!t.d(e).hidden&&r.interval&&!n.isPaused&&n.cycle()}};function B(){const n=f(this);n&&!n.isPaused&&!t.Gn.get(this,v)&&t.Mn(this,v)}function D(){const n=f(this);n&&n.isPaused&&!t.Gn.get(this,v)&&n.cycle()}function Q(n){n.preventDefault();const i=t.de(this,x)||E.getTargetElement(this),s=f(i);if(!s||s.isAnimating)return;const e=+(t.Zt(this,G)||0);this&&!t.kn(this,u.activeClass)&&!Number.isNaN(e)&&s.to(e)}function K(n){n.preventDefault();const i=t.de(this,x)||E.getTargetElement(this),s=f(i);if(!s||s.isAnimating)return;const e=t.Zt(this,g);e==="next"?s.next():e==="prev"&&s.prev()}const U=({code:n,target:i})=>{const s=t.d(i),[e]=[...t.bo(x,s)].filter(d=>t.eo(d)),a=f(e);if(!a||a.isAnimating||/textarea|input/i.test(i.nodeName))return;const r=t.po(e),c=r?t.Ue:t.Fe,o=r?t.Fe:t.Ue;n===o?a.prev():n===c&&a.next()};function F(n){const{target:i}=n,s=f(this);if(!s||s.isAnimating||s.isTouch)return;const{controls:e,indicators:a}=s;[...e,...a].some(r=>r===i||r.contains(i))||(m=n.pageX,this.contains(i)&&(s.isTouch=!0,q(s,!0)))}const W=n=>{$=n.pageX},Z=n=>{const{target:i}=n,s=t.d(i),e=[...t.bo(x,s)].map(o=>f(o)).find(o=>o.isTouch);if(!e)return;const{element:a,index:r}=e,c=t.po(a);if(e.isTouch=!1,q(e),s.getSelection()?.toString().length){m=0,$=0,C=0;return}if(C=n.pageX,!a.contains(i)||Math.abs(m-C)<120){m=0,$=0,C=0;return}$<m?e.to(r+(c?-1:1)):$>m&&e.to(r+(c?1:-1)),m=0,$=0,C=0},y=(n,i)=>{const{indicators:s}=n;[...s].forEach(e=>t.Nn(e,u.activeClass)),n.indicators[i]&&t.Mn(s[i],u.activeClass)},q=(n,i)=>{const{element:s}=n,e=i?P.E:P.r;e(t.d(s),t.kt,W,t.Rn),e(t.d(s),t.Tt,Z,t.Rn)},k=(n,i)=>{const{element:s,options:e,slides:a,controls:r,indicators:c}=n,{touch:o,pause:d,interval:N,keyboard:T}=e,h=i?P.E:P.r;d&&N&&(h(s,t.mt,B),h(s,t.gt,D)),o&&a.length>2&&h(s,t.Mt,F,t.Rn),r.length&&r.forEach(b=>{b&&h(b,t.ut,K)}),c.length&&c.forEach(b=>{h(b,t.ut,Q)}),T&&h(t.d(s),t.ct,U)},A=n=>{const{slides:i,element:s}=n,e=t.go(`.${l}.${u.activeClass}`,s);return t.u(e)?[...i].indexOf(e):-1};class R extends X{static selector=x;static init=L;static getInstance=f;constructor(i,s){super(i,s);const{element:e}=this;this.direction=t.po(e)?"right":"left",this.index=0,this.isTouch=!1,this.slides=t.ho(l,e);const{slides:a}=this;if(a.length<2)return;const r=t.d(e);this.controls=[...t.bo(`[${g}]`,e),...t.bo(`[${g}][${E.dataBsTarget}="#${e.id}"]`,r)],this.indicator=t.go(`.${p}-indicators`,e),this.indicators=[...this.indicator?t.bo(`[${G}]`,this.indicator):[],...t.bo(`[${G}][${E.dataBsTarget}="#${e.id}"]`,r)];const{options:c}=this;this.options.interval=c.interval===!0?I.interval:c.interval,A(this)<0&&(t.Mn(a[0],u.activeClass),this.indicators.length&&y(this,0)),k(this,!0),c.interval&&this.cycle()}get name(){return S}get defaults(){return I}get isPaused(){return t.kn(this.element,v)}get isAnimating(){return t.go(`.${l}-next,.${l}-prev`,this.element)!==null}cycle(){const{element:i,options:s,isPaused:e,index:a}=this;t.Gn.clear(i,p),e&&(t.Gn.clear(i,v),t.Nn(i,v)),t.Gn.set(i,()=>{this.element&&!this.isPaused&&!this.isTouch&&t.eo(i)&&this.to(a+1)},s.interval,p)}pause(){const{element:i,options:s}=this;!this.isPaused&&s.interval&&(t.Mn(i,v),t.Gn.set(i,()=>{},1,v))}next(){this.isAnimating||this.to(this.index+1)}prev(){this.isAnimating||this.to(this.index-1)}to(i){const{element:s,slides:e,options:a}=this,r=A(this),c=t.po(s);let o=i;if(this.isAnimating||r===o||t.Gn.get(s,g))return;r<o||r===0&&o===e.length-1?this.direction=c?"right":"left":(r>o||r===e.length-1&&o===0)&&(this.direction=c?"left":"right");const{direction:d}=this;o<0?o=e.length-1:o>=e.length&&(o=0);const N=d==="left"?"next":"prev",T=d==="left"?"start":"end",h={relatedTarget:e[o],from:r,to:o,direction:d};t.q(M,h),t.q(H,h),t.Q(s,M),!M.defaultPrevented&&(this.index=o,y(this,o),t.oe(e[o])&&t.kn(s,"slide")?t.Gn.set(s,()=>{t.Mn(e[o],`${l}-${N}`),t.Qn(e[o]),t.Mn(e[o],`${l}-${T}`),t.Mn(e[r],`${l}-${T}`),t.zn(e[o],()=>w(this))},0,g):(t.Mn(e[o],u.activeClass),t.Nn(e[r],u.activeClass),t.Gn.set(s,()=>{t.Gn.clear(s,g),s&&a.interval&&!this.isPaused&&this.cycle(),t.Q(s,H)},0,g)))}dispose(){const{slides:i}=this,s=["start","end","prev","next"];[...i].forEach((e,a)=>{t.kn(e,u.activeClass)&&y(this,a),s.forEach(r=>t.Nn(e,`${l}-${r}`))}),k(this),super.dispose()}}module.exports=R;
//# sourceMappingURL=carousel.cjs.map