"use strict";const s=require("./base-component-DaZCwW-u.js"),q=require("./index-DlQfhTUb.js"),p=require("./activeClass-CxJYQAGN.js"),w="scrollspy",C="ScrollSpy",A='[data-bs-spy="scroll"]',x={offset:10,target:void 0},L=t=>s.to(t,C),Y=t=>new I(t),S=s.vo(`activate.bs.${w}`),R=t=>{const{target:e,scrollTarget:o,options:r,itemsLength:i,scrollHeight:n,element:l,_observer:c}=t,{offset:a}=r,g=o!==l,f=e&&s.Ne("A",e),b=s.d(l),m=o.scrollHeight;if(t.scrollTop=o.scrollTop,f&&(m!==n||i!==f.length)){let v,u,h,d;t.items=[],t.targets=[],t.offsets=[],t.scrollHeight=m,t.maxScroll=t.scrollHeight-B(t),Array.from(f).forEach(y=>{v=s.j(y,"href"),u=v?.slice(1),h=u?.length?b.getElementById(u):null,h&&(t.items.push(y),t.targets.push(h),d=c?.getEntry(h)?.boundingClientRect||s.w(h),t.offsets.push((g?d.top+t.scrollTop:h.offsetTop)-a))}),t.itemsLength=t.items.length}},H=({targets:t,scrollTarget:e,element:o,_observer:r},i)=>{i?e===o?t?.forEach(n=>r.observe(n)):r.observe(o):r.disconnect()},k=t=>t.scrollHeight,B=({element:t,scrollTarget:e})=>e!==t?e.clientHeight:s.w(t).height,E=t=>{Array.from(s.Ne("A",t)).forEach(e=>{s.Yn(e,p.activeClass)&&s.Zn(e,p.activeClass)})},T=(t,e)=>{const{target:o,element:r}=t;s.m(o)&&E(o),t.activeItem=e,s.qn(e,p.activeClass);const i=[];let n=e;for(;n!==s.So(r);)n=n.parentElement,(s.Yn(n,"nav")||s.Yn(n,"dropdown-menu"))&&i.push(n);i.forEach(l=>{const c=l.previousElementSibling;c&&!s.Yn(c,p.activeClass)&&s.qn(c,p.activeClass)}),S.relatedTarget=e,s.q(r,S)};class I extends s.BaseComponent{static selector=A;static init=Y;static getInstance=L;constructor(e,o){super(e,o);const{element:r,options:i}=this,n=s.Ro(i.target,s.d(r));n&&(this.target=n,this.scrollTarget=r.clientHeight<r.scrollHeight?r:s.S(r),this.scrollHeight=k(this.scrollTarget),this.refresh(),this._observer=new q.E(l=>{requestAnimationFrame(()=>{l.some(c=>c.isVisible)&&this.refresh()})},{root:this.scrollTarget}),H(this,!0))}get name(){return C}get defaults(){return x}refresh=()=>{const{target:e}=this;if(!s.m(e)||e.offsetHeight===0)return;R(this);const{scrollTop:o,maxScroll:r,itemsLength:i,items:n,activeItem:l}=this;if(o>=r){const a=n[i-1];l!==a&&T(this,a);return}const{offsets:c}=this;if(l&&o<c[0]&&c[0]>0){this.activeItem=null,e&&E(e);return}n.forEach((a,g)=>{l!==a&&o>=c[g]&&(typeof c[g+1]>"u"||o<c[g+1])&&T(this,a)})};dispose(){const e={...this};H(e),super.dispose()}}module.exports=I;
//# sourceMappingURL=scrollspy.cjs.map
