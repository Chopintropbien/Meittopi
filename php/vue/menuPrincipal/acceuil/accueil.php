<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/classDaffichage/affichageRevueEtEvenement/evenement.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/classDaffichage/affichageRevueEtEvenement/revue.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/classDaffichage/affichageRevueEtEvenement/listeRevueEtEvenement.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/classDaffichage/profil/profilPageAcceuil.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/acceuil/acceuil.css"/>

			<title> Acceuil </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>

				<section id="partiePrincipale">
					<h2 id="mettopi"> Meittopi à Lausanne</h2>
					<hr/>
					
					<section id="partieGauche">
						<h2> Activités récentes </h2>
						
						<ul id="listeRevueEtEvenement">
					
						</ul>
						
					</section>
					
					<section id="partieDroite">
						<aside id="profil">

						</aside>
					</section>
				</section>
				

				<!-- class pour la partie gauche -->
				<script src="http://localhost/Meittopi/php/controleur/classDAffichage/affichageRevueEtEvenement/revue.class.js"></script>
				<script src="http://localhost/Meittopi/php/controleur/classDAffichage/affichageRevueEtEvenement/evenement.class.js"></script>
				<script src="http://localhost/Meittopi/php/controleur/classDAffichage/affichageRevueEtEvenement/listeRevueEtEvenement.class.js"></script>
	
				<!-- class pour la partie droite -->
				<script src="http://localhost/Meittopi/php/controleur/classDAffichage/profil/profilPageAcceuil.class.js"></script>
				
				<!-- script de chargement du JSON  -->
				<script src="http://localhost/Meittopi/php/controleur/menuPrincipal/acceuil/acceuilFonctionJSON.js"></script>
				<script src="http://localhost/Meittopi/php/modele/menuPrincipal/acceuil/acceuil.php"></script>
				
				<!-- script pour le dinamisme de la page -->
				<script src="http://localhost/Meittopi/php/controleur/menuPrincipal/acceuil/acceuil.js"></script>


				<!-- chargement du text en francais -->
				<script src="http://localhost/Meittopi/php/controleur/menuPrincipal/acceuil/francais/acceuil.js"></script>

				

				
				
		</body>
	</html>

