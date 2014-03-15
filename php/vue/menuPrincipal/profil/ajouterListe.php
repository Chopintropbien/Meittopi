<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/navigateur.css"/>

			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/listes.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/listeDeListe.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/listeRestau.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/restaurant.class.css"/>
			
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/classDaffichage/listeRestaurantRecherche/restaurant.class.css"/>
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
					
						<a href="http://localhost/Meittopi/php/vue/menuPrincipal/profil/ajouterListe.php"> <h6 class="ajous" id = "ajous"> </h6> </a>
						
						
							<!-- entete des differentes listes -->
						<ul id="listeDeListe">
							<li id="0" class="listeDeListe">
							    A faire
							</li>
						</ul>
							<!-- affiche des listes -->

						<ul id="liste">
							<li class="entete"> 
							<input type="texte" placeholder="Mon titre"/> </li>
						<hr/>
					

						
						<li	 class="ajouterALaListe">
							<h3> Ajouter à la liste:</h3>
							<select name="typeAjousListe"> 
								<option value="type" id="type"> Quoi? </option>
								<option value="amis" id="Un amis"> Amis </option>
								<option value="restaurant" id="restaurant"> Un restaurant </option>
								<option value="evenement" id="evenement"> Un evénement </option>
								<option value="discution" id="discution"> Une discution </option>
							</select>
							
							<input type="texte" id="chercherElementAjouList" placeholder="Rechercher"/>
							
							<div><input type="button" id="ajouterALaListe" value="Validé" /></div>
							
						</li>
						
						</ul>
						
						

					
					</article>
				</section>
				

				
				
		</body>
	</html>
