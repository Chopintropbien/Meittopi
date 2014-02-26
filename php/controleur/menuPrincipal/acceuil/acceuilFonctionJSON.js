// charger le json pour la liste des activite recentes
function afficheListeRevueEtEvenement(json){

	var liste = new ListeRevueEtEvenement();
	for(node in json){
			// si c'est une revue, alors on on utile la classe Revue
		if(/revue/.test(node)){
			var storage = [];
			var nodeLength = json[node].length;
			for(var i = 0; i < nodeLength; ++i){
				storage.push(json[node][i]);
			}
			var revue = new Revue(storage[0], storage[1], storage[2], storage[3], storage[4], storage[5], storage[6], storage[7], storage[8], storage[9], storage[10], storage[11]);
		}
			// sinon Evenement
		else if (/evenement/.test(node)){
			var storage = [];
			var nodeLength = json[node].length;
			for(var i = 0; i < nodeLength; ++i){
				storage.push(json[node][i]);
			}
			var revue = new Evenement(storage[0], storage[1], storage[2], storage[3], storage[4], storage[5], storage[6], storage[7], storage[8], storage[9], storage[10]);
		}
		liste.ajouteRevueOuEvenement(revue);	
	 }
	 liste.affiche('listeRevueEtEvenement');
};


function afficheProfilAcceuil(json){
	var storage = [];
	for(node in json){
		storage.push(json[node]);
	}
	var profil = new ProfilAcceuil(storage[0], storage[1], storage[2], storage[3], storage[4], storage[5], storage[6], storage[7], storage[8], storage[9], storage[10], storage[11]);
	profil.affiche('profil');
};







