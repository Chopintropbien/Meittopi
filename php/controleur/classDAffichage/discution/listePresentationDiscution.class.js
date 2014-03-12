
// mettre true si on veux afficher le type de conversation 
function ListeConversation(afficherTypeConversation){
	
	this.afficherTypeConversation = afficherTypeConversation;
	this.liste = [];
	
	this.ajouteConversation = function(conversation){
		this.liste.push(conversation);
	}
	
	this.createElement = function(tagName, idElementParent, id, className, inner){
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
			if(className != ''){
				nouvelElement.className = className;
			}
			if(id != ''){
				nouvelElement.id = id; 
			}	
			document.getElementById(idElementParent).appendChild(nouvelElement);
		};
		
	this.affiche = function(ouOnAffiche){
		this.createElement('tr', ouOnAffiche, 'ligne', '', '');
		
				// entete de la liste
			this.createElement('td', 'ligne', '', 'auteurTitre', '');  
			this.createElement('td', 'ligne', '', 'conversationTitre', '');
			if(this.afficherTypeConversation){
				this.createElement('td', 'ligne', 'categorieConversation', 'categorieConversation', '');
			}
			this.createElement('td', 'ligne', 'reponse','reponse', '');
			this.createElement('td', 'ligne', 'derniereReponse', 'derniereReponse', '');
			this.createElement('hr', ouOnAffiche, 'ligne' + i , '', '');
		
				// affichage des differentes discutions
		var length = this.liste.length;
		for(var i = 0; i < length; ++i){
			this.createElement('tr', ouOnAffiche, 'ligne' + i , '', '');
			this.liste[i].affiche(i, 'ligne' + i, this.afficherTypeConversation);
			if(i != length-1){
				this.createElement('hr', ouOnAffiche, 'ligne' + i , '', '');
			}
			
		}
	}
	
}
