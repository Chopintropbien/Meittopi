<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/votreAvis/votreAvis.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/profilDeParticipation.class.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/propositionAmelioration.class.css"/>
			<title> Acceuil </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>

				<section id="partiePrincipale">

					
					<section id="gauche">
						<a href = "http://localhost/Meittopi/php/vue/menuPrincipal/votreAvis/proposerAmelioration.php">
							<h6 class="ajous"> + Proposer une amélioration </h6>
						</a>  
					
						<ul id="propositionAmelioration"> 
							<!--
							<li>
								<img src='http://localhost/Meittopi/image/restau.jpg'/>
								<article>
									<h2> Titre</h2>
									<p> descrioptiopnen,rz zn qzrfgehzrg ekg zeg
									KRHBGRLEBGERLGIBHQERJGEG  ERHGISERG QEIRG QERJLHGBQE JHB  jl d
									khbg jghb gqktg 
									</p>
								</article>
								<aside>
									<ul>
										<li> Pour</li>
										<li> <input type="range"/> <p> + </p></li>
										<li> Contre </li>
										<li> <input type="range"/> <p> - </p></li>
										
									</ul>
								</aside>
							</li>
							-->
						</ul>
					</section>
					
					
					<aside id="droite">
						
						<article id="profil">
							<!--
							<img src="http://localhost/Meittopi/image/restau.jpg" />
							<aside>
								<h2> Lauriane Mollier</h2>
								<p>  Statut :<strong> Concepteur du site </strong>   </p> 
								<p> 10 votes + </p>
								<p> 5 votes - </p>
								<p> Don : 10 $</p>
							</aside>
							-->
						</article>
						
						<article id="explication"> 
							<h1> Mais pourquoi cette page?</h1>
							
							<p> Ce site est encore en cours de develeppement, il y a encore plein de chose <em> à améliorer </em> !
							Alors s'il vous<em> manque quelque chose</em> sur le site, que vous trouver qu'il faudrait améliorer 
							telle chose ou au contrainre l'enlever, ou n'importe quel autre idée, <em>proposez-là </em> !
							</br>
							Mais pour pouvoir l'a réaliser, on a besoin de <em>votre soutient</em>, car develloper un site prend beaucoup de temps
							et d'argent...
													
								<!--Le principe de cette page est toute bête: répondre au maximun à <strong>votre besoin</strong>.
							Ce site est encore en cours de develeppement, il y a encore plein de chose à améliorer. Mais, quand
							on est tout seul en face de son ordinateur, on ne sais pas très bien quelle sont les améliorations 
							dont les gens auront le plus besoin... Alors on leur demande! 
							</br>
							Tout ce que vous devez faire, c'est des qu'il vous manque quelque chose sur le site, que vous trouer
							qu'il faudrait améliorer ça, ou enleveler ça, ou je sais pas quel idée, proposer là à la communoté 
							Meittopi!
							<br>
							Ensuite, quand une propostion est faite, voter pour ou contre. Si un certain nombre de personne ont
							voté pour contre, la proposition est annulé ou accepté. 
							<br> 
							Il manque un dernier ingrédiant: nous, les develloppeur du site, avons fait ce site pour notre plaisir, 
							mais develloper ce site prends enormement de temps et d'argent. Si vous voulez que l'on travail d'arrache 
							pied pour que vos idée prenne vie, il faut nous financer un petit peu. 
							C'est pourquoi nous demandons de nous faire un don. 
							-->
							</p>
							<a> pour en savoir plus...</a>
						</article>
						
						
						
						<article id="donnation">
							<h3> Donnation</h3>
							<p> Si vous avez envie que Meitopi s'améliore et <em>évolue</em>, il faut nous financer, car developper 
							un site <em>coute cher</em> et que nous arrivons au bout de nos économies!
							
								<a> Pour en savoir plus</a>
							</p>
						</article>
						
					</aside>
						
					
				</section>
				
		<script src = "http://localhost/Meittopi/php/javascript/class/propositionAmelioration.class.js"></script>
		<script src = "http://localhost/Meittopi/php/javascript/class/listePropositionAmelioration.class.js"></script>
		
		<script src = "http://localhost/Meittopi/php/javascript/class/profilDeParticipation.class.js"></script>
		<script src = "http://localhost/Meittopi/php/javascript/menuPrincipal/votreAvis/votreAvis.js"></script>
		
	
		
		</body>
	</html>
