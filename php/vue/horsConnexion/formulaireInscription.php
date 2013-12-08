<form action="../../controleur/horsConnexion/inscription.php" method="post" id="inscription" >
	<table>
		<tr>
			<td> <h1>Créer un compte</h1> </td>
		</tr>
		<tr>
			<td> <input type="text" name="prenom" id="prenomjava" placeholder="Prénom" class="petitChamp"/>
			<input type="text" name="nom" id="nomjava" placeholder="Nom de famille" class="petitChamp"/> </td>
		</tr>
		<tr>
			<td><input type="email" name="email" id="email" placeholder="Votre adresse e-mail" class='grandChamp'/> </td>
		</tr>
		<tr>
			<td> <input type="email" name="confirmemail" id="confirmemail" placeholder="Confirmer votre e-mail" class='grandChamp' /></td>
		</tr>
			<td> <input type="password" name="motdepasse" id="motdepasse" placeholder="Mot de passe" class='grandChamp'/> </td>
		</tr>
			<!-- a faire au javascrip -->
	
	</table>
	<table id="dateEtGenre">
		<tr>
			<tr>
				<td> <h3>Votre date de naissance</h3> </td>
			</tr>
			<td>
				<select name="jourDeNaissance" class="date" id='jour'>
					<option value="jour"> Jour </option>
				</select>
			
				<select name="moisDeNaissance" class="date" id='mois'>
					<option value="mois"> Mois </option>
					<option value="1"> Jan </option>
					<option value="2"> Fév </option>
					<option value="3"> Mar </option>
					<option value="4"> Avr </option>
					<option value="5"> Mai </option>
					<option value="6"> Jun </option>
					<option value="7"> Juil </option>
					<option value="8"> Aoû </option>
					<option value="9"> Sep </option>
					<option value="10"> Oct </option>
					<option value="11"> Nov </option>
					<option value="12"> Déc </option>
				</select>

				<select name="anneeDeNaissance" class="date" id='annee'>
					<option value="annee"> Année </option>
				</select>
				
				<script>
					// Affiche les valeurs des jours et des annees
					for(var i = 1; i <= 31; ++i){
						var jour = document.createElement('option');
						jour.setAttribute('value', i);
						jour.setAttribute('id', i);
						document.getElementById('jour').appendChild(jour);
						document.getElementById(i).innerHTML = i;
					}
					
					for(var i = 2013; i>=1900; --i){
						var annee = document.createElement('option');
						annee.setAttribute('value', i);
						annee.setAttribute('id', i);
						document.getElementById('annee').appendChild(annee);
						document.getElementById(i).innerHTML = i;	
					}
					
				</script>
			</td>
		</tr>
		<tr>
			<td>
				<input type="radio" name="sexe" value="f" id="femme" class="genre"/> 
				<label for="femme"  name="sex" class='genre'> Femme </label>
				<input type="radio" name="sexe" value="h" id="homme" class="genre"/>
				<label for="homme"  name='sex' class='genre'> Homme</label>
			</td>
		</tr>
		<tr>
			 <td><input type="button" value="Inscription" id="creerUnCompte" /> </td> 
		</tr>
	</table>
</form>
