function ListeCommantaire(){
	this.liste = [];
	
	this.ajouteCommantaire = function(commantaire){
		this.liste.push(commantaire);
	}
	
	this.createElement = function(tagName, idElementParent, id,  inner, identifiantProposition){
		
		var nouvelElement = document.createElement(tagName);

		if(tagName == 'a'){
			nouvelElement.href = inner;
		}
		else{
			nouvelElement.innerHTML = inner; 
		}
		nouvelElement.id =  identifiantProposition + id; 
		document.getElementById(idElementParent).appendChild(nouvelElement);
		
	};
	
	this.affiche = function(ouOnAffiche){
		
			//affiche tous les prosotion contenu dans le tableau
		var length = this.liste.length;
		for(var i = 0; i<length; ++i){
			this.createElement('li', ouOnAffiche, 'commantaire', '', i);
			this.liste[i].affiche(i, i + 'commantaire', '');
		}
	};
};
