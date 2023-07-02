---
sidebar_position: 3
---

# Partie 3 - Gestion des données

Cette étape du tutoriel vous guide dans la création d'un panier d'achat en suivant les phases suivantes :

- Mettre à jour la vue des détails du produit pour inclure un bouton Acheter , qui ajoute le produit actuel à une liste de produits gérés par un service de panier
- Ajoutez un composant de panier,qui affiche les articles dans le panier.
- Ajoutez un composant d'expédition, qui récupère les prix d'expédition pour les articles dans le panier en utilisant `HttpClient` d'Angular pour récupérer les données d'expédition à partir d'un fichier `.json`

## Créer le service de panier d'achat

Dans Angular, un service est une instance d'une classe que vous pouvez mettre à la disposition de n'importe quelle partie de votre application à l'aide du système d'injection de dépendances d'Angular.

Actuellement,les utilisateurs peuvent consulter des informations sur les produits,et l'application peut simuler le partage et les notifications concernant les changements de produits.

L'étape suivante consiste à créer un moyen pour les utilisateurs d'ajouter des produits à un panier. Cette section vous guide à travers l'ajout d'un bouton Acheter et la configuration d'un service de panier pour stocker des informations sur les produits dans le panier.

### Définir un service de panier

Cette section vous CartService dans la création du CartService qui suit les produits ajoutés au panier.

1. Dans le terminal, générez un nouveau service de cart en exécutant la commande suivante :

```bash title=Terminal"
ng generate service cart
```

2. Importez l' interface `Product` de `./products.ts` dans le fichier `cart.service.ts` et dans la classe `CartService`, définissez une propriété `items` pour stocker le tableau des produits actuels dans le panier.

```ts title=src/app/cart.service.ts"
import { Product } from "./products";
import { Injectable } from "@angular/core";
/* . . . */
@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];
  /* . . . */
}
```

3. Définissez des méthodes pour ajouter des articles au panier, renvoyer les articles du panier et effacer les articles du panier.

```ts title=src/app/cart.service.ts"
@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];
  /* . . . */

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  /* . . . */
}
```

- La méthode `addToCart()` ajoute un produit à un tableau d'`items`
- La méthode `getItems()` collecte les articles que les utilisateurs ajoutent au panier et renvoie chaque article avec sa quantité associée
- La méthode `clearCart()` renvoie un tableau vide d'éléments, qui vide le panier

### Utiliser le service de panier

Cette section vous aide à utiliser `CartService` pour ajouter un produit au panier.

1. Dans `product-details.component.ts`, importez le service de panier.

```ts title=src/app/product-details/product-details.component.ts
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Product, products } from "../products";
import { CartService } from "../cart.service";
```

2. Injectez le service cart en l'ajoutant au `constructor()`.

```ts title=src/app/product-details/product-details.component.ts
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
}
```

3. Définissez la méthode `addToCart()`, qui ajoute le produit actuel au panier.

```ts title=src/app/product-details/product-details.component.ts
export class ProductDetailsComponent implements OnInit {
  /* . . . */
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("Votre produit a été ajouté au panier!");
  }
}
```

La méthode `addToCart()` effectue les opérations suivantes :

- Prend le product courant comme argument
- Utilise la CartService `addToCart()` pour ajouter le produit au panier
- Affiche un message indiquant que vous avez ajouté un produit au panier.

4. Dans `product-details.component.html`, ajoutez un bouton avec le texte **Acheter** et liez l'événement `click()` à la méthode `addToCart()`. Ce code met à jour le modèle de détails du produit avec un bouton **Acheter** qui ajoute le produit actuel au panier.

```html title=src/app/product-details/product-details.component.html
<h2>Détails du produit</h2>

<div *ngIf="product">
  <h3>{{ product.name }}</h3>
  <h4>{{ product.price | currency }}</h4>
  <p>{{ product.description }}</p>
  <button type="button" (click)="addToCart(product)">Acheter</button>
</div>
```

5. Vérifiez que le nouveau bouton **Acheter** apparaît comme prévu en actualisant l'application et en cliquant sur le nom d'un produit pour afficher ses détails.

<div class="container-img-50">
  <img
    src={require('./assets/product-details-with-buy-btn.png').default}
    alt="Le bouton Acheter est ajouté à la page Détails"
  />
  <figcaption>Le bouton Acheter est ajouté à la page Détails</figcaption>
</div>

6. Cliquez sur le bouton Acheter pour ajouter le produit à la liste des articles stockés dans le panier et afficher un message de confirmation.

<div class="container-img-50">
  <img
    src={require('./assets/notify-product-add-cart.png').default}
    alt="Notification d'ajout du produit au panier"
  />
  <figcaption>Notification d'ajout du produit au panier</figcaption>
</div>

---

## Créer la vue panier

Pour que les clients puissent voir leur panier,vous pouvez créer la vue du panier en deux étapes :

1. Créez un composant de panier et configurez le routage vers le nouveau composant.
2. Affichez les éléments du panier.

### Configurer le composant panier

Pour créer la vue du panier, suivez les mêmes étapes que pour créer le `ProductDetailsComponent` et configurer le routage pour le nouveau composant.

1. Générez un nouveau composant nommé cart dans le terminal en exécutant la commande suivante :

```bash title=Terminal
ng generate component cart
```

Cette commande générera le fichier `cart.component.ts` et ses fichiers de modèles et de styles associés.

```ts title=src/app/cart/cart.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {}
```

2. Notez que le `CartComponent` nouvellement créé est ajouté aux declarations du module dans `app.module.ts`.

```ts title=src/app/app.module.ts
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  /* . . . */
```

3. Toujours dans `app.module.ts`, ajoutez une route pour le composant `CartComponent`, avec un `path` de `cart`.

```ts title=src/app/app.module.ts
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
    ])
  ],
  /* . . . */
```

4. Mettez à jour le bouton **Paiement** afin qu'il soit acheminé vers l'URL `/cart` . Dans `top-bar.component.html`, ajoutez une directive `routerLink` pointant vers `/cart`.

```html title=src/app/top-bar/top-bar.component.html
<a routerLink="/cart" class="button fancy-button">
  <i class="material-icons">shopping_cart</i>Paiement
</a>
```

5. Vérifiez que le nouveau `CartComponent` fonctionne comme prévu en cliquant sur le bouton **Paiement** . Vous pouvez voir le texte par défaut "cart works!", et l'URL a le modèle (http://localhost:4200/cart)[http://localhost:4200/cart].

<div class="container-img-50">
  <img
    src={require('./assets/cart-works.png').default}
    alt="Le composant panier fonctionne"
  />
  <figcaption>Le composant panier fonctionne</figcaption>
</div>

### Afficher les éléments du panier

Cette section vous montre comment utiliser le service de panier pour afficher les produits dans le panier.

1. Dans `cart.component.ts` , importez le `CartService` à partir du fichier `cart.service.ts`.

```ts title=src/app/cart/cart.component.ts
import { Component } from "@angular/core";
import { CartService } from "../cart.service";
```

2. Injectez le CartService pour que le CartComponent puisse l'utiliser en l'ajoutant au constructor() .

```ts title=src/app/cart/cart.component.ts
export class CartComponent {
  constructor(private cartService: CartService) {}
}
```

3. Définissez la propriété `items` pour stocker les produits dans le panier.

```ts title=src/app/cart/cart.component.ts
export class CartComponent {
  items = this.cartService.getItems();

  constructor(private cartService: CartService) {}
}
```

Ce code définit les éléments à l'aide de la CartService getItems() . Vous avez défini cette méthode lorsque vous avez créé cart.service.ts .

4. Mettez à jour le modèle de panier avec une en-tête et utilisez une `<div>` avec un `*ngFor` pour afficher chacun des articles du panier avec son nom et son prix. Le modèle `CartComponent` résultant est le suivant.

```html title=src/app/cart/cart.component.html
<h3>Panier</h3>

<div class="cart-item" *ngFor="let item of items">
  <span>{{ item.name }}</span>
  <span>{{ item.price | currency }}</span>
</div>
```

5. Vérifiez que votre panier fonctionne comme prévu :
   - Cliquez sur **Mon magasin**.
   - Cliquez sur le nom d'un produit pour afficher ses détails.
   - Cliquez sur **Acheter** pour ajouter le produit au panier.
   - Cliquez sur **Paiement** pour voir le panier.

<div class="container-img-50">
  <img
    src={require('./assets/cart-full.png').default}
    alt="Panier avec plein de produits"
  />
  <figcaption>Panier avec plein de produits</figcaption>
</div>

---

## Récupérer les prix d'expédition

Les serveurs renvoient souvent des données sous la forme d'un flux. Les flux sont utiles car ils facilitent la transformation des données renvoyées et la modification de la façon dont vous demandez ces données. Angular HttpClient est un moyen intégré de récupérer des données à partir d'API externes et de les fournir à votre application sous forme de flux un peu comme la fonction `fetch()`.

Cette section vous montre comment utiliser `HttpClient` pour récupérer les prix d'expédition à partir d'un fichier externe.

L'application que vous construsez pour ce tuto est livrée avec des données d'expédition prédéfinies dans le fichier `assets/shipping.json`. Utilisez ces données pour ajouter les prix d'expédition des articles dans le panier.

```json title=src/assets/shipping.json
[
  {
    "type": "De nuit",
    "price": 25.99
  },
  {
    "type": "Livraison 2 jours",
    "price": 9.99
  },
  {
    "type": "Voie postale",
    "price": 2.99
  }
]
```

### Configurer AppModule pour utiliser HttpClient

Pour utiliser le `HttpClient` d'Angular, vous devez configurer votre application pour utiliser `HttpClientModule`.

Le `HttpClientModule` d'Angular enregistre les fournisseurs dont votre application a besoin pour utiliser le service `HttpClient` dans toute votre application.

1. Dans `app.module.ts`, importez `HttpClientModule` à partir du package `@angular/common/http` en haut du fichier avec les autres importations. Comme il existe un certain nombre d'autres importations, cet extrait de code les omet par souci de concision. Assurez-vous de laisser les importations existantes en place.

```ts title=src/app/app.module.ts
import { HttpClientModule } from "@angular/common/http";
```

2. Pour enregistrer les fournisseurs `HttpClient` d'Angular globalement (pour tout les composants de l'application), ajoutez `HttpClientModule` au tableau d'`imports`.

```ts title=src/app/app.module.ts
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule, // <- ICI
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Configurer `CartService` pour utiliser `HttpClient`

L'étape suivante consiste à injecter le service `HttpClient` dans votre service afin que votre application puisse récupérer des données et interagir avec des API et des ressources externes.

1. Dans `cart.service.ts`, importez `HttpClient` à partir du package `@angular/common/http`.

```ts title=src/app/cart/cart.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./products";
```

2. Injectez HttpClient dans le `constructor()` de `CartService` .

```ts title=src/app/cart/cart.service.ts
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}
  /* . . . */
}
```

### Configurez `CartService` pour obtenir les prix d'expédition

Pour obtenir les données d'expédition, à partir de `shipping.json`, vous pouvez utiliser la méthode `get()` de `HttpClient`.

1. Dans `cart.service.ts`, sous la méthode `clearCart()`, définissez une nouvelle méthode `getShippingPrices()` qui utilise la méthode `get()` de `HttpClient`.

```ts title=src/app/cart/cart.service.ts
export class CartService {
  /* . . . */
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
```

---

## Créer un composant d'expédition

Maintenant que vous avez configuré votre application pour récupérer les données d'expédition,vous pouvez créer un endroit pour afficher ces données.

1. Générez un composant de panier nommé shipping dans le terminal en exécutant la commande suivante :

```bash title=Terminal
ng generate component shipping
```

Cette commande générera le fichier `shipping.component.ts` et les fichiers de modèles et de styles associés.

```ts title=src/app/shipping/shipping.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent {}
```

2. Dans `app.module.ts`, ajoutez une route pour l'expédition. Spécifiez un path `shipping` et un composant de `ShippingComponent`.

```ts title=src/app/app.module.ts
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Il n'y a pas encore de lien vers le nouveau composant d'expédition, mais vous pouvez visionner ce composanten entrant l'URL spécifiée par sa route. L'URL d'affichage de ce composant est : [http://localhost:4200/shipping](http://localhost:4200/shipping).

### Configuration du CartService ShippingComponent pour utiliser CartService

Cette section vous guide dans la modification de ShippingComponent pour récupérer les données d'expédition via HTTP à partir du fichier `shipping.json`.

1. Dans `shipping.component.ts`, importez `CartService`.

```ts title=src/app/shipping/shipping.component.ts
import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { CartService } from "../cart.service";
```

2. Injectez le service cart dans le constructor() ShippingComponent () .

```ts title=src/app/shipping/shipping.component.ts
/* . . . */
  constructor(private cartService: CartService) { }
/* . . . */
```

3. Définissez une propriété `shippingCosts` dont la valeur sera initialisée à l'aide de la méthode `getShippingPrices()` de `CartService`. Initialisez la propriété `shippingCosts` dans la méthode `ngOnInit()`.

```ts title=src/app/shipping/shipping.component.ts
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
```

4. Mettez à jour le modèle `ShippingComponent` pour afficher les types d'expédition et les prix à l'aide d'une pipe `async`.

```html title=src/app/shipping/shipping.component.html
<h3>Prix d'expédition</h3>

<div class="shipping-item" *ngFor="let shipping of shippingCosts | async">
  <span>{{ shipping.type }}</span>
  <span>{{ shipping.price | currency }}</span>
</div>
```

La pipe async renvoie la dernière valeur d'un flux de données et continue de le faire pendant toute la durée de vie d'un composant donné. Lorsque Angular détruit ce composant, la canal `async` s'arrête automatiquement.

5. Ajoutez un lien de la vue `ShippingComponent` dans la page `CartComponent` .

```html title=src/app/cart/cart.component.hmtl
<h3>Panier</h3>

<p>
  <a routerLink="/shipping">Prix d'expédition</a>
</p>

<div class="cart-item" *ngFor="let item of items">
  <span>{{ item.name }}</span>
  <span>{{ item.price | currency }}</span>
</div>
```

6. Cliquez sur le bouton **Paiement** pour voir le panier mis à jour. N'oubliez pas que changer l'application provoque l'actualisation de l'aperçu, ce qui vide le panier.

<div class="container-img-50">
  <img
    src={require('./assets/cart-shipping-link-added.png').default}
    alt="Ajout du lien de la page Prix d'Expédition"
  />
  <figcaption>Ajout du lien de la page Prix d'Expédition</figcaption>
</div>

7. Cliquez sur le lien pour accéder aux prix d'expédition.

<div class="container-img-50">
  <img
    src={require('./assets/shipping-price.png').default}
    alt="Liste des Prix d'expédition"
  />
  <figcaption>Liste des Prix d'expédition</figcaption>
</div>

---

## C'est quoi la suite ?

Vous disposez maintenant d'une application de magasin avec un catalogue de produits,un panier d'achat et vous pouvez consulter les prix d'expédition.

Pour continuer à explorer Angular :

Continuez vers Formulaires pour la saisie de l'utilisateur pour terminer l'application en ajoutant la vue du panier et un formulaire de paiement.
