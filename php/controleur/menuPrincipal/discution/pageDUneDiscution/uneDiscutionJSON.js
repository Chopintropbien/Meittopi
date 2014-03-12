
function afficheUneConversation(json){
	
	for(node in json){
		if(node == 'entete'){
			var storage = [];
			var jsonLength = json[node].length;
			for(var i = 0; i <jsonLength; ++i){
				storage.push(json[node][i]);
			}
			var uneDiscution = new UneDiscution(storage[0], storage[1], storage[2], storage[3], storage[4]);
		}
		
		var storage = [];
		var jsonLength = json[node].length;
		for(var i = 0; i <jsonLength; ++i){
			storage.push(json[node][i]);
		}
		var reponse= new UneReponseAUneDiscution(storage[0], storage[1], storage[2], storage[3], storage[4]);
		uneDiscution.ajouteReponse(UneReponseAUneDiscution);
	}
	uneDiscution.affiche('discutionSection');
};
