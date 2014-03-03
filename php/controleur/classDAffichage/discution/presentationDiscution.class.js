
function Conversation(auteur, photoAuteur, titre, conversation, nbReponse, dernierReponse, categorieConversation, lienPersonne, lienConversation, lienTypeConversation){
	
		this.photoAuteur = photoAuteur;
		this.auteur = auteur;
		this.titre = titre;
		this.conversation = conversation;
		this.nbReponse = nbReponse;
		this.dernierReponse = dernierReponse;
		this.categorieConversation = categorieConversation;
		this.lienPersonne = lienPersonne;
		this.lienConversation = lienConversation;
		
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
		
		this.affiche = function(i, ouOnAffiche, afficherTypeConversation){
			
				// auteur
			var lienAuteur = ''; //
			this.createElement('td', ouOnAffiche, 'auteur', 'auteur', '', i);
				this.createElement('a', 'auteur' + i, 'lienAuteurPhoto', '', lienAuteur, i);
					this.createElement('img', 'lienAuteurPhoto' + i, '', '', this.photoAuteur, i);
				this.createElement('a', 'auteur' + i, 'lienAuteur', '', lienAuteur, i);
					this.createElement('p', 'lienAuteur' + i, '', '', this.auteur, i);
				// conversation
			this.createElement('td', ouOnAffiche, 'conversation', 'conversation', '', i);
				this.createElement('a', 'conversation' + i, 'lienConversation', '', '', i);
					this.createElement('h4', 'lienConversation' + i, '', '', this.titre, i);
				this.createElement('p', 'conversation' + i, '', '', this.conversation, i);
				// categorie conversation
			if(afficherTypeConversation){
				this.createElement('td', ouOnAffiche, 'categorieConversation', 'categorieConversation', '', i);
					this.createElement('a', 'categorieConversation' + i, 'lienCategorieConversation', '', '', i);
						this.createElement('p', 'lienCategorieConversation' + i, '', this.categorieConversation, 'Alimentaire', i); // 
			}
				// nombre de reponse
			this.createElement('td', ouOnAffiche, 'reponse', 'reponse', this.nbReponse, i);
				// date de la derniere reponse
			this.createElement('td', ouOnAffiche, 'derniereReponse', 'derniereReponse', this.nbReponse, i);
		}
}



