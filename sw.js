if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let n={};const o=e=>c(e,t),f={module:{uri:t},exports:n,require:o};i[t]=Promise.all(r.map((e=>f[e]||o(e)))).then((e=>(s(...e),n)))}}define(["./workbox-c5096bea"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.css",revision:"3affec43eef3b04df27e7485a7ad78c5"},{url:"index.html",revision:"ec27f3c5a0c26c7c8cc3310d8259e7fa"},{url:"index.js",revision:"f83883999452e20cdc850f38df79534c"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
