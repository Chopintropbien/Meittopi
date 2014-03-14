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
			// zone pour répondre
		//~ this.createElement('hr', ouAfficher, '');
		//~ this.createElement('li', ouAfficher, 'zoneReponse');
			//~ this.createElement('h4', 'zoneReponse', 'titreReponse');
			//~ this.createElement('textarea', 'zoneReponse', '');
			//~ var nouvelElement = document.createElement('input');
			//~ nouvelElement.id = ; 
			//~ document.getElementById(idElementParent).appendChild(nouvelElement);
		
	};
}
