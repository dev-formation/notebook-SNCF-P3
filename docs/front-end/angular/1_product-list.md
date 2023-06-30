---
sidebar_position: 2
---

# Partie 1 - Gérer les données avec des composants

## Créer la liste des produits

Dans cette section, vous allez mettre à jour l'application pour afficher une liste de produits. Vous utiliserez des données de produits prédéfinies à partir du fichier `products.ts` et des méthodes du fichier `product-list.component.ts`. Cette section vous guide dans la modification du HTML, également appelé template.

1. Dans le dossier product-list, ouvrez le fichier template `product-list.component.html`.
2. Ajoutez ce qu'on appelle une directive structurelle `*ngFor` sur une `<div>`, comme suit.

```html title="src/app/product-list/product-list.component.html"
<h2>Liste de produits</h2>

<div *ngFor="let product of products"></div>
```

Avec `*ngFor`, la `<div>` se répète pour chaque produit de la liste.

Les directives structurelles façonnent ou remodèlent la structure du DOM, en ajoutant, supprimant et manipulant des éléments. Pour plus d'informations sur les directives structurelles, voir [Directives structurelles](https://angular.io/guide/structural-directives).

3. À l'intérieur de la `<div>`, ajoutez un `<h3>` et `{{ product.name }}`. L'instruction `{{ product.name }}` est un exemple de syntaxe d'interpolation d'Angular. L'interpolation `{{ }}` vous permet d'afficher la valeur de la propriété en tant que texte.

```html title="src/app/product-list/product-list.component.html"
<h2>Liste de produits</h2>

<div *ngFor="let product of products">
  <h3>{{ product.name }}</h3>
</div>
```

L'aperçu se met à jour pour afficher le nom de chaque produit de la liste.

<div class="container-img-50">
  <img
    src={require('./assets/list-products.png').default}
    alt="Les produits sont ajoutés à la liste"
  />
  <figcaption>Les produits sont ajoutés à la liste</figcaption>
</div>

1. Pour faire de chaque nom de produit un lien vers les détails du produit, ajoutez l'élément `<a>` autour de `{{ product.name }}`.

2. Définissez le titre sur le nom du produit en utilisant la syntaxe de liaison de propriété `[ ]`, comme suit :

```html title="src/app/product-list/product-list.component.html"
<h2>Liste de produits</h2>

<div *ngFor="let product of products">
  <h3>
    <a [title]="'Détails du '+ product.name"> {{ product.name }} </a>
  </h3>
</div>
```

Sur la page de prévisualisation, passez la souris sur le nom du produit pour afficher le titre. Le titre est le nom du produit précédé de la chaine de caractères "Détails du ". La syntaxe de liaison de propriété `[ ]` vous permet d'attribuer une valeur dynamique à tout attribut (ici title) des éléments html, cool non ?!

<div class="container-img-50">
  <img
    src={require('./assets/hover-list-products.png').default}
    alt="Le titre du produit s'affiche"
  />
  <figcaption>Le titre du produit s'affiche</figcaption>
</div>

6. Ajoutez une description de produit à la liste. Sur une balise `<p>`, utilisez une directive `*ngIf` pour qu'Angular ne crée la balise `<p>` que si le produit actuel a une description.

```html title="src/app/product-list/product-list.component.html"
<h2>Liste de produits</h2>

<div *ngFor="let product of products">
  <h3>
    <a [title]="'Détails du '+ product.name"> {{ product.name }} </a>
  </h3>

  <p *ngIf="product.description">Description: {{ product.description }}</p>
</div>
```

L'application affiche maintenant le nom et la description de chaque produit de la liste. Remarquez que le dernier produit n'a pas de paragraphe de description. Angular ne crée pas l'élément `<p>` car la propriété description du produit est vide.

<div class="container-img-50">
  <img
    src={require('./assets/list-products-with-description.png').default}
    alt="Les descriptions de produits sont ajoutées à la liste"
  />
  <figcaption>Les descriptions de produits sont ajoutées à la liste</figcaption>
</div>

7. Ajoutez un bouton pour que les utilisateurs puissent partager un produit. Liez l'événement `click` du bouton à la méthode `share()` dans `product-list.component.ts`. La liaison d'événement utilise un ensemble de parenthèses, `( )`, autour de l'événement, comme dans l'événement `(click)` sur l'élément `<button>`.

```html title="src/app/product-list/product-list.component.html"
<h2>Liste de produits</h2>

<div *ngFor="let product of products">
  <h3>
    <a [title]="'Détails du '+ product.name"> {{ product.name }} </a>
  </h3>

  <p *ngIf="product.description">Description: {{ product.description }}</p>

  <button type="button" (click)="share()">Partager</button>
</div>
```

Chaque produit a maintenant un bouton Partager.

<div class="container-img-50">
  <img
    src={require('./assets/list-products-with-share.png').default}
    alt="Les boutons Partager sont ajoutés à la liste"
  />
  <figcaption>Les boutons Partager sont ajoutés à la liste</figcaption>
</div>

Cliquez sur un bouton Partager déclenche la méthode `share()` dans `product-list.component.ts`. Cela affiche une fenêtre contextuelle avec le message "Le produit a été partagé !".

L'édition des template vous a permis d'explorer certaines des fonctionnalités les plus populaires d'Angular. Pour plus d'informations, voir [Introduction aux composants et aux modèles](https://angular.io/guide/architecture-components).

---

## Passer des données à un composant enfant

Actuellement, la liste des produits affiche le nom et la description de chaque produit. Le composant ProductListComponent définit également une propriété products qui contient les données importées pour chaque produit du tableau products.ts.

L'étape suivante consiste à créer une nouvelle fonctionnalité d'alerte qui utilise les données du produit de ProductListComponent. L'alerte vérifie le prix du produit et, si le prix est supérieur à 700 $, affiche un bouton Notify Me qui permet aux utilisateurs de s'inscrire pour recevoir des notifications lorsque le produit est en solde.

Cette section vous guide dans la création d'un composant enfant, ProductAlertsComponent, qui peut recevoir des données de son composant parent, ProductListComponent.

1. Ouvrez un second terminal pour pouvoir exécuter ta première commande de génération d'un nouveau composant !
2. Dans le nouveau terminal, génèrez un nouveau composant nommé product-alerts en exécutant la commande suivante :

```bash title="Dans git bash ou un terminal"
ng generate component product-alerts
```

Cette commande génère quatre fichiers :

- Un fichier de spécification de test pour le composant. (dont on ne se servira pas dans ce tutoriel)
- Un fichier de style CSS vide. (product-alerts.component.css)
- Un fichier de modèle HTML. (product-alerts.component.html)
- Un fichier de classe TypeScript. (product-alerts.component.ts)

3. Ouvez le fichier product-alerts.component.ts. Le décorateur `@Component()` indique que la classe suivante est un composant. `@Component()` fournit également des métadonnées sur le composant, notamment son sélecteur, son template et ses styles.

```ts title="src/app/product-alerts/product-alerts.component.ts"
import { Component } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"],
})
export class ProductAlertsComponent {}
```

Les fonctionnalités clés du `@Component()` sont les suivantes :

- Le sélecteur, `app-product-alerts`, identifie le composant. Par convention, les sélecteurs de composants Angular commencent par le préfixe `app-`, suivi du nom du composant.
- Les noms de fichiers de template et de style font référence au HTML et au CSS du composant.
- La définition `@Component()` exporte également la classe, `ProductAlertsComponent`, qui gère les fonctionnalités du composant.

4. Pour configurer ProductAlertsComponent afin de recevoir des données de produit, importez d'abord `Input` de `@angular/core`.

```ts title="src/app/product-alerts/product-alerts.component.ts"
import { Component, Input } from "@angular/core";
import { Product } from "../products";
```

5. Dans la classe `ProductAlertsComponent`, définissez une propriété `@Input()` nommée `product`. Le décorateur `@Input()` indique que la valeur de la propriété `product` proviendra du composant parent, ici `ProductListComponent`.

```ts title="src/app/product-alerts/product-alerts.component.ts"
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
}
```

6. Ouvrez le fichier `product-alerts.component.html`, et remplacez le contenu par un bouton `Alerte moi`, qui n'apparaitra que si le prix du produit est supérieur à 700 $.

```html title="src/app/product-alerts/product-alerts.component.html"
<p *ngIf="product && product.price > 700">
  <button type="button">Alerte moi</button>
</p>
```

1. Le générateur de code a automatiquement ajouté `ProductAlertsComponent` à la liste des déclarations dans AppModule. Vous n'avez pas besoin de modifier AppModule pour utiliser le nouveau composant.

```ts title="src/app/app.module.ts"
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent, // <-- Ajouté automatiquement
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

8. Enfin, pour afficher le bouton `Alerte moi` dans `ProductListComponent`, ajoutez le sélecteur `app-product-alerts` à la fin de la liste des éléments de produit.

```html title="src/app/product-list/product-list.component.html"
//...

<button (click)="share()">Share</button>

<app-product-alerts [product]="product"></app-product-alerts>

//...
```

Le nouveau composant ProductAlertsComponent prend en paramètre d'entrée le produit actuel. Le composant ProductListComponent fournit le produit actuel à la balise ProductAlertsComponent en utilisant la syntaxe de liaison de propriété `[product]`.
Grace à cette syntaxe, le composant ProductAlertsComponent peut accéder au produit actuel et afficher un bouton `Alerte moi` si le prix du produit est supérieur à 700 $.

<div class="container-img-50">
  <img
    src={require('./assets/list-products-with-notify.png').default}
    alt="Les boutons Notifier sont ajoutés à la liste"
  />
  <figcaption>Les boutons Notifier sont ajoutés à la liste</figcaption>
</div>

---

## Partager des informations du composant enfant vers le composant parent

Pour rendre fonctionnel notre bouton `Alerte moi`, nous allons devoir faire remonter l'information du composant enfant vers le composant parent. Le composant `ProductAlertsComponent` va donc devoir émettre un événement lorsque l'utilisateur clique sur le bouton `Alerte moi` afin que le composant `ProductListComponent` puisse réagir à cet événement.

1. Dans `product-alerts.component.ts`, importez `Output` et `EventEmitter` de `@angular/core`.

```ts title="src/app/product-alerts/product-alerts.component.ts"
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../products";
```

2. Déclarez une propriété nommée `notify` avec le décorateur `@Output()` qui stockera une instance d'`EventEmitter()`. Configurer `ProductAlertsComponent` avec un `@Output()`, lui permet d'émettre un événement lorsque la valeur de la propriété `notify` change.

```ts title="src/app/product-alerts/product-alerts.component.ts"
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
```

3. Dans `product-alerts.component.html`, ajoutez un écouteur d'événement `(click)` au bouton `Alerte moi` qui appelle la méthode `notify.emit()`.

```html title="src/app/product-alerts/product-alerts.component.html"
<p *ngIf="product && product.price > 700">
  <button type="button" (click)="notify.emit()">Alerte moi</button>
</p>
```

4. Paramètrez le comportement qui se produit lorsque l'utilisateur clique sur le bouton `Alerte moi`. Le parent, `ProductListComponent`, et non `ProductAlertsComponent`, réagit lorsque l'enfant émet l'événement. Dans `product-list.component.ts`, définis une méthode `onNotify()`, similaire à la méthode `share()`.

```ts title="src/app/product-list/product-list.component.ts"
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert("Le produit a été partagé !");
  }

  onNotify() {
    window.alert("Vous serez notifié lorsque le produit sera en promotion !");
  }
}
```

5. Mettez à jour `ProductListComponent` pour recevoir les données de `ProductAlertsComponent`. Dans `product-list.component.html`, ajoutez un écouteur d'événement `(notify)` à la balise `app-product-alerts`.

```html title="src/app/product-list/product-list.component.html"
//...

<button (click)="share()">Share</button>

<app-product-alerts
  [product]="product"
  (notify)="onNotify()"
></app-product-alerts>

//...
```

6. Cliquez sur le bouton `Alerte moi` pour vérifier que la fenêtre d'alerte s'affiche.

<div class="container-img-50">
  <img
    src={require('./assets/notify-product.png').default}
    alt="Notification produit en solde"
  />
  <figcaption>Notification produit en solde</figcaption>
</div>

---

## C'est quoi la suite ?

Dans cette section, vous avez créé une application qui itère et affiche des données. Vous avez également appris à créer des composants imbriqués et à mettre en place leur communication parent vers enfant (`@Input`) et enfant vers parent (`@Output`).

Dans la prochaine section, vous allez apprendre à créer une page de détails de produit.

<!--
<div class="container-img-50">
  <img
    src={require('./assets/list-products-with-share.png').default}
    alt="Les boutons Partager sont ajoutés à la liste"
  />
  <figcaption>Les boutons Partager sont ajoutés à la liste</figcaption>
</div>

In this section, you've created an application that iterates through data and features components that communicate with each other.

To continue exploring Angular and developing this application:

Continue to In-app navigation to create a product details page. -->
