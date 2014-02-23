
function ProfilAcceuil(photoProfil, speudo, villeOuEstLaPersonne, nbVoteCool, nbvoteUtile, nbVotreDrole, nbAmis, nbRevus, nbEvenementOrganise, nbCompliment, nbFollower, nbLienPourProfilPlusComplet){
	this.photoProfil = photoProfil;
	this.speudo = speudo;
	this.villeOuEstLaPersonne = villeOuEstLaPersonne;
	this.nbVoteCool = nbVoteCool;
	this.nbvoteUtile = nbvoteUtile;
	this.nbVotreDrole = nbVotreDrole;
	this.nbAmis = nbAmis;
	this.nbRevus = nbRevus;
	this.nbEvenementOrganise = nbEvenementOrganise;
	this.nbCompliment = nbCompliment;
	this.nbFollower = nbFollower;
	this.nbLienPourProfilPlusComplet = nbLienPourProfilPlusComplet;
	
	
	this.createElement = function(tagName, idElementParent, id, className, inner){
		var nouvelElement = document.createElement(tagName);
		if(tagName == 'img'){
			nouvelElement.src = inner; 
		}
		else if(tagName == 'a'){
			nouvelElement.href = inner;
		}
		else{
			nouvelElement.innerHTML = inner; 
		}
		nouvelElement.className = className;
		nouvelElement.id = id; 
		document.getElementById(idElementParent).appendChild(nouvelElement);
	};
	
	this.affiche = function (ouAfficher){
		
			// partie superieur de l'affichage le speudo et la ville courante
		var lienProfil = 'qsdvf'; //	
		this.createElement('div', ouAfficher, 'nomPlusVille', '', '');
			this.createElement('a', 'nomPlusVille', 'lienProfil', '', lienProfil);
				this.createElement('h2', 'lienProfil', '', '', this.speudo + ', ');
			this.createElement('p', 'nomPlusVille', 'ville', '', this.villeOuEstLaPersonne);
					
			// partie inferieur
		this.createElement('article', ouAfficher, 'photoEtNotif', '', '');		
				// photo 
			this.createElement('img', 'photoEtNotif', '', '', this.photoProfil);
				// liste des echanges avec la personne. Tableau 3x3
			this.createElement('table', 'photoEtNotif', 'tableauNotification', '', '');
				this.createElement('tr', 'tableauNotification', 'ligne1', '', '');
					this.createElement('td', 'ligne1', 'ligne1colone1', 'ligne1colone1', this.nbvoteUtile);
					this.createElement('td', 'ligne1', 'ligne1colone2', 'ligne1colone2', this.nbAmis);
					this.createElement('td', 'ligne1', 'ligne1colone3', 'ligne1colone3', this.nbCompliment);
				this.createElement('tr', 'tableauNotification', 'ligne2', '', '');
					this.createElement('td', 'ligne2', 'ligne2colone1', 'ligne2colone1', this.nbVotreDrole);
					this.createElement('td', 'ligne2', 'ligne2colone2', 'ligne2colone2', this.nbRevus);
					this.createElement('td', 'ligne2', 'ligne2colone3', 'ligne2colone3', this.nbFollower);
				this.createElement('tr', 'tableauNotification', 'ligne3', '', '');
					this.createElement('td', 'ligne3', 'ligne3colone1', 'ligne3colone1', this.nbVoteCool);
					this.createElement('td', 'ligne3', 'ligne3colone2', 'ligne3colone2', this.nbEvenementOrganise);
	}
	
	
	
}


