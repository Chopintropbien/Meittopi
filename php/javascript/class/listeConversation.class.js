function ListeConversation(){
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
			this.createElement('td', 'ligne', '', 'conversation', 'Conversation');
			this.createElement('td', 'ligne', '','reponse', 'Réponse');
			this.createElement('td', 'ligne', '', 'derniereReponse', 'Dernière Réponse');
		
		var length = this.liste.length;
		for(var i = 0; i < length; ++i){
			this.createElement('tr', ouOnAffiche, 'ligne' + i , '', '');
			this.liste[i].affiche(i, 'ligne' + i);
		}
	}
	
}
