// script.js
const balloon = document.getElementById('balloon');
let size = 200;
let colors = ['red', 'green', 'blue'];
let colorIndex = 0;

balloon.addEventListener('click', () => {
    // Ajout d'un effet de rebond
    balloon.style.animation = 'bounce 0.5s ease';

    // Augmente la taille de 10px
    size += 10;
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';

    // Change la couleur dans l'ordre rouge, vert, bleu
    colorIndex = (colorIndex + 1) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];

    // Explosion si la taille dépasse 420px
    if (size > 420) {
        alert('Le ballon a explosé !');
        size = 200; // Réinitialiser la taille
        colorIndex = 0; // Réinitialiser la couleur
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';
        balloon.style.backgroundColor = 'red';
    }

    // Suppression de l'animation après l'exécution pour qu'elle puisse se répéter
    setTimeout(() => {
        balloon.style.animation = '';
    }, 500);
});

// Réduction de taille quand la souris quitte le ballon
balloon.addEventListener('mouseleave', () => {
    if (size > 200) {
        size -= 5;
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';

        // Inverse l'ordre des couleurs
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        balloon.style.backgroundColor = colors[colorIndex];
    }
});
