    /* Dans drole, utile et cool mettre un boolean, true si la personne à trouver cette revue drole, utile ou cool, sinon, false
     * identificationPersonneQuiAFaitLaRevue mettre les parametre que l'on devra passer via methode POST pour acceder au profil de la personne
     * identifiacationRestauCommante de même pour acceder au restaurant  * 
     */
    function Revue(speudoPersonneQuiAFaitLaRevue, photoDeProfilPersonneQuiAFaitLaRevue, restaurantCommante, dateDEcriture, noteRestau, paragrapheRevue, drole, utile, cool, identificationPersonneQuiAFaitLaRevue, identifiacationRestauCommante){
        this.speudoPersonneQuiAFaitLaRevue = speudoPersonneQuiAFaitLaRevue;
        this.photoDeProfilPersonneQuiAFaitLaRevue = photoDeProfilPersonneQuiAFaitLaRevue;
        this.restaurantCommante = restaurantCommante;
        this.dateDEcriture = dateDEcriture;
        this.noteRestau = noteRestau;
        this.paragrapheRevue = paragrapheRevue;
        this.drole = drole;
        this.utile = utile;
        this.cool = cool;
        this.identificationPersonneQuiAFaitLaRevue = identificationPersonneQuiAFaitLaRevue; 
        this.identifiacationRestauCommante = identifiacationRestauCommante;
        
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
		this.createElementCacher = function(tagName, idElementParent, id, className, inner, identifiantPlaceDApparition){
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
			nouvelElement.style.display = 'none';
			document.getElementById(idElementParent).appendChild(nouvelElement);
		};
		this.createEtoile = function(idElementParent, typeEtoile, couleur){
			var nouvelElement = document.createElement('canvas');
			nouvelElement.width = '23';
			nouvelElement.height = '23';
			document.getElementById(idElementParent).appendChild(nouvelElement);	
			if(typeEtoile == 'etoileComplete'){
				this.etoileComplete(nouvelElement, couleur);	
			}
			else if(typeEtoile == 'demiEtoile'){
				this.demiEtoile(nouvelElement, couleur);
			}
			

		}
        this.createInput = function(idElementParent, id, className, type, identifiantPlaceDApparition){
			var nouvelElement = document.createElement('input');
			nouvelElement.id = id + identifiantPlaceDApparition; 
			nouvelElement.type = type;
			nouvelElement.className = className;
			document.getElementById(idElementParent).appendChild(nouvelElement);
		}
        
        this.affiche = function (ouAfficher, placeDApparition) {
               // photo de profil
            this.createElement('img', ouAfficher, '', '', this.photoDeProfilPersonneQuiAFaitLaRevue, placeDApparition);
            
            this.createElement('article', ouAfficher, 'articleStructurant', '', '', placeDApparition);
					
					// date d'écriture
               this.createElement('time', 'articleStructurant' + placeDApparition, 'time', '', this.dateDEcriture, placeDApparition);
               
	                // titre
	            var lienPersonneQuiACommante = "sds";
	            var lienRestaurant = "dggggf";
	            this.createElement('h6', 'articleStructurant' + placeDApparition, 'titre', '', '', placeDApparition);
					this.createElement('a', 'titre' + placeDApparition, 'lienPersonne', '', lienPersonneQuiACommante , placeDApparition);
						this.createElement('strong', 'lienPersonne' +  placeDApparition, '', '', this.speudoPersonneQuiAFaitLaRevue, placeDApparition);
					this.createElement('span', 'titre' + placeDApparition, '', 'aEcritSur', ' ', placeDApparition);
					this.createElement('a', 'titre' + placeDApparition, 'lienRestau', '', lienRestaurant , placeDApparition);
						this.createElement('mark', 'lienRestau' + placeDApparition, '', '', this.restaurantCommante, placeDApparition);
					
					// canvas (étoiles)
				this.createElement('div','articleStructurant' + placeDApparition, 'noteRestau', '', '', placeDApparition);
					var couleur;
					if(this.noteRestau <= 2){
						couleur = 'yellow';
					}
					else if(2.5 <= this.noteRestau && this.noteRestau <= 4){
						couleur = 'orange';
					}
					else if(this.noteRestau <= 5){
						couleur = 'red';
					}
					var demiEtoile;
					for(var j = 1; j <= this.noteRestau; ++j ){
						this.createEtoile('noteRestau' + placeDApparition, 'etoileComplete', couleur);
						if(this.noteRestau- j == 0.5){
							this.createEtoile('noteRestau' + placeDApparition, 'demiEtoile', couleur);
						}
					}
				// colorier les etoiles en en faisont une fonction 
				
					// description de la revue
				this.createElement('p','articleStructurant' + placeDApparition, '', '', this.paragrapheRevue , placeDApparition);
			
					// bloc sue la pertinance de cette avis
				this.createElement('section','articleStructurant' + placeDApparition, 'blocPertinanceAvis', '', '' , placeDApparition);
					this.createElement('h6',  'blocPertinanceAvis' + placeDApparition, '', 'cetteAvisEstIl', '', placeDApparition);
					this.createElement('div',  'blocPertinanceAvis' + placeDApparition, 'boutton', '', '', placeDApparition);
						// rejouter un symbole si true
						this.createInput('boutton' + placeDApparition, 'utile', 'utile', 'button', placeDApparition);
						this.createInput('boutton' + placeDApparition, 'drole', 'drole', 'button', placeDApparition);
						this.createInput('boutton' + placeDApparition, 'cool', 'cool', 'button', placeDApparition);
				
					// bloc pour laisser un compliment
				this.createElement('article', 'articleStructurant' + placeDApparition, 'blocCompliment', '', '', placeDApparition);
					this.createInput('blocCompliment' + placeDApparition, 'ecrireCompliment', 'ecrireCompliment', 'texte', placeDApparition );
					this.createElementCacher('textarea', 'blocCompliment' + placeDApparition, 'texteCompliment', '', '', placeDApparition);
					this.createElementCacher('div', 'blocCompliment' + placeDApparition, 'buttonsCompliment', '', '', placeDApparition);
						this.createElement('p', 'buttonsCompliment' + placeDApparition, 'annulerEcritureCompliment', 'annulerEcritureCompliment', '', placeDApparition);
						this.createInput('buttonsCompliment' + placeDApparition, 'envoyerCompliement', 'envoyerCompliement',  'button', placeDApparition );   
					
			       
        }
			// affiche une étoile colorier en entier
        this.etoileComplete = function (canvas, couleur){
				var context = canvas.getContext('2d');
				context.strokeStyle = "black";
				context.fillStyle = couleur;
				context.lineWidth = 0.5;
				context.beginPath();
				context.moveTo(11.5, 0);
				context.lineTo(9, 8);
				context.lineTo(0.5, 8);
				context.lineTo(7.5, 12.7);
				context.lineTo(4.5, 20.7);
				context.lineTo(11.5, 15.7);
				context.lineTo(18.5, 20.7);
				context.lineTo(15.5, 12.7);
				context.lineTo(22.5, 8);
				context.lineTo(14, 8);
				context.closePath();
				context.stroke();
				context.fill();	
			} 
		
		this.demiEtoile = function(canvas, couleur){
			var context = canvas.getContext('2d');
			
				// creer le contour de l'étoile 
			context.strokeStyle = "black";
			context.lineWidth = 0.5;
			context.beginPath();
			context.moveTo(11.5, 0);
			context.lineTo(9, 8);
			context.lineTo(0.5, 8);
			context.lineTo(7.5, 12.7);
			context.lineTo(4.5, 20.7);
			context.lineTo(11.5, 15.7);
			context.lineTo(18.5, 20.7);
			context.lineTo(15.5, 12.7);
			context.lineTo(22.5, 8);
			context.lineTo(14, 8);
			context.closePath();
			context.stroke();

					
				// moitier gauche de l'étoite qui va être colorier
			context.strokeStyle = "transparent";
			context.fillStyle = couleur;
			context.beginPath();
			context.moveTo(11.5, 0);
			context.lineTo(9, 8);
			context.lineTo(0.5, 8);
			context.lineTo(7.5, 12.7);
			context.lineTo(4.5, 20.7);
			context.lineTo(11.5, 15.7);
			context.closePath();
			context.stroke();
			context.fill();	
		}
			
	}
        
        
        
        










