
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
			nouvelElement.className = className;
			nouvelElement.id = id; 		
			document.getElementById(idElementParent).appendChild(nouvelElement);
		};
		
	this.affiche = function(ouOnAffiche){
		this.createElement('tr', ouOnAffiche, 'ligne', '', '');
		
			this.createElement('td', 'ligne', '', 'auteur', 'Auteur');
			this.createElement('td', 'ligne', '', 'conversationTitre', 'conversation');
			if(this.afficherTypeConversation){
				this.createElement('td', 'ligne', '', 'categorieConversation', 'Type de Conversation');
			}
			this.createElement('td', 'ligne', '','reponse', 'Réponse');
			this.createElement('td', 'ligne', '', 'derniereReponse', 'Dernière Réponse');
			this.createElement('hr', ouOnAffiche, 'ligne' + i , '', '');
		
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
