<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/votreAvis/pageDUneAmelioration.css"/>
			
			<link rel="stylesheet" href=""/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/classDaffichage/propositionAmelioration/ameliorationComplete.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/classDaffichage/commentaire/commentaireAmelioration.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/classDaffichage/commentaire/listeCommentaire.class.css"/>
			<title id="titre">  </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>

				<section id="partiePrincipale">
					<article id = "propositionAmelioration">						
					</article>
				
					
					<ul id = "listeCommantaire"> 
					</ul>
					
					
					
				</section>
				
			</section>
		
			<!-- fonction -->
		<script src = "http://localhost/Meittopi/php/controleur/fonction/ajouterTexte.js"> </script>
			
			<!-- class-->
		<script src = "http://localhost/Meittopi/php/controleur/classDAffichage/propositionAmelioration/ameliorationComplete.class.js"> </script>
		
		<script src = "http://localhost/Meittopi/php/controleur/classDAffichage/commentaire/listeCommmentaire.class.js"> </script>
		<script src = "http://localhost/Meittopi/php/controleur/classDAffichage/commentaire/commentaireAmelioration.class.js"> </script>
		
			<!-- charger le JSON -->
		<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/votreAvis/pageDUneAmelioration/ameliorationJSON.js"> </script> 
		<script src = "http://localhost/Meittopi/php/modele/menuPrincipal/votreAvis/pageDUneAmelioration/ameliorationJSON.php"> </script> 	
			
		<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/votreAvis/pageDUneAmelioration/commentaireJSON.js"> </script> 
		<script src = "http://localhost/Meittopi/php/modele/menuPrincipal/votreAvis/pageDUneAmelioration/commentaireJSON.php"> </script> 

			<!-- page en francais-->
		<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/votreAvis/pageDUneAmelioration/francais/amelioration.js"> </script>
		
			<!-- specifique à la page -->
			
			
			
		</body>
	</html>
