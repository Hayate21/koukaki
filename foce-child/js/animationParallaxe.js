/*
-Sélection de l'élément HTML :
L'élément HTML avec la classe CSS "parallaxe" est sélectionné à l'aide de document.querySelector  
méthode JavaScript qui permet de sélectionner un élément dans le document HTML en utilisant un sélecteur CSS(".parallaxe").
-Écouteur d'événements de défilement :
Un écouteur d'événements est ajouté à la fenêtre, réagissant à chaque événement de défilement vertical.
-Récupération de la position de défilement :
La position verticale de défilement est obtenue avec window.scrollY.
Translation maximale autorisée :
La variable maxTranslationY est définie pour limiter la translation maximale autorisée sur l'axe Y.
-Application de l'effet de parallaxe :
Si la position de défilement est inférieure ou égale à la translation maximale autorisée, l'effet de parallaxe est appliqué.
La propriété transform est utilisée pour déplacer verticalement l'élément '.parallaxe' en fonction de la position de défilement.
*/

console.log("allo la terre animationParalaxe.js en direct de la lune !");

// Sélection de l'élément HTML avec la classe 'parallaxe'
const effetParallaxe = document.querySelector(".banner__parallaxe");

window.addEventListener("scroll", () => {
  const scrollenY = window.scrollY; // Récupère la position actuelle de défilement vertical de la fenêtre du navigateur
const maxTranslationY = 200; // Définit une valeur maximale de translation verticale pour l'effet de parallaxe

// Vérifie si la position de défilement verticale est inférieure ou égale à la valeur maximale de translation verticale
if (scrollenY <= maxTranslationY) {
    // Applique l'effet de translation verticale en fonction de la position de défilement actuelle
    effetParallaxe.style.transform = `translateY(${scrollenY}px)`;


  }
});
