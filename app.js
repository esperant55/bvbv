// Importer Express
const express = require('express');
const path = require('path');

// Créer l'application Express
const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, 'public')));

// Route principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
