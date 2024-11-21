// Barre d'espace -> nouvelle partie
function nouvellePartie() {
  alert("Nouvelle partie lancée!");
  countTrue = 0;
  gameOver = false;
  creerCartes();
}
window.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    nouvellePartie();
  }
})

// Tableau initialisation
// Liste d'images pour le jeu
// const images = [
//   "ressources/memory-legume/1.svg",
//   "ressources/memory-legume/2.svg",
//   "ressources/memory-legume/3.svg",
//   "ressources/memory-legume/4.svg",
//   "ressources/memory-legume/5.svg",
//   "ressources/memory-legume/6.svg",
// ];

let tableau = document.getElementById("tableau");
let nbCartes = 8;
let cartes = [];
let carteRetournee = []; // Contient les cartes actuellement retournées
let countTrue = 0; // Nombre de paires trouvées
let gameOver = false; // Vérifie si le jeu est terminé

// Mélanger les cartes
function shuffle() {
  cartes = []

  // population du tableau : 0 0 1 1 2 2...
  for (let i = 0; i < nbCartes; i++) {
    cartes[i] = Math.floor(i/2)
    console.log("case", i, "valeur", cartes[i])
  }

  // intervesion des elements du tableau
  let from = 0
  let to = 0
  let temp = 0
  for (let i = 0; i < nbCartes * 2; i++) {
    from = Math.floor(Math.random() * nbCartes)
    to = Math.floor(Math.random() * nbCartes)

    temp = cartes[to]
    cartes[to] = cartes[from]
    cartes[from] = temp
  }
}

function afficherToutesLesCartes() {
  for (let i = 0; i < nbCartes; i += 1) {
    let numeroFichier = cartes[i] + 1
    let filename = "./ressources/animauxdomestiques/" + numeroFichier + ".jpg"
    document.getElementById("carte" + i).src = filename
  }
}

function retourner(idCarte) {
  console.log("la carte " + idCarte + " a ete cliqueee")
}

// Créer les cartes
function creerCartes() {
  shuffle(); // Mélanger les images
  afficherToutesLesCartes()

}

// // Retourner une carte
// function retournerCarte(event) {
//   if (gameOver || event.target.classList.contains("retournee") || carteRetournee.length === 2) {
//       return; // Si le jeu est terminé ou si la carte est déjà retournée, ne rien faire
//   }

//   // Vérifier si 2 cartes sont retournées
//   if (carteRetournee.length === 2) {
//       setTimeout(comparerCartes, 1000); // Attendre 1 seconde avant de comparer les cartes
//   }
// }

// // Comparer les cartes retournées
// function comparerCartes() {
//   const [carte1, carte2] = carteRetournee;

//   if (carte1.dataset.index === carte2.dataset.index) {
//       countTrue++;
//       if (countTrue === images.length) {
//           setTimeout(finJeu, 500); // Si toutes les paires sont trouvées, fin du jeu
//       }
//   } else {
      
//   }

//   carteRetournee = []; // Réinitialiser les cartes retournées
// }

// Fin du jeu
// function finJeu() {
//   gameOver = true;
//   alert("Félicitations ! Vous avez trouvé toutes les paires.");
// }

// Recommencer le jeu
// document.getElementById("btnRecommencer").addEventListener("click", nouvellePartie());





// let tab=[8];
// let img = document.getElementById("1");
// for(i=0; i=tab.length; i++){
//   tab.push("img"+1);
// }
// //fonctionnement des comparaisons
// let doub = tab; //math.random?
// // function callback;
// document.getElementById('btn').addEventListener('click',foobar)
// let clic1=(ecoute);
// let clic2=(ecoute);
// let countTrue=0;
// while (countTrue!==4){
//   if (clic>2){
//     if (img1 != img2){
//     // retourner les cartes au bout de 5 secondes-> setTimeout
//     }else(countTrue +=1); 
//   }else;
// }
