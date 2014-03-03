<form action="../../javascript/nonAuthentifier/inscription.js" method="post" id="inscription" >
	<table>
		<tr>
			<td> <h1 id="creerUnCompteTitre"></h1> </td>
		</tr>
		<tr>
			<td> <input type="text" name="prenom" id="prenomjava" placeholder="" class="petitChamp"/>
			<input type="text" name="nom" id="nomjava" placeholder="" class="petitChamp"/> </td>
		</tr>
		<tr>
			<td><input type="email" name="email" id="email" placeholder="" class='grandChamp'/> </td>
		</tr>
		<tr>
			<td> <input type="email" name="confirmemail" id="confirmemail" placeholder="" class='grandChamp' /></td>
		</tr>
			<td> <input type="password" name="motdepasse" id="motdepasse" placeholder="" class='grandChamp'/> </td>
		</tr>
			<!-- a faire au javascrip -->
	
	</table>
	<table id="dateEtGenre">
		<tr>
			<tr>
				<td> <h3 id="dateDeNaissanceTitre"></h3> </td>
			</tr>
			<td>
					<!-- jour -->
				<select name="jourDeNaissance" class="date" id='jour'>
				</select>
			
					<!-- mois -->
				<select name="moisDeNaissance" class="date" id='mois'>
					<option value="mois" id="m">  </option>
					<option value="1" id="jan">  </option>
					<option value="2" id="fev"> </option>
					<option value="3" id="mar">  </option>
					<option value="4" id="avr">  </option>
					<option value="5" id="mai">  </option>
					<option value="6" id="jun">  </option>
					<option value="7" id="juil">  </option>
					<option value="8" id="aou">  </option>
					<option value="9" id="sep">  </option>
					<option value="10" id="oct">  </option>
					<option value="11" id="nov"> </option>
					<option value="12" id="dec">  </option>
				</select>

					<!-- annee -->
				<select name="anneeDeNaissance" class="date" id='annee'>
				</select>
				
				
			</td>
		</tr>
		<tr>
			<td>
				<input type="radio" name="sexe" value="f" id="femme" class="genre"/> 
				<label for="femme"  name="sex" class='genre' id="femmeLabel"></label>
				<input type="radio" name="sexe" value="h" id="homme" class="genre"/>
				<label for="homme"  name='sex' class='genre' id="hommeLabel"></label>
			</td>
		</tr>
		<tr>
			 <td><input type="button" value="" id="creerUnCompte" /> </td> 
		</tr>
	</table>
</form>

<script src = "http://localhost/Meittopi/php/controleur/fonction/objetXMLHttpRequest.js"> </script>  
<script src = "http://localhost/Meittopi/php/controleur/nonAuthentifier/inscription.js"> </script>  
<script src="http://localhost/Meittopi/php/controleur/nonAuthentifier/francais/formulaireInscription.js"> </script>




