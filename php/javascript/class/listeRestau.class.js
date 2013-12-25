function Liste(nom){
	this.nom = nom;
	this.listeRestau = [];
	
	this.ajouteRestau = function(nom, photo, nombreEtoile, 
								 titreCommantaire, commantaire){
										
										
		this.listeRestau.push(new Restaurant(nom, photo, nombreEtoile, 
										   	 titreCommantaire, commantaire)
							  );
							  		
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
	
	this.length = function(){
		return this.listeRestau.length; 
	};
	
	this.createElement = function(tagName, idElementParent, id, className, inner, identifiantListe, identifiantRestaurant){
		
		var nouvelElement = document.createElement(tagName);
		nouvelElement.className = className;
		nouvelElement.id = identifiantListe + id + identifiantRestaurant; 
		nouvelElement.innerHTML = inner; 
		document.getElementById(idElementParent).appendChild(nouvelElement);
	};
	
	this.affiche = function(k, ouOnAffiche){

		this.createElement('li', ouOnAffiche, 'titreListeRestau',  'titreListeRestau','', k, 0);
		this.createElement('li', ouOnAffiche, 'corpsListeRestau',  'corpsListeRestau','', k, 0);
		this.createElement('li', ouOnAffiche, 'footerListeRestau',  'footerListeRestau','', k, 0);		
		
			//titre de la liste
		this.createElement('h2', k + 'titreListeRestau' + 0, '',  '', this.nom, k, 0);
		
			//la liste des restaurants
		var liste1Length = this.length();
		for( var i = 0; i<liste1Length; ++i){
			this.listeRestau[i].affiche(i, k, k+ 'corpsListeRestau' + 0);
		}

	};
	
	
}
