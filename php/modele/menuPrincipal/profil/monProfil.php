<?php 
 
header("Content-type: text/javascript"); 

//~ $JSON = file_get_contents("http://localhost:5000/user/chiffa");
echo 'var profil = {
		    "prenom" : "Lauriane",
		    "nom" : "Mollier",
		    "alias" : "DarkChopin",
		    "photo" : "http://localhost/Meittopi/image/restau.jpg",
		    "nbAmis" : "7",
		    "nbAvis" : "3",
		    "nbDeSuiveur" : "2",
		    "tableauDeCaracteristique" : [
				["Ce que j\'aime faire : ", "Coder avec mon copin, meme si c\'est très stressant, discuter avec mon copian, jouer ave mon copin..."],
				["Dans la vie je suis plutôt...", "Stresse mais cool à la fois" ]
		    ]
};';

?>

informationProfil(profil);
