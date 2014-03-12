
function afficheUneConversation(json){
	
		// initialise la discution
	var storageEntete = [];
	var jsonLengthEntete = json['entete'].length;
	for(var i = 0; i <jsonLengthEntete; ++i){
		storageEntete.push(json['entete'][i]);
	}
	var uneDiscution = new UneDiscution(storageEntete[0], storageEntete[1], storageEntete[2], storageEntete[3], storageEntete[4]);
	
		// ajoute les reponses
	for(node in json){
		if(node != 'entete'){
		var storage = [];
		var jsonLength = json[node].length;
		for(var i = 0; i <jsonLength; ++i){
			storage.push(json[node][i]);
		}
		var reponse= new UneReponseAUneDiscution(storage[0], storage[1], storage[2], storage[3], storage[4]);
		uneDiscution.ajouteReponse(reponse);
		}
	}
	uneDiscution.affiche('discutionSection');
};
