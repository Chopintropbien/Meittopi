(function(){
	
	
		// texte 
	
		// titre de la page dans l'onglet
	document.getElementById('titre').innerHTML = 'Discutions';
	
		// ou se trouve la discution A CHANGER CELON LE CAS
	document.getElementById('ouSePasseLesDiscutions').innerHTML = 'Les conversations autour de Lausanne';
		// ajouter une nouvelle conversation
	document.getElementById('ajous').innerHTML = '+ Nouvelle conversation';
	
		// les types de conversations RAJOUTER UN LIEN + FAIRES TOUTES LES CATEGORIES
	document.getElementById('mesDiscution').innerHTML = 'Mes discutions';
	document.getElementById('toutes').innerHTML = 'Toutes les conversations';
	document.getElementById('alimentation').innerHTML = 'Alimentation';
	
	
		//Conversation(photoAuteur, auteur, titre, conversation, nbReponse, dernierReponse)
	var conversation1 = new Conversation('http://localhost/Meittopi/image/restau.jpg', 'LAurizne', 'Je trouve que mon site est trop pourris',
											'IL faut vraiment que je l ameliore!!!!!!!!!!!!! vraiment beacoup beaucoup beaucoup',
											5, '04/08/1993');
	var listeConversation = new ListeConversation();
	listeConversation.ajouteConversation(conversation1);
	listeConversation.affiche('conversation');

})();
								

