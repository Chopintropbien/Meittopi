// affiche description de la propostion

	//PropositionAmeliorationComplete(photo, titre, description, nbAvisPositif, nbAvisNegatif, dons, 
									//nbAvisPositifMax, nbAvisNegatifMax, donsMax )
	
	// passer un tableau de photo
var photo = ['http://localhost/Meittopi/image/restau.jpg','http://localhost/Meittopi/image/restau.jpg'];
var amelioration = new PropositionAmeliorationComplete(photo, 'On devrais faire ca et ca',
														'sdfggggwwwwwwxvdf v f iqf qfg fivyudqf iv fiv qfiuv qdfivuqb viuqsb kisbv qsivb',
														5, 8, 6, 5,8 ,8);

amelioration.affiche('amelioration');


// affiche les commantaires

	//Commantaire(photo, nom, prenom, commantaire, nbPour, nbContre, nbResponse)
	// dans nb Reponse, mettre les reponses a ce commantaire
	// une reponse n'est qu'un commantaire avec un tableau vide pour nbReponse

var reponse = new Commantaire('http://localhost/Meittopi/image/restau.jpg', 'Abatuci', 'Yémendja', 'kshdgzf if zz uz zv zf', 2, 5, []);
var commantaire = new Commantaire('http://localhost/Meittopi/image/restau.jpg', 'Abatuci', 'Yémendja', 'kshdgzf if zz uz zv zf', 2, 5, [reponse]);
var listeCommantaire = new ListeCommantaire();


listeCommantaire.ajouteCommantaire(commantaire);
listeCommantaire.affiche('listeCommantaire');


