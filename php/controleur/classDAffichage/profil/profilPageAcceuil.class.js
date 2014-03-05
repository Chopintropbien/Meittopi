
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
	
		// lien des photos
	this.photoUtile = 'http://localhost/Meittopi/image/profil/ampoule.png';
	this.photoDrole = 'http://localhost/Meittopi/image/profil/drole.png';
	this.photoCool = 'http://localhost/Meittopi/image/profil/cool.png';
	
	this.photoAmis = 'http://localhost/Meittopi/image/profil/population.png';
	this.photoCompliment = 'http://localhost/Meittopi/image/profil/olive_wreath.png';
	this.photoFollower = 'http://localhost/Meittopi/image/profil/follower.png';
	
	this.photoRevus = 'http://localhost/Meittopi/image/profil/revue.png';
	this.photoEvenementOrganise = 'http://localhost/Meittopi/image/profil/sortie.png';

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
			
			if(className != ''){ 
				nouvelElement.className = className;
			}
			if(id != ''){
				nouvelElement.id = id; 
			}
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
			this.createElement('section', 'photoEtNotif', 'sectionNotif', '', '');
				// première colonne
				this.createElement('ul', 'sectionNotif', 'colonne1', '', '');
					this.createElement('li', 'colonne1', 'ligne1colone1', 'ligne1colone1', '');
						this.createElement('img', 'ligne1colone1', '', '', this.photoUtile);
						this.createElement('p', 'ligne1colone1', '', '', this.nbvoteUtile)
					this.createElement('li', 'colonne1', 'ligne2colone1', 'ligne1colone2', '');
						this.createElement('img', 'ligne2colone1', '', '', this.photoDrole);
						this.createElement('p', 'ligne2colone1', '', '', this.nbVotreDrole);
					this.createElement('li', 'colonne1', 'ligne3colone1', 'ligne1colone3', '');
						this.createElement('img', 'ligne3colone1', '', '', this.photoCool);
						this.createElement('p', 'ligne3colone1', '', '', this.nbVoteCool);
						
						// deuxieme colonne
				this.createElement('ul', 'sectionNotif', 'colonne2', '', '');
					this.createElement('li', 'colonne2', 'ligne1colone2', 'ligne2colone1','');
						this.createElement('img', 'ligne1colone2', '', '', this.photoAmis);
						this.createElement('p', 'ligne1colone2', '', '', this.nbAmis);
					this.createElement('li', 'colonne2', 'ligne2colone2', 'ligne2colone2','');
						this.createElement('img', 'ligne2colone2', '', '', this.photoCompliment);
						this.createElement('p', 'ligne2colone2', '', '', this.nbCompliment);
					this.createElement('li', 'colonne2', 'ligne3colone2', 'ligne2colone3','');
						this.createElement('img', 'ligne3colone2', '', '', this.photoFollower);
						this.createElement('p', 'ligne3colone2', '', '', this.nbFollower);
						
						// troisieme colonne
				this.createElement('ul', 'sectionNotif', 'colonne3', '', '');
					this.createElement('li', 'colonne3', 'ligne2colone3', 'ligne3colone2', '');
						this.createElement('img', 'ligne2colone3', '', '', this.photoRevus);
						this.createElement('p', 'ligne2colone3', '', '', this.nbRevus);
					this.createElement('li', 'colonne3', 'ligne1colone3', 'ligne3colone1', '');
						this.createElement('img', 'ligne1colone3', '', '', this.photoEvenementOrganise);
						this.createElement('p', 'ligne1colone3', '', '', this.nbEvenementOrganise);
}
	
	
	
}


