📚 DigitalBooks

DigitalBooks est une application web Fullstack développée avec Vue.js 3 côté frontend. Elle permet d'afficher, créer, modifier et supprimer une collection de livres de science-fiction via une API.

Ce projet a été réalisé dans le cadre d’un exercice de formation dans le but de consolider les compétences en développement web.
🚀 Fonctionnalités
Côté client (public)

    Accueil avec la liste des livres.

    Affichage des détails d’un livre.

    Navigation fluide avec Vue Router.

Côté administrateur

    Visualiser la liste complète des livres.

    Ajouter un nouveau livre via un formulaire.

    Modifier un livre existant.

    Supprimer un livre de la base.

    Interface responsive grâce à Bootstrap.

🧩 Technologies utilisées

    Vue.js 3

    Vue Router

    Bootstrap 5

    Bootstrap Icons

    API simulée en local via un serveur Node/Express ou json-server.

🗂 Structure du projet

src/
├── assets/                → Feuilles de style CSS
├── components/            → Composants réutilisables (ex : Header, BookCard)
├── router/                → Configuration des routes
├── views/
│   ├── admin/             → Pages Admin : Create, Update, List
│   └── client/            → Pages publiques : Liste, Détail
├── App.vue                → Composant racine
└── main.js                → Point d’entrée de l’application

📦 Lancer le projet

# Installer les dépendances
npm install

# Lancer l’application
npm run dev

L’application sera disponible à l’adresse : http://localhost:5173 (ou autre port selon Vite).
🔗 API utilisée

    Endpoint de base : http://localhost:3000/books

    Exemple de paramètre : ?perPage=50 pour afficher plus de résultats.

    L’API retourne une liste d’objets livres avec les champs :

        title, author, publicationYear, coverUri, etc.

✅ Objectifs pédagogiques

    Apprendre à structurer une app Vue 3.

    Maîtriser la gestion des routes dynamiques.

    Comprendre le fonctionnement des appels API (CRUD).

    Créer des interfaces claires avec Bootstrap.

🛠 Évolutions possibles

    Ajout d'une authentification admin.

    Ajout de la pagination côté client.

    Filtrage / recherche de livres.

    Gestion avancée des erreurs.