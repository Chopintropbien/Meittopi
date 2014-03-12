<?php 
 
header("Content-type: text/javascript"); 


/*
 * Une conversation de compose d'une entete (la premiere question de la discution) et de ses reponses
 * L'entete est un tableau avec
 * 		1° Le titre de la discution	
 * 		2° La date de création de la discution
 * 		3° La photo de l'auteur de la discution
 * 		4° Le speudo de l'auteur
 * 		5° Le texte de la discution
 * 		6° Le type de discution
 * 		7° les info pour le lien de l'auteur
 * 
 * Une réponse est quand à elle un tableau composé de:
 * 		1° La date de la réponse
 * 		2° La photo de l'auteur de la réponse
 * 		3° Le speudo de l'auteur de la réponse
 * 		4° Le texte de la discution de la réponse
 * 		5° les info pour le lien de l'auteur
 * 
 */
 
 
 echo 'var uneDiscution = {
			"entete" : [
						"La discution le meilleur du monde",
						"02/02/2014",
						"http://localhost/Meittopi/image/profil_vide.png",	
						"Andrei Kucharavy",
						"Oui alors voila c est vraiment la meilleur discution du monde que personne n a jamais vu de la mort qui tue tout le monde sur place!!!! vous en penser quoi????????",
						"Alimentation bizarre",
						"a voir avec Andrei"
						],
			"reponse0" : [
						"02/02/2014",
						"http://localhost/Meittopi/image/profil_vide.png",	
						"Andrei Kucharavy",
						"Oui alors voila c est vraiment la meilleur discution du monde que personne n a jamais vu de la mort qui tue tout le monde sur place!!!! vous en penser quoi????????",
						"a voir avec Andrei"
						],
			"reponse1" : [
						"02/02/2014",
						"http://localhost/Meittopi/image/profil_vide.png",	
						"Andrei Kucharavy",
						"Oui alors voila c est vraiment la meilleur discution du monde que personne n a jamais vu de la mort qui tue tout le monde sur place!!!! vous en penser quoi????????",
						"a voir avec Andrei"
						]		

 };';
 

?>

afficheUneConversation(uneDiscution);

