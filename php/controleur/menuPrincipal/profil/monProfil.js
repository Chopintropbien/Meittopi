function informationProfil(json){
	var information = [];
	for(node in json){
			// pour le tableau de description de la personne (les info qu'elle peux ajouter à son profil et qui ne sont pas obligatoire)
		var tableauDeCaracteristique;
		if(node == "tableauDeCaracteristique" && json[node] instanceof Array){
			var tableauDeCaracteristique = json[node];
		}
		else{
			information.push(json[node]);
		}		
	 }
		
		// creer le profil avec toutes les informations recolter
	 var profil = new Profil(information[0], information[1], information[2], information[3], information[4],information[5],information[6], tableauDeCaracteristique);
	 profil.affiche('profil_profil');
};

