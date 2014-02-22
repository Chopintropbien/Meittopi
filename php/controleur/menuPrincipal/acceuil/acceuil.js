	
		// lese evenements
		
function addEvent(element, event, func) { // Une fonction pour gérer les événements sous tous les navigateurs
	if (element.attachEvent) {
		element.attachEvent('on' + event, func);
	} else {
		element.addEventListener(event, func, true);
	}
}		
var i = 0;	

		
while(document.getElementById('blocCompliment' + i)){
	
		// appartion de la zone de saisie pour ecrire un compliment si on clique sur "envoyer un compliement"
	var ecrireUnCompliment = document.getElementById('ecrireCompliment' + i);
		
	addEvent(ecrireUnCompliment, 'focus', function(){
		this.style.display = 'none';
		i = this.id[16];
		var textareaAAfficher = document.getElementById('texteCompliment' + i);
		var buttonAAfficher = document.getElementById('buttonsCompliment' + i);
		buttonAAfficher.style.display = 'block';
		textareaAAfficher.style.display = 'block';
		textareaAAfficher.focus();
		
	});
	
		// disparition de la zone de saisie pour ecrire un compliement si on clique sur annuler
	var annulerEcritureCompliment = document.getElementById('annulerEcritureCompliment' + i);
		
	addEvent(annulerEcritureCompliment, 'click', function(){
		var textareaAAfficher = document.getElementById('texteCompliment' + i);
		var buttonAAfficher = document.getElementById('buttonsCompliment' + i);
		buttonAAfficher.style.display = 'none';
		textareaAAfficher.style.display = 'none';
		var ecrireUnCompliment = document.getElementById('ecrireCompliment' + i);
		ecrireUnCompliment.style.display = 'block';
	});
	
		// fonction pour que les boutons utile drole et cool s'enfonce ou se dé-enfonce quand on clique
		// obligatoirement avec des bordure in et outset
		
	var buttons = ['utile', 'cool', 'drole'];
	for(var j = 0; j < buttons.length; ++j){
		var button = document.getElementById(buttons[j] + i);
		addEvent(button, 'click', function(){
			if(this.style.border == '' || /outset/.test(this.style.border)){
				this.style.border = '1px #FF8400 inset';
			}
			else if( /inset/.test(this.style.border)){
				this.style.border = '1px #FF8400 outset';
			}
		});
	}	
	
	++i;
}


var l = new ListeRevueEtEvenement();
					
var e = new Evenement('Andrei', 'http://localhost/Meittopi/image/restau.jpg', ['http://localhost/Meittopi/image/restau.jpg', 'http://localhost/Meittopi/image/restau.jpg', 'http://localhost/Meittopi/image/restau.jpg'], 'Encore une sortie chez j aime', 'il y a 14 min', 'dimanche', [['Lauriane', true, 'lien'], ['Mehdi', false, 'lien']], 'que pour toi', 'comme d ab', 'identificationPersonneQuiAFaitLEvenement', 'identificationEvenement');

l.ajouteRevueOuEvenement(e);
l.affiche('listeRevueEtEvenement');









