<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/horsConnexion/acceuil.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/horsConnexion/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/horsConnexion/identificationEchouee.css"/>
			<title id="titre">  </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<img src="http://localhost/Meittopi/image/logoSweetTable.png" alt="SweetTable" id="logo"/>
				</nav>
			
				<section id="pageConnection">
					<article>
						<h3 id="connextionTitre"> </h3>
						<p id="emailPAsBon">  </p>
						<form action="../../modele/connexion.php" method="post">
							<ul>
								<li > 
									<input type="email" name="emailInscrit" id="emailC" class="champ" placeholder=""/>  
								 </li>
								<li >   
									<input type="password" name="motdepasseInscrit"  id="motdepasseC" class="champ" placeholder=""/>
								</li>
								<li>
									<input type="checkbox" name="sectionActive" id="sectionActive" > 
									<label for="sectionActive" id="gardersection"> </label>
								</li>
								<li id="connexionOuInscription">
									<input type="submit" value="Connexion" id="connexion"/> 
								</li>
								<li id="oublie">
									<a id="motDePasseOublie"></a>
								</li>
								
							</ul>
						</form>
						
					</article>
				</section>

				<script src="http://localhost/Meittopi/php/controleur/nonAuthentifier/francais/identificationEchouee.js"> </script>
		</body>
	</html>
