function afficheConversationSansTypeConversation(json){
	var listeConversation = new ListeConversation();
	for(node in json){
		var storage = [];
		var jsonLength = json[node].length;
		for(var i = 0; i <jsonLength; ++i){
			storage.push(json[node][i]);
		}
		var conversation = new Conversation(storage[0], storage[1], storage[2], storage[3], storage[4], storage[5], storage[6], storage[7], storage[8], storage[9]);
		listeConversation.ajouteConversation(conversation);
	}
	listeConversation.affiche('conversation');
};
