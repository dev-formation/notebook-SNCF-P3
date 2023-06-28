---
sidebar_position: 2
---

# Les node modules

## Qu'est-ce qu'un module ?

Un module est un ensemble de fichiers JavaScript (ou TypeScript) qui peuvent être importés dans un autre fichier JavaScript (ou TypeScript).

## Fichier package.json

Le fichier `package.json` est un fichier qui contient les informations du projet et la liste des modules utilisés.

Il est initialiser avec la commande suivante :

```bash
npm init
```

## Installation d'un module

Pour installer un module, il faut utiliser le gestionnaire de paquets npm :

```bash
npm install nom-du-module
```

ou alors sa version raccourcie :

```bash
npm i nom-du-module
```

## Utilisation

Pour utiliser un module, il faut l'importer dans le fichier JavaScript (ou TypeScript) où on souhaite l'utiliser :

```typescript
import { nomVariable } from "nom-du-module";
```
