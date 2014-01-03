<?php session_start();
	$_SESSION['email'] = $_POST['email'];
	$_SESSION['confirmemail'] = $_POST['confirmemail'];
	$_SESSION['motdepasse'] = $_POST['motdepasse'];
	$_SESSION['nom'] = $_POST['nom'];
	$_SESSION['prenom'] = $_POST['prenom'];
	$_SESSION['jour'] = $_POST['jourDeNaissance'];
	$_SESSION['mois'] = $_POST['moisDeNaissance'];
	$_SESSION['annee'] = $_POST['anneeDeNaissance'];
	$_SESSION['sexe'] = $_POST['sexe'];
	
try{
	$bdd = new PDO('mysql:host=localhost;dbname=personne', 'root', 'Goonpourl1fo');
}
catch(Exception $e)
{
	    // En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
}
$donnee = $bdd->prepare('SELECT id FROM identifiant WHERE email = ? ');
$donnee->execute(array($_SESSION['email']));
$id = $donnee->fetch();

if(!empty($id)){
	echo("deja inscrit");
}

else{
	include("../modele/horsConnexion/inscription.php");
	inscription($_SESSION['email'], $_SESSION['motdepasse'], $_SESSION['nom'], $_SESSION['prenom'],
		 		$_SESSION['jour'], $_SESSION['mois'], $_SESSION['annee'], $_SESSION['sexe']);
	
	echo("vous etes bien inscrit");
}
$id->closeCursor();


