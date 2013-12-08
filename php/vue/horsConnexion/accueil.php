<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="../../../css/base.css"/>
			<link rel="stylesheet" href="../../../css/horsConnexion/acceuil.css"/>
			<link rel="stylesheet" href="../../../css/horsConnexion/navigateur.css"/>
			<link rel="stylesheet" href="../../../css/horsConnexion/formulaireInscription.css"/>
			<title> Acceuil </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("navigateur.php"); ?>
				</nav>
			
				<section id="pageConnection">
					<?php include("formulaireInscription.php"); ?>
				</section>
				
				 <?php include("../../preverification/horsConnexion/inscription.php"); ?>
				
		</body>
	</html>
