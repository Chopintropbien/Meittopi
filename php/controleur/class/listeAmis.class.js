
function ListeAmis(nom){
	this.nom = nom;
	this.listeAmis = [];
	
	this.ajouteAmi = function(speudo, photoProfil, nbImportanceSuivis){
		this.listeAmis.push( new Ami(speudo, photoProfil, nbImportanceSuivis) );
				
	};
	this.length = function(){
		return this.listeAmis.length; 
	};
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
	
	this.affiche = function(k, ouOnAffiche){
		this.createElement('li', ouOnAffiche, 'titre','','',k, 0);
		
		this.createElement('h2', k +'titre' +0, 'h4','', this.nom,k, 0);
		
		var listeAmisLength = this.length();
		
		for(var i = 0; i< listeAmisLength; ++i){	
			this.listeAmis[i].affiche(i, k, ouOnAffiche);
		}
		
	};
};
