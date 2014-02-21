
function ListeDeListe(){
	//this.listeDeListe = [new Liste('A faire'), new Liste('Evement'), new Liste('A commenter')];
	this.listeDeListe = [];
	this.ajouteListe = function (liste) {
		this.listeDeListe.push(liste);
	};
	this.liste = function(i) {
		var e = (this.listeDeListe)[i];;
		return e;
	};
	this.createElement = function(tagName, idElementParent, id, className, inner, identifiantListe, identifiantRestaurant){
		
		var nouvelElement = document.createElement(tagName);
		nouvelElement.className = className;
		nouvelElement.id = identifiantListe + id + identifiantRestaurant; 
		nouvelElement.innerHTML = inner; 
		if(className == 'grandeListe'){
			nouvelElement.style.display = 'none';
		}
		document.getElementById(idElementParent).appendChild(nouvelElement);
	};
	this.afficheListe = function (k, ouOnAffiche) {
			// nouvelle liste
		this.createElement('ul', ouOnAffiche, 'grandeListe',  'grandeListe','', k, 0);
		
		this.listeDeListe[k].affiche(k, k + 'grandeListe' + 0);
		
	};
	this.afficheAntete = function(ouOnAffiche){
			// creer les balises HTML pour la liste de liste
		var length = this.length();
		for(var i = 0; i<length; ++i){
			this.createElement('li',  ouOnAffiche, i, 'listeDeListe', this.liste(i).nom, '','');
		};
		
	}
	this.length = function() {

		return (this.listeDeListe).length;
	};
	
	
	this.faireEvenements = function(ouOnAffiche) {
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
				
				this.afficheListe(t, ouOnAffiche);
				
					// faire avec le dom 
					
				addEvent(elements[i], 'click', function(){
					
					var t = eval(this.id);
					
					var liste = document.getElementById(t + 'grandeListe' + 0);
					
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
	};

}
