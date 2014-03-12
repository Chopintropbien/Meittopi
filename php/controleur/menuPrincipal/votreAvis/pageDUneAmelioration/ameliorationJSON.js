function chargerAmelioration(json){
	
	var storageAmelioration = []; 
	for(node in json){
		storageAmelioration.push(json[node]); 
	}
	
	var amelioration = new AmeliorationComplete(storageAmelioration[0], storageAmelioration[1], storageAmelioration[2], storageAmelioration[3], storageAmelioration[4], storageAmelioration[5], storageAmelioration[6], storageAmelioration[7], storageAmelioration[8], storageAmelioration[9], storageAmelioration[10], storageAmelioration[11], storageAmelioration[12], storageAmelioration[13]);
	amelioration.affiche('propositionAmelioration');
}
