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


echo 'var listeRevueEtEvenement = {
			"revue0" : [
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
			"revue1" : [
						"Andreï Kucharavy",	
						"http://localhost/Meittopi/image/restau.jpg",
						"Chez J\'aime ",
						"14/02/2014",
						"2.5",
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
