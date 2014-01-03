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
		
		this.affiche = function(i, ouOnAffiche){
					
				//titre de la liste
			this.createElement('ol', ouOnAffiche, 'ligne', 'restau','', i);
				
				// photo du restaurant	
			this.createElement('img', 'ligne' + i, '', 'photoResta',this.photo, i);
			
				
				// balise article
			this.createElement('article', 'ligne' + i, 'article', 'articleRestau', "", i);	
			
					//les coordonnees
				this.createElement ('aside',  'article' +i, 'coordonnees','coordonnees', '', i);
				this.createElement ('adress', 'coordonnees' +i, 'rue','rue', this.rue, i);
				this.createElement ('adress','coordonnees' +i, 'ville','ville', this.ville, i);
				this.createElement ('adress','coordonnees' +i, 'tel','tel', this.tel, i);
	
				this.createElement ('p', 'coordonnees' +i, 'amisQuiAime','amisQuiAime', '++ '+this.amisQuiAime, i);
				this.createElement ('p','coordonnees' +i, 'amisQuiAimePas','amisQuiAimePas',  '-- '+this.amisQuiAimePas, i);
			
				// nom du restaurant
			this.createElement('h3', 'article' + i,'nomRestau', 'titreRestau',(i+1) + ') '+ this.nom, i);		

				// div contenant les etoiles
			this.createElement ('div', 'article' + i,'div', 'noteRestau', "", i);	

				//rajoute le nombre d'étoile que l'on veut
			var nbEtoile = this.nombreEtoile;
			for(var j = 0; j< nbEtoile;  ++j){
				this.createElement('img','div' + i, '', 'etoile', 'http://localhost/Meittopi/image/medaille.png', i );
			}
			
				// gamme de pris 
			var nbEuro = '';
			
			for(var j = 0; j <this.prix; ++j){
				nbEuro += '$';
			}
			this.createElement('p', 'article' + i, 'prix', 'prix', nbEuro, i);

				//evenement
			this.createElement ('p', 'article' + i, 'evenement','evenement', this.evenement, i);
			
			this.createElement ('div', 'ligne' + i, 'commantaireRestau', 'commantaireRestau','', i);		
			
				// titre de la remarque faite par la personne
			this.createElement ('h4', 'commantaireRestau' + i, 'aa', 'titreDescriptionRestau', this.titreCommantaire, i);		
			
				// paragraphe de commantaire       
				//ne selectionner que les tant de carateres et metre .. apres
			this.createElement ('p', 'commantaireRestau' +i, 'a','descriptionRestau', this.commantaire, i);

		};
		
	};
