<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/discution/discution.css"/>
			<title id="titre"> </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>

				<section id="partiePrincipale">
					<h1 id="ouSePasseLesDiscutions"> </h1>
					<a class="ajous" id="ajous"> </a> 
					<ul id="typeDeDiscution">
						<li> <a id="mesDiscution"></a> </li>
						<li> <a id="toutes"> </a> </li>
						<li> <a id="alimentation"></a> </li>

					</ul>
					<table id = "conversation">
						
					</table>
				</section>
			<script src = "http://localhost/Meittopi/php/javascript/class/listeConversation.class.js"></script>
			<script src = "http://localhost/Meittopi/php/javascript/class/conversation.class.js"></script>
			<script src = "http://localhost/Meittopi/php/javascript/menuPrincipal/discution/francais/discution.js"></script>
		</body>
	</html>
