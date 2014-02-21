	//dans nbReponse mettre un tableau des reponses au commantaire. 
	// construire une reponse avec un tableau vide a la place de nbReponse
function Commantaire(photo, nom, prenom, commantaire, nbPour, nbContre, nbReponse){
	this.photo = photo;
	this.nom = nom; 
	this.prenom = prenom;
	this.commantaire = commantaire;
	this.nbPour = nbPour;
	this.nbContre = nbContre;
	this.nbReponse = nbReponse;
	
	this.createElement = function(tagName, idElementParent, id,  inner, identifiantProposition, identifiantnbReponse){
		
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
		nouvelElement.id =  identifiantProposition + id +identifiantnbReponse; 
		document.getElementById(idElementParent).appendChild(nouvelElement);
		
	};
	
	this.affiche = function(i, ouOnAffiche, idReponse){
		
		this.createElement('img', ouOnAffiche , '', this.photo, i, idReponse);
		
		this.createElement('article', ouOnAffiche, 'article', '', i, idReponse);
		this.createElement('h6', i + 'article' + idReponse, '', this.prenom + ' ' +this.nom, i, idReponse);
		this.createElement('p', i + 'article'  + idReponse, '', this.commantaire, i, idReponse);
		
			// si c'est une reponse, ne pas faire la suite (affiche nb reponse et pour ou contre) 
		var length2 = nbReponse.length;
		if(length2 > 0){
			this.createElement('section', ouOnAffiche, 'section', '', i, idReponse);
			
				// pluriel de commantaire
			var reponse = ' réponse';
			if(nbReponse.length > 1){
				reponse += 's';
			}
			
			this.createElement('p', i + 'section' + idReponse, '', this.nbReponse.length + reponse, idReponse);
			this.createElement('p', i + 'section' + idReponse, '', 'Pour: ' + this.nbPour, i, idReponse);
			this.createElement('p', i + 'section' + idReponse, '', 'Contre: ' + this.nbContre, i, idReponse);
		
			this.createElement('ul', ouOnAffiche, 'listeReponse','', i, idReponse);
			for (var j = 0; j< length2; ++j){
				this.createElement('li', i + 'listeReponse', 'reponse', '', i, j);
				nbReponse[i].affiche(i, i + 'reponse' +j, j);
			}	
		}
		

	};
		
}

