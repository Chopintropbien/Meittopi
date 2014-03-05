
function ListePropositionAmelioration(){
	this.liste = [];
	
	this.ajouteProposition = function(proposition){
		this.liste.push(proposition);
	}
	
	this.createElement = function(tagName, idElementParent, id,  inner, identifiantProposition){
		
		var nouvelElement = document.createElement(tagName);

		if(tagName == 'a'){
			nouvelElement.href = inner;
		}
		else{
			nouvelElement.innerHTML = inner; 
		}
		if(id != ''){
			nouvelElement.id =  identifiantProposition + id; 
		}
		document.getElementById(idElementParent).appendChild(nouvelElement);
		
	};
	
	this.affiche = function(ouOnAffiche){
		
			//affiche tous les prosotion contenu dans le tableau
		var length = this.liste.length;
		for(var i = 0; i<length; ++i){
			this.createElement('li', ouOnAffiche, 'proposition', '', i);
			this.liste[i].affiche(i, i + 'proposition');
			if(i != length - 1){
				this.createElement('hr', ouOnAffiche, '', '', i);
			}
		}
	};
};
