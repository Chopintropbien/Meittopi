	<a href="file:///var/www/Meittopi/php/vue/menuPrincipal/acceuil/accueil.php" id="lien">
		<!-- mettre celui pour modifier le site -->
		<img src="http://localhost/Meittopi/image/logoSweetTable.png" alt="SweetTable" id="logo"/>
	</a>

	<section id="bloc">
		<ul>
			<a href="http://localhost/Meittopi/php/vue/menuPrincipal/rechercher/rechercher.php"> <li id="menu">   </li> </a>
			<a href="http://localhost/Meittopi/php/vue/menuPrincipal/profil/monProfil.php"> <li class="menu" id="profilNavigateurPrincipal">  </li> </a> 
			<a href="http://localhost/Meittopi/php/vue/menuPrincipal/rechercherAmis/rechercherAmis.php"> <li class="menu" id="amisNavigateurPrincipal"> </li> </a> 
			<a href="http://localhost/Meittopi/php/vue/menuPrincipal/laisserUnAvis/laisserUnAvis.php"> <li class="menu" id="avisNavigateurPrincipal">  </li> </a>
			<a href="http://localhost/Meittopi/php/vue/menuPrincipal/discution/discution.php"> <li class="menu" id="discutionNavigateurPrincipal"> </li> </a>
			<a href="http://localhost/Meittopi/php/vue/menuPrincipal/votreAvis/votreAvis.php"> <li class="menu" id="votreAvisNavigateurPrincipal">  </li> </a>			
		</ul>
		
		<ul>
			<li class="recherche">
				 <input type="search" name="rechercher" id="rechercher" placeholder="" class="barreDeRecherche"/> </li>
			<li class="recherche">
				 <input type="search" name="ou" id="ou" placeholder="" class="barreDeRecherche"/> </li>
			<li class="recherche" id="amis">
				 <input type="search" name="acqui" id="acqui" placeholder="" class="barreDeRecherche"/>  </li>
			<li class="recherche" id="loupe">   <input type="submit" value="Rech"/> </li>	 
			
		</ul>
	</section>
	
	<script src="http://localhost/Meittopi/php/controleur/menuPrincipal/navigateur/francais/navigateur.js">  </script>
