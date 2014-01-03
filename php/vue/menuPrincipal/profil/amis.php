<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/amis.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/ami.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/listeAmis.class.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/raconterSortie.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/listeRaconterSortie.class.css"/>
			
			<title> Acceuil </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>

				<section id="partiePrincipale">
					
					<?php include("navigateur.php"); ?>
					
					<section id="section">
						
						<article id="inviterAmis">
							<input type="button" value="Inviter des amis" id="inviter">
						</article>
						
						<ul id="listeAmis" class="grandeListe">
							
						</ul>
						
						
						<ul id="activiteAmis">
							
						</ul>
					
					
					</section>
					
					
					
					
					
					
				</section>
				
			<script src="http://localhost/Meittopi/php/javascript/class/ami.class.js"> </script>
			<script src="http://localhost/Meittopi/php/javascript/class/listeAmis.class.js"> </script>
			<script src="http://localhost/Meittopi/php/javascript/class/raconterSortie.class.js"> </script>
			<script src="http://localhost/Meittopi/php/javascript/class/listeRaconterSortie.class.js"> </script>
			<script src="http://localhost/Meittopi/php/javascript/menuPrincipal/profil/amis.js"> </script>

		</body>
	</html>
