function chargerListeCommentaire(json){
	var listeCommentaire = new ListeCommentaire(); 
	for(node in json){
		var storageAmelioration = []; 
		var lengthNode = json[node].length;
		for(var i = 0; i < lengthNode; ++i){
			storageAmelioration.push(json[node][i]); 
		}
		var commentaire = new CommentaireAmelioration(storageAmelioration[0], storageAmelioration[1], storageAmelioration[2], storageAmelioration[3], storageAmelioration[4], storageAmelioration[5], storageAmelioration[6], storageAmelioration[7], storageAmelioration[8], storageAmelioration[9]);
		listeCommentaire.ajouteCommentaire(commentaire);
	}
	listeCommentaire.affiche('listeCommantaire');
}
