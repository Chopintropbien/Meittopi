	// texte
	
	// titre de la page dans l'onglet
document.getElementById('titre').innerHTML = 'Mon profil';
	
	//premier cadre de droite 
document.getElementById('changerLeSite').innerHTML = 'Quelque chose à améliorer?';
document.getElementById('changerLeSiteP').innerHTML = 'Meittopi vous offre la possibilité de </br> <strong> changer son site! </strong> changer son site!';
	
	// deuxieme cadre de droite 
document.getElementById('suggestion').innerHTML = 'Vous vous sentez seul?';
document.getElementById('suggestionP').innerHTML = '<strong> Invitez des amis! </strong>';
	
	// troisieme cadre de droite 
document.getElementById('appreciation').innerHTML = ' Avez-vous <strong>aimer les restaurants</strong> que meittopi vous a suggerer?';


// dans tableauDeCaracteristique, mettre toutes les caracterisques que l'utilisateur a rentré
	// ex: adresse
	// peut etre faire une classe de se tableau, a voir avec Andrei
//~ function Profil(nom, prenom, photo, alias, tableauDeCaracteristique, nbAmis, nbAvis, nbFollowers

var profil = new Profil('Mollier', 'Lauriane', '', 'Chopin', 'rien', 5,5,2);
profil.affiche('profil_profil');
