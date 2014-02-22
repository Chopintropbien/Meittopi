
function Evenement(speudoPersonneQuiAFaitLEvenement, photoDeProfilPersonneQuiAFaitLEvenement, listePhotoEvenement,titreEvenement, dateDEcriture, dateEvenement, listeInviter, messagePerso, descriptifSortie, identificationPersonneQuiAFaitLEvenement, identificationEvenement){
	this.speudoPersonneQuiAFaitLEvenement = speudoPersonneQuiAFaitLEvenement;
	this.photoDeProfilPersonneQuiAFaitLEvenement = photoDeProfilPersonneQuiAFaitLEvenement;
	this.listePhotoEvenement = listePhotoEvenement;
	this.titreEvenement = titreEvenement;
	this. dateDEcriture = dateDEcriture;
	this.dateEvenement = dateEvenement;
	this.listeInviter = listeInviter;
	this.messagePerso = messagePerso;
	this.descriptifSortie = descriptifSortie;
	this.identificationPersonneQuiAFaitLEvenement = identificationPersonneQuiAFaitLEvenement;
	this.identificationEvenement = identificationEvenement;
	
	 this.createElement = function(tagName, idElementParent, id, className, inner, identifiantPlaceDApparition){
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
		nouvelElement.id = id + identifiantPlaceDApparition; 
		document.getElementById(idElementParent).appendChild(nouvelElement);
	};
	this.affiche = function (ouAfficher, placeDApparition) {
		   
		   // photo de profil
		this.createElement('img', ouAfficher, '', '', this.photoDeProfilPersonneQuiAFaitLEvenement, placeDApparition);	
		
		this.createElement('article', ouAfficher, 'articleStructurant', '', '', placeDApparition);
				
				// date d'écriture
		   this.createElement('time', 'articleStructurant' + placeDApparition, 'time', '', this.dateDEcriture, placeDApparition);
	
				// titre
            var lienPersonneQuiACommante = "sds"; // avoir avec Andrei
            this.createElement('h6', 'articleStructurant' + placeDApparition, 'titre', '', '', placeDApparition);
				this.createElement('a', 'titre' + placeDApparition, 'lienPersonne', '', lienPersonneQuiACommante , placeDApparition);
					this.createElement('strong', 'lienPersonne' + placeDApparition,'', '',this.speudoPersonneQuiAFaitLEvenement, placeDApparition);
				this.createElement('span', 'titre' + placeDApparition, '', 'aCreerUnEvenement', '', placeDApparition);
				
			this.createElement('section', 'articleStructurant' + placeDApparition, 'sectionStructurante', '', '', placeDApparition);
					// liste des photos de l'évenenement
				this.createElement('ul','sectionStructurante' +  placeDApparition, 'listePhotoEvenement', '', '', placeDApparition);
					for(var i = 0; i<this.listePhotoEvenement.length; ++i){
						this.createElement('li','listePhotoEvenement' +  placeDApparition, 'placePhotoEvevement' + i, '', '', placeDApparition);
							this.createElement('img','placePhotoEvevement' + i + placeDApparition, '', '', this.listePhotoEvenement[i], placeDApparition);
					}
					
				this.createElement('section','sectionStructurante' + placeDApparition,'2emSectionStructurante','','', placeDApparition);
				
						// titre de l'evenement
					var lienEvenement = 'sd'; // voir avec Andrei
					this.createElement('a','2emSectionStructurante' + placeDApparition, 'lienEvenement', '', lienEvenement, placeDApparition);
						this.createElement('h1','lienEvenement' + placeDApparition, '', '', this.titreEvenement, placeDApparition);
						// date de l'avenement
					this.createElement('time','2emSectionStructurante' + placeDApparition,'','',this.dateEvenement, placeDApparition);
					
						// liste des inviter
					this.createElement('article','2emSectionStructurante' + placeDApparition,'listeInviter','','', placeDApparition);
						for(var i = 0; i < this.listeInviter.length; ++i){
							var identificationPersonneInvite =  this.listeInviter[i][2];
								// si la personne a deja confirmer l'invitation
							if(this.listeInviter[i][1]){
								this.createElement('span','listeInviter' + placeDApparition,'vaVenir','','', placeDApparition);
									this.createElement('a','vaVenir' + placeDApparition,'vaVenirLien','',identificationPersonneInvite, placeDApparition);
										this.createElement('strong','vaVenirLien' + placeDApparition,'','',this.listeInviter[i][0], placeDApparition); 
									this.createElement('span','vaVenir' + placeDApparition,'','vaVenir','', placeDApparition); 
							}
								// si la personne n'a pas encore confirmer
							else if(!this.listeInviter[i][1]){
								this.createElement('span','listeInviter' + placeDApparition,'estInvite','','', placeDApparition);
									this.createElement('a','estInvite' + placeDApparition,'estInviteLien','',identificationPersonneInvite, placeDApparition);
										this.createElement('strong','estInviteLien' + placeDApparition,'','',this.listeInviter[i][0], placeDApparition);
									this.createElement('span','estInvite' + placeDApparition,'','estInvite','', placeDApparition); 
							}
						}
						
						// description de l'evenement
					this.createElement('p','2emSectionStructurante' + placeDApparition,'','',this.descriptifSortie, placeDApparition);
					
				// message personnel de la personne qui a creer l'evenement a l'utilisateur
			if(this.messagePerso != '' &&  this.messagePerso != null){
				var strongSpeudo = '<strong>' + this.speudoPersonneQuiAFaitLEvenement + ' : ' + '</strong>';
				this.createElement('p','articleStructurant' + placeDApparition,'','',strongSpeudo + this.messagePerso, placeDApparition);
			}			
				
						
								
	}
}
