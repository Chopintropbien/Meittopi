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

function ajouterLeTexteSansSuprimerceluiDAvant(className, texte, ouCa){
	var ecrit = document.getElementsByClassName(className);
	var ecritLength = ecrit.length;
	for(var i = 0; i < ecritLength; ++i){
		if(ouCa == 'innerHTML'){
			ecrit[i].innerHTML += texte; // la difference est ici
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
ajouterLeTexte('drole', 'Drôle', 'innerHTML');
ajouterLeTexte('cool', 'Cool', 'innerHTML');
ajouterLeTexte('utile', 'Utile', 'innerHTML');

ajouterLeTexte('ecrireCompliment', 'Envoyer un compliment', 'placeholder');
ajouterLeTexte('annulerEcritureCompliment', 'Annuler', 'innerHTML');
ajouterLeTexte('envoyerCompliement', 'Envoyer', 'value');

	// Un evenement
ajouterLeTexte('aCreerUnEvenement', ' à creé un événement', 'innerHTML');
ajouterLeTexte('vaVenir', ' vient, ', 'innerHTML');
ajouterLeTexte('estInvite', ' est invité(e), ', 'innerHTML');
				
	// le profil
ajouterLeTexteSansSuprimerceluiDAvant('ligne1colone1', ' votes utile', 'innerHTML');
ajouterLeTexteSansSuprimerceluiDAvant('ligne1colone2', ' amis', 'innerHTML');
ajouterLeTexteSansSuprimerceluiDAvant('ligne1colone3', ' compliment', 'innerHTML');
ajouterLeTexteSansSuprimerceluiDAvant('ligne2colone1', ' votes drôle', 'innerHTML');
ajouterLeTexteSansSuprimerceluiDAvant('ligne2colone2', ' revus', 'innerHTML');
ajouterLeTexteSansSuprimerceluiDAvant('ligne2colone3', ' followers', 'innerHTML');
ajouterLeTexteSansSuprimerceluiDAvant('ligne3colone1', ' votes cool', 'innerHTML');
ajouterLeTexteSansSuprimerceluiDAvant('ligne3colone2', ' sortie', 'innerHTML');




