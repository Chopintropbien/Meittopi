
function creerListes(json){
	
	var listes = new ListeDeListe();
		// pour chaque liste envoyer dans le tableau json
	for (node in json){
			// recupere le nom de la liste
		listes.ajouteListe(new Liste(json[node][0]));
			// recupere la liste des restau 
			// j le j° restau de la liste
		for(var j = 0; j < json[node][1].length; ++j){
			var UnRestau = [];
				// recupere les information d'un restau
			for(infoRestau in json[node][1][j]){
				UnRestau.push(json[node][1][j][infoRestau]);
			}
			listes.liste(node).ajouteRestau(UnRestau[0], UnRestau[1],UnRestau[2], UnRestau[3], UnRestau[4]);
		}
	}
	
	// affiche la liste des restaus
		// affiche les antetes
	listes.afficheAntete('listeDeListe');
	
		// faire les evenements pour afficher
	listes.faireEvenements('affichageRestau');
}
