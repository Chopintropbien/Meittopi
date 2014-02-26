<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/rechercher/rechercher.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/classDaffichage/listeRestaurantRecherche/listeRestaurant.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/classDaffichage/listeRestaurantRecherche/restaurant.class.css"/>
			<title id="titre"> </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>
				
				<section id="partiePrincipale">
					
					<h1 id="titreRecherche"></h1>

					<ul id="options">
						<?php include("option.php"); ?>
					</ul>
					
					<ol id="rechercheRestau">
						
					</ol>

					<iframe id="carte" width="300" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.fr/?ie=UTF8&amp;t=m&amp;ll=46.754917,1.73584&amp;spn=4.516326,6.591797&amp;z=6&amp;output=embed"></iframe>
					
				</section>	
					<!-- fonction -->
				<script src = "http://localhost/Meittopi/php/controleur/fonction/ajouterTexte.js"> </script>
				
					<!-- class -->
				<script src = "http://localhost/Meittopi/php/controleur/classDAffichage/listeRestaurantRecherche/listeRestaurant.class.js"> </script>
				<script src = "http://localhost/Meittopi/php/controleur/classDAffichage/listeRestaurantRecherche/restaurant.class.js"> </script>
				
					<!-- charger le JSON -->
				<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/rechercher/rechercher.js"> </script>
				<script src = "http://localhost/Meittopi/php/modele/menuPrincipal/rechercher/rechercher.php"> </script>
				
					<!-- langue -->
				<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/rechercher/francais/rechercher.js"> </script>
				<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/rechercher/francais/optionNom.js"> </script>
				
					<!-- specifique à la page -->
				<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/rechercher/option.js"> </script>
				
			</section>
		</body>
	</html>
