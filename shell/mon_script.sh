#!/bin/bash

if [ $# -ne 1 ]
then
    echo " problem"
    exit
fi

# Définir les variables
repertoire='/home/franck/franckformation/formation'
moi=$1
destination='/home/machin'
ip='192.168.9.107'

#On affiche
echo "Bonjour $moi"
echo "il y a $# argument(s)"


#Se déplacer dans mon répertoire utilisateur
cd ~/

#Créer l'archive du répertoire
tar -cf $moi.tar $repertoire

echo "Voici le code de retour: $?"

if [ $? -ne 0 ]
then
    echo "la commande tar a planté"
    exit
fi
    
#Copie chez romain
#scp $moi.tar machin@$ip:$destination/$moi.tar

#Ici le script demandera le mot de passe

#C'est fini, on affiche que cest le cas

echo "finiiiiiii"
