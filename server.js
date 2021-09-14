const express = require('express');
const loadConfig = require('./config');
const router = require('./routes');

// Chargement du fichier de config
const { mode, port } = loadConfig();

// Creation de l'app Web API
const app = express();

// Middleware - Custom
app.use((req, res, next) => {
    console.log(`Requete : ${req.method} ${req.url}`);

    next();
})

// Ajout du middleware pour gérer les données json
// -> "application/json"
app.use(express.json());        

// Ajout du middleware pour gérer les données d'un formulaire
// -> "application/x-www-form-urlencoded" (Pas utile pour une API)
// app.use(express.urlencoded({extended: false})) 

// Chargement des routes
app.use(router);

// Demarrage du server API
app.listen(port, () => {
    console.log(`Start API Server on port ${port} [${mode}]`);
});