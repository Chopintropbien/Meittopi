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
			
			<title id="titre">  </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>

				<section id="partiePrincipale">
					
					<?php include("navigateur.php"); ?>
					
					<section id="section">

						<div>
							<input type="text" placeholder="Rechercher de personnes" id="rechercherPersonne"/> 
							ou 
							<input type="button" value="Inviter des amis" id="inviterAmis"/>
						</div>
						
						
						 


							<!-- liste des amis -->
						<section id="listeAmisSection">

							<ul class="listePersonne">
								<li> <h1> Vos très chers amis que vous adorez </h1></li>
								<hr/>
								<li>
									<img src="http://localhost/Meittopi/image/profil_vide.png"/>
									<article>
										<h6> Andrei Kucharavy</h6>
										<p>Lausanne</p>
										<p>  2 revus</p>
										
									</article> 
								</li>	
								<hr/>
								<li>
									<img src="http://localhost/Meittopi/image/profil_vide.png"/>
									<article>
										<h6> Andrei Kucharavy</h6>
										<p>Lausanne</p>
										<p>  2 revus</p>
										
									</article> 
								</li>	
								<li>
									<p> Afficher plus</p>
								</li>						
							</ul>
						</section>
						
						
							<!-- liste des gens que la personne suis -->
						<section id="listeGensSuivisSection">
							<ul class="listePersonne">
								<li> <h1> Les personnes qui vous suivent </h1></li>
								<hr/>
								<li>
									<img src="http://localhost/Meittopi/image/profil_vide.png"/>
									<article>
										<h6> Andrei Kucharavy</h6>
										<p>Lausanne</p>
										<p>  2 revus</p>
										
									</article> 
								</li>	
								<hr/>
								<li>
									<img src="http://localhost/Meittopi/image/profil_vide.png"/>
									<article>
										<h6> Andrei Kucharavy</h6>
										<p>Lausanne</p>
										<p>  2 revus</p>
										
									</article> 
								</li>	
								<li>
									<p> Afficher plus</p>
								</li>							
							</ul>
							
						</section>
						
						<section id="listePersonneQuiNousSuis">
							<ul class="listePersonne">
								<li> <h1> Les personnes que vous suivez </h1></li>
								<hr/>
								<li>
									<img src="http://localhost/Meittopi/image/profil_vide.png"/>
									<article>
										<h6> Andrei Kucharavy</h6>
										<p>Lausanne</p>
										<p>  2 revus</p>
										
									</article> 
								</li>	
								<hr/>
								<li>
									<img src="http://localhost/Meittopi/image/profil_vide.png"/>
									<article>
										<h6> Andrei Kucharavy</h6>
										<p>Lausanne</p>
										<p>  2 revus</p>
										
									</article> 
								</li>	
								<li>
									<p> Afficher plus</p>
								</li>							
							</ul>
						
						</section>
					
					</section>
					
					
					
					
					
					
				</section>
				
<!--
			<script src="http://localhost/Meittopi/php/controleur/class/ami.class.js"> </script>
			<script src="http://localhost/Meittopi/php/controleur/class/listeAmis.class.js"> </script>
			<script src="http://localhost/Meittopi/php/controleur/class/raconterSortie.class.js"> </script>
			<script src="http://localhost/Meittopi/php/controleur/class/listeRaconterSortie.class.js"> </script>
			
			
			<script src="http://localhost/Meittopi/php/controleur/menuPrincipal/profil/francais/amis.js"> </script>
-->

		</body>
	</html>
