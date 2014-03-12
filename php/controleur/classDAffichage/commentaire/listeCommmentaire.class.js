function ListeCommentaire(){
	this.listeCom = [];
	
	this.ajouteCommentaire = function(commentaire){								
		this.listeCom.push(commentaire);				  		
	};

	this.createElement = function(tagName, idElementParent, id){
		var nouvelElement = document.createElement(tagName);
		nouvelElement.id = id; 
		document.getElementById(idElementParent).appendChild(nouvelElement);
		
	};
	this.affiche = function (ouAfficher){
			//la liste des commentaires
		var listeLength = this.listeCom.length;
		for(var i = 0; i<listeLength; ++i){
			this.createElement('li', ouAfficher, 'li' + i);
			this.listeCom[i].affiche('li' + i, i);
			if(i != listeLength -1){
				this.createElement('hr', ouAfficher, '');
			}
			
		}
	};
}
