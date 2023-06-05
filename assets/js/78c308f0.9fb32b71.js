"use strict";(self.webpackChunknotebook_sncf_p_3=self.webpackChunknotebook_sncf_p_3||[]).push([[818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=s.createContext({}),l=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=l(e.components);return s.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,v=c["".concat(o,".").concat(m)]||c[m]||p[m]||a;return n?s.createElement(v,u(u({ref:t},d),{},{components:n})):s.createElement(v,u({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,u[1]=i;for(var l=2;l<a;l++)u[l]=n[l];return s.createElement.apply(null,u)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,title:"Architecture du Web"},u="Comprendre l'architecture du Web: un guide sur le fonctionnement d'Internet",i={unversionedId:"fondations/architecture-web",id:"fondations/architecture-web",title:"Architecture du Web",description:"Il est facile de tenir les subtilit\xe9s du Web pour acquises alors que nous parcourons quotidiennement divers sites Web. Nous entrons une URL dans notre navigateur, et en quelques secondes, tout un site Web appara\xeet. Mais avez-vous d\xe9j\xe0 cess\xe9 de vous interroger sur la technologie et les processus qui rendent cela possible? Cet article explore les divers composants et technologies qui font de l'exp\xe9rience apparemment sans effort d'acc\xe8s au Web une r\xe9alit\xe9.",source:"@site/docs/fondations/architecture-web.md",sourceDirName:"fondations",slug:"/fondations/architecture-web",permalink:"/docs/fondations/architecture-web",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fondations/architecture-web.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Architecture du Web"},sidebar:"tutorialSidebar",previous:{title:"Fondations",permalink:"/docs/category/fondations"},next:{title:"Front-end",permalink:"/docs/category/front-end"}},o={},l=[{value:"Que se passe-t-il lorsque nous essayons d&#39;acc\xe9der \xe0 un site Web",id:"que-se-passe-t-il-lorsque-nous-essayons-dacc\xe9der-\xe0-un-site-web",level:2},{value:"Que sont les clients et les serveurs?",id:"que-sont-les-clients-et-les-serveurs",level:2},{value:"Qu&#39;est-ce qu&#39;une URL et comment est-elle r\xe9solue?",id:"quest-ce-quune-url-et-comment-est-elle-r\xe9solue",level:2},{value:"\xc9tablissement de protocoles",id:"\xe9tablissement-de-protocoles",level:2},{value:"Que se passe-t-il ensuite apr\xe8s que notre navigateur a re\xe7u la r\xe9ponse?",id:"que-se-passe-t-il-ensuite-apr\xe8s-que-notre-navigateur-a-re\xe7u-la-r\xe9ponse",level:2}],d={toc:l},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,s.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"comprendre-larchitecture-du-web-un-guide-sur-le-fonctionnement-dinternet"},"Comprendre l'architecture du Web: un guide sur le fonctionnement d'Internet"),(0,r.kt)("p",null,"Il est facile de tenir les subtilit\xe9s du Web pour acquises alors que nous parcourons quotidiennement divers sites Web. Nous entrons une URL dans notre navigateur, et en quelques secondes, tout un site Web appara\xeet. Mais avez-vous d\xe9j\xe0 cess\xe9 de vous interroger sur la technologie et les processus qui rendent cela possible? Cet article explore les divers composants et technologies qui font de l'exp\xe9rience apparemment sans effort d'acc\xe8s au Web une r\xe9alit\xe9."),(0,r.kt)("p",null,"De plus, vous n'avez pas besoin de savoir comment le Web fonctionne pour \xe9crire du code. Mais cela vous aidera \xe0 comprendre l'ensemble du syst\xe8me."),(0,r.kt)("h2",{id:"que-se-passe-t-il-lorsque-nous-essayons-dacc\xe9der-\xe0-un-site-web"},"Que se passe-t-il lorsque nous essayons d'acc\xe9der \xe0 un site Web"),(0,r.kt)("p",null,"Nous savons que le code de notre site Web n'est pas stock\xe9 sur notre ordinateur. Nous devons introduire le code dans notre ordinateur ou navigateur o\xf9 il est conserv\xe9 pour visiter le site Web. Comment cela se produit-il?"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mod\xe8le client-server",src:n(2698).Z,width:"1541",height:"342"})),(0,r.kt)("p",null,"Le processus est assez simple. Lorsque nous entrons une URL dans notre navigateur, le navigateur envoie une demande de donn\xe9es n\xe9cessaires au serveur. Le serveur r\xe9pond ensuite en renvoyant le code et les donn\xe9es du site. Le navigateur interpr\xe8te les codes et affiche le site Web \xe0 consulter. Ce processus est connu sous le nom de demande-r\xe9ponse architecture de mod\xe8le ou de serveur client."),(0,r.kt)("h2",{id:"que-sont-les-clients-et-les-serveurs"},"Que sont les clients et les serveurs?"),(0,r.kt)("p",null,"Les clients sont ces appareils connect\xe9s \xe0 Internet, comme nos t\xe9l\xe9phones ou ordinateurs connect\xe9s au r\xe9seau mobile ou au wi-fi. Le client est l'endroit o\xf9 se d\xe9roule toute l'interaction utilisateur. Dans le contexte du Web, un client est g\xe9n\xe9ralement un logiciel d'acc\xe8s au Web comme un navigateur, tel que Chrome, Firefox ou Safari, qui demande des pages Web et d'autres ressources \xe0 partir d'un serveur. Le navigateur Web ( client ) re\xe7oit le code du site Web, puis le rend \xe0 l'utilisateur pour le visualiser. Bien que nous acc\xe9dions au site Web \xe0 partir du navigateur, nous pouvons traiter l'ensemble de l'appareil comme un client de l'architecture client-serveur."),(0,r.kt)("p",null,"\xc0 l'autre extr\xe9mit\xe9 du spectre se trouvent des serveurs, des ordinateurs sp\xe9cialis\xe9s con\xe7us pour stocker et g\xe9rer des donn\xe9es, des sites Web et des applications Web. Ces serveurs sont appel\xe9s tels car ils servent du code ou des donn\xe9es en r\xe9ponse aux demandes des clients. Un serveur attend que les demandes arrivent des clients, traite la demande, puis renvoie les informations demand\xe9es. Il existe diff\xe9rents types de serveurs, tels que les serveurs Web, les serveurs de fichiers et les serveurs de base de donn\xe9es, chacun avec sa fonction sp\xe9cifique. Dans cet article, nous nous concentrerons principalement sur les serveurs Web."),(0,r.kt)("h2",{id:"quest-ce-quune-url-et-comment-est-elle-r\xe9solue"},"Qu'est-ce qu'une URL et comment est-elle r\xe9solue?"),(0,r.kt)("p",null,"Une URL ( Uniform Resource Locator ) est une cha\xeene de caract\xe8res qui sp\xe9cifie l'emplacement d'une ressource sur Internet. Les URL sont utilis\xe9es pour identifier et localiser des pages Web, des images, des vid\xe9os et d'autres ressources sur le World Wide Web. Les URL contiennent g\xe9n\xe9ralement plusieurs parties, y compris un protocole, un nom de domaine et un chemin."),(0,r.kt)("p",null,"parties d'URL"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Les diff\xe9rentes parties d&#39;une URL",src:n(9970).Z,width:"1524",height:"405"})),(0,r.kt)("p",null,"Le protocole est la m\xe9thode utilis\xe9e pour transf\xe9rer des donn\xe9es sur Internet. Le protocole le plus utilis\xe9 pour le Web est HTTP ( Hypertext Transfer Protocol ) ou HTTPS ( HTTP Secure ), une version plus s\xe9curis\xe9e de HTTP qui crypte les donn\xe9es pour plus de s\xe9curit\xe9.\nLe nom de domaine est le nom unique qui identifie un site Web ou un serveur Web sur Internet. Pour acc\xe9der \xe0 un site Web, le nom est saisi dans la barre d'adresse du navigateur. Par exemple, \u201c github.com \u201d est le nom de domaine du site Web de Github.\nLe chemin indique l'emplacement de la ressource au sein du serveur. Cette partie URL comprend g\xe9n\xe9ralement le nom de fichier ou le dossier contenant la ressource, tel que \u201c \xe0 propos de \u201d ou \u201c contact. \u201d Par exemple, \u201c github.com/about \u201d est le chemin d'acc\xe8s \xe0 la page du site Web \u201c github.com. \u201d\nFacultativement, l'URL peut \xe9galement inclure une cha\xeene de requ\xeate, un ensemble de caract\xe8res ajout\xe9s \xe0 la fin de l'URL qui contient des informations ou des param\xe8tres suppl\xe9mentaires pour la ressource."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Recherche DNS",src:n(9978).Z,width:"1646",height:"1221"})),(0,r.kt)("p",null,"Il est int\xe9ressant de noter que le nom de domaine que nous entrons dans le navigateur n'est pas l'adresse physique r\xe9elle du site Web. Chaque site Web et appareil connect\xe9 \xe0 Internet a une adresse IP unique, une \xe9tiquette num\xe9rique souvent difficile \xe0 retenir. Pour le rendre plus facile \xe0 retenir, nous utilisons des noms de domaine. Lorsqu'une URL est entr\xe9e, le navigateur envoie d'abord une demande au serveur DNS ( Domain Name System ), qui correspond au nom de domaine \xe0 l'adresse IP correspondante du site Web. C'est ce qu'on appelle DNS Lookup. Ce processus est facilit\xe9 par votre fournisseur de services Internet et renvoie l'adresse IP, y compris le num\xe9ro de port du serveur accessible."),(0,r.kt)("h2",{id:"\xe9tablissement-de-protocoles"},"\xc9tablissement de protocoles"),(0,r.kt)("p",null,"Lorsque nous entrons une adresse Web et obtenons l'adresse IP r\xe9elle du site Web dans le navigateur, une connexion connue sous le nom de socket TCP / IP est \xe9tablie entre le navigateur et le serveur. Cette connexion reste active pendant le transfert de fichiers du serveur vers le client."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connexion TCP/IP",src:n(6223).Z,width:"1541",height:"342"})),(0,r.kt)("p",null,"TCP ( Transmission Control Protocol ) et IP ( Internet Protocol ) sont deux des principaux protocoles qui composent la suite du protocole Internet ( IP ). Ensemble, ils jettent les bases de la communication sur Internet."),(0,r.kt)("p",null,"TCP ( Transmission Control Protocol ) est l'un des principaux protocoles de la suite de protocoles Internet ( TCP / IP ), qui est utilis\xe9 pour \xe9tablir et maintenir des connexions entre les appareils sur un r\xe9seau. La fonction principale de TCP est d'assurer la livraison fiable des donn\xe9es entre les appareils."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transmission de paquets",src:n(1781).Z,width:"1541",height:"342"})),(0,r.kt)("p",null,"TCP d\xe9compose les donn\xe9es en petits morceaux appel\xe9s paquets avant leur envoi sur le r\xe9seau. Chaque paquet est \xe9tiquet\xe9 avec un en-t\xeate TCP, qui comprend les num\xe9ros de port source et de destination, et un en-t\xeate IP qui se compose des adresses IP source et de destination, pour l'identifier. Chaque paquet contient \xe9galement un num\xe9ro de s\xe9quence qui permet au dispositif r\xe9cepteur de remonter les paquets dans le bon ordre. Si un paquet est perdu ou corrompu pendant la transmission, TCP retransmettra automatiquement le paquet pour s'assurer que tous les paquets sont re\xe7us correctement."),(0,r.kt)("p",null,"Ce protocole fournit \xe9galement un contr\xf4le des flux et un contr\xf4le de la congestion. Le contr\xf4le des flux garantit que l'exp\xe9diteur ne submerge pas le r\xe9cepteur en envoyant trop de donn\xe9es \xe0 la fois, et le contr\xf4le de la congestion garantit que le r\xe9seau ne devient pas trop charg\xe9 par trop de trafic."),(0,r.kt)("p",null,"Il s'agit d'un protocole orient\xe9 connexion qui \xe9tablit une connexion virtuelle entre l'exp\xe9diteur et le r\xe9cepteur avant d'\xe9changer des donn\xe9es. Une fois la connexion \xe9tablie, les deux parties peuvent \xe9changer des donn\xe9es de mani\xe8re fiable et ordonn\xe9e."),(0,r.kt)("p",null,"TCP est largement utilis\xe9 dans de nombreuses applications, notamment la navigation sur le Web, le courrier \xe9lectronique, le transfert de fichiers et les jeux en ligne. Il s'agit d'un protocole fiable et efficace qui garantit que les donn\xe9es sont fournies correctement et dans le bon ordre, ce qui en fait une partie essentielle de l'infrastructure Internet."),(0,r.kt)("p",null,"De l'autre c\xf4t\xe9, IP adresse et achemine les paquets entre les appareils d'un r\xe9seau. Il attribue une adresse IP unique \xe0 chaque appareil connect\xe9 \xe0 Internet. Lorsque les donn\xe9es sont envoy\xe9es d'un appareil \xe0 un autre, le protocole IP d\xe9termine l'adresse de destination et le meilleur itin\xe9raire pour les donn\xe9es \xe0 prendre. Son travail consiste \xe0 envoyer et \xe0 acheminer tous les paquets via Internet."),(0,r.kt)("p",null,"TCP et IP travaillent ensemble pour fournir une communication fiable et efficace sur Internet. IP adresse et achemine les paquets de donn\xe9es, tandis que TCP garantit que les donn\xe9es sont fournies correctement et dans le bon ordre. Il s'agit de protocoles de communication ou du syst\xe8me de contr\xf4le des fondamentaux d'Internet qui d\xe9finit et d\xe9finit les r\xe8gles de d\xe9placement des donn\xe9es sur le Web. Le protocole de communication fixe les r\xe8gles de communication de deux ou plusieurs parties en leur sein."),(0,r.kt)("p",null,"Une fois la connexion \xe9tablie, le processus de communication commence par une requ\xeate HTTP envoy\xe9e depuis le navigateur. HTTP, ou Hypertext Transfer Protocol (protocole de transfert hypertexte), est le protocole standard de transmission de donn\xe9es sur Internet et est l'\xe9pine dorsale du World Wide Web. Il permet au navigateur d'envoyer des demandes \xe0 un serveur Web et de recevoir la r\xe9ponse du serveur."),(0,r.kt)("p",null,"HTTP est bas\xe9 sur un mod\xe8le de r\xe9ponse \xe0 une demande dont nous avons discut\xe9 pr\xe9c\xe9demment, dans lequel un client ( tel qu'un navigateur Web ) envoie une demande \xe0 un serveur, et le serveur envoie une r\xe9ponse."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ent\xeate de requ\xeate r\xe9ponse",src:n(7145).Z,width:"2303",height:"1929"})),(0,r.kt)("p",null,"HTTP Request comporte quelques parties, qui incluent la ligne de d\xe9part ( M\xe9thode HTTP + cible de demande + Version HTTP ), en-t\xeate de requ\xeate HTTP et corps de demande."),(0,r.kt)("p",null,"Les m\xe9thodes HTTP les plus courantes sont GET, qui demande une ressource au serveur, et POST, qui envoie des donn\xe9es au serveur \xe0 traiter. Il existe \xe9galement des m\xe9thodes PUT et Patch qui sont utilis\xe9es pour modifier les donn\xe9es."),(0,r.kt)("p",null,"HTTP se trouve au-dessus de la pile de protocoles TCP / IP. Il est g\xe9n\xe9ralement utilis\xe9 avec les protocoles SSL / TLS ( Secure Sockets Layer / Transport Layer Security ) pour fournir une communication s\xe9curis\xe9e et crypt\xe9e sur Internet."),(0,r.kt)("p",null,"Lorsque le serveur re\xe7oit la demande, il la traite et renvoie une r\xe9ponse HTTP. La r\xe9ponse HTTP est compos\xe9e de plusieurs parties:"),(0,r.kt)("p",null,"La ligne de d\xe9marrage comprend la version HTTP, le code d'\xe9tat et le message. La version HTTP indique la version du protocole HTTP utilis\xe9e. Le code d'\xe9tat est un code num\xe9rique \xe0 trois chiffres qui indique le r\xe9sultat de la demande. Le message d'\xe9tat est une br\xe8ve description textuelle du code d'\xe9tat."),(0,r.kt)("p",null,"L'en-t\xeate de r\xe9ponse HTTP contient des informations suppl\xe9mentaires sur la r\xe9ponse, telles que le type de contenu dans le corps de r\xe9ponse, la date et l'heure d'envoi de la r\xe9ponse et le nom du serveur."),(0,r.kt)("p",null,"Le corps de r\xe9ponse contient les donn\xe9es r\xe9elles ou le fichier HTML qui ont \xe9t\xe9 demand\xe9s."),(0,r.kt)("p",null,"Le d\xe9veloppeur principal est responsable de la sp\xe9cification des donn\xe9es incluses dans l'en-t\xeate de r\xe9ponse. Ces donn\xe9es peuvent inclure des \xe9l\xe9ments tels que le type de contenu, la date et l'heure et le nom du serveur. Dans le corps de r\xe9ponse, nous obtenons les donn\xe9es ou le fichier HTML demand\xe9s dans la demande d'origine. Si le serveur ne peut pas localiser la page demand\xe9e, il enverra un message d'erreur HTTP 404 indiquant que la page n'a pas pu \xeatre trouv\xe9e."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"R\xe9cap client serveur architecture",src:n(3373).Z,width:"3197",height:"2102"})),(0,r.kt)("h2",{id:"que-se-passe-t-il-ensuite-apr\xe8s-que-notre-navigateur-a-re\xe7u-la-r\xe9ponse"},"Que se passe-t-il ensuite apr\xe8s que notre navigateur a re\xe7u la r\xe9ponse?"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fonctionnement rendu navigateur",src:n(7690).Z,width:"2852",height:"1213"})),(0,r.kt)("p",null,"Lorsqu'un navigateur Web re\xe7oit un document HTML ( Hypertext Markup Language ) d'un serveur Web, il analyse le document pour le convertir en une repr\xe9sentation visuelle qui peut \xeatre affich\xe9e \xe0 l'utilisateur. Le processus d'analyse d'un document HTML comprend les \xe9tapes suivantes:"),(0,r.kt)("p",null,"Le navigateur commence par lire le code HTML de haut en bas, ligne par ligne."),(0,r.kt)("p",null,"En lisant le code, le navigateur recherche des balises, qui sont utilis\xe9es pour d\xe9finir la structure et la mise en page du document. Par exemple, la balise < html > indique le d\xe9but d'un document HTML, et les balises < head > et < body > indiquent le d\xe9but des sections t\xeate et corps du document, respectivement. Le navigateur comprend comment interpr\xe9ter le code par un algorithme d'analyse HTML."),(0,r.kt)("p",null,"Lorsque le navigateur rencontre des balises, il cr\xe9e des \xe9l\xe9ments correspondants dans le mod\xe8le d'objet de document ( DOM ), une repr\xe9sentation arborescente du document HTML. Le navigateur l'utilise pour comprendre comment la page doit \xeatre rendue et affich\xe9e. Chaque \xe9l\xe9ment du DOM correspond \xe0 une seule balise dans le code HTML, et nous pouvons manipuler ces \xe9l\xe9ments en scriptant un langage comme JavaScript."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Requ\xeate et r\xe9ponse navigateur",src:n(2326).Z,width:"3456",height:"2032"})),(0,r.kt)("p",null,"Le navigateur analyse le document pour des actifs suppl\xe9mentaires afin de rendre la page correctement. Ces actifs peuvent inclure des fichiers CSS, des fichiers JavaScript, des images et d'autres fichiers multim\xe9dias. Lorsque le navigateur rencontre une r\xe9f\xe9rence \xe0 un actif dans le document HTML, il envoie une demande suppl\xe9mentaire au serveur pour r\xe9cup\xe9rer cet actif. Le navigateur r\xe9p\xe9tera ce processus pour chaque actif qu'il rencontre. Par exemple, si le document HTML est li\xe9."),(0,r.kt)("p",null,"Pour un fichier CSS, le navigateur demandera au serveur de r\xe9cup\xe9rer ce fichier. Le fichier CSS sera ensuite analys\xe9 et utilis\xe9 pour appliquer les styles visuels aux \xe9l\xe9ments d\xe9finis dans le HTML. De m\xeame, s'il y a des images sur la page, le navigateur enverra une demande au serveur pour chaque image et les rendra sur la page. Il est important de noter que le navigateur ne t\xe9l\xe9chargera et n'analysera que les actifs n\xe9cessaires pour la fen\xeatre actuelle ou la partie visible de la page Web. C'est ce qu'on appelle le chargement paresseux. Lorsque l'utilisateur fait d\xe9filer la page, le navigateur t\xe9l\xe9chargera et analysera les actifs suppl\xe9mentaires au besoin. Ce t\xe9l\xe9chargement et cette analyse d'actifs suppl\xe9mentaires peuvent avoir un impact sur les performances de la page Web, car cela peut prendre du temps pour r\xe9cup\xe9rer et traiter ces fichiers. Par cons\xe9quent,les d\xe9veloppeurs doivent optimiser le chargement de ces actifs pour garantir que la page se charge rapidement et efficacement."),(0,r.kt)("p",null,"Il est important de comprendre que HTML ne fournit pas d'informations sur la fa\xe7on dont un site Web doit appara\xeetre visuellement. Il d\xe9finit uniquement la structure et indique au navigateur les diff\xe9rentes parties du contenu, comme les en-t\xeates, les images et les paragraphes."),(0,r.kt)("p",null,"CSS ( Feuilles de style en cascade ) fournit des informations de style visuel et de pr\xe9sentation pour une page Web. CSS permet aux d\xe9veloppeurs de sp\xe9cifier la police, la couleur, la taille et la position des \xe9l\xe9ments sur une page Web, ainsi que d'autres propri\xe9t\xe9s visuelles. CSS peut \xeatre li\xe9 \xe0 un document HTML et sera utilis\xe9 pour appliquer les styles aux \xe9l\xe9ments d\xe9finis dans le HTML."),(0,r.kt)("p",null,"Le navigateur utilise \xe9galement JavaScript pour ajouter des fonctionnalit\xe9s dynamiques aux pages Web, comme la validation de formulaire et les \xe9l\xe9ments interactifs."),(0,r.kt)("p",null,"Une fois le processus d'analyse termin\xe9, le navigateur rend la repr\xe9sentation visuelle du document HTML, avec laquelle l'utilisateur peut interagir et afficher dans la fen\xeatre du navigateur."),(0,r.kt)("p",null,"Le processus d'analyse est complexe, mais il est effectu\xe9 rapidement et efficacement par des navigateurs Web modernes, permettant aux utilisateurs d'interagir de mani\xe8re transparente avec les pages Web. Apr\xe8s tout analyser, la connexion est ferm\xe9e."),(0,r.kt)("p",null,"C'est tout pour l'instant! Cependant, de nombreux autres processus et technologies complexes font fonctionner Internet. Cet article devrait vous donner un aper\xe7u des parties essentielles du Web, mais gardez \xe0 l'esprit qu'il y a beaucoup plus \xe0 apprendre et \xe0 explorer dans le domaine du Web."),(0,r.kt)("p",null,"Bonne apprentissage!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hackernoon.com/understanding-the-architecture-of-the-web-a-guide-to-how-the-internet-works"},"Article original en anglais"),"\nEcris par Faisal@thefaisal."))}p.isMDXComponent=!0},1781:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/connexion-tcp-ip-paquet-9cffee201646fe8b31da04d241af3859.png"},6223:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/connexion-tcp-ip-34907a30e38b7943511a584220081dc6.png"},7145:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/entete-requete-reponse-ec6ae44f9bd36da302be05ca869d2474.png"},2698:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/model-client-server-9e15b5b7bc703756d8011f8306ebfd34.png"},3373:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/recap-protocoles-a83288ed0b83e4093276b77e86170c3e.png"},9978:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/recherche-dns-815b6c96af80d222bb8be1ab97ecaea6.png"},7690:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rendu-navigateur-95f967b68bc8a45d86fd24790d4a6d23.png"},2326:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/requete-reponse-navigateur-d99920ff37e3005d39c673c7ee853150.png"},9970:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/url-explication-32d93d28d772763ba35913fbc0085dbc.png"}}]);