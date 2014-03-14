<?php 
header("Content-type: text/javascript"); 

/* La liste de restaurant est composé de restaurant représenté sous la forme d'un tableau avec comme élément : 
 * 		1° Le nom du restaurant 
 * 		2° La photo du restaurant
 * 		3° la note du restaurant
 * 		4° Le prix du restaurant
 *		5° Le nombre d'Avis sur ce restaurant
 * 		6° Liste de toutes les cathégorie dans le quel rentre le restaurant
 * 		7° La liste des amis qui aime ce restaurant, 
 * 		8° La liste des amis qui aime moyennement ce restaurant
 * 		9° La liste des amis qui n'aime pas ce restaurant
 * 				Chaque amis est lui même représenté sous la forme d'un tableau avec 
 * 					1° Son speudo
 * 					2° Le nombre d'avis qu'il a mis sur le restaurant
 * 					3° Les infomations dur le lien de sa page profil	
 * 					4° Les information pour le lien vers ses avis
 * 		10° La liste des événement à venir 
 * 				Un evenement est un tableau: 
 * 					1° la date
 * 					2° ce qui s'y passe
 * 					3° Le lien vers cette événement
 * 		11° Le quartier dans le quel est le restaurant
 * 		12° Sa rue
 * 		13° Sa ville // 12 et 13 doivent former l'adresse 
 * 		14° Son numéro de telephone
 * 		15° Lien vers la page de ce restaurant
 */
 

//$JSON = file_get_contents("http://localhost:5000/user/chiffa");

$json = '{
			"restau0" : [ 
						"Chez J\'aime ",
						"http://localhost/Meittopi/image/restau.jpg",
						"4.5",
						"3",
						"100",
						["Italien", "Pizza"],
						[["Mehdi", 3, "",""], ["Andrei", 3, "",""]],
						[["Mehdi", 3, "",""], ["Andrei", 3, "",""]],
						[["Mehdi", 3, "",""], ["Andrei", 3, "",""]],
						[["Diamche", "tout à 13 fr sdfv s ds sfv sf df vgs ver cdfgbfgb sd bs d", ""]],
						"Malley",
						"Chemin de Malley 12",
						"1007 Lausanne",
						"04 50 62 29 24",
						""
						]

}';

$jsonDecode = json_decode($json);
//~ print $jsonDecode->{'restau0'}[0];

foreach ($jsonDecode as $value) {
	echo $value[0];
}
?>












