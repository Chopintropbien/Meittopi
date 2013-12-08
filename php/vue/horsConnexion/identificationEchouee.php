<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="../../../css/base.css"/>
			<link rel="stylesheet" href="../../../css/horsConnexion/acceuil.css"/>
			<link rel="stylesheet" href="../../../css/horsConnexion/navigateur.css"/>
			<link rel="stylesheet" href="../../../css/horsConnexion/identificationEchouee.css"/>
			<title> Acceuil </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<img src="../../../image/logoSweetTable.png" alt="SweetTable" id="logo"/>
				</nav>
			
				<section id="pageConnection">
					<article>
						<h3> Connexion à Meittopi</h3>
						
						<p> Votre e-mail ou votre mot de passe n'est pas valide. </p>
						<form action="../../modele/connexion.php" method="post">
							<ul>
								<li > 
									<input type="email" name="emailInscrit" id="emailC" class="champ" placeholder="Votre adresse e-mail"/>  
								 </li>
								<li >   
									<input type="password" name="motdepasseInscrit"  id="motdepasseC" class="champ" placeholder="Votre mot de passe"/>
								</li>
								<li>
									<input type="checkbox" name="sectionActive" id="sectionActive" > 
									<label for="sectionActive" id="gardersection"> Garder votre session active</label>
								</li>
								<li id="connexionOuInscription">
									<input type="submit" value="Connexion" id="connexion"/> ou <a id="inscription"> Inscription à Meittopi </a>
								</li>
								<li id="oublie">
									<a>mot de passe oublié?</a>
								</li>
								
							</ul>
						</form>
						
					</article>
				</section>

				
		</body>
	</html>
