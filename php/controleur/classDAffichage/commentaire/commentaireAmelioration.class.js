
	// quand nbPersonne a attient le max, la proposition est accepté ou refusé
function CommentaireAmelioration(photo,speudo,  commentaire, nbPersonneVotePour, nbPersonneVotePourMax, nbPersonneVotreContre, nbPersonneVotreContreMax,  utilisateurAime,  utlisateurAimePas, informationLienEcritCom){
	this.photo = photo;
	this.speudo = speudo;
	this.commentaire = commentaire;
	this.nbPersonneVotePour = nbPersonneVotePour;
	this.nbPersonneVotreContre = nbPersonneVotreContre;
	this.nbPersonneVotePourMax = nbPersonneVotePourMax;
	this.nbPersonneVotreContreMax = nbPersonneVotreContreMax;
	this.utilisateurAime = utilisateurAime;
	this.utlisateurAimePas = utlisateurAimePas;
	this.informationLienEcritCom = informationLienEcritCom;
	
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
			
			if(className != ''){ 
				nouvelElement.className = className;
			}
			if(id != ''){
				nouvelElement.id = id + identifiantPlaceDApparition; 
			}
			document.getElementById(idElementParent).appendChild(nouvelElement);
		};
	this.createCanvas = function(ouCa , pourquoi, couleur, nbDeVote, nbDeVoteMax){
		
			// balise canvas
		var nouvelElement = document.createElement('canvas');
		nouvelElement.id = 'canvas' + pourquoi;
		nouvelElement.height = "5";
		nouvelElement.width = "80";
		nouvelElement.title = nbDeVote + "/" + nbDeVoteMax;
		document.getElementById(ouCa).appendChild(nouvelElement);
		
		var limite = 80.0 * nbDeVote / nbDeVoteMax;
		var canvas  = document.querySelector('#canvas' + pourquoi);
		var context = canvas.getContext('2d');
		context.fillStyle = couleur;
		context.fillRect(0, 0, limite, 10);
		
		context.fillStyle = "white";
		context.fillRect(limite, 0, 80 - limite, 10);
		context.lineWidth = "1";
		context.strokeStyle = "silver";
		context.strokeRect(0, 0, 80, 10);

	}
	this.addEvent = function(element, event, func) { // Une fonction pour gérer les événements sous tous les navigateurs
		if (element.attachEvent) {
			element.attachEvent('on' + event, func);
		} else {
			element.addEventListener(event, func, true);
		}
	}
	this.createElementAvecEvenement = function(tagName, idElementParent, id, className, inner, identifiantPlaceDApparition, fonction){
		
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
			nouvelElement.id = id + identifiantPlaceDApparition; 
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
		
		var i = this.id[9];

			// pour colorier le pouce en vert
		if(this.src == srcPouceHautBlanc){
			var pouceBas = document.getElementById('pouceBas' + i);
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
		var i = this.id[8];
		
			// pour colorier le pouce en rouge
		if(this.src == srcPouceBasBlanc){
			var pouceHaut = document.getElementById('pouceHaut' + i);
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
	
	this.affiche = function(ouOnAffiche, i){
		
		
		this.createElement('section',ouOnAffiche, 'profil','', '', i); 
			this.createElement('img', 'profil' + i, '', '', this.photo, i);
			this.createElement('a', 'profil' + i, 'profilLien', '', '', i);  // rajouter le lien vers le profil
				this.createElement('p', 'profilLien' + i, '', '', this.speudo, i); 
				
		
			// texte et titre
		this.createElement('p', ouOnAffiche, '','', this.description, i);
		
			// liste des objectifs
		this.createElement('aside', ouOnAffiche, 'aside','', '', i);
			this.createElement('ul', 'aside' + i, 'ul', '','', i);
		
				// si l'amelioration est en proposition
			if(this.nbPersonneVotePour < this.nbPersonneVotePourMax && this.nbPersonneVotreContre < this.nbPersonneVotreContreMax){
					// pour 
				var lienPouceHaut = 'http://localhost/Meittopi/image/pouce/pouceHautBlanc.png';
				if(this.utilisateurAime){lienPouceHaut = 'http://localhost/Meittopi/image/pouce/pouceHautVert.png'; }
				var couleurPouceHaut = '#18D318';
				this.createElement('li', 'ul' + i, 'pour','', '', i);
				this.createElement('div', 'pour' + i, 'nbPour','', '', i);
					this.createElement('p', 'nbPour' + i, '', 'pour' , '', i ); 
					this.createCanvas('nbPour' + i, 'nbPour' + i, couleurPouceHaut, this.nbPersonneVotePour, this.nbPersonneVotePourMax);
				this.createElementAvecEvenement('img', 'pour' + i, 'pouceHaut', 'pouceHaut' , lienPouceHaut, i, this.coloriePouceVert );
				
					// contre
				var lienPouceBas = 'http://localhost/Meittopi/image/pouce/pouceBasBlanc.png';
				if(this.utilisateurAimePas) {lienPouceBas = 'http://localhost/Meittopi/image/pouce/pouceBasRouge.png'}
				var couleurPouceBas = 'red';
				this.createElement('li', 'ul' + i, 'contre','', '', i);
				this.createElement('div', 'contre' + i, 'nbContre','', '', i);
					this.createElement('p', 'nbContre' + i, '', 'contre' , '', i );  
					this.createCanvas('nbContre' + i, 'nbContre' + i, couleurPouceBas, this.nbPersonneVotreContre, this.nbPersonneVotreContreMax);
				this.createElementAvecEvenement('img', 'contre' + i, 'pouceBas', 'pouceBas' , lienPouceBas, i, this.coloriePouceRouge);
	
			}
				// si l'amelioration est refusé
			else if(this.nbPersonneVotreContre >= this.nbPersonneVotreContreMax){
				this.createElement('li', 'ul' + i, 'annule','', '', i);
					this.createElement('img', 'annule' + i, '','pasPrisEncompteImage', 'http://localhost/Meittopi/image/redCrossCancel.png', i);
					this.createElement('h6', 'annule' + i, '','pasPrisEncompte', '', i); 
			}
	
				// si l'amélioration est cours de dévellopement
				// faire un blog pour suivre les etapes du develloppement
				// ou au moins mettre un message 
			else{
				this.createElement('li', 'ul' + i, 'devellopement','', '', i);
					this.createElement('img', 'devellopement' + i, '','prisEnCompteImage', 'http://localhost/Meittopi/image/man_at_work_comic.png', i);
					this.createElement('h6', 'devellopement' + i, '','prisEnCompte', '', i); 
			}
			
			
		
	};
	
	
}	


