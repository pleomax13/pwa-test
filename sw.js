if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const d=e=>n(e,s),f={module:{uri:s},exports:a,require:d};i[s]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(c(...e),a)))}}define(["./workbox-32a34f02"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-144x144.png",revision:"cd32152555a8eb975e55850457cce1a0"},{url:"apple-touch-icon.png",revision:"498517f89aeef1c94f96c252723f5c6e"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg-2YYhrxAP.woff2",revision:null},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY-aVm8Jdp-.woff",revision:null},{url:"assets/index-5-fUHYnT.css",revision:null},{url:"assets/index-LQZkP6UG.js",revision:null},{url:"favicon-16x16.png",revision:"610cb9e8868d44187ae752053468f327"},{url:"favicon-32x32.png",revision:"0d5fed51d215bba425d1f46f0c39b02c"},{url:"favicon.ico",revision:"fd02b7d29aa36c857830dcad07525886"},{url:"icon-192x192.png",revision:"9bd14ab12bc99d03e57c982abc552867"},{url:"icon-256x256.png",revision:"1f3e66386b7f103ab7e836b540454d67"},{url:"icon-384x384.png",revision:"5a6c527ab8a6b0bfe65ec71fafec2731"},{url:"icon-512x512.png",revision:"6020962f2a6663ba2b1acd2fb376d4db"},{url:"index.html",revision:"e7a6da99d055a5aa3aa33a6284df4ea6"},{url:"mstile-150x150.png",revision:"c7cf1fb051723df756f3fe2ee4b6be2f"},{url:"qr.png",revision:"c6e2dbf436abd7dd635a064ce05a2efe"},{url:"registerSW.js",revision:"881d9daca8271f1957ccf62ff679dbe3"},{url:"safari-pinned-tab.svg",revision:"830cbce6deef8bf7a6929c154dc7560e"},{url:"slide1.png",revision:"316ec1ab5771d53add59b937ea3bf96d"},{url:"slide2-1.jpg",revision:"73385cc17422c79a6e9278555d9984c1"},{url:"slide2-2.jpg",revision:"996bf16b8a404b63d18641c021a2da7e"},{url:"slide2-3.jpg",revision:"956d0a0f4b388e5b7cd8957eb7454a11"},{url:"slide2-4.jpg",revision:"01a6ed5348706532e501c44cbc95c342"},{url:"slide2-5.jpg",revision:"4e723cd08ee52bc9a9746a3534c84e32"},{url:"slide2-6.jpg",revision:"b640937a81145cadf5a8f8c725eb3f94"},{url:"icon-192x192.png",revision:"9bd14ab12bc99d03e57c982abc552867"},{url:"icon-256x256.png",revision:"1f3e66386b7f103ab7e836b540454d67"},{url:"icon-384x384.png",revision:"5a6c527ab8a6b0bfe65ec71fafec2731"},{url:"icon-512x512.png",revision:"6020962f2a6663ba2b1acd2fb376d4db"},{url:"manifest.webmanifest",revision:"19318eee30122ff772f3e3fe59979934"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
