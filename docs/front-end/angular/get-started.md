---
sidebar_position: 1
---

# Commencer avec Angular

Traduction de https://angular.io/start

Bienvenue dans Angular !

Ce tutoriel vous présente les bases d'Angular en vous guidant à travers la construction d'un site e-commerce avec un catalogue, un panier d'achat et un formulaire de commande.

Pour vous aider à démarrer tout de suite, ce tutoriel utilise une application prête à l'emploi que vous pouvez examiner et modifier de manière interactive sur StackBlitz —sans avoir à configurer un environnement de travail local. StackBlitz est un environnement de développement basé sur un navigateur où vous pouvez créer, enregistrer et partager des projets utilisant une variété de technologies.

## Prérequis

Pour suivre ce tutoriel, vous devez avoir une connaissance de base des technologies suivantes :

- HTML
- JavaScript
- TypeScript

## Faisons un focus sur notre objectif final

Vous construisez des applications Angular avec des composants. Les composants définissent les zones de responsabilité dans l'interface utilisateur qui vous permettent de réutiliser des ensembles de fonctionnalités d'interface utilisateur.

Un composant se compose de trois éléments :

| Partie du composant | Description                                  |
| ------------------- | -------------------------------------------- |
| Class               | Gère les données et les fonctionnalités      |
| Template HTML       | Le HTML qui définit l'interface utilisateur. |
| Style               | Définit ... le style !                       |

Dans ce tuto vous allez créer une application avec les différents composants suivants :

| Composant              | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `<app-root>`           | Le composant racine qui contient tous les autres composants. |
| `<app-top-bar>`        | La barre de navigation.                                      |
| `<app-product-list>`   | La liste des produits.                                       |
| `<app-product-alerts>` | Les alertes de produits.                                     |

<div class="container-img-auto">
  <img
    src={require('./assets/app-components.png').default}
    alt="Les produits sont ajoutés à la liste"
    alt="Les produits sont ajoutés à la liste"
  />
  <figcaption>Rendu final de l'appli</figcaption>
</div>

Voici une base pour pouvoir suivre ce tutoriel :

Ne cherche pas à comprendre dès maintenant le role de chaque fichier, nous allons les détailler ensemble après cette prise en main.
Essaye pour le moment de suivre les indications et de comprendre ce que cela produit comme résultat. Prend des notes au fur et à mesure et n'hésite pas à poser des questions.

**📁 [Projet de base pour commencer le tuto](./assets/sample-project.zip)** (pense à lire le README 😉)

Mais surtout n'oublie pas de t'amuser ! 😄
