function Liste(nom){
	this.nom = nom;
	this.listeRestau = [];
	
	this.ajouteRestau = function(nom, photo, nombreEtoile, 
								 titreCommantaire, commantaire){
										
										
		this.listeRestau.push(new Restaurant(nom, photo, nombreEtoile, 
										   	 titreCommantaire, commantaire)
							  );
							  		
	};
	this.ajouteRestauComplet = function(nom, photo, nombreEtoile, prix,
						titreCommantaire, commantaire, 
						amisQuiAime, amisQuiAimePas, 
						evenement, rue, ville, tel){
										
										
		this.listeRestau.push(new RestaurantComplet(nom, photo, nombreEtoile, prix,
						titreCommantaire, commantaire, 
						amisQuiAime, amisQuiAimePas, 
						evenement, rue, ville, tel)
							  );
							  		
	};
	this.length = function(){
		return this.listeRestau.length; 
	};
	this.nom = function(){
		return nom;
	};
		//renvoie le 1 eme restau
	this.restaurant = function (i){
		return (this.listeRestau)[i];
	};
	this.createElement = function(tagName, idElementParent, id, className, inner, identifiantRestaurant){
		
		var nouvelElement = document.createElement(tagName);
		if(tagName == 'img'){
			nouvelElement.src = inner; 
		}
		else if(tagName == 'a'){
			nouvelElement.href = inner;
		}
		else{
			nouvelElement.innerHTML = inner; 
		}
		nouvelElement.className = className;
		nouvelElement.id = id + identifiantRestaurant; 
		document.getElementById(idElementParent).appendChild(nouvelElement);
		
	};
	this.afficheRestauComplet = function (){
				// creer le liste
		this.createElement('ul', 'partiePrincipale', 'grandeListeRestau',  'grandeListeRestau','', 0);
		
			//la liste des restaurants
		var liste1Length = this.length();
		
		for( var i = 0; i<liste1Length; ++i){
			this.listeRestau[i].affiche(i, 'grandeListeRestau' + 0);
		}
	};
}
