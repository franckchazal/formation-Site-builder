jQuery(function($){  

    //Récupération des éléments du DOM

    // La deuxième façon d'utiliser la fonction jQuery ($)
    // est de lui donner en paramètre une chaîne de caractères
    // qui correspond à : 
    // - un sélecteur CSS

    // h1 est un objet du DOM augmenté par jQuery 
    // C'est à dire que l'objet du DOM à des propriétés supplémentaires
    // (comme hide et show) qui sont souvent des méthodes
    // cet objet est appelé objet jQuery

    let h1 = $("h1");
    // Cache le h1 en 1 seconde puis affiche h1 en 1 seconde (la valeur en ms)
    h1.hide(1000).show(1000);   
    
});