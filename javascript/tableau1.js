//Tableau littéral
var personnages = ["Harry","Hermione","Ron","Voldemort"]; //Tableau avec 4 éléments avec pour index 0,1,2,3
console.log(personnages[1]); // Tu prends dans le tableau personnages l'élément à l'index 1 ici Hermione
console.log(typeof(personnages)); // Un tableau est de type Object

let taille = personnages.length; //Let similaire à var 
console.log(taille); // demande la taille du tableau

for(var i = 0; i < personnages.length; i ++){ //On utilise personnages.length permet de rendre le tableau adaptable
    console.log(personnages[i]);
}

