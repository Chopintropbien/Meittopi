function Sortie(nom, description){
	this.nom = nom;
	this.description = description;
	this.amisQuiParticipe = [];
	
	this.ajouteParticipant = function(amis){
		this.amisQuiParticipe.push(amis);
	}
	
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
			//titre des la sortie
		this.createElement('li', ouOnAffiche, 'titre', '', '', k, 0);
		this.createElement('h2', k + 'titre' + 0, '', '', this.nom, k, 0);
		this.createElement('p', k + 'titre' + 0, '', '', this.description, k, 0);
			//Affiche Participants : 
		this.createElement('li', ouOnAffiche, 'participant', '', '', k, 0);
		this.createElement('h3', k + 'participant' + 0, '', '', 'Participants :', k, 0);
		
		var length = this.amisQuiParticipe.length;
		for(var i= 0; i<length; ++i){
			this.amisQuiParticipe[i].affiche(i, k, k +'participant'+0);
		}


	};
	
	
};
