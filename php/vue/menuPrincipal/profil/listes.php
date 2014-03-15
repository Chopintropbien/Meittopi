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
<!--
								<h1> Voila mon titre </h1>
-->
							<input type="texte" placeholder="Nouveau titre"/>
							 </li>
						<hr/>
						<li>
		
							<div class="restaurant"> 
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
							
							
							</div>
							<div class="commentaire">
								<h6 class="commentaire"> Commentaire</h6>
<!--
								<p> khfb fhb jchq HVBQ FKHGQB EVGJBE JVGQ EJVG QKJ  KJ bqk dfkjb kd b</p>
-->
								<textarea> </textarea>
								<article> <input type="button" value="Enregistrer"/> </article>
<!--
								<div> <span> Ajouter Un commantaire </span> </div>
-->
							</div>
							<div class="fermerElement">  + </div>
						</li>
						
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
							
							<div>
								<input type="button" id="ajouterALaListe" value="Validé" />
							</div>
							
						</li>
						
						</ul>
						
						
						<div id="enregistrerListeEmplacement"> 
							<span> Annuler </span>
							<span> Supprimer cette liste </span>
							<input type="button" value="Enregistrer" id="enregistrerListe"/> 
						</div>
						
					
					</article>
				</section>
				
<!--
				<script src = "http://localhost/Meittopi/php/controleur/class/listeRestau.class.js"> </script>
				<script src = "http://localhost/Meittopi/php/controleur/class/restaurant.class.js"> </script>
				<script src = "http://localhost/Meittopi/php/controleur/class/listeDeListe.class.js"> </script>
-->
				
				<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/profil/francais/listes.js"> </script> 
<!--
				<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/profil/listes.js"> </script>  
				<script src = "http://localhost/Meittopi/php/modele/menuPrincipal/profil/listes.php"> </script> 
-->
				
				
		</body>
	</html>




