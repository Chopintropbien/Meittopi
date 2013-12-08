	
	
	function Restaurant(nom, photo, nombreEtoile, 
						titreCommantaire, commantaire) {

		this.nom = nom;
		this.photo = photo; 
		this.nombreEtoile = nombreEtoile;
		this.titreCommantaire = titreCommantaire; 
		this.commantaire = commantaire;
	};
	
	
	function RestaurantComplet(nom, photo, nombreEtoile, prix,
						titreCommantaire, commantaire, 
						amisQuiAime, amisQuiAimePas, 
						evenement, rue, ville, tel) {
		
		this.nom = nom;
		this.photo = photo; 
		this.nombreEtoile = nombreEtoile;
		this.prix = prix;
		this.titreCommantaire = titreCommantaire; 
		this.commantaire = commantaire;
		this.amisQuiAime = amisQuiAime; 
		this.amisQuiAimePas = amisQuiAimePas;
		this.evenement = evenement;
		this.rue= rue;
		this.ville = ville;
		this.tel = tel;
	};
