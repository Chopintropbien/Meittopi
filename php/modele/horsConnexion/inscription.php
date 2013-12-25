<?php 

function inscription($email, $motdepasse, $nom, $prenom, $jour, $mois, $annee, $sexe)  {
	
	global $bdd;
	$motdepasse = sha1($motdepasse);
	
	$req = $bdd->prepare('INSERT INTO identifiant (email, motdepasse, nom, prenom, jour, mois, annee, sexe, date_inscription) 
						  VALUES (:email, :motdepasse, :nom, :prenom, :jour, :mois, :annee, :sexe, CURDATE()) ');
	$req->execute(array(
			'email' => $email,
			'motdepasse' => $motdepasse,
			'nom' => $nom,
			'prenom' =>  $prenom,
			'jour' => $jour,
			'mois' => $mois,
			'annee' => $annee,
			'sexe' => $sexe,
	));
	
	
}

?>
