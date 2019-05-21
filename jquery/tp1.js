jQuery(function($){  


    $("<div></div>", {
        text: "clique ici",
        id: "div",
    }).appendTo("body");

    // création de l'élément click sur l'élément id div
    $("div").on("click", function(){
        console.log("click sur un div");
    });



    // Création de plusieurs paragraphe
    for(let i = 0; i < 3; i++) {
        $("<p></p>", {
            text: "paragraphe" + i,
            class: "para",
        }).appendTo("body");
    }
        $(".para").on("click", function() {
            let y = $(this).text();
            console.log("click sur le " + y);
        });
// Création des titres de class open-close avec un paragraphe qui le suit 
// grace à la boucle for
    for(let j = 0; j < 3; j++){
        // Création des titres h2
        $("<h2></h2>", {
            text: "titre" + j,
            class: "open-close",
        }).appendTo("body");

        // Création des paragraphes qui suivent les titres
        $("<p></p>", {
            text: "paragraphe" + j,
        }).appendTo("body");
    }
        $(".open-close").on("click", function(){
            $(this).next("p").toggle(1000);
        });



    
});