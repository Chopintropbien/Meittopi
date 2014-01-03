	//Conversation(photoAuteur, auteur, titre, conversation, nbReponse, dernierReponse)
var conversation1 = new Conversation('http://localhost/Meittopi/image/restau.jpg', 'LAurizne', 'Je trouve que mon site est trop pourris',
										'IL faut vraiment que je l ameliore!!!!!!!!!!!!! vraiment beacoup beaucoup beaucoup',
										5, '04/08/1993');
var listeConversation = new ListeConversation();
listeConversation.ajouteConversation(conversation1);
listeConversation.affiche('conversation');


								

