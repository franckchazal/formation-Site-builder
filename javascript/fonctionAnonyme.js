/*
* fonction anonyme immédiate ou Immediately invoked function expression ou IIFES
* Permet d'isoler le code et donc les variables
*/

(function(){
    console.log("hello dans l'IIFES")
    var i = 3;
})();

/*
* fonction anonyme qui est affectée à une variable
 */

 var hello = function() { //Je la stocke dans une variable puis je l'appelle pour qu'elle se declare
     console.log("hello dans la fonction affectée");
 }
 hello();//ici j'appelle la fonction 
 
