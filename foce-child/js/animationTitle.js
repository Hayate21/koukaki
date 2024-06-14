/*
https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
-Le script commence par afficher un message dans la console pour indiquer qu'il est en cours d'exécution.
-Deux instances IntersectionObserver (observateur et observateur2) sont créées pour gérer les animations en 
fonction de la visibilité des éléments.
-Le premier observateur (observateur) est configuré pour ajouter/supprimer la classe 
animateTitle en fonction du statut d'intersection des éléments avec la classe Animetitre.
-Le deuxième observateur (observateur2) est configuré de manière similaire pour les 
éléments avec la classe Animetitre2.
-Les boucles forEach sont utilisées pour appliquer les observateurs à tous les 
éléments pertinents de la page.
*/

// Ce script JavaScript utilise l'API Intersection Observer pour détecter lorsque les éléments spécifiés entrent dans la zone d'affichage (viewport) du navigateur.
// Une fois qu'un élément devient visible dans la zone d'affichage, une classe CSS spécifique est ajoutée à cet élément pour déclencher une animation.

// Observer pour les éléments avec la classe ".Animetitre"
const observer = new IntersectionObserver((entries) => {
  // Pour chaque entrée (élément observé)
  entries.forEach((entry) => {
    // Vérifie si l'élément est en train d'entrer dans la zone d'affichage (isIntersecting)
    if (entry.isIntersecting) {
      // Si l'élément est en train d'entrer dans la zone d'affichage, ajoute la classe "animateTitle" à cet élément
      entry.target.classList.add("animateTitle");
    } else {
      // Sinon, retire la classe "animateTitle"
      entry.target.classList.remove("animateTitle");
    }
  });
});

// Sélectionne tous les éléments avec la classe ".Animetitre" et observe chaque élément
const sections = document.querySelectorAll(".Animetitre");
sections.forEach((section) => {
  observer.observe(section);
});

// Observer pour les éléments avec la classe ".Animetitre2"
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Utilisation de setTimeout pour ajouter la classe "animateTitle2" après 0.5 seconde
      setTimeout(() => {
        entry.target.classList.add("animateTitle2");
      }, 500);
    } else {
      entry.target.classList.remove("animateTitle2");
    }
  });
});

// Sélectionne tous les éléments avec la classe ".Animetitre2" et observe chaque élément
const sections2 = document.querySelectorAll(".Animetitre2");
sections2.forEach((section) => {
  observer2.observe(section);
});
