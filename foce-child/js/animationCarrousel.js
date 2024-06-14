/*
-Le script commence par afficher un message dans la console pour indiquer qu'il est en cours d'exécution.
-Il utilise la bibliothèque Swiper pour créer un carrousel interactif avec diverses configurations.
-Les options Swiper définissent le type d'effet de transition, la présence d'un curseur, la centralisation 
des diapositives, le nombre de diapositives visibles, la direction du carrousel, l'espacement entre les diapositives, 
l'effet de coverflow spécifique, la boucle infinie, la configuration de l'autoplay, et la vitesse de transition.
-L'objet Swiper est initialisé avec la classe CSS .swiper pour sélectionner le conteneur du carrousel.
*/

// Déclaration et initialisation d'un nouvel objet Swiper avec les options spécifiées
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabcursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  direction: "horizontal",
  spaceBetween: 70,

  // Effet de coverflow avec les paramètres spécifiés
  coverflowEffect: {
    rotate: 55,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },

  loop: true, // Boucle le carrousel
  loopedSlides: 3, // Nombre de diapositives à boucler
  loopAdditionalSlides: 0, // Nombre de diapositives additionnelles à boucler
  autoplay: {
    delay: 1000, // Délai entre chaque diapositive en millisecondes
    disableOnInteraction: false, // Désactive l'autoplay lors d'une interaction utilisateur
  },

  speed: 800, // Vitesse de transition entre les diapositives en millisecondes
});
