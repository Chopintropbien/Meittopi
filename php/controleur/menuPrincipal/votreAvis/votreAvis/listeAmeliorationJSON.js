
function chargerListeAmelioration(json){
	var listeProposition = new ListePropositionAmelioration(); 
	for(node in json){
		var storageAmelioration = []; 
		var lengthNode = json[node].length;
		for(var i = 0; i < lengthNode; ++i){
			storageAmelioration.push(json[node][i]); 
		}
		var proposition = new PropositionAmelioration(storageAmelioration[0], storageAmelioration[1], storageAmelioration[2], storageAmelioration[3], storageAmelioration[4], storageAmelioration[5], storageAmelioration[6], storageAmelioration[7], storageAmelioration[8], storageAmelioration[9], storageAmelioration[10], storageAmelioration[11], storageAmelioration[12], storageAmelioration[13]);
		listeProposition.ajouteProposition(proposition);
	}
	listeProposition.affiche('propositionAmelioration');
	
}
