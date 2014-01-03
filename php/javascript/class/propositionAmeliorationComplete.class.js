
	// dans photo, mettre une liste des photos poster
	// quand nbPersonne a attient le max, la proposition est accepté ou refusé
function PropositionAmeliorationComplete(photo, titre, description, nbAvisPositif, nbAvisNegatif, dons, nbAvisPositifMax, nbAvisNegatifMax, donsMax ){
	this.photo = photo;
	this.titre = titre;
	this.description = description;
	this.nbAvisPositif = nbAvisPositif;
	this.nbAvisNegatif = nbAvisNegatif;
	this.dons = dons;
	this.nbAvisPositifMax = nbAvisPositifMax;
	this.nbAvisNegatifMax = nbAvisNegatifMax;
	this.donsMax = donsMax;
	
	this.createElement = function(tagName, idElementParent, id, inner){
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
		nouvelElement.id = id; 
		document.getElementById(idElementParent).appendChild(nouvelElement);	
	};
	
	this.affiche = function(ouOnAffiche){
		
			//photos
		this.createElement('section', ouOnAffiche, 'photo', '');
		var nbPhoto = this.photo.length;
		for(var i = 0; i < nbPhoto && i < 3; ++i){
			this.createElement('img', 'photo', '', this.photo[i]);
		}
			// titre et description
		this.createElement('article', ouOnAffiche, 'description', '');
		this.createElement('h1', 'description', '', this.titre);
		this.createElement('p', 'description', '', this.description);
		
			//votes
		this.createElement('aside', ouOnAffiche, 'votes', '');
		
			// pour
		this.createElement('p', 'votes', 'votes', 'Pour:');
			// a refaire des balises canvas
		var nouvelElement = document.createElement('input')
		nouvelElement.type = 'range';
		document.getElementById('votes').appendChild(nouvelElement);
		
			//contre
		this.createElement('p', 'votes', 'votes', 'Contre:');
			// a refaire des balises canvas
		var nouvelElement = document.createElement('input')
		nouvelElement.type = 'range';
		document.getElementById('votes').appendChild(nouvelElement);
		
			//dons
		this.createElement('p', 'votes', 'votes', 'Dons:');
			// a refaire des balises canvas
		var nouvelElement = document.createElement('input')
		nouvelElement.type = 'range';
		document.getElementById('votes').appendChild(nouvelElement);
	}
}

