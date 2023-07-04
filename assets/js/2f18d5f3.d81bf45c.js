"use strict";(self.webpackChunknotebook_sncf_p_3=self.webpackChunknotebook_sncf_p_3||[]).push([[474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:5},i="TypeScript",o={unversionedId:"front-end/typescript",id:"front-end/typescript",title:"TypeScript",description:"Introduction",source:"@site/docs/3-front-end/typescript.md",sourceDirName:"3-front-end",slug:"/front-end/typescript",permalink:"/notebook-SNCF-P3/docs/front-end/typescript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-front-end/typescript.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"DOM",permalink:"/notebook-SNCF-P3/docs/front-end/dom"},next:{title:"Outils",permalink:"/notebook-SNCF-P3/docs/category/outils"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Compilation",id:"compilation",level:2},{value:"Compilation automatique",id:"compilation-automatique",level:3},{value:"Syntaxe",id:"syntaxe",level:2},{value:"Variables",id:"variables",level:3},{value:"Types",id:"types",level:2},{value:"Boolean",id:"boolean",level:3},{value:"Number",id:"number",level:3},{value:"String",id:"string",level:3},{value:"Array",id:"array",level:3},{value:"Tuple",id:"tuple",level:3},{value:"Enum",id:"enum",level:3},{value:"Any",id:"any",level:3},{value:"Void",id:"void",level:3},{value:"Null and Undefined",id:"null-and-undefined",level:3},{value:"Never",id:"never",level:3},{value:"Object",id:"object",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"Classes",id:"classes",level:2},{value:"Modules",id:"modules",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typescript"},"TypeScript"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"TypeScript est un langage de programmation libre et open source d\xe9velopp\xe9 par Microsoft qui a pour but d'am\xe9liorer et de s\xe9curiser la production de code JavaScript."),(0,a.kt)("p",null,"TypeScript est un sur-ensemble de JavaScript qui ajoute des fonctionnalit\xe9s suppl\xe9mentaires \xe0 ce dernier. Il est possible d'utiliser du code JavaScript dans un fichier TypeScript, mais pas l'inverse."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Pour installer TypeScript, il faut utiliser le gestionnaire de paquets npm :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g typescript\n")),(0,a.kt)("h2",{id:"compilation"},"Compilation"),(0,a.kt)("p",null,"Pour compiler un fichier TypeScript, il faut utiliser la commande suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tsc nom-du-fichier.ts\n")),(0,a.kt)("h3",{id:"compilation-automatique"},"Compilation automatique"),(0,a.kt)("p",null,"Pour compiler automatiquement un fichier TypeScript \xe0 chaque modification, il faut utiliser la commande suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tsc nom-du-fichier.ts --watch\n")),(0,a.kt)("h2",{id:"syntaxe"},"Syntaxe"),(0,a.kt)("h3",{id:"variables"},"Variables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let nomVariable: type = valeur;\n")),(0,a.kt)("h2",{id:"types"},"Types"),(0,a.kt)("p",null,"TypeScript permet de d\xe9finir des types de variables. Cela permet de s\xe9curiser le code et d'\xe9viter les erreurs de type."),(0,a.kt)("h3",{id:"boolean"},"Boolean"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let isDone: boolean = false;\n")),(0,a.kt)("h3",{id:"number"},"Number"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let decimal: number = 6;\n")),(0,a.kt)("h3",{id:"string"},"String"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let color: string = "bleu";\n')),(0,a.kt)("h3",{id:"array"},"Array"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let list: number[] = [1, 2, 3];\nlet list: Array<number> = [1, 2, 3];\n")),(0,a.kt)("h3",{id:"tuple"},"Tuple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let x: [string, number];\nx = ["hello", 10];\n')),(0,a.kt)("h3",{id:"enum"},"Enum"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"enum Color {\n  Red,\n  Green,\n  Blue,\n}\nlet c: Color = Color.Green;\n")),(0,a.kt)("h3",{id:"any"},"Any"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let notSure: any = 4;\nnotSure = "peut-\xeatre une cha\xeene de caract\xe8res";\nnotSure = false; // ok, finalement c\'est un bool\xe9en\n')),(0,a.kt)("h3",{id:"void"},"Void"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'function warnUser(): void {\n  console.log("Ceci est un message d\'avertissement");\n}\n')),(0,a.kt)("h3",{id:"null-and-undefined"},"Null and Undefined"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let u: undefined = undefined;\nlet n: null = null;\n")),(0,a.kt)("h3",{id:"never"},"Never"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function error(message: string): never {\n  throw new Error(message);\n}\n")),(0,a.kt)("h3",{id:"object"},"Object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'declare function create(o: object | null): void;\n\ncreate({ prop: 0 }); // OK\ncreate(null); // OK\n\ncreate(42); // Error\ncreate("string"); // Error\ncreate(false); // Error\ncreate(undefined); // Error\n')),(0,a.kt)("h2",{id:"interfaces"},"Interfaces"),(0,a.kt)("p",null,"Les interfaces permettent de d\xe9finir des objets."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface Person {\n  firstName: string;\n  lastName: string;\n}\n\nfunction greeter(person: Person) {\n  return `Hello, ${person.firstName} ${person.lastName}`;\n}\n\nlet user = { firstName: "Chuck", lastName: "Norris" };\n\ndocument.body.textContent = greeter(user);\n')),(0,a.kt)("h2",{id:"classes"},"Classes"),(0,a.kt)("p",null,"Les classes permettent de d\xe9finir des objets."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Greeter {\n  greeting: string;\n\n  constructor(message: string) {\n    this.greeting = message;\n  }\n\n  greet() {\n    return `Hello,  ${this.greeting}`;\n  }\n}\n")),(0,a.kt)("h2",{id:"modules"},"Modules"),(0,a.kt)("p",null,"Les modules permettent de s\xe9parer le code en plusieurs fichiers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// script1.ts\nexport class SomeClass {\n  // ...\n}\n\n// script2.ts\nimport { SomeClass } from "./script1";\n')))}d.isMDXComponent=!0}}]);