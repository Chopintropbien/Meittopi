<?php session_start(); 
	$_SESSION['emailInscrit'] = $_POST['emailInscrit'];
	$_SESSION['motdepasseInscrit'] = $_POST['motdepasseInscrit'];
try
{
    // On se connecte à MySQL
    $bdd = new PDO('mysql:host=localhost;dbname=personne', 'root', 'Goonpourl1fo');
}
catch(Exception $e)
{
    // En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
}

$donnee = $bdd->prepare('SELECT motdepasse FROM identifiant WHERE email = ?');
$donnee->execute(array($_SESSION['emailInscrit']));
$motdepasse = $donnee->fetch();

$_SESSION['motdepasseInscrit'] = sha1($_SESSION['motdepasseInscrit']);
$pasInscrit = true;
if(!empty($motdepasse['motdepasse'])){
	$pasInscrit = false;
}
if($pasinscrit || $_SESSION['motdepasseInscrit'] != $motdepasse['motdepasse']){
	include("../../vue/horsConnexion/identificationEchouee.php");
}
else{
	include("../../vue/menuPrincipal/accueil.php");
}

$motdepasse->closeCursor();
?>
