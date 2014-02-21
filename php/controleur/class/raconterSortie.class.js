function RaconterSortie(speudo, photoProfil, nomRestau, titre, description){
	
	this.speudo = speudo;
	this.photoProfil = photoProfil;
	this.nomRestau = nomRestau;
	this.titre = titre;
	this.description = description;
	
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
	
	this.affiche = function(i, ouOnVeut){
		this.createElement('li', ouOnVeut, 'sortie', '', i);
		this.createElement('img', 'sortie' + i, '', this.photoProfil, i);
		this.createElement('article', 'sortie'+i, 'article', '', i);
		this.createElement('h2', 'article'+i, 'article', this.titre, i);
		this.createElement('blockquote', 'article'+i, '', this.description, i);
		this.createElement('q', 'article'+i, 'q', '', i);
		this.createElement('cite', 'q'+i, '', this.speudo + ', ', i);
		this.createElement('cite', 'q'+i, '', this.nomRestau, i);
		
	}

}
