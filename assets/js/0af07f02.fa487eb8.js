"use strict";(self.webpackChunknotebook_sncf_p_3=self.webpackChunknotebook_sncf_p_3||[]).push([[540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:l,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:2},s="Introduction CSS",o={unversionedId:"front-end/introduction-css",id:"front-end/introduction-css",title:"Introduction CSS",description:"Ajouter du style a\u0300 nos pages",source:"@site/docs/front-end/introduction-css.md",sourceDirName:"front-end",slug:"/front-end/introduction-css",permalink:"/notebook-SNCF-P3/docs/front-end/introduction-css",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end/introduction-css.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction HTML",permalink:"/notebook-SNCF-P3/docs/front-end/introduction-html"},next:{title:"Introduction JavaScript",permalink:"/notebook-SNCF-P3/docs/front-end/introduction-js"}},i={},p=[{value:"Ajouter du style a\u0300 nos pages",id:"ajouter-du-style-a\u0300-nos-pages",level:2},{value:"Comment ?",id:"comment-",level:3},{value:"Bonnes pratiques",id:"bonnes-pratiques",level:2},{value:"Les bases de la syntaxe",id:"les-bases-de-la-syntaxe",level:2},{value:"En bref",id:"en-bref",level:3},{value:"Type de se\u0301lecteur, hie\u0301rarchie, parent/enfant",id:"type-de-se\u0301lecteur-hie\u0301rarchie-parentenfant",level:2},{value:"Type de s\xe9lecteur",id:"type-de-s\xe9lecteur",level:3},{value:"Pseudo classes",id:"pseudo-classes",level:3},{value:"Hi\xe9rarchie et g\xe9n\xe9alogie",id:"hi\xe9rarchie-et-g\xe9n\xe9alogie",level:3},{value:"Couleurs, unite\u0301s",id:"couleurs-unite\u0301s",level:2},{value:"Les couleurs en CSS",id:"les-couleurs-en-css",level:3},{value:"Typographie et polices",id:"typographie-et-polices",level:2},{value:"Bordures et background",id:"bordures-et-background",level:2},{value:"Les bordures",id:"les-bordures",level:3},{value:"Dimensionnement",id:"dimensionnement",level:2},{value:"Positionnement",id:"positionnement",level:2},{value:"Fiche r\xe9cap CSS",id:"fiche-r\xe9cap-css",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction-css"},"Introduction CSS"),(0,l.kt)("h2",{id:"ajouter-du-style-a\u0300-nos-pages"},"Ajouter du style a\u0300 nos pages"),(0,l.kt)("h3",{id:"comment-"},"Comment ?"),(0,l.kt)("p",null,"Possible d\u2019ajouter directement dans une balise \xe0 l\u2019aide de l\u2019attribut style ",(0,l.kt)("strong",{parentName:"p"},"MAIS")," manque de maintenabilit\xe9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<span style="color:red;">Mon texte rouge</span>\n')),(0,l.kt)("p",null,"Dans la balise ",(0,l.kt)("inlineCode",{parentName:"p"},"<head>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  \x3c!-- ... --\x3e\n  <style type="text/css">\n    span {\n      color: red;\n    }\n  </style>\n  \x3c!-- ... --\x3e\n  <head></head>\n</head>\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"bonnes-pratiques"},"Bonnes pratiques"),(0,l.kt)("p",null,"Liaison directement dans le document html dans le ",(0,l.kt)("inlineCode",{parentName:"p"},"<head>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" type="text/css" href="style.css" />\n\x3c!-- Ou --\x3e\n<link rel="stylesheet" href="style.css" />\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"les-bases-de-la-syntaxe"},"Les bases de la syntaxe"),(0,l.kt)("h3",{id:"en-bref"},"En bref"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Se\u0301lecteur : cible l'e\u0301le\u0301ment sur lequel on applique les proprie\u0301te\u0301 (balise, class,\nid)"),(0,l.kt)("li",{parentName:"ul"},"Proprie\u0301te\u0301 : de\u0301finie l\u2019effet que l\u2019on veut utiliser (couleur, taille, position, etc), elle sont \xe0 l'int\xe9rieur d'",(0,l.kt)("strong",{parentName:"li"},"accolades")),(0,l.kt)("li",{parentName:"ul"},"Valeur de la proprie\u0301te\u0301 (red, 5px, #fff, etc)"),(0,l.kt)("li",{parentName:"ul"},"Les commentaires sont aussi possibles")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"s\xe9lecteur {\n  propri\xe9t\xe9: valeur;\n  propri\xe9t\xe9: valeur;\n  /* Commentaire */\n}\n/* Commentaire */\n")),(0,l.kt)("p",null,"\u2192 Le tout constitue une ",(0,l.kt)("strong",{parentName:"p"},"de\u0301claration CSS")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"type-de-se\u0301lecteur-hie\u0301rarchie-parentenfant"},"Type de se\u0301lecteur, hie\u0301rarchie, parent/enfant"),(0,l.kt)("h3",{id:"type-de-s\xe9lecteur"},"Type de s\xe9lecteur"),(0,l.kt)("p",null,"On peut se\u0301lectionner n\u2019importe quel e\u0301le\u0301ment HTML pour lui appliquer un style"),(0,l.kt)("p",null,"Ici tous les textes contenus dans des balises ",(0,l.kt)("inlineCode",{parentName:"p"},"<span>")," seront de couleur rose"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"span {\n  color: pink;\n}\n")),(0,l.kt)("p",null,"Il faut bien garder en t\xeate que l'ordre de d\xe9claration de tes \xe9l\xe9ments \xe0 une importance : si deux s\xe9lecteurs portent sur le m\xeame \xe9l\xe9ment la derni\xe8re d\xe9claration sera la seule effective"),(0,l.kt)("p",null,"Souviens toi qu'il est possible de mettre la m\xeame classe sur plusieurs \xe9l\xe9ments html. Gr\xe2ce \xe0 cela tu peux donc appliquer le m\xeame style \xe0 plusieurs \xe9l\xe9ments."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"h1 {\n  color: pink;\n}\nh1 {\n  color: blue;\n}\n")),(0,l.kt)("p",null,"\u26a0\ufe0f En css pour d\xe9signer une classe il faut que tu pr\xe9c\xe8des son nom d'un point."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="ma-classe">\n  ce texte sera de couleur rose\n  <div>\n    <p class="ma-classe">et ce texte aussi</p>\n  </div>\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".ma-classe {\n  color: pink;\n}\n")),(0,l.kt)("p",null,"L'inverse est aussi possible : plusieurs classes css peuvent \xeatre appliqu\xe9es sur un m\xeame \xe9l\xe9ment html"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="classe-bleu taille-txt">\n  ce texte sera de couleur bleu et de taille 10px\n  <div>\n    <p class="classe-bleu">ce texte sera juste en bleu</p>\n  </div>\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".classe-bleu {\n  color: blue;\n}\n.taille-txt {\n  font-size: 10px;\n}\n")),(0,l.kt)("p",null,"Pour s\xe9lectionner avec pr\xe9cision un \xe9l\xe9ment poss\xe9dant une classe on colle le nom de la balise avec le nom de la classe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="classe-bleu">\n  ce texte sera de couleur bleu\n  <div>\n    <p class="classe-bleu">Mais pas ce texte</p>\n  </div>\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"div.classe-bleu {\n  color: blue;\n}\n")),(0,l.kt)("p",null,"\u2192 Test juste ici : ",(0,l.kt)("a",{parentName:"p",href:"https://codepen.io/Jeremy_Bojko/pen/abGvqaq"},"https://codepen.io/Jeremy_Bojko/pen/abGvqaq")),(0,l.kt)("p",null,"Parlons maintenant des identifiants. En fait il n'y a pas grand chose \xe0 dire : m\xeame r\xf4le que les classes mais il doit \xeatre unique dans la page"),(0,l.kt)("p",null,"\u26a0\ufe0f En css pour d\xe9signer un identifiant il faut que tu pr\xe9c\xe8des son nom d'un di\xe8se"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div id="mon-id">ce texte sera de couleur rose</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"#mon-id {\n  color: pink;\n}\n")),(0,l.kt)("p",null,"Pour les plus fous les m\xe9langes sont possible !"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div id="mon-id" class="ma-classe">\n  ce texte sera de couleur rose\n  <div class="ma-classe">mais pas celui la</div>\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"div#mon-id.ma-classe {\n  color: pink;\n}\n")),(0,l.kt)("h3",{id:"pseudo-classes"},"Pseudo classes"),(0,l.kt)("p",null,"Une pseudo classe permet d'ajouter \xe0 un s\xe9lecteur un \xe9tat sp\xe9cifique dans lequel il doit \xeatre pour \xeatre cibl\xe9 et que le style s'applique \xe0 lui."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="ma-classe">ce texte sera de couleur rose au survol</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".ma-classe:hover {\n  color: pink;\n}\n")),(0,l.kt)("p",null,"\u26a0\ufe0f En css pour d\xe9signer une pseudo classe il faut que tu pr\xe9c\xe8des son nom de 2 points (",(0,l.kt)("inlineCode",{parentName:"p"},":"),")"),(0,l.kt)("p",null,"\ud83d\udc49 Liste de toute les pseudo classes disponible : ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes"},"Mozilla Docs")),(0,l.kt)("p",null,"\ud83d\udd79\ufe0f Pour exp\xe9rimenter c'est ici : ",(0,l.kt)("a",{parentName:"p",href:"https://codepen.io/Jeremy_Bojko/pen/KKNVoWN"},"Lien vers Codepen")),(0,l.kt)("h3",{id:"hi\xe9rarchie-et-g\xe9n\xe9alogie"},"Hi\xe9rarchie et g\xe9n\xe9alogie"),(0,l.kt)("p",null,"Voici un extrait de code et sa repr\xe9sentation sch\xe9matique se faire cette repr\xe9sentation peut aider lorsque tu voudras agir avec pr\xe9cision sur certains \xe9l\xe9ments html \xe0 travers ton css"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div>\n  <h1>J'aime la papaye</h1>\n  <p>\n    Pourquoi j'aime ce <span>fruit</span>? Pour sa <strong>texture</strong>!\n  </p>\n\n  <h2>Les fraisiers</h2>\n  <p>Tout mes apprenants me font des fraisiers, et vous ?</p>\n</div>\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Repr\xe9sentation DOM diagramme",src:n(7046).Z,width:"1156",height:"842"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Repr\xe9sentation DOM tree",src:n(1787).Z,width:"594",height:"491"})),(0,l.kt)("p",null,"Par exemple pour un s\xe9lecteur de descendance tu aurais ce code. Ici on agit sur tout les ",(0,l.kt)("inlineCode",{parentName:"p"},"<span>")," enfants de ",(0,l.kt)("inlineCode",{parentName:"p"},"<p>")," (dans l'exemple il n'y en a qu'un seul)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"p span {\n  color: pink;\n}\n")),(0,l.kt)("p",null,"\u26a0\ufe0f Note bien l'",(0,l.kt)("strong",{parentName:"p"},"espace")," entre le ",(0,l.kt)("inlineCode",{parentName:"p"},"p")," et le ",(0,l.kt)("inlineCode",{parentName:"p"},"span")),(0,l.kt)("p",null,"Par exemple pour une s\xe9lecteur de groupe tu aurais ce code. Ici on agit sur tout les ",(0,l.kt)("inlineCode",{parentName:"p"},"<h1>")," et tout les",(0,l.kt)("inlineCode",{parentName:"p"},"<h2>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"h1,\nh2 {\n  color: pink;\n}\n")),(0,l.kt)("p",null,'Avec ces sch\xe9ma il est aussi tr\xe8s important de bien comprendre la notion de port\xe9e de variable : Le style d\'un \xe9l\xe9ment html impact tout ses enfants mais peut \xeatre "\xe9cras\xe9" si la m\xeame propri\xe9t\xe9 est red\xe9finis pour ses enfants.'),(0,l.kt)("p",null,"\ud83d\udd79\ufe0f Pour exp\xe9rimenter c'est ici : ",(0,l.kt)("a",{parentName:"p",href:"https://codepen.io/Jeremy_Bojko/pen/JjbGoMd"},"Lien vers Codepen")),(0,l.kt)("p",null,"\ud83d\udd79\ufe0f Pour v\xe9rifier si tu as bien tout compris c'est ici : ",(0,l.kt)("a",{parentName:"p",href:"https://flukeout.github.io/"},"Lien vers CSS Diner")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"couleurs-unite\u0301s"},"Couleurs, unite\u0301s"),(0,l.kt)("h3",{id:"les-couleurs-en-css"},"Les couleurs en CSS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Notation Hexade\u0301cimal : #ffffff (blanc)"),(0,l.kt)("li",{parentName:"ul"},"Notation Hexade\u0301cimal courte : #fff (blanc)"),(0,l.kt)("li",{parentName:"ul"},"Notation RGB : rgb(255, 255, 255) / rgba(255, 255, 255, 1)"),(0,l.kt)("li",{parentName:"ul"},"Notations HSL : hsl(0, 0%, 100%) / hsla(0, 0%, 100%, 1)"),(0,l.kt)("li",{parentName:"ul"},"Mots cle\u0301s : white")),(0,l.kt)("p",null,"\ud83d\udc49 ",(0,l.kt)("a",{parentName:"p",href:"https://htmlcolorcodes.com/fr/"},"https://htmlcolorcodes.com/fr/")),(0,l.kt)("p",null,"\ud83d\udd79\ufe0f Pour exp\xe9rimenter c'est ici : ",(0,l.kt)("a",{parentName:"p",href:"https://codepen.io/Jeremy_Bojko/pen/KKNVRGG"},"Lien vers Codepen")),(0,l.kt)("p",null,"\u2192 Rendu final attendu du Codepen"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ttjb",src:n(9443).Z,width:"648",height:"430"})),(0,l.kt)("p",null,"Unit\xe9s"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Le pixel : 1px (fixe, de\u0301pendante de la re\u0301solution de pe\u0301riphe\u0301rique)"),(0,l.kt)("li",{parentName:"ul"},"Le cadratin : 1em (relative a\u0300 la taille de police de l\u2019e\u0301le\u0301ment parent)"),(0,l.kt)("li",{parentName:"ul"},"Si la police de base est en taille 10px alors 2em = 20px"),(0,l.kt)("li",{parentName:"ul"},"Le pourcentage : 10% (relative a\u0300 la taille de leur parent)")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"typographie-et-polices"},"Typographie et polices"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  font-family: Arial, Helvetica;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  font-size: 18px;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  line-height: 1.5;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  font-weight: bold;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  color: #ffffff;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  font-style: italic;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"p.align-center {\n  text-align: center;\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"bordures-et-background"},"Bordures et background"),(0,l.kt)("h3",{id:"les-bordures"},"Les bordures"),(0,l.kt)("p",null,"Pour appliquer une bordure a\u0300 un e\u0301le\u0301ment on utilise la proprie\u0301te\u0301 ",(0,l.kt)("inlineCode",{parentName:"p"},"border"),". Elle a 3 sous proprie\u0301te\u0301s : ",(0,l.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," et ",(0,l.kt)("inlineCode",{parentName:"p"},"color")),(0,l.kt)("p",null,"\u2192 ",(0,l.kt)("inlineCode",{parentName:"p"},"border")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"width")," ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," ",(0,l.kt)("inlineCode",{parentName:"p"},"color"),";"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"p {\n  border: 1px solid #111111;\n}\n")),(0,l.kt)("p",null,"On peut d\xe9composer en 4 bordures : border-top, border-left, border-right, border-bottom"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"p {\n  border-top: 1px solid #111111;\n}\n")),(0,l.kt)("p",null,"Il existe diff\xe9rents ",(0,l.kt)("strong",{parentName:"p"},"style de bordures")," :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"none")," : pas de bordure"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dotted")," : pointille\u0301s"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dashed")," : tirets"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"solid")," : un trait simple")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"p {\n  border-top: 1px dashed #111111;\n}\n")),(0,l.kt)("p",null,"Pour mettre en place des bordures arrondies on utilise la propri\xe9t\xe9 ",(0,l.kt)("inlineCode",{parentName:"p"},"border-radius")," : valeur"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"p {\n  border-radius: 10px;\n}\n")),(0,l.kt)("p",null,"Et tu peux avoir mettre en place des param\xe8tre plus en d\xe9tail. Tu travailles alors coin par coin l'ordre est important : haut gauche, haut droite, bas droite, bas gauche"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"p {\n  border-radius: 10px 2px 5px 1px;\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"dimensionnement"},"Dimensionnement"),(0,l.kt)("p",null,"\ud83d\udd79\ufe0f ",(0,l.kt)("a",{parentName:"p",href:"https://codepen.io/Jeremy_Bojko/pen/QWGyBQG"},"Lien vers Codepen")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"positionnement"},"Positionnement"),(0,l.kt)("p",null,"Sous forme d'exercice : ",(0,l.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/css-positioning-position-absolute-and-relative/"},"lire cet article")),(0,l.kt)("p",null,"\ud83d\udd79\ufe0f Pour v\xe9rifier si tout est compris direction ces exercices : ",(0,l.kt)("a",{parentName:"p",href:"https://codepen.io/Jeremy_Bojko/pen/qBqbqKP"},"Lien vers Codepen")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"fiche-r\xe9cap-css"},"Fiche r\xe9cap CSS"),(0,l.kt)("p",null,"\ud83d\udc49 ",(0,l.kt)("a",{parentName:"p",href:"https://htmlcheatsheet.com/css"},"https://htmlcheatsheet.com/css")))}d.isMDXComponent=!0},9443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tiktok-jb-9c8568ff756d00f841476a9dc56fce50.png"},7046:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tree-dom-img-f5e209c0d1e31eef7e10f720b5370f51.png"},1787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tree-dom-text-6bcdbbbf2987f96cbe9b8e4991a6dc4a.png"}}]);