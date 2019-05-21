jQuery(function($){
    // Créer dans le html plusieurs paragraphes 
    // qui auront pour class alternativement
    // question et reponse 

    // Faire en sorte que toutes les reponses 
    // soient cachées par défaut et qu'elles apparaissent au clic 
    // sur chaque question correspondante


    // parcourir toutes les questions et pour chacune d'elle,
    // mettre en place un "manipulateur" d'évènement click qui va chercher l'élément suivant (next())
    // la question et qui a pour class "reponse" pour l'afficher ou le faire disparaitre 
    $(".reponse").hide();

    $(".question").each(function(){
        // création d'un bouton pour chaque question
        let button = $("<button></button>",{
            text: "GO !"
        }).appendTo($(this));

        // Ajout d'un gestionnaire d'évènement clic sur chaque bouton qui va chercher  
        // le prochain élément qui a pour class "reponse" et qui l'affiche ou le cache
        button.on("click", function(){
            $(this).next(".reponse").toggle();
        })
        // Ajout d'un gestionnaire d'évènement clic sur chaque question qui va chercher  
        // le prochain élément qui a pour class "reponse" et qui l'affiche ou le cache
        $(this).on("click", function(){
            $(this).next(".reponse").toggle();
        })
    });


})
