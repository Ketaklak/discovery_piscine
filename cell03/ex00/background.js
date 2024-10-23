// Fonction pour générer une couleur aléatoire
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Sélectionne le bouton et ajoute un événement 'click'
document.getElementById('colorButton').addEventListener('click', function() {
    // Change la couleur de fond de la page
    document.body.style.backgroundColor = getRandomColor();
});
