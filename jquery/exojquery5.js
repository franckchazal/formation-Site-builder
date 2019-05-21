
jQuery(function($){
    console.log();
    // Parcours de plusieurs éléments du DOM grâce à la méthode each
    $("ul > li").each(function(index){
        // le $(this) correspond à chaque élément du DOM (ici li)
        // en fonction du sélecteur utilisé (ici ul > li)
        console.log(index);
        console.log($(this).text());
    })
});