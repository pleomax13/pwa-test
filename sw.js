if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const o=e=>c(e,d),s={module:{uri:d},exports:f,require:o};i[d]=Promise.all(n.map((e=>s[e]||o(e)))).then((e=>(r(...e),f)))}}define(["./workbox-32a34f02"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-144x144.png",revision:"cd32152555a8eb975e55850457cce1a0"},{url:"apple-touch-icon.png",revision:"498517f89aeef1c94f96c252723f5c6e"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg-2YYhrxAP.woff2",revision:null},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY-aVm8Jdp-.woff",revision:null},{url:"assets/index-700jHAop.css",revision:null},{url:"assets/index-DSCz9hvw.js",revision:null},{url:"audio-1.mp3",revision:"06f5accf555a2f955aac00d7d4cc7bfe"},{url:"audio-2.mp3",revision:"055c495c0eb8d71ab14ccaf4c87075df"},{url:"audio-3.mp3",revision:"1665dbb4e015ea7d648e3fd1b8f6433e"},{url:"audio-4.mp3",revision:"effddf4c8ce038342cbd58ebf5bd9277"},{url:"audio-5.mp3",revision:"8b54d948bf8cc3045511cabdcda519df"},{url:"favicon-16x16.png",revision:"610cb9e8868d44187ae752053468f327"},{url:"favicon-32x32.png",revision:"0d5fed51d215bba425d1f46f0c39b02c"},{url:"favicon.ico",revision:"fd02b7d29aa36c857830dcad07525886"},{url:"icon-192x192.png",revision:"9bd14ab12bc99d03e57c982abc552867"},{url:"icon-256x256.png",revision:"1f3e66386b7f103ab7e836b540454d67"},{url:"icon-384x384.png",revision:"5a6c527ab8a6b0bfe65ec71fafec2731"},{url:"icon-512x512.png",revision:"6020962f2a6663ba2b1acd2fb376d4db"},{url:"index.html",revision:"25e4da034a3cf3902bd8bd71c9f4ce45"},{url:"mstile-150x150.png",revision:"c7cf1fb051723df756f3fe2ee4b6be2f"},{url:"qr.png",revision:"c6e2dbf436abd7dd635a064ce05a2efe"},{url:"registerSW.js",revision:"881d9daca8271f1957ccf62ff679dbe3"},{url:"safari-pinned-tab.svg",revision:"830cbce6deef8bf7a6929c154dc7560e"},{url:"slide1.png",revision:"316ec1ab5771d53add59b937ea3bf96d"},{url:"slide2-1.jpg",revision:"73385cc17422c79a6e9278555d9984c1"},{url:"slide2-2.jpg",revision:"996bf16b8a404b63d18641c021a2da7e"},{url:"slide2-3.jpg",revision:"956d0a0f4b388e5b7cd8957eb7454a11"},{url:"slide2-4.jpg",revision:"01a6ed5348706532e501c44cbc95c342"},{url:"slide2-5.jpg",revision:"4e723cd08ee52bc9a9746a3534c84e32"},{url:"video.mp4",revision:"94eff14288371d1f06044afe759262a8"},{url:"icon-192x192.png",revision:"9bd14ab12bc99d03e57c982abc552867"},{url:"icon-256x256.png",revision:"1f3e66386b7f103ab7e836b540454d67"},{url:"icon-384x384.png",revision:"5a6c527ab8a6b0bfe65ec71fafec2731"},{url:"icon-512x512.png",revision:"6020962f2a6663ba2b1acd2fb376d4db"},{url:"manifest.webmanifest",revision:"19318eee30122ff772f3e3fe59979934"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
