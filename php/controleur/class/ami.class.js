
function Ami(pseudo, photoProfil, nbImportanceSuivis){
	this.pseudo = pseudo;
	this.photoProfil = photoProfil;
		// entre 0 et 4
	this.nbImportanceSuivis = nbImportanceSuivis;
	
	this.suivis = function(nbImportanceSuivis){
		this.nbImportanceSuivis = nbImportanceSuivis;
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
	
	this.affiche = function(i,k, ouOnAffiche){
		this.createElement('li', ouOnAffiche, 'ami','', '',k, i);
		this.createElement('img', k +'ami'+ i, 'photoProfil', '',  this.photoProfil,k, i);
		this.createElement('h4', k +'ami'+ i, 'nom', '', this.pseudo ,k, i);
		this.createElement('aside', k + 'ami'+ i, 'aside', '',  '',k, i);
		this.createElement('p', k +'aside'+ i, 'croixPourFermer','', '+',k, i);
		
		for(var j = 0; j<this.nbImportanceSuivis; ++j){
			this.createElement('img', k +'aside' + i, 'nbDeSuivis','', 'http://localhost/Meittopi/image/medaille.png',k, i);
		}
	};
};
