/*Le Document Object Model est une interface de programmation pour les documents HTML / XML/ SVG .
* Il fournit une représentation structurée du document html sous forme d'un arbre
* et définit la façon dont la structure peut être manipulée par JavaScript*/

// Création d'un élément du DOM
let div1 = document.createElement("div");

// Création d'un élément texte du DOM
let text1 = document.createTextNode("Texte 1");

// Ajout de text1 à div 1
div1.appendChild(text1);

// Ajout de div1 à body
document.body.appendChild(div1);