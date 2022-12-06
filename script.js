// Inclure les librairies nécessaires
var marked = require('marked');
var GoogleDriveAPI = require('google-drive-api');

// Initialiser l'éditeur de markdown et le rendu HTML
var editor = document.getElementById('editor');
var preview = document.getElementById('preview');

// Mettre à jour le rendu HTML lorsque le contenu de l'éditeur est modifié
editor.addEventListener('input', function() {
    preview.innerHTML = marked(editor.value);
});

// Initialiser l'API Google Drive
GoogleDriveAPI.init({
    clientId: '585161099380-lvjrnh8k28btsacme716j48310efged6.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/drive'
});

// Gérer la sauvegarde des notes dans Google Drive
document.getElementById('save').addEventListener('click', function() {
    GoogleDriveAPI.saveFile({
        content,
        name: 'notes.md' // Nom du fichier
    });
});
