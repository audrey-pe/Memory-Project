//Données inscriptions
window.onload = init;
function init(){
  document.getElementById("submit").addEventListener("click", createAccount);
}
function createAccount(event){
  event.preventDefault();
  //empeche d'envoyer le formulaire
  
  // recupération des élements entrées
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById ("password").value;
    const repeat_password = document.getElementById ("repeat_password").value;
 
    // Validation des champs vides
if (!nom || !email || !password || !repeat_password) {
    displayError("Veuillez remplir tous les champs.");
    return;
}
  //Stockage des données
function wrongPassword(){
  alert("Les mots de passe ne correspondent pas");
}
  //comparaison mdp
  // Vérifier si les mots de passe correspondent
  if (password !== repeat_password) {
    // Si les mots de passe ne correspondent pas, appeler la fonction wrongPassword
    wrongPassword();
  } else {
    // Si les mots de passe correspondent, stocker dans localStorage
    localStorage.setItem("nom", nom);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    console.log("Compte créé et données stockées dans localStorage");
    alert("Compte créé avec succès !");
}
}
function displayError(message) {
    // Afficher un message d'erreur sous le formulaire
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = message;
}

function resetPage() {
    // Réinitialiser les champs du formulaire et le message d'erreur
    document.getElementById("accountForm").reset();
    document.getElementById("errorMessage").textContent = "";
}

// function resetPage(event) {
   // document.getElementById("reset").addEventListener("click", resetPage);
//   // Recharge la page actuelle
//   location.reload();
// }

//alert si champ vide
  // if (nom ===""|| mail ==="" || mdp ===""){
  //   alert ("Veuillez completer tous les champs")
  //   return;
  // 
  