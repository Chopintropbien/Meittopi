	
	// quand nbPersonne a attient le max, la proposition est accepté ou refusé
function PropositionAmelioration(photo, titre, description, nbPersonneVotePour, nbPersonneVotreContre, nbPersonneVotePourMax, nbPersonneVotreContreMax){
	this.photo = photo;
	this.titre = titre;
	this.description = description;
	this.nbPersonneVotePour = nbPersonneVotePour;
	this.nbPersonneVotreContre = nbPersonneVotreContre;
	this.nbPersonneVotePourMax = nbPersonneVotePourMax;
	this.nbPersonneVotreContreMax = nbPersonneVotreContreMax;
	
	this.createElement = function(tagName, idElementParent, id,  inner, identifiantProposition){
		
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
		nouvelElement.id =  identifiantProposition + id; 
		document.getElementById(idElementParent).appendChild(nouvelElement);
		
	};
	
	this.affiche = function(i, ouOnAffiche){
		
		this.createElement('img', ouOnAffiche, '', this.photo, i);
		
		this.createElement('article', ouOnAffiche, 'article', '', i);
		this.createElement('h2', i + 'article', '', this.titre, i);
		this.createElement('p', i + 'article', '', this.description, i);
		
		this.createElement('aside', ouOnAffiche, 'aside', '', i);
		this.createElement('ul', i + 'aside', 'ul', '', i);
		this.createElement('li', i + 'ul', '', 'Pour', i);
		this.createElement('li', i + 'ul', 'pour', '', i);
			// a refaire des balises canvas
		var nouvelElement = document.createElement('input')
		nouvelElement.type = 'range';
		document.getElementById(i + 'pour').appendChild(nouvelElement);
		this.createElement('li', i + 'ul', '', 'Contre', i);
		this.createElement('li', i + 'ul', 'contre', '', i);
			// a refaire des balises canvas
		var nouvelElement = document.createElement('input')
		nouvelElement.type = 'range';
		document.getElementById(i + 'contre').appendChild(nouvelElement);
	};
	
	
}
