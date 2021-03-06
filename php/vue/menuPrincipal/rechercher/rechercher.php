<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/rechercher/rechercher.css"/>
			
			<link rel="stylesheet" href="http://localhost/Meittopi/css/classDaffichage/listeRestaurantRecherche/restaurant.class.css"/>
			<title id="titre"> </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>
				
				<section id="partiePrincipale">
					
					<h1 id="titreRecherche"></h1>

					<ul id="options">
						<?php include("option.php"); ?>
					</ul>
					
					<ol id="rechercheRestau">




    <li id="li0" class="restaurant">
        <img src="http://localhost/Meittopi/image/restau.jpg"></img>
        <section id="section0">
            <article id="infoRestau0">
                <article id="nom0">
                    <p>

                        1. 

                    </p>
                    <a id="lienRestau0" href="">
                        <h4>

                            Chez J'aime 

                        </h4>
                    </a>
                </article>
                <div id="etoileEtNbAvis0">
                    <div id="noteGlobalRestau0">
                        <canvas width="23" height="23"></canvas>
                        <canvas width="23" height="23"></canvas>
                        <canvas width="23" height="23"></canvas>
                        <canvas width="23" height="23"></canvas>
                        <canvas width="23" height="23"></canvas>
                    </div>
                    <p id="nbAvis0" class="avis">

                        100 avis

                    </p>
                </div>
                <section id="typeRestau0">
                    <div>

                        $$$

                    </div>
                    <p>

                        Italien, Pizza

                    </p>
                    <span id="croixApparitionElement0">

                        +

                    </span>
                </section>
                <aside id="evenement0" style="display: none;">
                    <a href="">
                        <h6>

                            Diamche:

                        </h6>

                        tout à 13 fr sdfv s ds sfv sf df vgs ver cdfgbfgb …

                    </a>
                </aside>
            </article>
            <aside id="coordonnees0">
                <p id="quartier0">

                    Malley

                </p>
                <adress>

                    Chemin de Malley 12

                    <br/>

                    1007 Lausanne

                    <br/>

                    04 50 62 29 24

                </adress>
            </aside>
            <section id="tableau0">
                <ul id="gensQuiAime0">
                    <h6 class="gensQuiAime">

                        Avis positifs

                    </h6>
                    <li id="gensQuiAimeLi00">
                        <a id="lienAmisAime00" href="">
                            <p>

                                Mehdi:

                            </p>
                        </a>
                        <a id="lienRevuRestauAmisAime00" href="">
                            <span class="avis">

                                3 avis

                            </span>
                        </a>
                    </li>
                    <li id="gensQuiAimeLi10">
                        <a id="lienAmisAime10" href="">
                            <p>

                                Andrei:

                            </p>
                        </a>
                        <a id="lienRevuRestauAmisAime10" href="">
                            <span class="avis">

                                3 avis

                            </span>
                        </a>
                    </li>
                </ul>
                <ul id="gensQuiAimeBof0">
                    <h6 class="gensQuiAimeBof">

                         Avis mitigés

                    </h6>
                    <li id="gensQuiAimeBofLi00">
                        <a id="lienAmisAmisBof00" href="">
                            <p>

                                Mehdi:

                            </p>
                        </a>
                        <a id="lienRevuRestauAmisBof00" href="">
                            <span class="avis">

                                3 avis

                            </span>
                        </a>
                    </li>
                    <li id="gensQuiAimeBofLi10">
                        <a id="lienAmisAmisBof10" href="">
                            <p>

                                Andrei:

                            </p>
                        </a>
                        <a id="lienRevuRestauAmisBof10" href="">
                            <span class="avis">

                                3 avis

                            </span>
                        </a>
                    </li>
                </ul>
                <ul id="gensQuiAimePas0">
                    <h6 class="gensQuiAimePas">

                         Avis négatif

                    </h6>
                    <li id="gensQuiAimePasLi00">
                        <a id="lienAmisAimePas00" href="">
                            <p>

                                Mehdi:

                            </p>
                        </a>
                        <a id="lienRevuRestauAimePas00" href="">
                            <span class="avis">

                                3 avis

                            </span>
                        </a>
                    </li>
                    <li id="gensQuiAimePasLi10">
                        <a id="lienAmisAimePas10" href="">
                            <p>

                                Andrei:

                            </p>
                        </a>
                        <a id="lienRevuRestauAimePas10" href="">
                            <span class="avis">

                                3 avis

                            </span>
                        </a>
                    </li>
                </ul>
            </section>
        </section>
    </li>

					</ol>

					<iframe id="carte" width="300" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.fr/?ie=UTF8&amp;t=m&amp;ll=46.754917,1.73584&amp;spn=4.516326,6.591797&amp;z=6&amp;output=embed"></iframe>
					
				</section>	
					<!-- fonction -->
				<script src = "http://localhost/Meittopi/php/controleur/fonction/ajouterTexte.js"> </script>
				
					<!-- class -->
				<script src = "http://localhost/Meittopi/php/controleur/classDAffichage/listeRestaurantRecherche/listeRestaurant.class.js"> </script>
				<script src = "http://localhost/Meittopi/php/controleur/classDAffichage/listeRestaurantRecherche/restaurant.class.js"> </script>
				
					<!-- charger le JSON -->
				<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/rechercher/rechercher.js"> </script>
				<script src = "http://localhost/Meittopi/php/modele/menuPrincipal/rechercher/rechercher.php"> </script>
				
					<!-- langue -->
<!--
				<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/rechercher/francais/rechercher.js"> </script>
-->
				<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/rechercher/francais/optionNom.js"> </script>
				
					<!-- specifique à la page -->
				<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/rechercher/option.js"> </script>
				
			</section>
		</body>
	</html>
