<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/votreAvis/proposerAmelioration.css"/>

			<title> Acceuil </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../../navigateur/navigateur.php"); ?>
				</nav>

				<section id="partiePrincipale">
					<h1> Proposer une amelioration </h1>
					
					<h2> Titre </h2>
					<input type = "texte" id="titre"/>
					<h2> Description </h2>
					<textarea></textarea>
					<h2> Photo enventuelle</h2>
					<section>
						<p> + </p>
						<p> + </p>
						<p> + </p>
						<p> + </p>
					</section>
					
					<input type = "button" value = 'Sauvegarder' class="submit">
					<input type = "button" value = 'Proposer' class="submit">
					
				</section>
				
			</section>
			
		</body>
	</html>
