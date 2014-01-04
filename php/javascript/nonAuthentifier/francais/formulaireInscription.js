	// les indications
document.getElementById('creerUnCompteTitre').innerHTML = 'Créer un compte';
document.getElementById('dateDeNaissanceTitre').innerHTML = 'Votre date de naissance';

	// les inputs de saisis
document.getElementById('prenomjava').placeholder = 'Prénom';
document.getElementById('nomjava').placeholder = 'Nom de famille';
document.getElementById('email').placeholder = 'Votre adresse e-mail';
document.getElementById('confirmemail').placeholder = 'Confirmer votre e-mail';
document.getElementById('motdepasse').placeholder = 'Mot de passe';


	// les options pour les mois de naissances
	
document.getElementById('m').innerHTML = 'Mois';
document.getElementById('jan').innerHTML = 'Jan';
document.getElementById('fev').innerHTML = 'Fév';
document.getElementById('mar').innerHTML = 'Mar';
document.getElementById('avr').innerHTML = 'Avr';
document.getElementById('mai').innerHTML = 'Mai';
document.getElementById('jun').innerHTML = 'Jun';
document.getElementById('juil').innerHTML = 'Juil';
document.getElementById('aou').innerHTML = 'Aoû';
document.getElementById('sep').innerHTML = 'Sep';
document.getElementById('oct').innerHTML = 'Oct';
document.getElementById('nov').innerHTML = ' Nov';
document.getElementById('dec').innerHTML = 'Déc';



// Affiche les valeurs des jours et des annees
					
	//jour
var jour = document.createElement('option');
	jour.value = 'jour';
	jour.id = 'jour';
	jour.innerHTML = 'Jour';
	document.getElementById('jour').appendChild(jour);
for(var i = 1; i <= 31; ++i){
	var jour = document.createElement('option');
	jour.value = i;
	jour.innerHTML = i;
	document.getElementById('jour').appendChild(jour);

}

	// année
	
var annee = document.createElement('option');
annee.value = 'annee';
annee.innerHTML = 'Année';
document.getElementById('annee').appendChild(annee);
for(var i = 2013; i>=1900; --i){
	var annee = document.createElement('option');
	annee.value = i;
	annee.innerHTML = i;	
	document.getElementById('annee').appendChild(annee);
	
}


	// homme ou femme
document.getElementById('femmeLabel').innerHTML = 'Femme';
document.getElementById('hommeLabel').innerHTML = 'Homme';

	// input inscription
document.getElementById('creerUnCompte').value = 'Inscription';

