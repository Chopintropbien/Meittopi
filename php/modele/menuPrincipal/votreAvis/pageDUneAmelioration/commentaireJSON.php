<?php 
header("Content-type: text/javascript"); 

/*
 * Mettre la liste des commentaires. Un commentaire est un tableau composé de: 
 *  	1° La photo de celui qui a ecrit le commentaire
 *  	2° Son speudo 
 *  	3° Le texte de son commentaire
 *  	4° Le nombre de personne qui sont pour ce commentaire
 *		5° Le nombre de personne qui doivent etre pour pour que le commentaire soit pris en comptent dans l'amélioration
 *  	6° Le nombre de personne qui sont contre ce commentaire
 *  	7° Le nombre de personne qui doivent etre contre pour que le commentaire ne soit pas pris en comptent dans l'amélioration
 *  	8° True si le commentaire est aimé par l'utilisateur, else false
 *  	9° True si le commentaire n'est pas aimé par l'utilisateur, else false
 *  	10° Les information poru avoir le lien sur la personne qui a ecrit
 */
 
 
echo ' var listeCommentaire = {
			
			"commentaire0" : [
						"http://localhost/Meittopi/image/profil_vide.png",	
						"Andrei",
						" ejfbskidhjbv sdhjkcvb JKSDHVB JQSHDVFJQHSDVB CJHSDBV CKJSDB cvkjlS  LK ukj <kjsd vfksjdfbv ksdjnv jdv qdjvb dkqjvb qjkvb kjv dfjkvb djkvb dkjvb dfjkvb qdfkvj dfjkv",
						2,
						5,
						11,
						10,
						false,
						false,
						""
							],
			"commentaire1" : [
						"http://localhost/Meittopi/image/profil_vide.png",	
						"Andrei",
						" ejfbskidhjbv sdhjkcvb JKSDHVB JQSHDVFJQHSDVB CJHSDBV CKJSDB cvkjlS  LK ukj <kjsd vfksjdfbv ksdjnv jdv qdjvb dkqjvb qjkvb kjv dfjkvb djkvb dkjvb dfjkvb qdfkvj dfjkv",
						7,
						5,
						8,
						10,
						true,
						false,
						""
							],
							
		"commentaire2" : [
						"http://localhost/Meittopi/image/profil_vide.png",	
						"Andrei",
						" ejfbskidhjbv sdhjkcvb JKSDHVB JQSHDVFJQHSDVB CJHSDBV CKJSDB cvkjlS  LK ukj <kjsd vfksjdfbv ksdjnv jdv qdjvb dkqjvb qjkvb kjv dfjkvb djkvb dkjvb dfjkvb qdfkvj dfjkv",
						2,
						5,
						8,
						10,
						false,
						false,
						""
							]

};';

?>

chargerListeCommentaire(listeCommentaire);








