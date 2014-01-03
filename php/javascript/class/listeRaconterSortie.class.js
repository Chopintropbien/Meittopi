function ListeRaconterSortie(){
	this.sorties = [];
	
	this.ajouteSortie = function(prenom, nom, photoProfil, nomRestau, titre, description){
		
		this.sorties.push( new RaconterSortie(prenom, nom, photoProfil, nomRestau, titre, description) );
	}
	this.length = function(){
		return this.sorties.lengh;
	}
	this.createElement = function(tagName, idElementParent, id, inner, identifiantAmi){
		
		var nouvelElement = document.createElement(tagName);
		if(tagName == 'img'){
			nouvelElement.src = inner; 
		}
		else{
			nouvelElement.innerHTML = inner; 
		}
		nouvelElement.id = id + identifiantAmi; 
		document.getElementById(idElementParent).appendChild(nouvelElement);
	};
	this.affiche = function(ouOnVeut){
		var sortiesLength = this.sorties.length;
		for(var i = 0; i<sortiesLength; ++i){
			this.sorties[i].affiche(i, ouOnVeut);
		}
	};
	
	
	
	
	
}
