	// texte 

	// titre de la page dans l'onglet
document.getElementById('titre').innerHTML = 'Mes suivis';

document.getElementById('ajous').innerHTML =  '+ Ajouter une liste';

	
	// class
var vectorListe = new ListeDeListe();
vectorListe.ajouteListe(new Liste('coucou'));


vectorListe.liste(0).ajouteRestau('les alouette', 'http://localhost/Meittopi/image/restau.jpg',
									3, 'tres bon', 'une tres belle vue');

vectorListe.liste(0).ajouteRestau('les alouette', 'http://localhost/Meittopi/image/restau.jpg',
									3, 'tres bon', 'une tres belle vue');

vectorListe.liste(0).ajouteRestau('lqsdf', 'http://localhost/Meittopi/image/restau.jpg',
									4, 'tres bon', 'une rdfggfffff');	

vectorListe.liste(0).ajouteRestau('lsdfsqdf', 'http://localhost/Meittopi/image/restau.jpg',
									3, 'tres bon', 'bbbbbbbbbbbbbb bbb bbbaaa dgdkj bnqdf kjvg bdfkvjqdfb kqdjbqdkg jbvqdkjbqdkvjdbdkjbdkbsfgdbsfgb');		
									
vectorListe.liste(0).ajouteRestau('lsdfsqdf', 'http://localhost/Meittopi/image/restau.jpg',
									3, 'tres bon', 'aaaasdfsfsdfsdfsdfdaaaaaaa');															


		// affiche les antetes
	vectorListe.afficheAntete('listeDeListe');
		// faire les evenements pour afficher
	vectorListe.faireEvenements('affichageRestau');
	

