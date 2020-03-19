# Partie 1 cours Openclassrooms

[Cours](https://openclassrooms.com/fr/courses/4668271-developpez-des-applications-web-avec-angular/5086918-installez-les-outils-et-creez-votre-projet)

## Setup

**Download NPM dependencies**

Make sure you have NodeJS, NPM and Angular CLI
and then run:

[Node](https://nodejs.org/en/download/)

```
npm install -g npm@latest
```

```
npm install -g @angular/cli
```

**Documentations**

* [node.js](https://nodejs.org/en/docs/)
* [npm](https://docs.npmjs.com/)
* [ng](https://cli.angular.io/)

### Create

```
ng new mon-projet-angular --style=scss --skip-tests=true
```

```
npm install bootstrap@3.3.7 --save
```

- Dans angular.json, modifier l'array comme suit:
```
"styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.css",
    "styles.scss"
]
```

```
cd mon-projet-angular
ng serve --open
```

```
npm install
```

**Start server**

```
ng serve
```
Now check out at `http://localhost:4200`

![image](https://raw.githubusercontent.com/sergisergio/ANGULAR_Blog/master/angular.png)

**Precisions**

- dossier e2e: tests end-to-end
- node_modules: toutes les dépendances de l'application
- dossier src: tous les fichiers sources pour l'application.

**Architecture**

- index.html: contient la balise <app-root>
- cette balise correspond au contenu de app.component.html.
- app.component.ts: le décorateur contient le sélecteur app.root.

**Créer un nouveau component**

```
ng generate component mon-premier
```

**Gérer des données dynamiques**

- string interpolation: (du typescript vers html) -> affichage d'une variable
- property binding: (du typescript vers html) -> modifier un élément du DOM
- event binding: (html vers le typescript) -> exemple: click
- two-way binding: property et event en même temps.

**Directives structurelles**

- *ngIf="condition"
- *ngFor="let obj of myArray"
- ngStyle
- ngClass

**Pipes**

- <p>Mis à jour : {{ lastUpdate | date }}</p>
- <p>Mis à jour : {{ lastUpdate | async | date: 'yMMMMEEEEd' | uppercase }}</p>


**Any Questions ?**

Feel free to contact me !

