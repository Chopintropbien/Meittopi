<?php 
 
header("Content-type: text/javascript"); 

//~ $JSON = file_get_contents("http://localhost:5000/user/chiffa");

/* chaque revue est un tableau composer de: 
 * 	1°	Le nom de la personne de la personne qui a fait la revue qui va apparaitre a l'écran intcate: ex: mettre nom + prenom
 *  2° 	La photo de proil de la personne qui fait la revue
 *  3°  Le resaturant commanté
 *  4°  La date d'écriture de la revue -> il faudra que tu me dise quel format tu utilise
 * 	5°  La note que le restaurant à recu
 *  6°  Le texte de la revue
 *  7°  Si la personne connecter a trouver la revue drole, mettre true sinon false
 *  8°  De même pour utile
 *  9°  De même pour cool
 *  10° Mettre les information necessaire pour retrouver le lien de la personne qui a commanter -> a discuter
 *  11° De même pour le restaurant -> a discuter
 */
 
/* Un document est aussi un tableau mais compose de:
 *  1° Le nom de la personne de la personne qui organise l'événement
 *  2° La photo de profil de celui qui organise l'élément
 *  3° La liste, sous forme de tableau des photos de l'événement (3 maxi)
 *  4° Le titre de l'événenement
 *  5° La date d'écriture de l'événement
 *  6° La date de l'événement
 *  7° La liste des invités:
 * 			Chaque invité est un tabeau composé de:
 * 					1° Son speudo
 * 					2° Si il a confirmer ou pas sa venue (true ou false)
 * 					3° Les information necessaire pour retrouver le lien de la personne invité -> à discuter
 *  8° Message perso de la part de celui qui a creer l'évenement à l'utilisateur, mettre null ou '' s'il n'y en a pas
 *  9° La description de la sortie
 *  10° Les information qui permettront des retrouver le lien de la personne qui a creer l'evenement
 *  11° Les information qui permettront des retrouver le lien de l'événement
 */ 

echo 'var listeRevueEtEvenement = {

			"evenement0" : [
							"Andreï Kucharavy",	
							"http://localhost/Meittopi/image/restau.jpg",
							["http://localhost/Meittopi/image/restau.jpg","http://localhost/Meittopi/image/restau.jpg"],
							"Sorie chez j aime comme tous les diamnche!!!!!!",
							"il y a 2 min",
							"14/02/2014",
							[["Mehdi", true, "sss"], ["Lauriane", false, "def"]],
							"Je veux absolument que tu viennes!!!!! J aimerais vraiment te voir, s il te plais vien!!!!!!!!!!!!!!",
							"Alors, comme d ab, on va chez jaime et on mange plein de pizzaaaaaaaaaaa",
							"ee",
							"sss"
							],
			"revue1" : [
						"Andreï Kucharavy",	
						"http://localhost/Meittopi/image/restau.jpg",
						"Chez J\'aime ",
						"14/02/2014",
						"2.5",
						"Oui, j\'ai vraime aimer. les pizza sont pas cher du tout!!!!! Et tres bonnes Ma oui mA oui!!!!",
						"trsdue",
						"trusdfe",
						"trusfe",
						"Je ne sais pas quoi",
						"de meme",	
						],
			"revue2" : [
						"Andreï Kucharavy",	
						"http://localhost/Meittopi/image/restau.jpg",
						"Chez J\'aime ",
						"14/02/2014",
						"4.5",
						"Oui, j\'ai vraime aimer. les pizza sont pas cher du tout!!!!! Et tres bonnes",
						"trusdfe",
						"falssdfe",
						"falssfde",
						"Je ne sais pas quoi",
						"de meme",	
						]
						
};';

?>

afficheListeRevueEtEvenement(listeRevueEtEvenement);
