jQuery(function($){

  let stop = false;
  
  // Appel de la fonction
  nextSlide();
    // fontion nextSlide qui affiche l'image suivante
  function nextSlide() {
    // Va chercher la première image  dans l'élément d'id diapo
    $("#diapo > img:first").appendTo("#diapo");
    if(stop == false) {
    setTimeout(function(){
        // appel recursif de la fonction
        nextSlide();
    }, 2000);
   }
  }

  // Ajout d'un gestionnaire de l'évènement ou j'entre dans la section
  $("#diapo").on("mouseenter", function(){
    stop = true;
  });
  // Ajout d'un gestionnaire de l'évènement ou je sors de la section
  $("#diapo").on("mouseleave", function(){
    stop = false;
    nextSlide();
  });

});
