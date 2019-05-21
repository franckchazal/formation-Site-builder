// Création d'une "class" Personne ES5
class Personne{
    constructor(nom,prenom){
        this.nom = nom;
        this.prenom = prenom;
    }

//Méthodes
sePresenter(){
    console.log("Bonjour je m'appelle " + this.prenom + " " + this.nom);
    }
}
var franck = new Personne("Chazal","Franck")
franck.sePresenter();

// Création d'une "class" Enseignant qui hérite de la class Personne
//Ici la class enseignant étend la class personne ou hérite de la class personne

class Enseignant extends Personne{ 
    constructor(nom,prenom,diplome){ //Ici j'ajoute un constructeur 
        super(nom,prenom);           // Je rappelle les constructeurs du dessus avec super
        this.diplome = diplome;      //Je declare le nouveau constructeur
    } 
    //Nouvelle méthode
    enseigner(){
        console.log("J'enseigne ! ");
    }
}
var jerome = new Enseignant("Chagnaud", "Jérome", "Agrégation")
jerome.sePresenter();
jerome.enseigner();
console.log(jerome.diplome);

//class qui spécialise la class enseignant
class EnseignantProgrammation extends Enseignant{
    enseignerJS(){
    console.log("J'enseigne le JS!");
    }
}
var yvan = new EnseignantProgrammation("Douënel", "Yvan", "BAC")
yvan.sePresenter();
yvan.enseignerJS();