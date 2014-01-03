	<a href="file:///var/www/Meittopi/php/vue/menuPrincipal/acceuil/accueil.php" id="lien">
		<!-- mettre celui pour modifier le site -->
		<img src="http://localhost/Meittopi/image/logoSweetTable.png" alt="SweetTable" id="logo"/>
	</a>

	<section id="bloc">
		<ul>
			<a href="http://localhost/Meittopi/php/vue/menuPrincipal/rechercher/rechercher.php"> <li id="menu">  Rechercher </li> </a>
			<a href="http://localhost/Meittopi/php/vue/menuPrincipal/profil/monProfil.php"> <li class="menu"> Profil </li> </a> 
			<a href="http://localhost/Meittopi/php/vue/menuPrincipal/rechercherAmis/rechercherAmis.php"> <li class="menu"> Rechecher des amis </li> </a> 
			<a href="http://localhost/Meittopi/php/vue/menuPrincipal/laisserUnAvis/laisserUnAvis.php"> <li class="menu"> Laisser un avis </li> </a>
			<a href="http://localhost/Meittopi/php/vue/menuPrincipal/discution/discution.php"> <li class="menu">Discution </li> </a>
			<a href="http://localhost/Meittopi/php/vue/menuPrincipal/votreAvis/votreAvis.php"> <li class="menu"> Votre avis compte! </li> </a>			
		</ul>
		
		<ul>
			<li class="recherche">
				 <input type="search" name="rechercher" id="rechercher" placeholder="Rechercher: Une pizzeria, restau chic,..." class="barreDeRecherche"/> </li>
			<li class="recherche">
				 <input type="search" name="ou" id="ou" placeholder="Où? Lausanne, Genève,..." class="barreDeRecherche"/> </li>
			<li class="recherche" id="amis">
				 <input type="search" name="acqui" id="acqui" placeholder="Avec qui? Marie, Jules,..." class="barreDeRecherche"/>  </li>
			<li class="recherche" id="loupe">   <input type="submit" value="Rech"/> </li>	 
			
		</ul>
	</section>
