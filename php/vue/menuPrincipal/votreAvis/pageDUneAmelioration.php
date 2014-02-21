<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/votreAvis/pageDUneAmelioration.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/commantaire.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/propositionAmeliorationComplete.class.css"/>

			<title id="titre">  </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>

				<section id="partiePrincipale">
					<article id = "amelioration">
						
<!--
						<section>
							<img src = 'http://localhost/Meittopi/image/restau.jpg'/>
							<img src = 'http://localhost/Meittopi/image/restau.jpg'/>
							<img src = 'http://localhost/Meittopi/image/restau.jpg'/>
						</section>
	
						<article>
							<h1> Tritre</h1>
							<p> ehfqzfu iq iqr eb jvb jvb jbe hy eri eui eyi eruf arylf lfv aqerf
							 fjhq jh vjhd viz iy grig ig iyf iuf i ffiuf f  jfg euirfg ealurygfelarug 
							  erug ergiue gmiaeu ga
							   aerguio aergimu aerigh eaigu aegiue 
							   coucou yemendja</p>
						</article>
						<aside>
							<canvas id="pour" width="150" height="10"> 
							
							</canvas>
							<canvas id="canvas" width="150" height="10"> 
							
							</canvas>
							<p> 200 </p>
							
							<script>  
								var canvas  = document.querySelector('#canvas');
								var context = canvas.getContext('2d');
								
								context.fillStyle = "green";
								context.fillRect(0, 0, 70, 10);
								
								context.fillStyle = "white";
								context.fillRect(70, 0, 30, 10);
								
								context.lineWidth = "1";
								context.strokeStyle = "silver";
								context.strokeRect(0, 0, 100, 10);
								
							</script>
							<p>Contre</p>
							<input type = "range"/>
							
							<p>Dons</p>
							<input type = "range"/>
						</aside>
-->
						
					</article>
				
					
					<ul id = "listeCommantaire"> 
						<!--
						<li> 
							<img src = 'http://localhost/Meittopi/image/restau.jpg'>
							<article>
								<h6> Lauriane Mollier</h6>
								<p> kefbzefi bkf r hrfb qhfb qh f f qhbf qhbf f 
								  dhg ieg aeh gerhg aergb ekug egb eugb etogu 
								</p>
								
							</article>
							<section>
								<p>Pour: 10</p>
								<p> Contre: 20</p>
								<p> <a> Commenter</p>
							</section>
							
							<ul>
								<li>
									<img src = 'http://localhost/Meittopi/image/restau.jpg'>
									<article>
								<h6> Lauriane Mollier</h6>
								<p> kefbzefi bkf r hrfb qhfb qh f f qhbf qhbf f 
								  dhg ieg aeh gerhg aergb ekug egb eugb etogu 
								</p>
								
							</article>
							<section>
								<p>Pour: 10</p>
								<p> Contre: 20</p>
								</li>
							</ul>
								
						</li>
						-->
					
					</ul>
					
					
					
				</section>
				
			</section>
			<script src = "http://localhost/Meittopi/php/controleur/class/propositionAmeliorationComplete.class.js"> </script>
			
			<script src = "http://localhost/Meittopi/php/controleur/class/commantaire.class.js"> </script>
			<script src = "http://localhost/Meittopi/php/controleur/class/listeCommantaire.class.js"> </script>
			
			<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/votreAvis/francais/pageDUneAmelioration.js"> </script>
			
			
		</body>
	</html>
