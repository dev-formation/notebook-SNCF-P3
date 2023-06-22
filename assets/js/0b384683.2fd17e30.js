"use strict";(self.webpackChunknotebook_sncf_p_3=self.webpackChunknotebook_sncf_p_3||[]).push([[921],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2064:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},l="DOM",i={unversionedId:"front-end/dom",id:"front-end/dom",title:"DOM",description:"DOM Illustration",source:"@site/docs/front-end/dom.md",sourceDirName:"front-end",slug:"/front-end/dom",permalink:"/notebook-SNCF-P3/docs/front-end/dom",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end/dom.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Introduction JavaScript",permalink:"/notebook-SNCF-P3/docs/front-end/introduction-js"},next:{title:"Outils",permalink:"/notebook-SNCF-P3/docs/category/outils"}},u={},s=[{value:"Affichage de l&#39;heure",id:"affichage-de-lheure",level:2},{value:"Guess the number",id:"guess-the-number",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dom"},"DOM"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DOM Illustration ",src:r(9954).Z,width:"1602",height:"878"})),(0,o.kt)("h2",{id:"affichage-de-lheure"},"Affichage de l'heure"),(0,o.kt)("p",null,"Dans une page HTML :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Ajouter une paragraphe contenant le texte : "00:00:00"')),(0,o.kt)("p",null,"Au chargement de la page HTML, en JS :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"G\xe9n\xe9rer l'heure au format HH:MM:SS"),(0,o.kt)("li",{parentName:"ul"},"Help pour g\xe9n\xe9rer l'heure\nAvec ",(0,o.kt)("inlineCode",{parentName:"li"},'new Date().toLocaleTimeString("fr")')),(0,o.kt)("li",{parentName:"ul"},"Modifier le texte du paragraphe avec cette heure"),(0,o.kt)("li",{parentName:"ul"},"Faire en sorte que l'heure se mette \xe0 jour automatiquement toute les secondes"),(0,o.kt)("li",{parentName:"ul"},"Spoiler pour la mise \xe0 jour automatique\nil faut utiliser ",(0,o.kt)("inlineCode",{parentName:"li"},"setInterval"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Contrainte :")," Afficher l'heure en rouge et gras si les secondes sont multiples de 3 \xe0 l\u2019aide d\u2019une classe CSS"),(0,o.kt)("h2",{id:"guess-the-number"},"Guess the number"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"G\xe9n\xe9rer un nombre al\xe9atoire entre 0 et 100"),(0,o.kt)("li",{parentName:"ul"},"Demander \xe0 l'utilisateur de le trouver"),(0,o.kt)("li",{parentName:"ul"},"Help :\n",(0,o.kt)("inlineCode",{parentName:"li"},"let msg = prompt('message')")),(0,o.kt)("li",{parentName:"ul"},"Indiquer \xe0 l'utilisateur si c'est plus ou moins"),(0,o.kt)("li",{parentName:"ul"},"Indiquer si l'utilisateur \xe0 trouv\xe9 la bonne r\xe9ponse")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bonus :")," lorsque l'utilisateur a trouv\xe9, lui indiquer le nombre d'essais effectu\xe9s et le temps \xe9coul\xe9."))}d.isMDXComponent=!0},9954:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dom-illustration-d4f809fe78012edd62ab8c860a4a78ce.png"}}]);