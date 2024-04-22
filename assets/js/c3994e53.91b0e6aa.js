"use strict";(self.webpackChunk_lilib_utils=self.webpackChunk_lilib_utils||[]).push([[515],{9848:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7689);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,m=s["".concat(c,".").concat(f)]||s[f]||y[f]||l;return t?n.createElement(m,o(o({ref:r},p),{},{components:t})):n.createElement(m,o({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6469:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=t(1163),a=(t(7689),t(9848));const l={},o=void 0,i={unversionedId:"areArraysEqual",id:"areArraysEqual",title:"areArraysEqual",description:"Detect whether multiple arrays are shallow equal.",source:"@site/docs/areArraysEqual.md",sourceDirName:".",slug:"/areArraysEqual",permalink:"/utils/areArraysEqual",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started",permalink:"/utils/"},next:{title:"composeRefs (React)",permalink:"/utils/composeRefs"}},c={},u=[{value:"API",id:"api",level:2},{value:"Example",id:"example",level:2}],p={toc:u},s="wrapper";function y(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Detect whether multiple arrays are shallow equal."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function areArraysEqual(\n  x: readonly any[],\n  y: readonly any[],\n  ...args: (readonly any[])[]\n): boolean;\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { areArraysEqual } from "@lilib/utils";\n\nareArraysEqual([1, 2, 3], [1, 2, 3], [1, 2, 3]);\n// => true\n')))}y.isMDXComponent=!0}}]);