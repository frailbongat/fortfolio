if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"lDvTRI6doqic1WYlfUq5x"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"lDvTRI6doqic1WYlfUq5x"},{url:"/_next/static/chunks/main-3290d89e641298e0.js",revision:"lDvTRI6doqic1WYlfUq5x"},{url:"/_next/static/chunks/pages/_app-d1a0e845e03d93d7.js",revision:"lDvTRI6doqic1WYlfUq5x"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"lDvTRI6doqic1WYlfUq5x"},{url:"/_next/static/chunks/pages/index-46b72e66d8a32412.js",revision:"lDvTRI6doqic1WYlfUq5x"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"lDvTRI6doqic1WYlfUq5x"},{url:"/_next/static/chunks/webpack-45f9f9587e6c08e1.js",revision:"lDvTRI6doqic1WYlfUq5x"},{url:"/_next/static/lDvTRI6doqic1WYlfUq5x/_buildManifest.js",revision:"lDvTRI6doqic1WYlfUq5x"},{url:"/_next/static/lDvTRI6doqic1WYlfUq5x/_middlewareManifest.js",revision:"lDvTRI6doqic1WYlfUq5x"},{url:"/_next/static/lDvTRI6doqic1WYlfUq5x/_ssgManifest.js",revision:"lDvTRI6doqic1WYlfUq5x"},{url:"/favicon.ico",revision:"a0b3d27a1201279092cc82d3cc91ebb3"},{url:"/icon-192x192.png",revision:"071c93edd88c7c6f351a9f787f7a234d"},{url:"/icon-512x512.png",revision:"e39955eb594cf4d772cf992a7330ba1b"},{url:"/manifest.json",revision:"7a00b83e42dbc13e012772733ec59e2b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
