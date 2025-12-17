## Séquence 3 — Lazy Loading & Composants dynamiques

### Qu’est-ce que le Lazy Loading ?

Le Lazy Loading consiste à charger certaines parties de l’application uniquement lorsqu’elles sont nécessaires, au moment où l’utilisateur navigue vers une route précise.

Dans Angular, cela se fait avec le router en utilisant `loadChildren` ou `loadComponent`.
Cela permet de :

* réduire le temps de chargement initial,
* améliorer les performances,
* garder une application plus modulaire.

Exemple :

```ts
{
  path: 'task',
  loadChildren: () => import('./task/task.routes')
}
```

Ici, la feature `task` n’est chargée que lorsque l’utilisateur visite `/task`.

---

### Structuration d’une application avec `features/`

Une application Angular est plus lisible et maintenable lorsqu’elle est organisée par features (fonctionnalités) plutôt que par types de fichiers.

Chaque feature contient :

* ses composants,
* ses routes,
* ses services si nécessaire.

Exemple de structure :

```
app/
 ├── task/
 │   ├── task.component.ts
 │   ├── task.routes.ts
 │   └── services/
 ├── about/
 │   ├── about.component.ts
 │   └── about.routes.ts
```

Cette organisation facilite le Lazy Loading et rend l’application plus évolutive.

---

### Qu’est-ce qu’un composant dynamique ?

Un composant dynamique est un composant qui n’est pas déclaré directement dans le HTML, mais qui est créé et affiché à la demande, via du code TypeScript.

Il est utile lorsque :

* l’UI dépend d’une action utilisateur,
* le contenu à afficher n’est pas connu à l’avance,
* on veut afficher ou remplacer dynamiquement des composants.

---

### Fonctionnement de `ViewContainerRef` et `createComponent()`

`ViewContainerRef` représente un emplacement dans la vue où Angular peut insérer dynamiquement un composant.

Le fonctionnement est le suivant :

1. On définit un point d’insertion dans le template avec `<ng-container>`
2. On récupère ce conteneur avec `@ViewChild`
3. On crée le composant dynamiquement avec `createComponent()`

Exemple simplifié :

```ts
@ViewChild('container', { read: ViewContainerRef })
container!: ViewContainerRef;

this.container.clear();
this.container.createComponent(TaskHighlightComponent);
```

Cela permet de contrôler dynamiquement l’affichage des composants directement depuis le code.
