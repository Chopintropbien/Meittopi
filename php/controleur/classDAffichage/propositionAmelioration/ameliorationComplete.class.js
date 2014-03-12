	
	// quand nbPersonne a attient le max, la proposition est accepté ou refusé
function AmeliorationComplete(photo, titre, description, nbPersonneVotePour, nbPersonneVotePourMax, nbPersonneVotreContre, nbPersonneVotreContreMax, donsDonnee, nbDonsQuOnABesoin, utilisateurAime,  utlisateurAimePas, utilisateurDons, personneQuiAProposerLAmelioration, infoLienPourDonnation){
	this.photo = photo;
	this.titre = titre;
	this.description = description;
	this.nbPersonneVotePour = nbPersonneVotePour;
	this.nbPersonneVotreContre = nbPersonneVotreContre;
	this.nbPersonneVotePourMax = nbPersonneVotePourMax;
	this.nbPersonneVotreContreMax = nbPersonneVotreContreMax;
	this.donsDonnee = donsDonnee;
	this.nbDonsQuOnABesoin = nbDonsQuOnABesoin;
	this.utilisateurAime = utilisateurAime;
	this.utlisateurAimePas = utlisateurAimePas;
	this.utilisateurDons = utilisateurDons;
	this.personneQuiAProposerLAmelioration = personneQuiAProposerLAmelioration;
	this.infoLienPourDonnation = infoLienPourDonnation;
	
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
	this.createCanvas = function(ouCa , pourquoi, couleur, nbDeVote, nbDeVoteMax){
		
			// balise canvas
		var nouvelElement = document.createElement('canvas');
		nouvelElement.id = 'canvas' + pourquoi;
		nouvelElement.height = "10";
		nouvelElement.width = "100";
		nouvelElement.title = nbDeVote + "/" + nbDeVoteMax;
		document.getElementById(ouCa).appendChild(nouvelElement);
		
		var limite = 100.0 * nbDeVote / nbDeVoteMax;
		var canvas  = document.querySelector('#canvas' + pourquoi);
		var context = canvas.getContext('2d');
		context.fillStyle = couleur;
		context.fillRect(0, 0, limite, 10);
		
		context.fillStyle = "white";
		context.fillRect(limite, 0, 100 - limite, 10);
		context.lineWidth = "1";
		context.strokeStyle = "silver";
		context.strokeRect(0, 0, 100, 10);

	}
	this.addEvent = function(element, event, func) { // Une fonction pour gérer les événements sous tous les navigateurs
		if (element.attachEvent) {
			element.attachEvent('on' + event, func);
		} else {
			element.addEventListener(event, func, true);
		}
	}
	this.createElementAvecEvenement = function(tagName, idElementParent, id, className, inner, fonction){
		
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
		this.addEvent(nouvelElement, 'click',fonction);
		document.getElementById(idElementParent).appendChild(nouvelElement);
	};
	
		// colorie ou decolorie le pouce en vert
	this.coloriePouceVert = function(){
			// lien pour les photos des pouces
		var srcPouceBasRouge = 'http://localhost/Meittopi/image/pouce/pouceBasRouge.png';
		var srcPouceBasBlanc = 'http://localhost/Meittopi/image/pouce/pouceBasBlanc.png';
		var srcPouceHautVert = 'http://localhost/Meittopi/image/pouce/pouceHautVert.png';
		var srcPouceHautBlanc = 'http://localhost/Meittopi/image/pouce/pouceHautBlanc.png';

			// pour colorier le pouce en vert
		if(this.src == srcPouceHautBlanc){
			var pouceBas = document.getElementById('pouceBas');
				// si lel pouce rouge est deja colorier, on le decolorie
			if(pouceBas.src == srcPouceBasRouge){
				pouceBas.src = srcPouceBasBlanc;
			}
			this.src = srcPouceHautVert;
		}
			// pour decolorier le pouce
		else if(this.src == srcPouceHautVert) {
			this.src =srcPouceHautBlanc;
		}
	};
		// colorie ou decolorie le pouce en rouge
	this.coloriePouceRouge = function(){
			// lien pour les photos des pouces
		var srcPouceBasRouge = 'http://localhost/Meittopi/image/pouce/pouceBasRouge.png';
		var srcPouceBasBlanc = 'http://localhost/Meittopi/image/pouce/pouceBasBlanc.png';
		var srcPouceHautVert = 'http://localhost/Meittopi/image/pouce/pouceHautVert.png';
		var srcPouceHautBlanc = 'http://localhost/Meittopi/image/pouce/pouceHautBlanc.png';
			// pour colorier le pouce en rouge
		if(this.src == srcPouceBasBlanc){
			var pouceHaut = document.getElementById('pouceHaut');
				// si le poue de j'aime est deja colorier en vert, le decolorier
			if(pouceHaut.src == srcPouceHautVert){
				pouceHaut.src = srcPouceHautBlanc;
			}
			this.src = srcPouceBasRouge;
		}
			// pour decolorer le pouce 
		else if(this.src == srcPouceBasRouge) {
			this.src = srcPouceBasBlanc;
		}
	};
		// faire un don
	this.faireUnDon = function(){
		
	}
	
	
	this.affiche = function(ouOnAffiche){
		
		for(var j = 0; j<this.photo.length; ++j){
			this.createElement('a',ouOnAffiche, 'lienPropositionImage' + j,'', this.photo[j][1]); // rajouter le lien de la proposition complete
			this.createElement('img', 'lienPropositionImage' + j, '', '', this.photo[j][0]);
		}
		
			// texte et titre
		this.createElement('article', ouOnAffiche, 'article', '','');
			this.createElement('h2','article', '','', this.titre);
			this.createElement('p', 'article', '','', this.description);
		
			// liste des objectifs
		this.createElement('aside', ouOnAffiche, 'aside','', '');
		this.createElement('ul', 'aside', 'ul', '','');
	
			// si l'amelioration est en proposition
		if(this.nbPersonneVotePour < this.nbPersonneVotePourMax && this.nbPersonneVotreContre < this.nbPersonneVotreContreMax){
				// pour 
			var lienPouceHaut = 'http://localhost/Meittopi/image/pouce/pouceHautBlanc.png';
			if(this.utilisateurAime){lienPouceHaut = 'http://localhost/Meittopi/image/pouce/pouceHautVert.png'; }
			var couleurPouceHaut = '#18D318';
			this.createElement('li', 'ul', 'pour','', '');
			this.createElement('div', 'pour', 'nbPour','', '');
				this.createElement('p', 'nbPour', '', 'pour' , '');
				this.createCanvas('nbPour', 'nbPour', couleurPouceHaut, this.nbPersonneVotePour, this.nbPersonneVotePourMax);
			this.createElementAvecEvenement('img', 'pour', 'pouceHaut', 'pouceHaut' , lienPouceHaut, this.coloriePouceVert );
			
				// contre
			var lienPouceBas = 'http://localhost/Meittopi/image/pouce/pouceBasBlanc.png';
			if(this.utilisateurAimePas) {lienPouceBas = 'http://localhost/Meittopi/image/pouce/pouceBasRouge.png'}
			var couleurPouceBas = 'red';
			this.createElement('li', 'ul', 'contre','', '');
			this.createElement('div', 'contre', 'nbContre','', '');
				this.createElement('p', 'nbContre', '', 'contre' , ''); 
				this.createCanvas('nbContre', 'nbContre', couleurPouceBas, this.nbPersonneVotreContre, this.nbPersonneVotreContreMax);
			this.createElementAvecEvenement('img', 'contre', 'pouceBas', 'pouceBas' , lienPouceBas, this.coloriePouceRouge);

		}
			// si l'amelioration est refusé
		else if(this.nbPersonneVotreContre >= this.nbPersonneVotreContreMax && this.donsDonnee < this.nbDonsQuOnABesoin){
			this.createElement('li', 'ul', 'annule','annule', '');
				this.createElement('img', 'annule', '','', 'http://localhost/Meittopi/image/redCrossCancel.png');
				this.createElement('h6', 'annule', '','annule', '');
		}
			// si l'amelioration a besoin de financement ()donc a été accepté 
		else if(this.donsDonnee < this.nbDonsQuOnABesoin){
			var couleurPouceHaut = 'blue';
			this.createElement('li', 'ul', 'don','don', '');
			this.createElement('div', 'don', 'nbDon','', '');
				this.createElement('p', 'nbDon', '', 'don' , ''); 
				this.createCanvas('nbDon', 'nbDon', couleurPouceHaut, this.donsDonnee, this.nbDonsQuOnABesoin);
			this.createElement('a', 'don', 'nbDonLien','', ''); // mettre lien 
				this.createElementAvecEvenement('img', 'nbDonLien', 'tirelire', 'tirelire' , 'http://localhost/Meittopi/image/PiggybankBasique.png', this.faireUnDon);
		}
			// si l'amélioration est cours de dévellopement
			// faire un blog pour suivre les etapes du develloppement
			// ou au moins mettre un message 
		else{
			this.createElement('li', 'ul', 'devellopement','', '');
				this.createElement('img', 'devellopement', '','enDevellopementImage', 'http://localhost/Meittopi/image/man_at_work_comic.png');
				this.createElement('h6', 'devellopement', '','enDevellopementTitre', ''); 
		}
		
		this.createElement('p', ouOnAffiche, 'auteur','', '');
			this.createElement('span', 'auteur', '','auteurPresentation', '');
			this.createElement('a', 'auteur', 'auteurLien','', this.personneQuiAProposerLAmelioration[1]);
				this.createElement('cite', 'auteurLien', '','', this.personneQuiAProposerLAmelioration[0]);
		
			
			
		
	};
	
	
}	
