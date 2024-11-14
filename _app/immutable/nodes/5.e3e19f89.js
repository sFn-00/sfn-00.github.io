import{i as xe,t as ie}from"../chunks/experience.ccb37006.js";import{s as ke,a as y,f as w,c as T,g as E,h as D,d as _,j as C,i as P,K as $,I as de,n as he,l as N,m as U,p as H,M as ce}from"../chunks/scheduler.7a274a43.js";import{S as we,i as Ee,b as M,d as S,m as j,t as k,c as Y,a as x,e as B,g as Z}from"../chunks/index.28409b7f.js";import{U as ne,e as X}from"../chunks/UIcon.494f8e38.js";import{b as fe}from"../chunks/paths.c1f3c1eb.js";import{g as ee}from"../chunks/assets.0a12a3ab.js";import{a as ue,M as Ce}from"../chunks/app.49854a0e.js";import{C as De}from"../chunks/CardLogo.ffd18bf4.js";import{B as Ie,M as Ve}from"../chunks/Banner.e0b2f90a.js";import{T as ye}from"../chunks/TabTitle.7e78d6c0.js";import{C as ge}from"../chunks/Chip.2121a9fa.js";import{C as Te}from"../chunks/CardDivider.09b854d8.js";function Pe({params:i}){if(i.slug)return{experience:xe.find(l=>l.slug===i.slug)}}const et=Object.freeze(Object.defineProperty({__proto__:null,load:Pe},Symbol.toStringTag,{value:"Module"}));function pe(i,e,l){const t=i.slice();return t[2]=e[l],t}function me(i,e,l){const t=i.slice();return t[2]=e[l],t}function Me(i){let e,l,t,r,n,f,s,a;l=new Ie({props:{img:ee(i[0].experience.logo),$$slots:{default:[Ne]},$$scope:{ctx:i}}});const m=[ze,Ue],o=[];function b(d,v){return d[0].experience.description?0:1}return f=b(i),s=o[f]=m[f](i),{c(){e=w("div"),M(l.$$.fragment),t=y(),r=w("div"),n=w("div"),s.c(),this.h()},l(d){e=E(d,"DIV",{class:!0});var v=D(e);S(l.$$.fragment,v),t=T(v),r=E(v,"DIV",{class:!0});var A=D(r);n=E(A,"DIV",{class:!0});var V=D(n);s.l(V),V.forEach(_),A.forEach(_),v.forEach(_),this.h()},h(){C(n,"class","px-10px m-y-5"),C(r,"class","pt-3 pb-1 overflow-x-hidden w-full"),C(e,"class","flex flex-col items-center overflow-x-hidden")},m(d,v){P(d,e,v),j(l,e,null),$(e,t),$(e,r),$(r,n),o[f].m(n,null),a=!0},p(d,v){const A={};v&1&&(A.img=ee(d[0].experience.logo)),v&129&&(A.$$scope={dirty:v,ctx:d}),l.$set(A);let V=f;f=b(d),f===V?o[f].p(d,v):(Z(),k(o[V],1,1,()=>{o[V]=null}),Y(),s=o[f],s?s.p(d,v):(s=o[f]=m[f](d),s.c()),x(s,1),s.m(n,null))},i(d){a||(x(l.$$.fragment,d),x(s),a=!0)},o(d){k(l.$$.fragment,d),k(s),a=!1},d(d){d&&_(e),B(l),o[f].d()}}}function Se(i){let e,l,t,r,n="Could not load experience data...",f;return l=new ne({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),M(l.$$.fragment),t=y(),r=w("p"),r.textContent=n,this.h()},l(s){e=E(s,"DIV",{class:!0});var a=D(e);S(l.$$.fragment,a),t=T(a),r=E(a,"P",{class:!0,["data-svelte-h"]:!0}),de(r)!=="svelte-1o82fhi"&&(r.textContent=n),a.forEach(_),this.h()},h(){C(r,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(s,a){P(s,e,a),j(l,e,null),$(e,t),$(e,r),f=!0},p:he,i(s){f||(x(l.$$.fragment,s),f=!0)},o(s){k(l.$$.fragment,s),f=!1},d(s){s&&_(e),B(l)}}}function je(i){let e=i[0].experience.name+"",l;return{c(){l=N(e)},l(t){l=U(t,e)},m(t,r){P(t,l,r)},p(t,r){r&1&&e!==(e=t[0].experience.name+"")&&H(l,e)},d(t){t&&_(l)}}}function Be(i){let e,l,t,r,n=i[2].label+"",f,s,a;return l=new ne({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),M(l.$$.fragment),t=y(),r=w("span"),f=N(n),s=y(),this.h()},l(m){e=E(m,"DIV",{class:!0});var o=D(e);S(l.$$.fragment,o),t=T(o),r=E(o,"SPAN",{});var b=D(r);f=U(b,n),b.forEach(_),o.forEach(_),s=T(m),this.h()},h(){C(e,"class","row-center gap-2")},m(m,o){P(m,e,o),j(l,e,null),$(e,t),$(e,r),$(r,f),P(m,s,o),a=!0},p(m,o){(!a||o&1)&&n!==(n=m[2].label+"")&&H(f,n)},i(m){a||(x(l.$$.fragment,m),a=!0)},o(m){k(l.$$.fragment,m),a=!1},d(m){m&&(_(e),_(s)),B(l)}}}function $e(i){let e,l;return e=new ge({props:{href:i[2].to,$$slots:{default:[Be]},$$scope:{ctx:i}}}),{c(){M(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.href=t[2].to),r&129&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Ae(i){let e,l,t,r=i[2].name+"",n,f,s;return e=new De({props:{src:ee(i[2].logo),alt:i[2].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){M(e.$$.fragment),l=y(),t=w("span"),n=N(r),f=y(),this.h()},l(a){S(e.$$.fragment,a),l=T(a),t=E(a,"SPAN",{class:!0});var m=D(t);n=U(m,r),m.forEach(_),f=T(a),this.h()},h(){C(t,"class","text-[0.9em]")},m(a,m){j(e,a,m),P(a,l,m),P(a,t,m),$(t,n),P(a,f,m),s=!0},p(a,m){const o={};m&1&&(o.src=ee(a[2].logo)),m&1&&(o.alt=a[2].name),e.$set(o),(!s||m&1)&&r!==(r=a[2].name+"")&&H(n,r)},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){a&&(_(l),_(t),_(f)),B(e,a)}}}function _e(i){let e,l;return e=new ge({props:{classes:"inline-flex flex-row items-center justify-center",href:`${fe}/skills/${i[2].slug}`,$$slots:{default:[Ae]},$$scope:{ctx:i}}}),{c(){M(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.href=`${fe}/skills/${t[2].slug}`),r&129&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Ne(i){let e,l,t,r,n,f=i[0].experience.company+"",s,a,m=i[0].experience.location+"",o,b,d=i[0].experience.type+"",v,A,V,Q=ue(i[0].experience.period.from,i[0].experience.period.to)+"",W,te,J,O,le,q,re,K,z;t=new Ce({props:{$$slots:{default:[je]},$$scope:{ctx:i}}}),O=new Te({});let R=X(i[0].experience.links),h=[];for(let c=0;c<R.length;c+=1)h[c]=$e(me(i,R,c));const ve=c=>k(h[c],1,1,()=>{h[c]=null});let F=X(i[0].experience.skills),g=[];for(let c=0;c<F.length;c+=1)g[c]=_e(pe(i,F,c));const be=c=>k(g[c],1,1,()=>{g[c]=null});return{c(){e=w("div"),l=w("div"),M(t.$$.fragment),r=y(),n=w("p"),s=N(f),a=N(" · "),o=N(m),b=N(" · "),v=N(d),A=y(),V=w("p"),W=N(Q),te=y(),J=w("div"),M(O.$$.fragment),le=y(),q=w("div");for(let c=0;c<h.length;c+=1)h[c].c();re=y(),K=w("div");for(let c=0;c<g.length;c+=1)g[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var u=D(e);l=E(u,"DIV",{class:!0});var I=D(l);S(t.$$.fragment,I),I.forEach(_),r=T(u),n=E(u,"P",{class:!0});var p=D(n);s=U(p,f),a=U(p," · "),o=U(p,m),b=U(p," · "),v=U(p,d),p.forEach(_),A=T(u),V=E(u,"P",{class:!0});var L=D(V);W=U(L,Q),L.forEach(_),te=T(u),J=E(u,"DIV",{class:!0});var ae=D(J);S(O.$$.fragment,ae),ae.forEach(_),le=T(u),q=E(u,"DIV",{class:!0});var se=D(q);for(let G=0;G<h.length;G+=1)h[G].l(se);se.forEach(_),re=T(u),K=E(u,"DIV",{class:!0});var oe=D(K);for(let G=0;G<g.length;G+=1)g[G].l(oe);oe.forEach(_),u.forEach(_),this.h()},h(){C(l,"class","text-0.9em"),C(n,"class","font-300 text-[var(--tertiary-text)] m-y-2 text-center"),C(V,"class","font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center"),C(J,"class","w-75%"),C(q,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),C(K,"class","row-center flex-wrap m-b-2"),C(e,"class","col-center p-y-20")},m(c,u){P(c,e,u),$(e,l),j(t,l,null),$(e,r),$(e,n),$(n,s),$(n,a),$(n,o),$(n,b),$(n,v),$(e,A),$(e,V),$(V,W),$(e,te),$(e,J),j(O,J,null),$(e,le),$(e,q);for(let I=0;I<h.length;I+=1)h[I]&&h[I].m(q,null);$(e,re),$(e,K);for(let I=0;I<g.length;I+=1)g[I]&&g[I].m(K,null);z=!0},p(c,u){const I={};if(u&129&&(I.$$scope={dirty:u,ctx:c}),t.$set(I),(!z||u&1)&&f!==(f=c[0].experience.company+"")&&H(s,f),(!z||u&1)&&m!==(m=c[0].experience.location+"")&&H(o,m),(!z||u&1)&&d!==(d=c[0].experience.type+"")&&H(v,d),(!z||u&1)&&Q!==(Q=ue(c[0].experience.period.from,c[0].experience.period.to)+"")&&H(W,Q),u&1){R=X(c[0].experience.links);let p;for(p=0;p<R.length;p+=1){const L=me(c,R,p);h[p]?(h[p].p(L,u),x(h[p],1)):(h[p]=$e(L),h[p].c(),x(h[p],1),h[p].m(q,null))}for(Z(),p=R.length;p<h.length;p+=1)ve(p);Y()}if(u&1){F=X(c[0].experience.skills);let p;for(p=0;p<F.length;p+=1){const L=pe(c,F,p);g[p]?(g[p].p(L,u),x(g[p],1)):(g[p]=_e(L),g[p].c(),x(g[p],1),g[p].m(K,null))}for(Z(),p=F.length;p<g.length;p+=1)be(p);Y()}},i(c){if(!z){x(t.$$.fragment,c),x(O.$$.fragment,c);for(let u=0;u<R.length;u+=1)x(h[u]);for(let u=0;u<F.length;u+=1)x(g[u]);z=!0}},o(c){k(t.$$.fragment,c),k(O.$$.fragment,c),h=h.filter(Boolean);for(let u=0;u<h.length;u+=1)k(h[u]);g=g.filter(Boolean);for(let u=0;u<g.length;u+=1)k(g[u]);z=!1},d(c){c&&_(e),B(t),B(O),ce(h,c),ce(g,c)}}}function Ue(i){let e,l,t,r,n="No description...",f;return l=new ne({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),M(l.$$.fragment),t=y(),r=w("p"),r.textContent=n,this.h()},l(s){e=E(s,"DIV",{class:!0});var a=D(e);S(l.$$.fragment,a),t=T(a),r=E(a,"P",{class:!0,["data-svelte-h"]:!0}),de(r)!=="svelte-kl0ixf"&&(r.textContent=n),a.forEach(_),this.h()},h(){C(r,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(s,a){P(s,e,a),j(l,e,null),$(e,t),$(e,r),f=!0},p:he,i(s){f||(x(l.$$.fragment,s),f=!0)},o(s){k(l.$$.fragment,s),f=!1},d(s){s&&_(e),B(l)}}}function ze(i){let e,l;return e=new Ve({props:{content:i[0].experience.description??"This place is yet to be filled..."}}),{c(){M(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.content=t[0].experience.description??"This place is yet to be filled..."),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Le(i){let e,l,t,r,n,f;e=new ye({props:{title:i[1]}});const s=[Se,Me],a=[];function m(o,b){return o[0].experience===void 0?0:1}return r=m(i),n=a[r]=s[r](i),{c(){M(e.$$.fragment),l=y(),t=w("div"),n.c(),this.h()},l(o){S(e.$$.fragment,o),l=T(o),t=E(o,"DIV",{class:!0});var b=D(t);n.l(b),b.forEach(_),this.h()},h(){C(t,"class","pb-10 overflow-x-hidden col flex-1")},m(o,b){j(e,o,b),P(o,l,b),P(o,t,b),a[r].m(t,null),f=!0},p(o,[b]){const d={};b&2&&(d.title=o[1]),e.$set(d);let v=r;r=m(o),r===v?a[r].p(o,b):(Z(),k(a[v],1,1,()=>{a[v]=null}),Y(),n=a[r],n?n.p(o,b):(n=a[r]=s[r](o),n.c()),x(n,1),n.m(t,null))},i(o){f||(x(e.$$.fragment,o),x(n),f=!0)},o(o){k(e.$$.fragment,o),k(n),f=!1},d(o){o&&(_(l),_(t)),B(e,o),a[r].d()}}}function Oe(i,e,l){let t,{data:r}=e;return i.$$set=n=>{"data"in n&&l(0,r=n.data)},i.$$.update=()=>{i.$$.dirty&1&&l(1,t=r.experience?`${r.experience.name} - ${ie}`:ie)},[r,t]}class tt extends we{constructor(e){super(),Ee(this,e,Oe,Le,ke,{data:0})}}export{tt as component,et as universal};
