<?php

	header("Content-type: text/javascript"); 
	// $JSON = file_get_contents("http://localhost:5000/user/chiffa");
	
	/*  format: dans listes, chanque variable est une liste representer sous forme de tableau
	 *  Dans la première case du tableau, il y a le titre de la liste
	 *  Dans la deuxième case du tableau il y a un tableau de restaurant
	 *  Chanque restaurant est representer sous la forme d'un tableau avec les informations suivantes:
	 * 			1° case: le nom du restaurant 
	 * 			2° case: la photo du restaurant
	 * 			3° case: le nombre d'étoile qu'a mis le client 
	 * 			4° case: Titre du comentaire 
	 *			5° case: commentaire qu'a mis la ersonne sur ce restau
	*/
	
	echo 'var listes = {
			"0" : [ "A faire", [
										["Chez J\aime", "http://localhost/Meittopi/image/restau.jpg", "3", "Mehdi m a dis aue c etait tres bien", "Andrai y est deja aller et il a diqs aue c etait variament tres bein"],
										["Chez J\aime", "http://localhost/Meittopi/image/restau.jpg", "3", "Mehdi m a dis aue c etait tres bien", "Andrai y est deja aller et il a diqs aue c etait variament tres bein"]
									]
						], 
						
			"1" : [ "Coucou!!!", [
										["Chez J\aime", "http://localhost/Meittopi/image/restau.jpg", "3", "Mehdi m a dis aue c etait tres bien", "Andrai y est deja aller et il a diqs aue c etait variament tres bein"],
										["Chez J\aime", "http://localhost/Meittopi/image/restau.jpg", "3", "Mehdi m a dis aue c etait tres bien", "Andrai y est deja aller et il a diqs aue c etait variament tres bein"]
									]
						]
		
		};'; 
	
	
?>
creerListes(listes);

