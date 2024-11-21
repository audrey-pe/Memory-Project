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

// initialisation du jeu
let tableau = document.getElementById("tableau");
let nbCartes = 8;
let nbCartesRetournees = 0;
let nbCartesGagnees = 0;
let carteA = -1;
let carteB = -1;
let cartes = [];
let carteRetournee = []; // Contient les cartes actuellement retournées
let countTrue = 0; // Nombre de paires trouvées
let gameOver = false; // Vérifie si le jeu est terminé
let canClick = false;

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
  if (!canClick) {
    return;
  }
  let numeroFichier = cartes[idCarte] + 1
  let filename = "./ressources/animauxdomestiques/" + numeroFichier + ".jpg"
  document.getElementById("carte" + idCarte).src = filename

  nbCartesRetournees += 1;
  if (nbCartesRetournees == 1) {
    carteA = idCarte
  } else {
    carteB = idCarte
  }
  
  if (nbCartesRetournees == 2) {
    if (comparerCartes(carteA, carteB)) {
      nbCartesGagnees += 2;
      if (nbCartesGagnees >= nbCartes) {
        alert("BRAVO");
      }
    } else {
      canClick = false;
      setTimeout(() => {
        cacherCartes(carteA, carteB);
        canClick = true;
      }, 2000, carteA, carteB)
    }
    nbCartesRetournees = 0;
  }
}

function cacherCartes(carte1, carte2) {
  console.log("cacher les cartes")
  document.getElementById("carte" + carte1).src = "./ressources/face_cachee.jpg"
  document.getElementById("carte" + carte2).src = "./ressources/face_cachee.jpg"
}

function comparerCartes(carte1, carte2) {
  if (cartes[carte1] == cartes[carte2]) {
    return true;
  } else {
    return false;
  }
}

// Créer les cartes
function creerCartes() {
  shuffle(); // Mélanger les images
  canClick = true;
}
