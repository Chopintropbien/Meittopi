<?php

$prenom = $_POST["prenom"];
$nom = $_POST["nom"];
$email = $_POST["email"];
$motdepasse = sha1($_POST["motdepasse"]);
$jour = $_POST["jour"];
$mois = $_POST["mois"];
$annee = $_POST["annee"];
$sexe = $_POST["sexe"];

$fichierDeTransmission = fopen('../../modele/nonAuthentifier/inscription.txt', 'r+');

$separateur = '????';
fputs($fichierDeTransmission, $prenom . $separateur
							  . $nom . $separateur
							  . $email . $separateur
							  . $motdepasse . $separateur
							  . $jour . $separateur
							  . $mois . $separateur
							  . $annee . $separateur
							  . $sexe . $separateur);

fclose($fichierDeTransmission);


 

?> 

