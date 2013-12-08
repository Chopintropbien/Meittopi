
function ListeDeListe(){
	this.listeDeListe = [new Liste('A faire'), new Liste('Evement'), new Liste('A commenter')];
	
	this.ajouteListe = function (liste) {
		(this.listeDeListe).push(liste);
	};
	this.liste = function(i) {
		var e = (this.listeDeListe)[i];;
		return e;
	};
	this.createElement = function(tagName, idElementParent, id, className, inner, identifiantListe, identifiantRestaurant){
		
		var nouvelElement = document.createElement(tagName);
		nouvelElement.className = className;
		nouvelElement.id = identifiantListe + id + identifiantRestaurant; 
		nouvelElement.innerHTML = inner; 
		if(className == 'grandeListeRestau'){
			nouvelElement.style.display = 'none';
		}
		document.getElementById(idElementParent).appendChild(nouvelElement);
	};
	this.afficheListe = function (k) {
			// nouvelle liste
		this.createElement('ul', 'partiePrincipale', 'grandeListeRestau',  'grandeListeRestau','', k, 0);

		this.createElement('li', k + 'grandeListeRestau' + 0, 'titreListeRestau',  'titreListeRestau','', k, 0);
		this.createElement('li', k + 'grandeListeRestau' + 0, 'corpsListeRestau',  'corpsListeRestau','', k, 0);
		this.createElement('li', k + 'grandeListeRestau' + 0, 'footerListeRestau',  'footerListeRestau','', k, 0);		
		
			//titre de la liste
		var titre = document.getElementById(k + 'titreListeRestau' +0);
		titre.innerHTML = this.listeDeListe[k].nom();


			//la liste des restaurants
		var liste1Length = this.listeDeListe[k].length();
		for( var i = 0; i<liste1Length; ++i){
				
					//titre de la liste
			this.createElement('ol', k + 'corpsListeRestau' + 0, 'ligne', 'restau','', k, i);

				// photo du restaurant	
			var nouvellePhoto = document.createElement('img');
			nouvellePhoto.className = "photoRestau";
			nouvellePhoto.src = this.listeDeListe[k].restaurant(i).photo;
			document.getElementById(k +'ligne' + i).appendChild(nouvellePhoto);
				
				// balise article
			this.createElement('article',k+ 'ligne' + i, 'article', 'articleRestau', "", k, i);	
				// nom du restaurant
			this.createElement('h3', k +'article' + i,'nomRestau', 'titreRestau', this.listeDeListe[k].restaurant(i).nom, k, i);		
			
			
				// div contenant les etoiles
			this.createElement ('div', k +'article' + i,'div', 'noteRestau', "", k, i);	

				//rajoute le nombre d'étoile que l'on veut
			var nbEtoile = this.listeDeListe[k].restaurant(i).nombreEtoile;
			for(var j = 0; j< nbEtoile;  ++j){
				var nouvelleEtoile = document.createElement('img');
				nouvelleEtoile.className = 'etoile';
				nouvelleEtoile.src = 'http://localhost/Meittopi/image/medaille.png';
				document.getElementById(k +'div' + i).appendChild(nouvelleEtoile);
			}
			
				// titre de la remarque faite par la personne
			this.createElement ('h4', k +'article' + i, 'aa', 'titreDescriptionRestau', this.listeDeListe[k].restaurant(i).titreCommantaire, k, i);		
			
				// paragraphe de commantaire       
				//ne selectionner que les tant de carateres et metre .. apres
			this.createElement ('p', k +'article' +i, 'a','descriptionRestau', this.listeDeListe[k].restaurant(i).commantaire, k, i);
				
		}
	};
	this.length = function() {

		return (this.listeDeListe).length;
	};
}
