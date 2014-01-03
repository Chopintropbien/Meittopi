<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/ajous.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/monProfil.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/listes.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/listeDeListe.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/listeRestau.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/restaurant.class.css"/>
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
					
						<h6 class="ajous"> + Ajouter une liste </h6>
						
							<!-- entete des differentes listes -->
						<ul id="listeDeListe">
							
						</ul>
						<article id="affichageRestau">
						
						</article>
						
						<!-- il faut creer tout ca 
							
						<ul class="grandeListeRestau">
							<li class = "titreListeRestau" id = "titreListeRestau"> </li>
							<li class = "corpsListeRestau" id = "corpsListeRestau" >
							<!--	<ol class="restau">
	
									<img src="http://localhost/Meittopi/image/restau.jpg" alt="photo" class="photoRestau"/>
									
									<article class="articleRestau">	
											<h3 class="titreRestau">
												La table du valoton
											</h3>
											<div class = "noteRestau">
												<img src="http://localhost/Meittopi/image/medaille.png" class="etoile"/>
												<img src="http://localhost/Meittopi/image/medaille.png" class="etoile"/>
												<img src="http://localhost/Meittopi/image/medaille.png" class="etoile"/>
												<img src="http://localhost/Meittopi/image/medaille.png" class="etoile"/>
												<img src="http://localhost/Meittopi/image/medaille.png" class="etoile"/>
											</div>
											
											<h4 class="titreDescriptionRestau">J'ai noté ca</h4>
											<p class="descriptionRestau"> 
												zkfbkbkvbqekvbdkvbfvk
											fvqkfvbqdkvbdvkdjb</p>
											<cite class="evenementRestau"> Evenements</cite>
											
										</article>
								</ol> 
								
								
							</li>
							<li class = "footerListeRestau"> </li>
						</ul>
						-->
					
					</article>
				</section>
				<script src = "http://localhost/Meittopi/php/javascript/class/listeRestau.class.js"> </script>
				<script src = "http://localhost/Meittopi/php/javascript/class/restaurant.class.js"> </script>
				<script src = "http://localhost/Meittopi/php/javascript/class/listeDeListe.class.js"> </script>
				<script src = "http://localhost/Meittopi/php/javascript/menuPrincipal/profil/listes.js"> </script>  
				
		</body>
	</html>
	
	
	
	<!--
								<ol class="restaurant"> 
									<h2> Restaurant 1
										<img src="../Image/medaille.png" class="etoile"/>
										<img src="../Image/medaille.png" class="etoile"/>
										<img src="../Image/medaille.png" class="etoile"/>
									</h2>
									
									
									
									<img src="../restau.jpg" alt="photo" class="imRestau"/>
									
									
									<article class="description">
										
										<aside class="coordonnees">
											<address> Chemin de Malley 12 <br/>
													  1007 Lausanne
											</address>
											<br/>
											<div div="tel"> 0665009933 </div>
										</aside>
										<h4> Truc en plus </h4>
										<p> Petit truc qu'il y a en plus pour ce retaurant</p>
										<h5> Et puis il y a ca pour vous</h5>
										<p> voila ce qu'il y a </p>
										<h5> Qui a aimer dans votre entourage</h5>
										<p> Lucien a liker ce restau</p>
										<cite> Evenements</cite>
									</article>
									
									
									
								</ol> -->
	
