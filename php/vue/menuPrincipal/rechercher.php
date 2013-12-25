<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/rechercher.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/class/restaurantComplet.class.css"/>
			<title> Acceuil </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("navigateur.php"); ?>
				</nav>
				
				<section id="partiePrincipale">
					
					<h1 id="titreRecherche">Notre selection personnalisé pour Lausanne</h1>

					<ul id="options">
						<li> <h2 class = "titreOption">Distance :</h2> </li>
						<li>
							<input type="checkbox" name="toutDistance" id="toutDistance" /> <label for="toutDistance"> Tous </label><br />
							<input type="checkbox" name="voiture" id="voiture" /> <label for="voiture">En voiture (~8km)</label><br />
							<input type="checkbox" name="velo" id="velo" /> <label for="velo"> En vélo (~4km)</label><br />
							<input type="checkbox" name="pied" id="pied" /> <label for="pied">A pied (~2km) </label><br />
							<input type="checkbox" name="500m" id="500m" /> <label for="500m">A moins de 500m </label><br />
						
						</li>

						<li>
							<h2 class = "titreOption">Prix :</h2>
						</li>
						<li>
							<input type="checkbox" name="toutPrix" id="toutPrix" /> <label for="toutPrix"> Tous </label><br />
							<input type="checkbox" name="$" id="$" /> <label for="$">$ </label><br />
							<input type="checkbox" name="$$" id="$$" /> <label for="$">$$ </label><br />
							<input type="checkbox" name="$$$" id="$$$" /> <label for="$">$$$ </label><br />
							<input type="checkbox" name="$$$$" id="$$$$" /> <label for="$">$$$$ </label><br />
							<input type="checkbox" name="$$$$$" id="$$$$$" /> <label for="$">$$$$$ </label><br />
						</li>
					
						<li>
							<h2 class = "titreOption">Type de cuisine :</h2>
						</li>
						<li>
							<li id="cuisineVisible">
								<input type="checkbox" name="toutCuisine" id="toutCuisine" /> <label for="toutCuisine"> Tous </label><br />
								<input type="checkbox" name="francaise" id="francaise" /> <label for="francaise"> Française</label><br />
								<input type="checkbox" name="italienne" id="italienne" /> <label for="italienne"> Italienne</label><br />
								<input type="checkbox" name="espagnol" id="espagnol" /> <label for="espagnol"> Espagnol</label><br />
								<input type="checkbox" name="pizza" id="pizza" /> <label for="pizza"> Pizza </label><br />
								<input type="checkbox" name="fastfood" id="fastfood" /> <label for="fastfood"> Fast-food</label><br />
							</li>
							
							<li id="cuisineCachees" style="display: none">
							<input type="checkbox" name="toutCuisine" id="toutCuisine" /> <label for="toutCuisine"> Tous </label><br />
							<input type="checkbox" name="africaine" id="africaine" /> <label for="africaine"> Africaine </label><br />
							<input type="checkbox" name="allemande" id="allemande" /> <label for="allemande"> Allemande </label><br />
							<input type="checkbox" name="americaine" id="americaine" /> <label for="americaine"> américaine</label><br />
							<input type="checkbox" name="ameriqueDuSud" id="ameriqueDuSud" /> <label for="ameriqueDuSud">  Amérique du Sud </label><br />
							<input type="checkbox" name="asiatique" id="asiatique" /> <label for="asiatique"> Asiatique </label><br />
							<input type="checkbox" name="barbecueGrillades" id="barbecueGrillades" /> <label for="barbecueGrillades"> Barbecue/Grillades </label><br />
							<input type="checkbox" name="boulangeriePatisserie" id="boulangeriePatisserie" /> <label for="boulangeriePatisserie"> Boulangerie/Pâtisserie </label><br />
							<input type="checkbox" name="britannique" id="britannique" /> <label for="britannique">  Britannique</label><br />
							<input type="checkbox" name="cafe" id="cafe" /> <label for="cafe">  Café</label><br />
							<input type="checkbox" name="cajunCreole" id="cajunCreole" /> <label for="cajunCreole"> Cajun & créole </label><br />
							<input type="checkbox" name="caraibes" id="caraibes" /> <label for="caraibes"> Caraïbes </label><br />
							<input type="checkbox" name="charcuterie" id="charcuterie" /> <label for="charcuterie"> Charcuterie </label><br />
							<input type="checkbox" name="chinoise" id="chinoise" /> <label for="chinoise"> Chinoise </label><br />
							<input type="checkbox" name="continentale" id="continentale" /> <label for="continentale"> Continentale </label><br />
							<input type="checkbox" name="desserts" id="desserts" /> <label for="desserts"> Desserts </label><br />
							<input type="checkbox" name="espagnol" id="espagnole" /> <label for="espagnole"> Espagnole </label><br />
							<input type="checkbox" name="europeEst" id="europeEst" /> <label for="europeEst"> Europe de l'Est</label><br />
							<input type="checkbox" name="europeenne" id="europeenne" /> <label for="europeenne"> Européenne </label><br />
							<input type="checkbox" name="fastfood" id="fastfood" /> <label for="fastfood"> fast-food</label><br />
							<input type="checkbox" name="francaise" id="francaise" /> <label for="francaise"> Française </label><br />
							<input type="checkbox" name="poisson" id="poisson" /> <label for="poisson"> Fruits de mer/Poisson </label><br />
							<input type="checkbox" name="fusion" id="fusion" /> <label for="fusion"> Fusion </label><br />
							<input type="checkbox" name="grecque" id="grecque" /> <label for="grecque"> Grecque </label><br />
							<input type="checkbox" name="indienne" id="indienne" /> <label for="indienne"> Indienne </label><br />
							<input type="checkbox" name="internationale" id="internationale" /> <label for="internationale"> Internationale </label><br />
							<input type="checkbox" name="irlandaise" id="irlandaise" /> <label for="irlandaise"> Irlandaise </label><br />
							<input type="checkbox" name="italienne" id="italienne" /> <label for="italienne"> Italienne </label><br />
							<input type="checkbox" name="japonaise " id="japonaise" /> <label for="japonaise "> Japonaise  </label><br />
							<input type="checkbox" name="mexicaine" id="mexicaine" /> <label for="mexicaine"> Mexicaine/Tex-mex </label><br />
							<input type="checkbox" name="moyenOrient" id="moyenOrient" /> <label for="moyenOrient"> Moyen Orient </label><br />
							<input type="checkbox" name="mediterraneenne" id="mediterraneenne" /> <label for="mediterraneenne"> Méditerranéenne </label><br />
							<input type="checkbox" name="pizza" id="pizza" /> <label for="pizza"> Pizza </label><br />
							<input type="checkbox" name="pub" id="pub" /> <label for="pub"> Pub </label><br />
							<input type="checkbox" name="soupe" id="soupe" /> <label for="soupe"> Soupes </label><br />
							<input type="checkbox" name="steakhouse" id="steakhouse" /> <label for="steakhouse"> Steakhouse </label><br />
							<input type="checkbox" name="suisse" id="suisse" /> <label for="suisse"> Suisse </label><br />
							<input type="checkbox" name="sushi" id="sushi" /> <label for="sushi"> Sushi </label><br />
							<input type="checkbox" name="thai" id="thai" /> <label for="thai"> Thaï </label><br />
							<input type="checkbox" name=" vietnamienne" id=" vietnamienne" /> <label for=" vietnamienne"> Vietnamienne </label><br />
							<input type="checkbox" name="vegetarienne" id="vegetarienne" /> <label for="vegetarienne"> Végétarienne </label><br />
							</li>
		
						</li>
						<li class="avance" id="cuisinesAvancees">  + Plus de types de cuisine
						</li>
						
						<li>  
							<h2 class = "titreOption"> Fonctionnalités :</h2>
						</li>
						<li id="fonctionsVisible">
							<input type="checkbox" name="toutFonction" id="toutFonction" /> <label for="toutFonction"> Tous </label><br />
							<input type="checkbox" name="ouvertMaintenant" id="ouvertMaintenant" /> <label for="ouvertMaintenant"> Ouvert maintenant </label><br />
							<input type="checkbox" name="enfantBasAge" id="enfantBasAge" /> <label for="enfantBasAge"> Enfant en bas-age</label><br />
							<input type="checkbox" name="aEmporter" id="aEmporter" /> <label for="aEmporter">A emporter </label><br />
							<input type="checkbox" name="terasse" id="terasse" /> <label for="terasse"> Terasse</label><br />		
						</li>
						<li id="fonctionsCachees" style="display: none">
							<input type="checkbox" name="toutFonction" id="toutFonction" /> <label for="toutFonction"> Tous </label><br />
							<input type="checkbox" name="aEmporter" id="aEmporter" /> <label for="aEmporter">A emporter </label><br />
							<input type="checkbox" name="buffet" id="buffet" /> <label for="buffet"> Buffet</label><br />	
							<input type="checkbox" name="buffetVolonte" id="buffetVolonte" /> <label for="buffetVolonte"> Buffet à volonté </label><br />	
							<input type="checkbox" name="Bière et vin" id="Bière et vin" /> <label for="bierevin">Bière et vin</label><br />
							<input type="checkbox" name="CafeConcert" id="CafeConcert" /> <label for="CafeConcert"> Café-concert </label><br />	
							<input type="checkbox" name="carteCredit" id="carteCredit" /> <label for="carteCredit"> Cartes de crédit</label><br />
							<input type="checkbox" name="enfantBasAge" id="enfantBasAge" /> <label for="enfantBasAge"> Enfant en bas-age</label><br />
							<input type="checkbox" name="grandeOccasion" id="grandeOccasion" /> <label for="grandeOccasion"> Grandes occasions</label><br />
							<input type="checkbox" name="boutDeLaNuit" id="boutDeLaNuit" /> <label for="boutDeLaNuit"> Jusqu'au bout de la nuit </label><br />	
							<input type="checkbox" name="livraison" id="livraison" /> <label for="livraison"> Livraison à domicile </label><br />	
							<input type="checkbox" name="mobiliteReduite" id="mobiliteReduite" /> <label for="mobiliteReduite"> Mobilité réduite </label><br />
							<input type="checkbox" name="ouvertMaintenant" id="ouvertMaintenant" /> <label for="ouvertMaintenant"> Ouvert maintenant </label><br />
							<input type="checkbox" name="panorama" id="panorama" /> <label for="panorama"> Panorama </label><br />	
							<input type="checkbox" name="petitDejeunerBrunch" id="petitDejeunerBrunch" /> <label for="petitDejeunerBrunch"> Petit-déjeuner/Brunch</label><br />	
							<input type="checkbox" name="groupes" id="groupes" /> <label for="groupes"> Pour les groupes</label><br />	
							<input type="checkbox" name="repasAffaires" id="repasAffaires" /> <label for="repasAffaires"> Repas d'affaires</label><br />	
							<input type="checkbox" name="romantique" id="romantique" /> <label for="romantique">Romantique </label><br />	
							<input type="checkbox" name="reservation" id="reservation" /> <label for="reservation"> Sur réservation</label><br />
							<input type="checkbox" name="tele" id="tele" /> <label for="tele">Télévision</label><br />	
							<input type="checkbox" name="terrasse" id="terrasse" /> <label for="terrasse">Terrasse extérieure</label><br />
							<input type="checkbox" name="wifi" id="wifi" /> <label for="wifi"> Wifi</label><br />
							
						
						</li>
						<li class="avance" id="fonctionsAvancees"> + Plus de fonctionnalités
						</li>

					</ul>

					<iframe id="carte" width="300" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.fr/?ie=UTF8&amp;t=m&amp;ll=46.754917,1.73584&amp;spn=4.516326,6.591797&amp;z=6&amp;output=embed"></iframe>
					
				</section>	
				
				
				<script src = "http://localhost/Meittopi/php/javascript/class/listeRestauComplet.class.js"> </script>
				<script src = "http://localhost/Meittopi/php/javascript/class/restaurantComplet.class.js"> </script>
				<script src = "http://localhost/Meittopi/php/javascript/menuPrincipal/rechercher.js"> </script>
				
			</section>
		</body>
	</html>
