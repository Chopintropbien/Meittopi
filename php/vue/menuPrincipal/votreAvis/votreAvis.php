<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/votreAvis/votreAvis.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/profilDeParticipation.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/propositionAmelioration.class.css"/>
			<title id="titre"> Acceuil </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>

				<section id="partiePrincipale">

					
					<section id="gauche">
						<a href = "http://localhost/Meittopi/php/vue/menuPrincipal/votreAvis/proposerAmelioration.php">
							<h6 class="ajous" id="ajous"> </h6>
						</a>  
					
					
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
				
		<script src = "http://localhost/Meittopi/php/javascript/class/propositionAmelioration.class.js"></script>
		<script src = "http://localhost/Meittopi/php/javascript/class/listePropositionAmelioration.class.js"></script>
		
		<script src = "http://localhost/Meittopi/php/javascript/class/profilDeParticipation.class.js"></script>
		<script src = "http://localhost/Meittopi/php/javascript/menuPrincipal/votreAvis/francais/votreAvis.js"></script>
		
	
		
		</body>
	</html>
