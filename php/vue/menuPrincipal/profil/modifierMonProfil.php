<!-- faire gaffe quand tu surligne -->


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<html>
		<head>
			<meta charset="utf-8"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/base.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/navigateur/navigateur.css"/>
			<link rel="stylesheet" href="http://localhost/Meittopi/css/menuPricipal/profil/modifierMonProfil.css"/>
			<title> Acceuil </title>
		</head>
		
		<body>
			<section class="global">
				<nav id="nav">
					<?php include("../navigateur/navigateur.php"); ?>
				</nav>
			
				<section id="partiePrincipale">
					<form action="" method="post">
						<table id= "cadre">
							<tr id="ligneFine">
								<td class= "draggableBox" id="prenom" style="position: relative;"> 
									<p class ="croix"> + </p>
									<h3 class='rien'> Mon prénom </h3> </br>
									<input type="text" name="prenom"/> </td>
									
								<td class="caseVide"></td>
									
								<td class= "draggableBox" id="surnom" style="position: relative;"> 
									<p class ="croix"> + </p>
									<h3>  Appeler moi : </h3> </br>
									<input type="text" name="surnom"/></td> 
									
								<td class="caseVide"></td>
							</tr> 
							
							<tr class="ligneFine">
								<td class="caseVide"></td>	
								<td class= "draggableBox" id="nom" style="position: relative;"> 
									<p class ="croix"> + </p>
									 <h3> Mon nom </h3> </br>
									<input type="text" name="nom"/> </td>
									
								<td class="caseVide"> </td>
									
								<td class= "draggableBox" style="position: relative;">  
									<p class ="croix"> + </p>
									<h3>  Mon adresse e-mail</h3> </br>
									<input type="email" name="email"/> </td>
							</tr> 
							
							<tr class="ligneFine">
								<td class="caseVide">   </td>
								<td class="caseVide">   </td>
								<td  class= "draggableBox" style="position: relative;"> 
									<p class ="croix"> + </p>
									 <input type="radio" name="sexe" value="f" id="femme" class="genre"/> 
										<label for="femme"  name="sex" class='genre'> Femme </label>
									<input type="radio" name="sexe" value="h" id="homme" class="genre"/>
										<label for="homme"  name='sex' class='genre'> Homme</label>  </td>
								
								<td class="caseVide">   </td>
							</tr>
							
							<tr class="grosseLigne">
								<td class="caseVide">   </td>
								<td class= "draggableBox" style="position: relative;"> 
									<p class ="croix"> + </p>
									  <h3> Dans un monde parfait,... </h3> </br>
									<textarea class="textarea">  </textarea> </td>
								<td class="caseVide">    </td>
								<td class="caseVide">   </td>
							</tr>
							<tr class="grosseLigne">
								<td class= "draggableBox" style="position: relative;"> 
									<p class ="croix"> + </p>
									 <h3> Mais en réalité je suis...</h3> </br>
									<textarea>  </textarea> </td>
								<td class="caseVide">   </td>
								<td class="caseVide">   </td>
								<td class= "draggableBox" style="position: relative;"> 
									<p class ="croix"> + </p>
									<h3> Si c'étais mon dernier jour:</h3> </br>
									<textarea>  </textarea>  </td>
							</tr>
						
							<tr class="grosseLigne">
								<td class="caseVide"> </td>
								<td class= "draggableBox" style="position: relative;">  
									<p class ="croix"> + </p>
									 <h3> Mes amis disent de moi :</h3> </br>
									<textarea>  </textarea></td>
								<td class="caseVide">   </td>
								<td class="caseVide">   </td>
							</tr>
							<tr class="grosseLigne">
								<td class="caseVide">   </td>
								<td class="caseVide">   </td>
								<td class= "draggableBox" style="position: relative;"> 
									<p class ="croix"> + </p>
									 <h3> J'adore : </h3> </br>
									<textarea>  </textarea> </td>
								<td class="caseVide">   </td>
							</tr>
							<tr class="grosseLigne">
								<td class= "draggableBox" style="position: relative;"> 
									<p class ="croix"> + </p>
									  <h3> Je déteste :</h3> </br>
									<textarea>  </textarea> </td>
								<td class="caseVide">   </td>
								
								<td class="caseVide">   </td>
							</tr>
							
							<tr class="grosseLigne">
								
								<td class="caseVide">   </td>
								<td class="caseVide">   </td>
								<td class="caseVide">   </td>
								<td class= "draggableBox" style="position: relative;"> +
									<h3> Je racompte ma vie</h3> </br>
									<textarea>  </textarea>  </td>
							</tr>
							<tr class="grosseLigne">
								<td class="caseVide">   </td>
								<td class="caseVide"> 
								<td class= "draggableBox" style="position: relative;"> 
									<p class ="croix"> + </p>
									 <h3> Mon péché-mignion  </h3> </br>
									<textarea>  </textarea> </td>
								<td class="caseVide">   </td>
							</tr>
							
							
							<tr class="grosseLigne">
								<td class="caseVide">   </td>
								<td class="caseVide">   </td>
								<td class="caseVide">   </td>
								<td class="caseVide">   </td>
							</tr>
			
							
							<tr class="ligneFine">
								<td class= "draggableBox" style="position: relative;">  
									<p class ="croix"> + </p>
									 <input type="button" value="Sauvegarder"/> </td>
								<td class="caseVide">   </td>
								<td class="caseVide">   </td>
								<td class="caseVide">   </td>
							</tr> 
						</table>
					
					</form>
				</section>
				
				<script src= "http://localhost/Meittopi/php/javascript/menuPrincipal/profil/modifierMonProfil.js")> </script>
				
		</body>
	</html>





















