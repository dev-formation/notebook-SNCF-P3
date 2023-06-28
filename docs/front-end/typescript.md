---
sidebar_position: 5
---

# TypeScript

## Introduction

TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript.

TypeScript est un sur-ensemble de JavaScript qui ajoute des fonctionnalités supplémentaires à ce dernier. Il est possible d'utiliser du code JavaScript dans un fichier TypeScript, mais pas l'inverse.

## Installation

Pour installer TypeScript, il faut utiliser le gestionnaire de paquets npm :

```bash
npm install -g typescript
```

## Compilation

Pour compiler un fichier TypeScript, il faut utiliser la commande suivante :

```bash
tsc nom-du-fichier.ts
```

### Compilation automatique

Pour compiler automatiquement un fichier TypeScript à chaque modification, il faut utiliser la commande suivante :

```bash
tsc nom-du-fichier.ts --watch
```

## Syntaxe

### Variables

```typescript
let nomVariable: type = valeur;
```

## Types

TypeScript permet de définir des types de variables. Cela permet de sécuriser le code et d'éviter les erreurs de type.

### Boolean

```typescript
let isDone: boolean = false;
```

### Number

```typescript
let decimal: number = 6;
```

### String

```typescript
let color: string = "bleu";
```

### Array

```typescript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

### Tuple

```typescript
let x: [string, number];
x = ["hello", 10];
```

### Enum

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

### Any

```typescript
let notSure: any = 4;
notSure = "peut-être une chaîne de caractères";
notSure = false; // ok, finalement c'est un booléen
```

### Void

```typescript
function warnUser(): void {
  console.log("Ceci est un message d'avertissement");
}
```

### Null and Undefined

```typescript
let u: undefined = undefined;
let n: null = null;
```

### Never

```typescript
function error(message: string): never {
  throw new Error(message);
}
```

### Object

```typescript
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

## Interfaces

Les interfaces permettent de définir des objets.

```typescript
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = { firstName: "Chuck", lastName: "Norris" };

document.body.textContent = greeter(user);
```

## Classes

Les classes permettent de définir des objets.

```typescript
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello,  ${this.greeting}`;
  }
}
```

## Modules

Les modules permettent de séparer le code en plusieurs fichiers.

```typescript
// script1.ts
export class SomeClass {
  // ...
}

// script2.ts
import { SomeClass } from "./script1";
```
