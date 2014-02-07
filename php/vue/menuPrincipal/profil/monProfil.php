<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/monProfil.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/monProfil.class.css"/>
			<title id = "titre">  </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>
				
					
			
				<section id="partiePrincipale">
					
					<?php include("navigateur.php"); ?>
					
					
					<article id="profil_profil"> 
<!--
						<h2> Lauriane Mollier </h2>
						<h5> Alias: <strong> DarkChopin </strong></h5>
							<article id="profilComplet">
								
									<figure id="profil"> 
										<a href="profil.php"> <img src="../Image/profil.png" alt="Photo de profile" /> </a>
							
										<!-- mettre un lien pour acceder au profil facilement et suprimer la case profil-->
<!--
										<figcaption id="legendeProfil">
											<a href="profil.php"> Changer de photo de profil </a> 
											<ul id="notif">
												<li> 0 amis </li>
												<li> 0 avis </li>
												<li> 0 followers </li>
											</ul>
										</figcaption> 
									</figure>
									
									<ul id="infoPersonnelles">
										<li class="infoPersonnelles">
											<h6> J'habite : </h6> 
											<p> Chemin de malley, 12 </br>
											    1007 Lausanne
											</p>
										</li>
										<li class="infoPersonnelles"> 
											<h6> Je suis :</h6>
											 <p> Dévelopeuse du site</p>
										</li>
										<li class="infoPersonnelles"> <h6> J'aime </h6> 
											 <p> Coder en php ou être avec mon copain</p>
										</li>
										<li class="infoPersonnelles" id="mettreAJour"> 
											<a href="http://localhost/Meittopi/php/vue/menuPrincipal/profil/modifierMonProfil.php">Mettre à jour votre profil!</a>
										</li>
										
									</ul>
							</article>
-->

					</article> 
					
					<aside id="blocDeDroite">
						<article>
							<h2 id="changerLeSite">   </h2>
							<p id="changerLeSiteP">
							</p>
						</article>
					
						<article> 
							<h2 id="suggestion">  </h2>
							<p id="suggestionP">
								 
							</p>
						</article>
						
						<article> 
							<h2 id="appreciation"> </h2>
						</article>
					</aside>
				</section> 
		
		<script src = "http://localhost/Meittopi/php/javascript/class/profil.class.js"> </script>
		<script src = "http://localhost/Meittopi/php/javascript/menuPrincipal/profil/francais/monProfil.js"> </script>  
		<script src = "http://localhost/Meittopi/php/javascript/fonction/objetXMLHttpRequest.js"> </script>  
		<script src = "http://localhost/Meittopi/php/javascript/menuPrincipal/profil/monProfil.js"> </script> 
		<script src = "http://localhost/Meittopi/php/JSON/reponse/menuPrincipal/profil/monProfil.php"> </script> 
				
		
		</body>
	</html>
