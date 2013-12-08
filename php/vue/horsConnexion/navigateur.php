<img src="../../../image/logoSweetTable.png" alt="SweetTable" id="logo"/>
		<form action="../../controleur/horsConnexion/connexion.php" method="post">
			<table id="tableau">
				<tr>
					<td> Adresse e-mail </td>
					<td> Mot de passe</td>
				</tr>
				<tr>
					<td> <input type="email" name="emailInscrit" id="emailC" /> </td>
					<td> <input type="password" name="motdepasseInscrit"  id="motdepasseC"/> </td>
					<td> <input type="submit" value="Connexion" id="loupe" /> </td>
				</tr>
				<tr id="moinsImportant">
					<td> <input type="checkbox" name="sectionActive" id="sectionActive"/> 
						 <label for="sectionActive" id="gardersection"> Garder votre section active</label>
					</td>
					<td> Mot de passe oublié? </td>
				</tr>
			</table>
		</form>
