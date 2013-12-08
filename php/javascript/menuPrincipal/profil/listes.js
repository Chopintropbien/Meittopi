
var vectorListe = new ListeDeListe();
vectorListe.ajouteListe(new Liste('coucou'));

vectorListe.liste(0).ajouteRestau('les alouette', 'http://localhost/Meittopi/image/restau.jpg',
									3, 'tres bon', 'une tres belle vue');
vectorListe.liste(0).ajouteRestau('les alouette', 'http://localhost/Meittopi/image/restau.jpg',
									3, 'tres bon', 'une tres belle vue');

vectorListe.liste(1).ajouteRestau('lqsdf', 'http://localhost/Meittopi/image/restau.jpg',
									4, 'tres bon', 'une rdfggfffff');	

vectorListe.liste(2).ajouteRestau('lsdfsqdf', 'http://localhost/Meittopi/image/restau.jpg',
									3, 'tres bon', 'bbbbbbbbbbbbbbbbbbbbbaaa');		
									
vectorListe.liste(3).ajouteRestau('lsdfsqdf', 'http://localhost/Meittopi/image/restau.jpg',
									3, 'tres bon', 'aaaasdfsfsdfsdfsdfdaaaaaaa');															


	// creer les balises HTML pour la liste de liste
var vectorListeLength = vectorListe.length();
for(var i = 0; i<vectorListeLength; ++i){
	var nouvelleAntete = document.createElement('li');
	nouvelleAntete.className = 'listeDeListe';
	nouvelleAntete.innerHTML = vectorListe.liste(i).nom(); 
	nouvelleAntete.id = i;
	document.getElementById('listeDeListe').appendChild(nouvelleAntete);
}

    function addEvent(element, event, func) { // Une fonction pour gérer les événements sous tous les navigateurs
        if (element.attachEvent) {
            element.attachEvent('on' + event, func);
        } else {
            element.addEventListener(event, func, true);
        }
    }
    
    var elements = document.getElementsByTagName('li');
    var elementsLength = elements.length;

    for (var i = 0 ; i < elementsLength ; i++) {		
		var compteListeDeListe = 0;
		if (elements[i].className === 'listeDeListe') {
			var t = eval(elements[i].id);
			vectorListe.afficheListe(t);
				// faire avec le dom 
			addEvent(elements[i], 'click', function(){
				var t = eval(this.id);
				var liste = document.getElementById(t + 'grandeListeRestau' + 0);
				
				if(liste.style.display == 'none'){
					liste.style.display = 'block';
					
				}
				else if(liste.style.display == 'block'){
					liste.style.display = 'none';
				}
				else{
					alert(liste.style.display);
				}
				
			});
		}
	}

