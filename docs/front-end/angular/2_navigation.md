---
sidebar_position: 3
---

# Partie 2 - Ajouter la navigation

## Associer un chemin URL à un composant

L'application utilise déjà le Router Angular pour accéder au `ProductListComponent` . Cette section vous montre comment définir une route pour afficher les détails d'un seul produit.

1. Générez un nouveau composant pour les détails du produit. Dans le terminal, générez un nouveau composant `product-details` en exécutant la commande suivante :

```bash title=Terminal"
ng generate component product-details
```

2. Dans `app.module.ts`, ajoutez une route pour les détails du produit, avec un path de `products/:productId` et `ProductDetailsComponent` pour le component .

```typescript title=src/app/app.module.ts"
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

3. Ouvrez product-list.component.html.

4. Modifiez l'ancre de nom de produit pour inclure un `routerLink` avec le `product.id` comme paramètre.

```html title=src/app/product-list/product-list.component.html"
<div *ngFor="let product of products">
  <h3>
    <a
      [title]="'Details du ' + product.name"
      [routerLink]="['/products', product.id]"
    >
      {{ product.name }}
    </a>
  </h3>

  <!-- . . . -->
</div>
```

La directive `RouterLink` vous aide à personnaliser l'élément d'ancrage. Dans ce cas, la route, ou URL, contient un segment fixe, `/products` . Le segment final est variable, insérant la propriété `id` du produit actuel. Par exemple, l'URL d'un produit avec un `id` de 1 sera donc `http://localhost:4200/products/1`.

1. Vérifiez que le routeur fonctionne comme prévu en cliquant sur le nom du produit. L'application doit afficher le `ProductDetailsComponent` , qui indique actuellement "product-details works!"

Notez que l'URL dans la fenêtre d'aperçu change. Le segment final est `products/#` où `#` est le numéro de l'itinéraire sur lequel vous avez cliqué.

<div class="container-img-50">
  <img
    src={require('./assets/products-details-works.png').default}
    alt="Affichage de la page http://localhost:4200/products/1"
  />
  <figcaption>Affichage de la page http://localhost:4200/products/1</figcaption>
</div>

## Voir les détails du produit

Le `ProductDetailsComponent` gère l'affichage de chaque produit. Le routeur Angular affiche les composants en fonction de l'URL du navigateur et de vos routes définis .

Dans cette section, vous utiliserez le routeur Angular pour combiner les données des `products` et les informations de route afin d'afficher les détails spécifiques de chaque produit.

1. Dans `product-details.component.ts` , importez `ActivatedRoute` depuis `@angular/router` et le tableau `products` depuis `../products`.

```ts title='src/app/product-details/product-details.component.ts'
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Product, products } from "../products";
```

2. Définissez la propriété du `product`.

```ts title='src/app/product-details/product-details.component.ts'
export class ProductDetailsComponent implements OnInit {

product: Product | undefined;
/_ ... _/
}

```

3. Injectez `ActivatedRoute` dans le `constructor()` en ajoutant `private route: ActivatedRoute` comme argument entre les parenthèses du constructeur.

```ts title='src/app/product-details/product-details.component.ts'
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}
}
```

`ActivatedRoute` est spécifique à chaque composant chargé par le routeur Angular. `ActivatedRoute` contient des informations sur la route et les paramètres de la route.

En injectant `ActivatedRoute`, vous configurez le composant pour utiliser un service. La prochaine étape (Gestion des données) couvre les services plus en détail.

4. Dans la méthode `ngOnInit()`, extrayez le `productId` des paramètres de route et recherchez le produit correspondant dans le tableau `products`.

```ts title='src/app/product-details/product-details.component.ts'
ngOnInit() {
// Récupère d'abord l'identifiant du produit de la route actuelle.
const routeParams = this.route.snapshot.paramMap;
const productIdFromRoute = Number(routeParams.get('productId'));

// Trouver le produit qui correspond à l'identifiant fourni dans route.
this.product = products.find(product => product.id === productIdFromRoute);
}
```

Les paramètres de route correspondent aux variables de chemin que vous définissez dans la route. Pour accéder aux paramètres de la route, nous utilisons `route.snapshot`, qui est `ActivatedRouteSnapshot` qui contient des informations sur la route active à ce moment particulier. L'URL qui correspond à l'itinéraire fournit le `productId`. Angular utilise le `productId` pour afficher les détails de chaque produit unique.

5. Mettez à jour le modèle `ProductDetailsComponent` pour afficher les détails du produit avec un `*ngIf`. Si un produit existe, le `<div>` s'affiche avec un nom, un prix et une description.

```html title='src/app/product-details/product-details.component.html'
<h2>Détails du produit</h2>

<div *ngIf="product">
  <h3>{{ product.name }}</h3>
  <h4>{{ product.price | currency }}</h4>
  <p>{{ product.description }}</p>
</div>
```

La ligne,
`<h4>{{ product.price | currency }}</h4>`, utilise une pipe (prononcez `païpe` 😉) de currency pour transformer `product.price` d'un nombre en une chaîne de devise.

Une pipe est un moyen de transformer des données dans votre
modèle HTML. Lorsque les utilisateurs cliquent sur un nom dans la liste desproduits, le routeur les `ProductDetailsComponent` vers l'URL distincte du produit, affiche le `ProductDetailsComponent` et affiche les détails du produit.

<div class="container-img-50">
  <img
    src={require('./assets/product-details.png').default}
    alt="Détails du produit de la page http://localhost:4200/products/1"
  />
  <figcaption>Détails du produit de la page http://localhost:4200/products/1</figcaption>
</div>

## C'est quoi la suite ?

Vous avez configuré votre application de manière à pouvoir afficher les détails des produits, chacun ayant une URL distincte et ceci de manière complètement dynamique : ici nous avons 3 produits mais cela fonctionne si nous en avions 1 000 .

Dans la prochaine section vous allez ajouter une fonctionnalité de panier d'achat, gérer les données du panier et récupérer des données externes pour les prix d'expédition.
