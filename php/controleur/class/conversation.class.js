
function Conversation(photoAuteur, auteur, titre, conversation, nbReponse, dernierReponse){
	
		this.photoAuteur = photoAuteur;
		this.auteur = auteur;
		this.titre = titre;
		this.conversation = conversation;
		this.nbReponse = nbReponse;
		this.dernierReponse = dernierReponse;
		
		this.createElement = function(tagName, idElementParent, id, className, inner, identifiant){
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
			nouvelElement.id = id + identifiant; 
			document.getElementById(idElementParent).appendChild(nouvelElement);
		};
		
		this.affiche = function(i, ouOnAffiche){
			this.createElement('td', ouOnAffiche, 'auteur', 'auteur', '', i);
			
				this.createElement('a', 'auteur' + i, 'lienAuteur', '', '', i);
					this.createElement('img', 'lienAuteur' + i, '', '', this.photoAuteur, i);
					this.createElement('p', 'lienAuteur' + i, '', '', this.auteur, i);
			this.createElement('td', ouOnAffiche, 'conversation', 'conversation', '', i);
				this.createElement('a', 'conversation' + i, 'lienConversation', '', '', i);
					this.createElement('h4', 'lienConversation' + i, '', '', this.titre, i);
					this.createElement('p', 'lienConversation' + i, '', '', this.conversation, i);
			this.createElement('td', ouOnAffiche, 'reponse', 'reponse', this.nbReponse, i);
			this.createElement('td', ouOnAffiche, 'derniereReponse', 'derniereReponse', this.nbReponse, i);
		}
}
