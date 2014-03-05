
function ListeRevueEtEvenement(){
	this.liste = [];
	
	this.createElement = function(tagName, idElementParent, id){
		var nouvelElement = document.createElement(tagName);
		nouvelElement.id = id;
		document.getElementById(idElementParent).appendChild(nouvelElement);
	};
	
	this.ajouteRevueOuEvenement = function(revueOuEvenement){
		this.liste.push(revueOuEvenement);
	}
	
	this.affiche = function (ouAfficher){
		var listeLength = this.liste.length;
		for(var i = 0; i < listeLength; ++i){
			this.createElement('li', ouAfficher, 'li' + i)
			this.liste[i].affiche('li' + i, i);
			if(i != listeLength -1){
				this.createElement('hr', ouAfficher, '');
			}
			
		}
		
		
	}
	
	
	
	
}
