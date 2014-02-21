
function ProfilDeParticipation(prenom, nom, statue, photo, nbVotePlus, nbVoteMoins, nbArgentDonnee){
	this.prenom = prenom;
	this.nom = nom;
	this.statue = statue;
	this.photo = photo;
	this.nbVotePlus = nbVotePlus;
	this.nbVoteMoins = nbVoteMoins;
	this.nbArgentDonnee = nbArgentDonnee;
	
	this.createElement = function(tagName, idElementParent, id,  inner){
		
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
		this.createElement('img', ouOnAffiche,'', this.photo);
		this.createElement('aside', ouOnAffiche,'aside', '');
		this.createElement('h2', 'aside', '', this.prenom + ' ' + this.nom);
		this.createElement('p', 'aside', 'statue', '');
		this.createElement('span', 'statue', '', 'Statue' +  ':' );
		this.createElement('strong', 'statue', '', '  ' + this.statue);
		this.createElement('p', 'aside', '', this.nbVotePlus + '  votes +');
		this.createElement('p', 'aside', '', this.nbVoteMoins + ' votes -' );
		this.createElement('p', 'aside', '', 'Dons : ' + this.nbArgentDonnee + ' $');
		
	}
	
}
