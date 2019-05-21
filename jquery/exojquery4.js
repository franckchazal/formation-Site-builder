jQuery(function($){

    // Récupération (getter) du texte de l'élément h1
    let titre1 = $("#h1").text();  // Pour récupérer le html (je remplace .text par .html)
    console.log(titre1);

    // Modification (setter) du texte de l'élément h1
    titre1 = $("#h1").text("Nouveau titre de niveau 1"); // Pour modifier le html (je remplace .text par .html et je peux ajouter une nouvelle balise dedans)




    // CSS SETTER
    titre1.css( "color", "red" ); // ou $("#h1").css("color", "red");

    // CSS GETTER
    let colorH1 = titre1.css("color");
    console.log(colorH1);




    // Récupération (GETTER) de l'attribut id de h1 
    let id = $("#h1").attr("id");
    console.log(id);

    // Modification (SETTER) de l'attribut id de h1 
    $("#h1").attr("id", "autre-identite");


    // Modification (SETTER) de la position du h1
    $("#autre-identite").offset({top: 200, left: 300});
});