// Création d'un élément du DOM
let div1 = document.createElement("div");

// Création d'un élément texte du DOM
let text1 = document.createTextNode("Texte 1");

// Ajout de text1 à div 1
div1.appendChild(text1);

// Ajout de div1 à body
document.body.appendChild(div1);

//Gestion de l'événement click
div1.onclick = function(){
    console.log("clique sur le div1");
};

// Récupération d'un élément du dom
let h1 = document.getElementById("h1");

// Gestion de l'événement click sur h1
h1.onclick = function(){
    console.log("clique sur le h1 ")
}

