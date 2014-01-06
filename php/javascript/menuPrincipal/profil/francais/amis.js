(function(){
	
	

	// texte 
	
		// titre de la page dans l'onglet
	document.getElementById('titre').innerHTML = 'Mes amis';
	
	document.getElementById('inviter').value =  'Inviter des amis';
	
	
	
		//class
	
		// affiche la liste d'amis
	var listeAmis = new ListeAmis('Mes suivis');
	
	listeAmis.ajouteAmi('Antoine', 'Durieux', 'http://localhost/Meittopi/image/restau.jpg', 1);
	listeAmis.ajouteAmi('Andrei', 'Kucharavy', 'http://localhost/Meittopi/image/restau.jpg', 1);
	listeAmis.affiche('', 'listeAmis');
	
	
	
		// les sorties
	var sorties = new ListeRaconterSortie();
	
	sorties.ajouteSortie('Lauriane', 'Mollier', 'http://localhost/Meittopi/image/restau.jpg', 'Chez j\'aime', 'vraimeenr tres cool', 'on etait avec mehdi mariam et naige...');
	sorties.ajouteSortie('Lauriane', 'Mollier', 'http://localhost/Meittopi/image/restau.jpg', 'Chez j\'aime', 'vraimeenr tres cool', 'on etait avec mehdi mariam et naige...');
	
	
	sorties.affiche('activiteAmis');

})();
