"use strict";(self.webpackChunknotebook_sncf_p_3=self.webpackChunknotebook_sncf_p_3||[]).push([[947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},l="Les node modules",a={unversionedId:"outils/node-modules",id:"outils/node-modules",title:"Les node modules",description:"Qu'est-ce qu'un module ?",source:"@site/docs/5-outils/node-modules.md",sourceDirName:"5-outils",slug:"/outils/node-modules",permalink:"/notebook-SNCF-P3/docs/outils/node-modules",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5-outils/node-modules.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Visual Studio Code",permalink:"/notebook-SNCF-P3/docs/outils/vs-code"},next:{title:"Planning",permalink:"/notebook-SNCF-P3/docs/planning"}},u={},s=[{value:"Qu&#39;est-ce qu&#39;un module ?",id:"quest-ce-quun-module-",level:2},{value:"Fichier package.json",id:"fichier-packagejson",level:2},{value:"Installation d&#39;un module",id:"installation-dun-module",level:2},{value:"Utilisation",id:"utilisation",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"les-node-modules"},"Les node modules"),(0,r.kt)("h2",{id:"quest-ce-quun-module-"},"Qu'est-ce qu'un module ?"),(0,r.kt)("p",null,"Un module est un ensemble de fichiers JavaScript (ou TypeScript) qui peuvent \xeatre import\xe9s dans un autre fichier JavaScript (ou TypeScript)."),(0,r.kt)("h2",{id:"fichier-packagejson"},"Fichier package.json"),(0,r.kt)("p",null,"Le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," est un fichier qui contient les informations du projet et la liste des modules utilis\xe9s."),(0,r.kt)("p",null,"Il est initialiser avec la commande suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init\n")),(0,r.kt)("h2",{id:"installation-dun-module"},"Installation d'un module"),(0,r.kt)("p",null,"Pour installer un module, il faut utiliser le gestionnaire de paquets npm :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install nom-du-module\n")),(0,r.kt)("p",null,"ou alors sa version raccourcie :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i nom-du-module\n")),(0,r.kt)("h2",{id:"utilisation"},"Utilisation"),(0,r.kt)("p",null,"Pour utiliser un module, il faut l'importer dans le fichier JavaScript (ou TypeScript) o\xf9 on souhaite l'utiliser :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { nomVariable } from "nom-du-module";\n')))}d.isMDXComponent=!0}}]);