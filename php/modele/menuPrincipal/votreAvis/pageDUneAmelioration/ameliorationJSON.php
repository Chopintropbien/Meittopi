<?php 
header("Content-type: text/javascript"); 



/*
 * Une amélioration est un tableau constitué de :
 * 		1° Un tableau de photo avec chaque photo qui est un tableau de: 
 * 			- le lien de la photo minuscule 
 * 			- le lien de la photo majuscule
 * 		2° Un titre 
 * 		3° Une description 
 * 		4° Le nombre de personne qui est pour cette amelioration
 * 		5° Le nombre personne qui doivent aimer pour que l'amélioration soit approuvé
 * 		6° Le nombre de personne qui est contre cette amelioration
 * 		7° Le nombre personne qui ne doivent pas aimer pour que l'amélioration soit désapprouvé
 * 		8° La quantité de dons récolté
 * 		9° La quantité de dons qu'on a besoin pour develloper cette application
 * 		10° True si l'utilisateur aime cette modife sinon false
 * 		11° True si l'utilisateur n'aime pas cette modife sinon false
 * 		12° True si l'utlisateur à déja fait un don pour cette amélioration
 * 		13° Un tableau de celui qui a fait la proposition
 * 			- son speudo
 * 			- les information pour le lien de cette personne
 * 		14° Les information pour creer un lien pour faire un don pour l'amélioration
 */

echo 'var amelioration = {

			"photos" : [["http://localhost/Meittopi/image/profil_vide.png", "http://localhost/Meittopi/image/profil_vide.png"]],
			"titre" : "Un big changement",
			"description" : "qsdfbqjdhfb qsdb qdj djqdhjv qjv aej e  hv j vjafv qjf vjev  ev jv vja vjae jer aejhv ejv ej ejv",
			"nbVotesPour" : 2,
			"nbVotesPourMax" : 5,
			"nbVotesContre" : 8,
			"nbVotesContreMax" : 10,
			"nbDons" : 1,
			"nbDonsMax" : 8,
			"utilisateurAime" : true,
			"utilisateurAimePas" : false,
			"utilisateurDons" : false,
			"pesonneProposeAmelioration" : ["Andrei Kucharavy" , ""],
			"lienDonc" : ""
		
};';

?>

chargerAmelioration(amelioration);
