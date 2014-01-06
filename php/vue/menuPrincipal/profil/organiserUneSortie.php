<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/organiserUneSortie.css"/>

			<title id="titre"></title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>

				<section id="partiePrincipale">
					<h1 id="proposerUneAmelioration">  </h1>
					
					<h2 id="titreA"> </h2>
					<input type = "texte" id="titreAmelioration"/>
					<h2 id="descpription">  </h2>
					<textarea></textarea>
					
					<h2 id="titreAmis"> </h2>
					<article>
						<input type="search" id="rechercheAmis" placeholder="" />
						<ul>
							<li> la photo de profil</li>
							<li> <img src=""/></li>
						</ul>
					</article>
					
					<h2 id="photos"> </h2>
					<section>
						<p> + </p>
						<p> + </p>
						<p> + </p>
						<p> + </p>
					</section>
					
					<input type = "button" value = '' class="submit" id="sauvegarder">
					<input type = "button" value = '' class="submit" id="proposer">
					
				</section>
				
			</section>
			
			<script src="http://localhost/Meittopi/php/javascript/menuPrincipal/profil/francais/organiserUneSortie.js"></script>
			
		</body>
	</html>
