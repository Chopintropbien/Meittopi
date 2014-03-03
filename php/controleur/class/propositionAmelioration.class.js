	
	// quand nbPersonne a attient le max, la proposition est accepté ou refusé
function PropositionAmelioration(photo, titre, description, nbPersonneVotePour, nbPersonneVotreContre, nbPersonneVotePourMax, nbPersonneVotreContreMax, donsDonnee, nbDonsQuOnABesoin, utilisateurAime,  utlisateurAimePas, utilisateurDons, infoLienPropositionamelioration){
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
	this.infoLienPropositionamelioration = infoLienPropositionamelioration;
	
	
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
	this.affiche = function(i, ouOnAffiche){
		this.createElement('img', ouOnAffiche, '', '', this.photo, i);
		
			// texte et titre
		this.createElement('article', ouOnAffiche, 'article', '','' , i);
			this.createElement('h2','article' + i, '','', this.titre, i);
			this.createElement('p', 'article' + i, '','', this.description, i);
		
			// liste des objectifs
		this.createElement('aside', ouOnAffiche, 'aside','', '', i);
		this.createElement('ul', 'aside' + i, 'ul', '','', i);
	
		if(this.nbPersonneVotePour < this.nbPersonneVotePourMax && this.nbPersonneVotreContre < this.nbPersonneVotreContreMax){
				// pour 
			this.createElement('li', 'ul' + i, 'pour','', '', i);
			this.createElement('div', 'pour' + i, 'nbPour','', '', i);
				this.createElement('p', 'nbPour' + i, '', '' , 'Pour:', i ); //
				this.createCanvas('nbPour' + i, 'nbPour' + i, 'green', this.nbPersonneVotePour, this.nbPersonneVotePourMax);
			this.createElement('img', 'pour' + i, '', '' , 'http://localhost/Meittopi/image/pouce/pouceHautBlanc.png', i );
			
				// contre
			this.createElement('li', 'ul' + i, 'contre','', '', i);
			this.createElement('div', 'contre' + i, 'nbContre','', '', i);
				this.createElement('p', 'nbContre' + i, '', '' , 'Contre:', i );  //
				this.createCanvas('nbContre' + i, 'nbContre' + i, 'red', this.nbPersonneVotreContre, this.nbPersonneVotreContreMax);
			this.createElement('img', 'contre' + i, '', '' , 'http://localhost/Meittopi/image/pouce/pouceBasBlanc.png', i );

		}
			
			
		
	};
	
	
}	

