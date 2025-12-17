
## Séquence 4 — Tests Unitaires Angular

### 📚 Ce que j'ai appris

#### 1. Pourquoi tester ?

* Les tests permettent de vérifier que chaque partie du code fonctionne correctement, même après des modifications ultérieures.
* Sans tests, le risque est d’introduire des bugs invisibles, surtout dans des applications réactives comme Angular.
* Exemple concret : j’ai vu qu’un simple oubli de valeur par défaut pour `@Input() title` dans `TaskHighlightComponent` faisait échouer le test, alors que l’app fonctionnait parfaitement avec `ng serve`.

#### 2. Outils utilisés

* **Jasmine** : Framework de tests pour écrire et exécuter les tests unitaires.
* **Karma** : Test runner qui lance les tests dans un navigateur et génère les rapports.
* **TestBed** : Permet de créer un module Angular de test pour tester des composants avec leur template, DI et cycle de vie.

#### 3. Concepts clés maîtrisés

* **AAA Pattern** : Arrange (préparer le contexte), Act (exécuter le code testé), Assert (vérifier le résultat).
* **Mocks** : Objets ou services factices pour simuler des dépendances sans exécuter le vrai code.
* **Spies** : Permettent de vérifier si une méthode a été appelée, avec quels arguments.
* **Fixture & detectChanges()** : Fixture représente le composant monté, `detectChanges()` applique le binding Angular et déclenche les cycles de vie.

#### 4. Types de tests pratiqués

* ✅ Test d'une classe simple (sans Angular)
* ✅ Test d'un service
* ✅ Test d'un composant avec TestBed
* ✅ Test des @Input
* ✅ Test des @Output
* ✅ Test du DOM

#### 5. Erreurs courantes rencontrées

* Oublier `detectChanges()` : le template n’est pas mis à jour → tests DOM échouent
* `No provider for...` : Angular ne trouve pas une dépendance → solution : fournir un mock ou un provider dans TestBed
* Tests qui dépendent les uns des autres : solution → remettre l’état initial dans `beforeEach`

#### 6. Commandes importantes

```bash
ng test                    # Lancer les tests
ng test --code-coverage    # Avec rapport de couverture
```

#### 7. Code Coverage atteint

* Objectif : 70-80%
* Mon résultat : ~85% sur TaskBoard Pro

#### 8. Difficultés rencontrées et solutions

| Difficulté                                                | Solution trouvée                                                                                       |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Tests échouaient car `@Input() title` était undefined     | Ajout d’une valeur par défaut `title: string = ''`                                                     |
| NullInjectorError pour `ActivatedRoute` dans AppComponent | Ignoré pour tests unitaires TaskBoard, ou mock simple avec `{ provide: ActivatedRoute, useValue: {} }` |
| Karma restait idle / 404 main.js                          | Modification de `test.ts` pour inclure tous les `.spec.ts` et relancer Karma                           |

#### 9. Points à approfondir

* [ ] Tests d'intégration
* [ ] Tests E2E avec Cypress
* [ ] Mocking avancé pour HttpClient
* [ ] Tests de services asynchrones

---

### 🎯 Projet : Tests TaskBoard Pro

#### Tests implémentés

* [x] TaskService

  * ✅ `addTask()`
  * ✅ `removeTask()`
  * ✅ `tasks$` Observable
* [x] TaskHighlight Component

  * ✅ Affichage du titre
  * ✅ @Input title
  * ✅ Rendu dans le DOM

#### Résultats

* **Tests réussis** : 8 / 8 (en incluant tous les tests TaskService + TaskHighlightComponent)
* **Code coverage** : ~85%
* **Temps d'exécution** : ~0.2 secondes par test (très rapide car tests unitaires simples)

---

### 💡 Réflexion personnelle

Cette séquence m’a permis de comprendre la valeur des tests unitaires dans Angular et de voir comment ils peuvent éviter des régressions. Le fait de tester à la fois la logique des services et le rendu des composants m’a convaincu que les tests deviennent essentiels dès qu’une application prend de l’ampleur et devient de plus en plus complexe. Je compte appliquer cette méthodologie à tous mes futurs projets Angular pour garantir fiabilité et maintenabilité.

---

### 📚 Ressources consultées

* [Angular Testing Guide](https://angular.io/guide/testing)
* [Jasmine Documentation](https://jasmine.github.io/)
* [Notes de cours - Séquence 4]