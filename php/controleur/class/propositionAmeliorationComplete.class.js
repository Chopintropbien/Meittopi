
	// dans photo, mettre une liste des photos poster
	// quand nbPersonne a attient le max, la proposition est accepté ou refusé
function PropositionAmeliorationComplete(photo, titre, description, nbAvisPositif, nbAvisNegatif, dons, nbAvisPositifMax, nbAvisNegatifMax, donsMax ){
	this.photo = photo;
	this.titre = titre;
	this.description = description;
	this.nbAvisPositif = nbAvisPositif;
	this.nbAvisNegatif = nbAvisNegatif;
	this.dons = dons;
	this.nbAvisPositifMax = nbAvisPositifMax;
	this.nbAvisNegatifMax = nbAvisNegatifMax;
	this.donsMax = donsMax;
	
	
	this.bordure = function (element){
			var bordure = 0;
			left = 0;
			var b = element;
			
		    while (b != null) {
				left += b.offsetLeft;
				b = b.offsetParent;
			}
			bordure = left;
			return bordure;	
		}
	
	this.createElement = function(tagName, idElementParent, id, inner){
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
		nouvelElement.id = id; 
		document.getElementById(idElementParent).appendChild(nouvelElement);	
	};
	
		// pourquoi mettre un mot (sert pour l'id)
	this.createCanvas = function(ouCa , pourquoi, couleur, nbDeVote, nbDeVoteMax){
		
			// balise canvas
		var nouvelElement = document.createElement('canvas');
		nouvelElement.id = 'canvas' + pourquoi;
		nouvelElement.height = "10";
		nouvelElement.width = "100";
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
	
	this.affiche = function(ouOnAffiche){
		
			//photos
		this.createElement('section', ouOnAffiche, 'photo', '');
		var nbPhoto = this.photo.length;
		for(var i = 0; i < nbPhoto && i < 3; ++i){
			this.createElement('img', 'photo', '', this.photo[i]);
		}
			// titre et description
		this.createElement('article', ouOnAffiche, 'description', '');
			this.createElement('h1', 'description', '', this.titre);
			this.createElement('p', 'description', '', this.description);
		
			//votes
		this.createElement('table', ouOnAffiche, 'votes', '');
		
			// pour
		this.createElement('tr', 'votes', 'ligne1', '');
			this.createElement('td', 'ligne1', 'ligne1colonne1', '');
			this.createElement('td', 'ligne1', 'ligne1colonne2', '');
			
			
				// info suplementaire
			this.createElement('span', 'ligne1colonne2', 'infoPour', '-');
				// button pour voter
			this.createElement('aside', 'ligne1colonne2', 'asidepour', '+1');
			document.getElementById('asidepour').style.backgroundColor = 'green';
				// barre en couleur			
			this.createCanvas( 'ligne1colonne1', 'pour', 'green', this.nbAvisPositif, this.nbAvisPositifMax);
		
			//contre
		this.createElement('tr', 'votes', 'ligne2', '');
			this.createElement('td', 'ligne2', 'ligne2colonne1', '');
			this.createElement('td', 'ligne2', 'ligne2colonne2', '');
				// info suplementaire
			this.createElement('span', 'ligne2colonne2', 'infoContre', '-');
				// button pour voter
			this.createElement('aside', 'ligne2colonne2', 'asidecontre', '-1');
			document.getElementById('asidecontre').style.backgroundColor = 'red';
				// barre en couleur
			this.createCanvas( 'ligne2colonne1', 'contre', 'red', this.nbAvisNegatif, this.nbAvisNegatifMax);
		
			//dons
		this.createElement('tr', 'votes', 'ligne3', '');
			this.createElement('td', 'ligne3', 'ligne3colonne1', '');
			this.createElement('td', 'ligne3', 'ligne3colonne2', '');
				// info suplementaire
			this.createElement('span', 'ligne3colonne2', 'infoDons', '-');
				// button pour voter
			this.createElement('aside', 'ligne3colonne2', 'asidedon', '$');	
			document.getElementById('asidedon').style.backgroundColor = 'blue';	
				// barre en couleur	
			this.createCanvas( 'ligne3colonne1', 'don', 'blue', this.dons, this.donsMax);
	}
}

