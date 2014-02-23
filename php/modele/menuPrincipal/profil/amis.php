<?php 
 
header("Content-type: text/javascript"); 

//~ $JSON = file_get_contents("http://localhost:5000/user/chiffa");

	/* la liste d'amis que l'on a est composer du titre et d'une liste d'amis
	 * chaque amis est representer sous la forme d'un tableau dans dedans
	 *  	1° le speudo de l'utilisateur
	 * 		2° la photo de profil
	 * 		3° l'imporatance du suivis de cette amis
	 */
	 
	  
echo 'var listeAmis = {
			"titre" : "Mes preferer",
			"amis" : [ 
						["Chiffa", "http://localhost/Meittopi/image/restau.jpg", "1"],
						["Chiffa", "http://localhost/Meittopi/image/restau.jpg", "2"]
					]
	}';
	/* la listes des activité des amis est un tableau d'acité
	 * une activité est un tableau composé
	 * 		1° 
echo 'var listeActivitesAmis = {
			"liste" : [
						[]
			
					]

	}';

?>
