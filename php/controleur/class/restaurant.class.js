	
	
	function Restaurant(nom, photo, nombreEtoile, 
						titreCommantaire, commantaire) {

		this.nom = nom;
		this.photo = photo; 
		this.nombreEtoile = nombreEtoile;
		this.titreCommantaire = titreCommantaire; 
		this.commantaire = commantaire;
		
		
		this.createElement = function(tagName, idElementParent, id, className, inner, idListe, identifiantRestaurant){
		
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
			nouvelElement.id = idListe + id + identifiantRestaurant; 
			document.getElementById(idElementParent).appendChild(nouvelElement);
			
		};
		
		this.affiche = function (i, k, ouOnAffiche){
				
				//titre de la liste
			this.createElement('ol', ouOnAffiche, 'ligne', 'restau','', k, i);
				// photo du restaurant	
			this.createElement('img', k +'ligne'+i, '','photoRestau', this.photo, k, i);
				
				// balise article
			this.createElement('article',k + 'ligne' +i, 'article', 'articleRestau', "", k, i);	
				// nom du restaurant
			this.createElement('h3', k +'article' + i,'nomRestau', 'titreRestau', this.nom, k, i);		
			
			
				// div contenant les etoiles
			this.createElement ('div', k +'article' + i,'div', 'noteRestau', "", k, i);	

				//rajoute le nombre d'étoile que l'on veut
			var nbEtoile = this.nombreEtoile;
			for(var j = 0; j< nbEtoile;  ++j){
				this.createElement('img', k +'div' + i, '', 'etoile',  'http://localhost/Meittopi/image/medaille.png', k, i);
			}
			
				// titre de la remarque faite par la personne
			this.createElement ('h4', k +'article' + i, 'aa', 'titreDescriptionRestau', this.titreCommantaire, k, i);		
			
				// paragraphe de commantaire       
				//ne selectionner que les tant de carateres et metre .. apres
			this.createElement ('p', k +'article' +i, 'a','descriptionRestau', this.commantaire, k, i);
				
			
		};
		
		

	};
	
	
	
	

