
	//affiche le profil de la personne dans la pas votreAvis.php
	// profilDePaticipation(prenom, nom, statue, photo, nbVotePlus, nbVoteMoins, nbArgentDonnee);
var profil = new ProfilDeParticipation('Lauriane', 'Mollier', 'concepteur du site', 'http://localhost/Meittopi/image/restau.jpg', 2, 9, 0);
profil.affiche('profil');



	// parie des propositions
var listeProposition = new ListePropositionAmelioration();


	
	//ajoute les propostion
	// quand nbPersonne a attient le max, la proposition est accepté ou refusé
    // proposionAmelioration(photo, titre, description, nbPersonneVotePour, 
								//nbPersonneVotreContre, nbPersonneVotePourMax, nbPersonneVotreContreMax){
var proposition1 = new PropositionAmelioration( 'http://localhost/Meittopi/image/restau.jpg', 'Un big changement', 
									' qsdfbqjdhfb qsdb qdj djqdhjv qjv aej e  hv j vjafv qjf vjev  ev jv vja vjae jer aejhv ejv ej ejv',
									5, 10, 8, 9);
listeProposition.ajouteProposition(proposition1);
listeProposition.ajouteProposition(proposition1);
listeProposition.ajouteProposition(proposition1);
listeProposition.ajouteProposition(proposition1);
listeProposition.ajouteProposition(proposition1);


								


	//affiche les propositions
listeProposition.affiche('propositionAmelioration');
