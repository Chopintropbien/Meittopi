    /* Dans drole, utile et cool mettre un boolean, true si la personne à trouver cette revue drole, utile ou cool, sinon, false
     * identificationPersonneQuiAFaitLaRevue mettre les parametre que l'on devra passer via methode POST pour acceder au profil de la personne
     * identifiacationRestauCommante de même pour acceder au restaurant  * 
     */
    function Revue(speudoPersonneQuiAFaitLaRevue, photoDeProfilPersonneQuiAFaitLaRevue, restaurantCommante, dateDEcriture, noteRestau, paragrapheRevue, drole, utile, cool, suivis, identificationPersonneQuiAFaitLaRevue, identifiacationRestauCommante){
		
        this.speudoPersonneQuiAFaitLaRevue = speudoPersonneQuiAFaitLaRevue;
        this.photoDeProfilPersonneQuiAFaitLaRevue = photoDeProfilPersonneQuiAFaitLaRevue;
        this.restaurantCommante = restaurantCommante;
        this.dateDEcriture = dateDEcriture;
        this.noteRestau = noteRestau;
        this.paragrapheRevue = paragrapheRevue;
        this.drole = drole;
        this.utile = utile;
        this.cool = cool;
        this.suivis = suivis;
        this.identificationPersonneQuiAFaitLaRevue = identificationPersonneQuiAFaitLaRevue; 
        this.identifiacationRestauCommante = identifiacationRestauCommante;
        
			// dessin check

        this.check = '<img src="http://localhost/Meittopi/image/check.png">';
        
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
			nouvelElement.className = className;
			nouvelElement.id = id + identifiantPlaceDApparition;
			this.addEvent(nouvelElement, 'click',fonction);
			document.getElementById(idElementParent).appendChild(nouvelElement);
		};
		this.createInputAvecEvenement = function(idElementParent, id, className, type, identifiantPlaceDApparition, fonction){
			var nouvelElement = document.createElement('input');
			nouvelElement.id = id + identifiantPlaceDApparition; 
			nouvelElement.type = type;
			nouvelElement.className = className;
			this.addEvent(nouvelElement, 'click', fonction);
			document.getElementById(idElementParent).appendChild(nouvelElement);
		}  
		
        this.affiche = function (ouAfficher, placeDApparition) {
               // photo de profil
            this.createElement('img', ouAfficher, '', '', this.photoDeProfilPersonneQuiAFaitLaRevue, placeDApparition);
            
            this.createElement('article', ouAfficher, 'articleStructurant', '', '', placeDApparition);
					
					// date d'écriture
               this.createElement('time', 'articleStructurant' + placeDApparition, 'time', '', this.dateDEcriture, placeDApparition);
               
	                // titre
	            var lienPersonneQuiACommante = "sds"; // a voir avec Andrei 
	            var lienRestaurant = "dggggf"; // a voir avec Andrei 
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
					
							// button utile
						this.createElementAvecEvenement('div',  'boutton' + placeDApparition, 'utileButton', 'utileButton', '', placeDApparition, this.evenementButtonPertinanceAvis);
							this.createElement('span',  'utileButton' + placeDApparition, 'utile', 'utile', '', placeDApparition);
							if(this.utile){
								var button = document.getElementById('utileButton' + placeDApparition);
								button.style.border = '1px #FF8400 inset';
								button.innerHTML += this.check;
							}
							
							// button drole
						this.createElementAvecEvenement('div',  'boutton' + placeDApparition, 'droleButton', 'droleButton', '', placeDApparition, this.evenementButtonPertinanceAvis);
							this.createElement('span',  'droleButton' + placeDApparition, 'drole', 'drole', '', placeDApparition);
							if(this.drole){
								var button = document.getElementById('droleButton' + placeDApparition);
								button.style.border = '1px #FF8400 inset';
								button.innerHTML += this.check;
							}
							
							// button cool
						this.createElementAvecEvenement('div',  'boutton' + placeDApparition, 'coolButton', 'coolButton', '', placeDApparition, this.evenementButtonPertinanceAvis);
							this.createElement('span',  'coolButton' + placeDApparition, 'cool', 'cool', '', placeDApparition);
							if(this.cool){
								var button = document.getElementById('coolButton' + placeDApparition);
								button.style.border = '1px #FF8400 inset';
								button.innerHTML += this.check;
							}
							
					// bloc pour laisser un compliment
				this.createElement('article', 'articleStructurant' + placeDApparition, 'blocCompliment', '', '', placeDApparition);
					this.createInputAvecEvenement('blocCompliment' + placeDApparition, 'ecrireCompliment', 'ecrireCompliment', 'texte', placeDApparition, this.ecrireUnCompliment );
					this.createElementCacher('textarea', 'blocCompliment' + placeDApparition, 'texteCompliment', '', '', placeDApparition);
					this.createElementCacher('div', 'blocCompliment' + placeDApparition, 'buttonsCompliment', '', '', placeDApparition);
						this.createElementAvecEvenement('p', 'buttonsCompliment' + placeDApparition, 'annulerEcritureCompliment', 'annulerEcritureCompliment', '', placeDApparition, this.annulerEcritureCompliment);
						this.createInput('buttonsCompliment' + placeDApparition, 'envoyerCompliement', 'envoyerCompliement',  'button', placeDApparition );   
					
			       
        }
			
			/* fonction pour que les boutons utile drole et cool s'enfonce ou se dé-enfonce quand on clique
			 * de plus un check vert qui apparait ou disparait
			 * obligatoirement avec des bordure in et outset sans le css
			 */
		this.evenementButtonPertinanceAvis = function(){
			var check = '<img src="http://localhost/Meittopi/image/check.png">';
			if(this.style.border == '' || /outset/.test(this.style.border)){
				this.style.border = '1px #FF8400 inset';
				this.innerHTML += check; 
			}
			else if( /inset/.test(this.style.border)){
				this.style.border = '1px #FF8400 outset';
				this.innerHTML = this.innerHTML.replace(check, '');
			}
		}
			// appartion de la zone de saisie pour ecrire un compliment si on clique sur "envoyer un compliement"
		this.ecrireUnCompliment = function(){
			this.style.display = 'none';
			i = this.id[16];
			var textareaAAfficher = document.getElementById('texteCompliment' + i);
			var buttonAAfficher = document.getElementById('buttonsCompliment' + i);
			buttonAAfficher.style.display = 'block';
			textareaAAfficher.style.display = 'block';
			textareaAAfficher.focus();
			
		}
			// disparition de la zone de saisie pour ecrire un compliement si on clique sur annuler
		this.annulerEcritureCompliment = function(){
			i = this.id[25];
			var textareaAAfficher = document.getElementById('texteCompliment' + i);
			var buttonAAfficher = document.getElementById('buttonsCompliment' + i);
			buttonAAfficher.style.display = 'none';
			textareaAAfficher.style.display = 'none';
			var ecrireUnCompliment = document.getElementById('ecrireCompliment' + i);
			ecrireUnCompliment.style.display = 'block';
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
        
        
        
        










