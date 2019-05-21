/*
* On peut définir un objet comme une structure complexe de contenu
*/

//Définir une fonction constructeur 
function Personne(nom,prenom){
    this.nom = nom; // Propriétés
    this.prenom = prenom;
    this.sePresenter = function(){
        console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom);
    }
}

var bob = new Personne("Dylan", "Bob"); //instanciation de l'objet et stockage dans la variable bob
console.log(bob.nom);
console.log(bob.prenom);
bob.sePresenter();

//instanciation de l'objet corinne dausse
var corinne = new Personne("Dausse", "Corinne");
corinne.sePresenter();//Appel