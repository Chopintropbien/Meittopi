<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/monProfil.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/sortie.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/ami.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/listeDeListe.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/sortie.class.css"/>
			
			
			<title> Acceuil </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>
				<section id="partiePrincipale">
					
					<?php include("navigateur.php"); ?>
					
					<section id="grossePartie">
				
						<h6 class="ajous"> + Organiser une sortie </h6>
						
						<ul id="listeDeListe">
							
							
						</ul>
						
						<article id="affichageRestau">
							<!--
							<ul>
								<li> <h2> Ce soir à l'arcadie</h2></li>
								<li> <p> ALors je ne sais pas encore a quel heure, 
										par contre, ce je sais, c'ets que ca sera à l'acadie, 
										a l'epft 
									</p></li>
								<li> <h4> Participant : </h4></li>
							</ul>
							-->
						</article>
					
					</section>
					
				</section>
			</section>
			
			<script src = "http://localhost/Meittopi/php/javascript/class/ami.class.js"> </script>
			<script src = "http://localhost/Meittopi/php/javascript/class/sortie.class.js"> </script>
			<script src = "http://localhost/Meittopi/php/javascript/class/listeDeListe.class.js"> </script>
			<script src = "http://localhost/Meittopi/php/javascript/menuPrincipal/profil/sortie.js"> </script>  
			
		</body>
	</html>
