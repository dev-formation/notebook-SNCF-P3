---
sidebar_position: 1
---

# Visual Studio Code

## Extensions

### ESLint

Permet de vérifier la syntaxe de notre code JavaScript.
[Lien d'installation](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

#### Configuration

Dans un fichier `.eslintrc.json` à la racine de notre projet, on peut configurer ESLint comme ceci :

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```

### French Language Pack for Visual Studio Code

Permet d'avoir l'interface en français.
[Lien d'installation](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-fr)

### Git Graph

Permet de visualiser l'historique de notre projet Git et d'accéder à certaines fonctionnalités de de manière graphique.
[Lien d'installation](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)

### Live server

Permet de lancer un serveur local pour visualiser notre site web. (fonctionne simplement avec notre code vanilla HTML/CSS/JS mais pas avec Angular)
[Lien d'installation](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Live Share

Permet de partager notre éditeur de code avec d'autres personnes et de coder à plusieurs en même temps.
[Lien d'installation](https://marketplace.visualstudio.com/items?itemName=ms-vsliveshare.vsliveshare)

### Materail Icon Theme

Permet d'avoir des icônes plus jolies dans notre explorateur de fichiers. Pratique pour s'y retrouver plus facilement.
[Lien d'installation](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

### Polacode

Permet de prendre des captures d'écran de notre code.
[Lien d'installation](https://marketplace.visualstudio.com/items?itemName=pnp.polacode)

### PostgreSQL

Permet d'avoir un client PostgreSQL directement dans VS Code. Pratique pour tester des requêtes SQL.
[Lien d'installation](https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres)

### Prettier

Permet d'avoir un client PostgreSQL directement dans VS Code. Pratique pour tester des requêtes SQL.
[Lien d'installation](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### Configuration

Dans un fichier `.prettierrc` à la racine de notre projet, on peut configurer Prettier comme ceci :

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false
}
```

### Pretty TypeScript Errors

Permet d'avoir des messages d'erreurs plus clairs et plus jolis.
[Lien d'installation](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

### Thunder Client

Permet de faire des requêtes HTTP directement dans VS Code.
[Lien d'installation](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
