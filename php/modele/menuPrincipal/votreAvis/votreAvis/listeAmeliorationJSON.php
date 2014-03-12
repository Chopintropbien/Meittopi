
<?php 
header("Content-type: text/javascript"); 



/*
 * Une amélioration est un tableau constitué de :
 * 		1° Une photo
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
 * 		13° Les information pour creer un lien sur l'amélioration 
 * 		14° Les information pour creer un lien pour faire un don pour l'amélioration
 */

echo 'var listeAmelioration = {
			"amelioration0" : [
								"http://localhost/Meittopi/image/profil_vide.png",
								"Un big changement",
								"qsdfbqjdhfb qsdb qdj djqdhjv qjv aej e  hv j vjafv qjf vjev  ev jv vja vjae jer aejhv ejv ej ejv",
								5,
								10, 
								8, 
								15, 
								7, 
								20, 
								true, 
								false, 
								false,
								"", 
								""
							],
			"amelioration1" : [
								"http://localhost/Meittopi/image/profil_vide.png",
								"Un big changement",
								"qsdfbqjdhfb qsdb qdj djqdhjv qjv aej e  hv j vjafv qjf vjev  ev jv vja vjae jer aejhv ejv ej ejv",
								5,
								10, 
								20, 
								15, 
								7, 
								20, 
								true, 
								false, 
								false,
								"", 
								""
							],
			"amelioration2" : [
								"http://localhost/Meittopi/image/profil_vide.png",
								"Un big changement",
								"qsdfbqjdhfb qsdb qdj djqdhjv qjv aej e  hv j vjafv qjf vjev  ev jv vja vjae jer aejhv ejv ej ejv",
								10,
								10, 
								8, 
								15, 
								20, 
								20, 
								true, 
								false, 
								false,
								"", 
								""
							],
			"amelioration3" : [
								"http://localhost/Meittopi/image/profil_vide.png",
								"Un big changement",
								"qsdfbqjdhfb qsdb qdj djqdhjv qjv aej e  hv j vjafv qjf vjev  ev jv vja vjae jer aejhv ejv ej ejv",
								10,
								10, 
								8, 
								15, 
								7, 
								20, 
								true, 
								false, 
								false,
								"", 
								""
							]


};';

?>

chargerListeAmelioration(listeAmelioration);
