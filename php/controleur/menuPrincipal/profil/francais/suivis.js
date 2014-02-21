
(function(){
	
	
		// texte 
	
		// titre de la page dans l'onglet
	document.getElementById('titre').innerHTML = 'Mes suivis';
	
		// input pour la recherche des amis
	document.getElementById('inviter').placeholder = 'Rechercher des amis';
	document.getElementById('rechercherAmis').value = 'rechercher';
	
		// class
	
		// affiche la liste d'amis
	var listeAmis = new ListeAmis('Mes suivis');
	
	listeAmis.ajouteAmi('Antoine', 'Durieux', 'http://localhost/Meittopi/image/restau.jpg', 1);
	
	listeAmis.ajouteAmi('Andrei', 'Kucharavy', 'http://localhost/Meittopi/image/restau.jpg', 1);
	listeAmis.affiche(0, 'listeAmis');
	
	
	
		// affiche Sortie
		
	var sorties = new ListeRaconterSortie();
	
	sorties.ajouteSortie('Lauriane', 'Mollier', 'http://localhost/Meittopi/image/restau.jpg', 'Chez j\'aime', 'vraimeenr tres cool', 'on etait avec mehdi mariam et naige...');
	sorties.ajouteSortie('Lauriane', 'Mollier', 'http://localhost/Meittopi/image/restau.jpg', 'Chez j\'aime', 'vraimeenr tres cool', 'on etait avec mehdi mariam et naige...');
	
	
	sorties.affiche('activiteAmis');

})();
