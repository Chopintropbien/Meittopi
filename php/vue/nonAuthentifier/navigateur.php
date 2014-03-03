<img src="http://localhost/Meittopi/image/logoSweetTable.png" alt="SweetTable" id="logo"/>
		<form action="../../controleur/horsConnexion/connexion.php" method="post"  id="tableau">
			
			<table>
				<tr>
					<td id="titreEmail">  </td>
					<td id="titreMotDePasse"> </td>
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
					<td id="titreMotDePasseOubliee">  </td>
				</tr>
			</table>
			
		</form>

<script src="http://localhost/Meittopi/php/controleur/nonAuthentifier/francais/navigateur.js"> </script>
