<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/votreAvis/votreAvis.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/classDaffichage/propositionAmelioration/ameliorationResume.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/classDaffichage/propositionAmelioration/listeAmelioration.class.css"/>
			<title id="titre"> Acceuil </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>

				<section id="partiePrincipale">
					<a href = "http://localhost/Meittopi/php/vue/menuPrincipal/votreAvis/proposerAmelioration.php">
						<h6 class="ajous" id="ajous"> </h6>
					</a>  
					
					<section id="gauche">

						<!-- liste des ameliorations propose -->
						<ul id="propositionAmelioration"> 
						
						</ul>
					</section>
					
					
					<aside id="droite">
						
						
						<article id="profil">

						</article>
						
						<article id="explication"> 
							
						</article>
												
						<article id="donnation">
							
						</article>
						
					</aside>
						
					
				</section>
				
				
			<!-- class-->
		<script src = "http://localhost/Meittopi/php/controleur/classDAffichage/propositionAmelioration/ameliorationResume.class.js"></script>
		<script src = "http://localhost/Meittopi/php/controleur/classDAffichage/propositionAmelioration/listeAmelioration.class.js"></script>
		
			<!-- charger le JSON -->
		<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/votreAvis/votreAvis/listeAmeliorationJSON.js"> </script> 
		<script src = "http://localhost/Meittopi/php/modele/menuPrincipal/votreAvis/votreAvis/listeAmeliorationJSON.php"> </script> 
		
			<!-- langue -->
		<script src = "http://localhost/Meittopi/php/controleur/class/profilDeParticipation.class.js"></script>

		
			<!-- page en francais-->
		<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/votreAvis/votreAvis/francais/votreAvis.js"></script>
		
			<!-- specifique à la page -->
		
		</body>
	</html>
