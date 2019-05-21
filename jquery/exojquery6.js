
jQuery(function($){
    // Création d'un élément bouton
    // et placement du bouton en premier fils de body
    let button = $("<button></button>",{
        text: "Go !",
        id: "go",
    }).prependTo("body");

    // Gestion de l'évènement click
    button.on("click", function(){
        $("#content").slideToggle(1000); 
        // toggle permet de caché (ici au click), puis d'afficher (encore au click)
        // slideToggle même chose avec un effet de glissement
    })


});