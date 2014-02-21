<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/monProfil.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/listes.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/listeDeListe.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/listeRestau.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/restaurant.class.css"/>
			<title id="titre"></title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>
				
					
			
				<section id="partiePrincipale">
					
					<?php include("navigateur.php"); ?>
					
					<section id="grossePartie">
					
						<h6 class="ajous" id = "ajous"> </h6>
						
							<!-- entete des differentes listes -->
						<ul id="listeDeListe">
							
						</ul>
							<!-- affiche des listes -->
						<article id="affichageRestau">
						
						</article>

					
					</article>
				</section>
				
				<script src = "http://localhost/Meittopi/php/controleur/class/listeRestau.class.js"> </script>
				<script src = "http://localhost/Meittopi/php/controleur/class/restaurant.class.js"> </script>
				<script src = "http://localhost/Meittopi/php/controleur/class/listeDeListe.class.js"> </script>
				
				<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/profil/francais/listes.js"> </script> 
				<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/profil/listes.js"> </script>  
				<script src = "http://localhost/Meittopi/php/modele/menuPrincipal/profil/listes.php"> </script> 
				
				
		</body>
	</html>

