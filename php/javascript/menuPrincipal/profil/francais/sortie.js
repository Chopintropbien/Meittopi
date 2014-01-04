		// texte 

	// titre de la page dans l'onglet
document.getElementById('titre').innerHTML = 'Mes Sorties';

document.getElementById('ajous').innerHTML = '+ Organiser une sortie';
	


	// class
var l = new ListeDeListe();



var a = new Ami('robert', 'gmg', 'http://localhost/Meittopi/image/restau.jpg', 1);
var a2 = new Ami('barbara', 'mollier', 'http://localhost/Meittopi/image/restau.jpg', 1);
var a3 = new Ami('pierre', 'mollier', 'http://localhost/Meittopi/image/restau.jpg', 1);
var so1 = new Sortie('zwbwf' , 'voila ce qu on va faire');
var so2 = new Sortie('rwdfgwdfb', 'd;fjvndf;jvnkj kqjf kjbf kjbk jbkj bqkj hb kjbgkjbakregb akjbe jkaebr jerb eab khjb kajb r');
so1.ajouteParticipant(a);
so1.ajouteParticipant(a2);
so2.ajouteParticipant(a3);

l.ajouteListe(so1);
l.ajouteListe(so2);

l.afficheAntete('listeDeListe');
l.faireEvenements('affichageRestau');


