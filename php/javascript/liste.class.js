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
		nouvelElement.className = className;
		nouvelElement.id = id + identifiantRestaurant; 
		nouvelElement.innerHTML = inner; 
		document.getElementById(idElementParent).appendChild(nouvelElement);
	};
		// meme fonction pour recherche.php et profil/liste.php
		// passer en argument -1 pour si c'est pour rechercher.php
	this.afficheRestauComplet = function () {

				// creer le liste
		this.createElement('ul', 'partiePrincipale', 'grandeListeRestau',  'grandeListeRestau','', 0);
		
			//la liste des restaurants
		var liste1Length = this.length();
		for( var i = 0; i<liste1Length; ++i){
				
					//creer le lien pour le restau
				var nouveauLien = document.createElement('a');
				nouveauLien.href = 'restau' + i;
				nouveauLien.id = 'lien' + i;
				document.getElementById('grandeListeRestau' + 0).appendChild(nouveauLien);
					
					//titre de la liste
				this.createElement('ol', 'lien' + i, 'ligne', 'restau','', i);
				
				// photo du restaurant	
			var nouvellePhoto = document.createElement('img');
			nouvellePhoto.className = "photoRestau";
			nouvellePhoto.src = this.restaurant(i).photo;
			document.getElementById('ligne' + i).appendChild(nouvellePhoto);
				
				// balise article
			this.createElement('article', 'ligne' + i, 'article', 'articleRestau', "", i);	
			
					//les coordonnees
				this.createElement ('aside',  'article' +i, 'coordonnees','coordonnees', '', i);
				this.createElement ('adress', 'coordonnees' +i, 'rue','rue', this.restaurant(i).rue, i);
				this.createElement ('adress','coordonnees' +i, 'ville','ville', this.restaurant(i).ville, i);
				this.createElement ('adress','coordonnees' +i, 'tel','tel', this.restaurant(i).tel, i);
	
				this.createElement ('p', 'coordonnees' +i, 'amisQuiAime','amisQuiAime', '++ '+this.restaurant(i).amisQuiAime, i);
				this.createElement ('p','coordonnees' +i, 'amisQuiAimePas','amisQuiAimePas',  '-- '+this.restaurant(i).amisQuiAimePas, i);
			
				// nom du restaurant
			this.createElement('h3', 'article' + i,'nomRestau', 'titreRestau',(i+1) + ') '+ this.restaurant(i).nom, i);		

				// div contenant les etoiles
			this.createElement ('div', 'article' + i,'div', 'noteRestau', "", i);	

				//rajoute le nombre d'étoile que l'on veut
			var nbEtoile = this.restaurant(i).nombreEtoile;
			for(var j = 0; j< nbEtoile;  ++j){
				var nouvelleEtoile = document.createElement('img');
				nouvelleEtoile.className = 'etoile';
				nouvelleEtoile.src = 'http://localhost/Meittopi/image/medaille.png';
				document.getElementById('div' + i).appendChild(nouvelleEtoile);
			}
			
				// gamme de pris 
			var prix = this.restaurant(i).prix;
			var nbEuro = '';
			
			for(var j = 0; j<prix; ++j){
				nbEuro += '$';
			}
			this.createElement('p', 'article' + i, 'prix', 'prix', nbEuro, i);
			
				//evenement
			this.createElement ('p', 'article' + i, 'evenement','evenement', this.restaurant(i).evenement, i);
			
				// titre de la remarque faite par la personne
			this.createElement ('h4', 'ligne' + i, 'aa', 'titreDescriptionRestau', this.restaurant(i).titreCommantaire, i);		
			
				// paragraphe de commantaire       
				//ne selectionner que les tant de carateres et metre .. apres
			this.createElement ('p', 'ligne' +i, 'a','descriptionRestau', this.restaurant(i).commantaire, i);
				
					
				
			 
				
		}
	};
}

