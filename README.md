# DEMO_NPM
## Installlation de packages `npm`
Liste de libraires à installer
-   [Day.js](https://www.npmjs.com/package/dayjs)
-   [FullCalendar](https://www.npmjs.com/package/fullcalendar)

## Étape 1
Création du package.json
```
npm init
```
Suivre les instructions dans la console.

## Étape 2
Installation de **Day.js** dans les dépendances de projet.
```
npm install dayjs --save
```

## Étape 3
Installation de **FullCalendar** dans les dépendances de projet.
```
npm install fullcalendar --save
```

## Étape 4
Création d'un fichier `.gitignore` a la racine du répertoire.
Voici ce qu'il faut inscrire dans le fichier `.gitignore` pour ignorer le suivi git des fichiers dans le répertoire `node_modules`.
```
.DS_Store
node_modules
```
