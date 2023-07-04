---
sidebar_position: 4
---

# Partie 4 - Les formulaires pour la saisie des données par l'utilisateur

Cette section vous guide dans l'ajout d'une fonction de paiement par formulaire afin de recueillir les informations de l'utilisateur.

## Définir le modèle de formulaire de caisse

Cette étape vous montre comment configurer le modèle de formulaire de caisse dans la classe du composant. Le modèle de formulaire détermine le statut du formulaire.

1. Ouvrez le fichier `cart.component.ts`.

2. Importez le service `FormBuilder` à partir du package `@angular/forms`. Ce service fournit des méthodes pratiques pour générer des contrôles (les éléments permettant de composer un formulaire).

```ts title=src/app/cart/cart.component.ts
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";
```

3. Injectez le service `FormBuilder` dans le `constructor()` de `CartComponent`. Ce service fait partie du module `ReactiveFormsModule`, que vous avez déjà importé ou qui a déjà été importé pour vous dans le projet (dans `app.module.ts`).

```ts title=src/app/cart/cart.component.ts
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
}
```

4. Pour collecter le nom et l'adresse de l'utilisateur, utilisez la méthode `group()` de `FormBuilder` pour définir la propriété `checkoutForm` sur un modèle de formulaire contenant : un champ `address` et champs `name`.

```ts title=src/app/cart/cart.component.ts
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
}
```

5. Définissez une méthode `onSubmit()` pour traiter le formulaire. Cette méthode permet aux utilisateurs de soumettre leur nom et leur adresse. De plus, cette méthode utilise la méthode `clearCart()` du `CartService` pour réinitialiser le formulaire et vider le panier.

L'ensemble de la classe de composants de panier se présente comme suit :

```ts title=src/app/cart/cart.component.ts
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    // Traiter les données de paiement ici
    this.items = this.cartService.clearCart();
    console.warn("Votre commande a été envoyée", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
```

---

## Créez le formulaire de commande

Suivez les étapes suivantes pour ajouter un formulaire de paiement au bas de la vue du panier.

1. Au bas de `cart.component.html`, ajoutez un élément HTML `<form>` et un bouton **Acheter**.

2. Utilisez la propriété `formGroup` pour lier `checkoutForm` à la balise HTML `<form>`.

```html title=src/app/cart/cart.component.html
<form [formGroup]="checkoutForm">
  <button class="button" type="submit">Purchase</button>
</form>
```

3. Sur la balise `<form>`, utilisez l'événement `ngSubmit` pour écouter la soumission du formulaire et appelez la méthode `onSubmit()` avec la valeur `checkoutForm` .

```html title=src/app/cart/cart.component.html
<form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()"></form>
```

4. Ajoutez des champs `<input>` pour le `nom` et l'`adresse`, chacun avec un attribut `formControlName` qui permet la liaison avec les propriétés du aux formulaire `checkoutForm` (déclaré dans le `.ts`).

Le composant complet est le suivant :

```html title=src/app/cart/cart.component.html
<h3>Panier</h3>

<p>
  <a routerLink="/shipping">Prix d'expédition</a>
</p>

<div class="cart-item" *ngFor="let item of items">
  <span>{{ item.name }} </span>
  <span>{{ item.price | currency }}</span>
</div>

<form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()">
  <div>
    <label for="nameInput"> Nom </label>
    <input id="nameInput" type="text" formControlName="name" />
  </div>

  <div>
    <label for="addressInput"> Adresse </label>
    <input id="addressInput" type="text" formControlName="address" />
  </div>

  <button class="button" type="submit">J'achète !</button>
</form>
```

Après avoir mis quelques articles dans le panier,les utilisateurs peuvent
passer en revue leurs articles,saisir leur nom et leur adresse,et soumettre leur
achat.

<div class="container-img-50">
  <img
    src={require('./assets/checkout.png').default}
    alt="Vue du panier avec le formulaire d'achat"
  />
  <figcaption>Vue du panier avec le formulaire d'achat</figcaption>
</div>

Pour confirmer la soumission,ouvrez la `console` pour voir un objet contenant le nom et l'adresse que vous avez soumis.

---

## C'est quoi la suite ?

Vous disposez d'une application complète de boutique en ligne avec un catalogue de produits,un panier d'achat et une fonction de paiement.
Félicitations ! 🎉 Vous avez pu suivre ce tutoriel en immitant et en découvrant les possibilités d'Angular.
Evidemment vous ne maitrisez pas encore ce qu'il vient de se passer, mais vous avez une idée un peu plus clair de ce qu'il est possible de faire avec Angular.

<!--
  <div class="container-img-50">
    <img
      src={require('./assets/list-products-with-share.png').default}
      alt="Les boutons Partager sont ajoutés à la liste"
    />
    <figcaption>Les boutons Partager sont ajoutés à la liste</figcaption>
  </div>

-->

```

```
