	<a href="http://localhost/Meittopi/php/vue/menuPrincipal/accueil.php" id="lien">
		<!-- mettre celui pour modifier le site -->
		<img src="http://localhost/Meittopi/image/logoSweetTable.png" alt="SweetTable" id="logo"/>
	</a>

	<section id="bloc">
		<ul>
			<li id="menu"> <a href="http://localhost/Meittopi/php/vue/menuPrincipal/rechercher.php"> Rechercher </a> </li>
			<li class="menu"> <a href="http://localhost/Meittopi/php/vue/menuPrincipal/profil/monProfil.php"> Profil </a> </li>
			<li class="menu"> <a href="http://localhost/Meittopi/php/vue/menuPrincipal/amis.php"> Rechecher des amis </a> </li>
			<li class="menu"> <a href="http://localhost/Meittopi/php/vue/menuPrincipal/avis.php"> Laisser un avis </a> </li>
			<li class="menu"> <a href="http://localhost/Meittopi/php/vue/menuPrincipal/discution.php"> Discution </a> </li>
			<li class="menu"> <a href="http://localhost/Meittopi/php/vue/menuPrincipal/votreAvis.php"> Votre avis compte! </a> </li>			
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
