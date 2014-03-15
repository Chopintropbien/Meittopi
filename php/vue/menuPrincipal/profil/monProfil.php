<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/monProfil.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/classDaffichage/profil/profilPageAcceuil.class.css"/>
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
						
						
						
						
						
						
						<aside id="profil">

    <div id="nomPlusVille">
        <a id="lienProfil" href="qsdvf">
            <h2>

                Lauriane Mollier, 

            </h2>
        </a>
        <p id="ville">

            Lausanne

        </p>
    </div>
    <article id="photoEtNotif">
        <img src="http://localhost/Meittopi/image/profil_vide.png"></img>
        <section id="sectionNotif">
            <ul id="colonne1">
                <li id="ligne1colone1" class="ligne1colone1">
                    <img src="http://localhost/Meittopi/image/profil/ampoule.png"></img>
                    <p>

                        8

                    </p>

                     votes utile

                </li>
                <li id="ligne2colone1" class="ligne1colone2">
                    <img src="http://localhost/Meittopi/image/profil/drole.png"></img>
                    <p>

                        5

                    </p>

                     votes drôle

                </li>
                <li id="ligne3colone1" class="ligne1colone3">
                    <img src="http://localhost/Meittopi/image/profil/cool.png"></img>
                    <p>

                        2

                    </p>

                     votes cool

                </li>
            </ul>
            <ul id="colonne2">
                <li id="ligne1colone2" class="ligne2colone1">
                    <img src="http://localhost/Meittopi/image/profil/population.png"></img>
                    <p>

                        4

                    </p>

                     amis

                </li>
                <li id="ligne2colone2" class="ligne2colone2">
                    <img src="http://localhost/Meittopi/image/profil/olive_wreath.png"></img>
                    <p>

                        1

                    </p>

                     compliment

                </li>
                <li id="ligne3colone2" class="ligne2colone3">
                    <img src="http://localhost/Meittopi/image/profil/follower.png"></img>
                    <p></p>

                     followers

                </li>
            </ul>
            <ul id="colonne3">
                <li id="ligne2colone3" class="ligne3colone2">
                    <img src="http://localhost/Meittopi/image/profil/revue.png"></img>
                    <p>

                        4

                    </p>

                     revus

                </li>
                <li id="ligne1colone3" class="ligne3colone1">
                    <img src="http://localhost/Meittopi/image/profil/sortie.png"></img>
                    <p>

                        5

                    </p>

                     sortie

                </li>
            </ul>
        </section>
    </article>
    </aside>
						
						
						
						<hr/>
						
						
						
						
		
									<ul id="infoPersonnelles">
										<li>
											<h6> J'habite : </h6> <input type="button" value="+" class="petiteCroix"/>
											<p> Chemin de malley, 12 </br>
											    1007 Lausanne
											</p>
										</li>
										<li> 
											 <h6> Je suis :</h6> <input type="button" value="+" class="petiteCroix"/>
											 <p> Dévelopeuse du site</p>
										</li>
										<li> <h6> J'aime : </h6> <input type="button" value="+" class="petiteCroix"/>
										<textarea>  Coder en php ou être avec mon copain </textarea>
											<div> Valider </div>
										</li>
										<li> 
											 <h6> Je suis :</h6> <input type="button" value="+" class="petiteCroix"/>
											 <p> Dévelopeuse du site</p>
										</li>
										
										<li>
											<h5> Nouveau champ</h5>
											<input type="text" class="nouveauTitre"/>
											 <textarea> </textarea>
											 <div> Valider </div>
										</li>
										<li>
											<p id="ajouterUnChamp">Ajouter un  champ</p>
										</li>
										
										
									</ul>
						



					</article> 
					
					
					
					
					
					
					
					
					
					
					
					<ul id="notification">
						<li>
							<h1> Notification </h1>
						</li>
						<hr/>
						<li>
							<img src="http://localhost/Meittopi/image/profil_vide.png"/>
							<article>
								<time> il y a 2 min</time>
								<a>Andrei</a> vous as ecrit un <a>compliement</a>
							</article>
						</li>
						<hr/>
						<li>
							<img src="http://localhost/Meittopi/image/profil_vide.png"/>
							<article>
								<time> il y a 2 min</time>
								<a>Andrei</a> vous as ecrit un <a>compliement</a>
							</article>
						</li>
						<hr/>
						<li>
							<img src="http://localhost/Meittopi/image/profil_vide.png"/>
							<article>
								<time> il y a 2 min</time>
								<a>Andrei</a> vous as ecrit un <a>compliement</a>
							</article>
						</li>
					
					</ul>
					
				</section> 
		
<!--
		<script src = "http://localhost/Meittopi/php/controleur/class/profil.class.js"> </script>
		
		<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/profil/francais/monProfil.js"> </script> 
		<script src = "http://localhost/Meittopi/php/controleur/menuPrincipal/profil/monProfil.js"> </script> 
		<script src = "http://localhost/Meittopi/php/modele/menuPrincipal/profil/monProfil.php"> </script> 
-->
				
		
		</body>
	</html>
