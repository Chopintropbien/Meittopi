	// dans ou ca mettre innerHTML, value, placeholder
function ajouterLeTexte(className, texte, ouCa){
	var ecrit = document.getElementsByClassName(className);
	var ecritLength = ecrit.length;
	for(var i = 0; i < ecritLength; ++i){
		if(ouCa == 'innerHTML'){
			ecrit[i].innerHTML = texte;
		}
		else if(ouCa == 'value'){
			
			ecrit[i].value= texte;
		}
		else if(ouCa == 'placeholder'){
			ecrit[i].placeholder= texte;
		}
		
	}
}

	// Une Revue
ajouterLeTexte('aEcritSur', ' à érit sur ', 'innerHTML');
ajouterLeTexte('cetteAvisEstIl', 'Cette avis est-il...?', 'innerHTML');
ajouterLeTexte('drole', 'Drôle', 'value');
ajouterLeTexte('cool', 'Cool', 'value');
ajouterLeTexte('utile', 'Utile', 'value');

ajouterLeTexte('ecrireCompliment', 'Envoyer un compliment', 'placeholder');
ajouterLeTexte('annulerEcritureCompliment', 'Annuler', 'innerHTML');
ajouterLeTexte('envoyerCompliement', 'Envoyer', 'value');

	// Un evenement
ajouterLeTexte('aCreerUnEvenement', ' à creé un événement', 'innerHTML');
ajouterLeTexte('vaVenir', ' vient, ', 'innerHTML');
ajouterLeTexte('estInvite', ' est invité(e), ', 'innerHTML');
				


