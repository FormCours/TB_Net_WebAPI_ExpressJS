const express = require('express');
const loadConfig = require('./config');

// Chargement du fichier de config
const { mode, port } = loadConfig();

// Creation de l'app Web API
const app = express();






// Demarrage du server API
app.listen(port, () => {
    console.log(`Start API Server on port ${port} [${mode}]`);
});