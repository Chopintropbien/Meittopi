
function chargerListeRestau(json){
	var liste = new Liste();
	for(node in json){
		var restaurantStorage = [];
		
		var nodeLength = json[node].length;
		for(var j = 0; j< nodeLength ; ++j){		
			restaurantStorage.push(json[node][j]);
		}
		
		var restaurant = new Restaurant(restaurantStorage[0],restaurantStorage[1],restaurantStorage[2],restaurantStorage[3],restaurantStorage[4],restaurantStorage[5],restaurantStorage[6],restaurantStorage[7],restaurantStorage[8],restaurantStorage[9],restaurantStorage[10],restaurantStorage[11],restaurantStorage[12],restaurantStorage[13], restaurantStorage[14]);
		liste.ajouteRestau(restaurant);
	}
	liste.affiche('rechercheRestau');
	

}


