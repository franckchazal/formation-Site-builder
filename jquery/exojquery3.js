jQuery(function($){  

    //CREATION D'ELEMENTS DU DOM

    // La troisième façon d'utiliser la fonction jQuery ($)
    // est de lui donner en paramètre une chaîne de caractères
    // qui correspond à : 
    // - une balise HTML

    // Création d'un élément p du DOM
    let p1 = $("<p>Paragraphe crée via jQuery</p>");
    // ajout de p en dernier fils de body
    p1.appendTo("body");
    // ou $("body").append(p1);

    // Création d'un élément p du DOM (méthode plus propre au format JSON)
    let p2 = $("<p></p>",{
        text: "Deuxième paragraphe crée avec jQuery",
        id: "p2",
        class: "paragraphe",
    }).appendTo("body");
});