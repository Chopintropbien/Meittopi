<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/discution/pageDUneDiscution.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/discution/listeCathegorieDiscution.css"/>
			

			<title id="titre"> </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>
				
				<section id="partiePrincipale">

				<a class="ajous" id="ajous" href="http://localhost/Meittopi/php/vue/menuPrincipal/discution/ajouterDiscution.php"> </a> 

				<section id="partiePrincipale">
					<ul id="typeDeDiscution">
						<li> <a id="mesDiscution"></a> </li>
						<li> <a id="toutes"> </a> </li>
						<li> <a id="alimentationSpecifique"></a> </li>
						<li> <a id="parentEnfant"></a> </li>
						<li> <a id="evenement"></a> </li>
						<li> <a id="questionSite"></a> </li>
						<li> <a id="local"></a> </li>
						<li> <a id="humour"></a> </li>
						<li> <a id="information"></a> </li>
						<li> <a id="sortir"></a> </li>
						<li> <a id="autre"></a> </li>
					</ul>
					
					<section id="discutionSection">
					

					
					</section>

				</section>
				
				<!-- fonction -->
			<script src = "http://localhost/Meittopi/php/controleur/fonction/ajouterTexte.js"> </script>
			
				<!-- class -->
			<script src = "http://localhost/Meittopi/php/controleur/classDAffichage/discution/uneDiscution.class.js"></script>
			<script src = "http://localhost/Meittopi/php/controleur/classDAffichage/discution/uneReponseAUneDiscution.class.js"></script>
			
				<!-- chargement du JSON -->
			<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/discution/pageDUneDiscution/uneDiscutionJSON.js"></script>
			<script src = "http://localhost/Meittopi/php/modele/menuPrincipal/discution/pageDUneDiscution.php"></script>
			
				<!-- francais -->
			<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/discution/pageDUneDiscution/francais/pageDUneDiscution.js"></script>
			<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/discution/francais/listeDiscution.js"></script>
			
		</body>
	</html>
