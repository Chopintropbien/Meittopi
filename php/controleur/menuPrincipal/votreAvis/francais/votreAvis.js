
(function(){
	
	

		// texte 
	
		// titre de la page dans l'onglet
	document.getElementById('titre').innerHTML = 'Votre avis';
		// ajouter une amelioration
	document.getElementById('ajous').innerHTML =  '+ Proposer une amélioration ';
	
		// bloc de droite (explication de pourquoi cette page) 
	document.getElementById('explication').innerHTML =  '<h1> Mais pourquoi cette page?</h1> ' + 
														'<p> Ce site est encore en cours de develeppement, il y a encore plein de chose <em> à améliorer </em> !' +
														'Alors s\'il vous<em> manque quelque chose</em> sur le site, que vous trouver qu\'il faudrait améliorer ' +
														'telle chose ou au contrainre l\'enlever, ou n\'importe quel autre idée, <em>proposez-là </em> !' +
														'</br>' +
														'Mais pour pouvoir l\'a réaliser, on a besoin de <em>votre soutient</em>, car develloper un site prend beaucoup de temps' +
														'et d\'argent...</p>' +
														'<a> pour en savoir plus...</a>';
			
			
		// bloc de droite (explication pour les dons) 
	document.getElementById('donnation').innerHTML = 	'<h3> Donnation</h3>' +
														'<p> Si vous avez envie que Meitopi s\'améliore et <em>évolue</em>, il faut nous financer, car developper' + 
														'un site <em>coute cher</em> et que nous arrivons au bout de nos économies!' +
														'<a> Pour en savoir plus</a>'+ 
														'</p>';					
														
	
		//class
	
		//affiche le profil de la personne dans la pas votreAvis.php
		// profilDePaticipation(prenom, nom, statue, photo, nbVotePlus, nbVoteMoins, nbArgentDonnee);
	//~ var profil = new ProfilDeParticipation('Lauriane', 'Mollier', 'concepteur du site', 'http://localhost/Meittopi/image/restau.jpg', 2, 9, 0);
	//~ profil.affiche('profil');
	//~ 
	
	
		// parie des propositions
	var listeProposition = new ListePropositionAmelioration();
	
	
		
		//ajoute les propostion
		// quand nbPersonne a attient le max, la proposition est accepté ou refusé
	    // proposionAmelioration(photo, titre, description, nbPersonneVotePour, 
									//nbPersonneVotreContre, nbPersonneVotePourMax, nbPersonneVotreContreMax){
	listeProposition.ajouteProposition(new PropositionAmelioration( 'http://localhost/Meittopi/image/restau.jpg', 'Un big changement', 
										' qsdfbqjdhfb qsdb qdj djqdhjv qjv aej e  hv j vjafv qjf vjev  ev jv vja vjae jer aejhv ejv ej ejv',
										4, 20, 20, 15, 20, 20, true, '', 0,true, false, '', ''));
	listeProposition.ajouteProposition(new PropositionAmelioration( 'http://localhost/Meittopi/image/restau.jpg', 'Un big changement', 
										' qsdfbqjdhfb qsdb qdj djqdhjv qjv aej e  hv j vjafv qjf vjev  ev jv vja vjae jer aejhv ejv ej ejv',
										5, 10, 8, 15, 7, 20, true, '', 0, true, false, '', ''));
	listeProposition.ajouteProposition(new PropositionAmelioration( 'http://localhost/Meittopi/image/restau.jpg', 'Un big changement', 
										' qsdfbqjdhfb qsdb qdj djqdhjv qjv aej e  hv j vjafv qjf vjev  ev jv vja vjae jer aejhv ejv ej ejv',
										10, 10, 10, 15, 7, 20, true, '', 0,true, false, '', ''));
	listeProposition.ajouteProposition(new PropositionAmelioration( 'http://localhost/Meittopi/image/restau.jpg', 'Un big changement', 
										' qsdfbqjdhfb qsdb qdj djqdhjv qjv aej e  hv j vjafv qjf vjev  ev jv vja vjae jer aejhv ejv ej ejv',
										4, 20, 20, 15, 7, 20, true, '', 0,true, false, '', ''));
	listeProposition.ajouteProposition(new PropositionAmelioration( 'http://localhost/Meittopi/image/restau.jpg', 'Un big changement', 
										' qsdfbqjdhfb qsdb qdj djqdhjv qjv aej e  hv j vjafv qjf vjev  ev jv vja vjae jer aejhv ejv ej ejv',
										5, 10, 8, 15, 7, 20, true, '', 0, false, true, '', ''));
	
	
									
	
	
		//affiche les propositions
	listeProposition.affiche('propositionAmelioration');
})();
