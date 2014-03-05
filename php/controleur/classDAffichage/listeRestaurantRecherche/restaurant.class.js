	function Restaurant(nom, photo, noteGlobalRestau, prix, nbAvis, typeRestaurant, amisQuiAime, amisQuiAimeMoyen, amisQuiAimePas, evenement, quartier, rue, ville, tel, identificationRestaurant) {
		
		this.nom = nom;
		this.photo = photo; 
		this.noteGlobalRestau = noteGlobalRestau;
		this.prix = prix;
		this.typeRestaurant = typeRestaurant;
		this.nbAvis = nbAvis;
		this.amisQuiAime = amisQuiAime; 
		this.amisQuiAimeMoyen = amisQuiAimeMoyen;
		this.amisQuiAimePas = amisQuiAimePas;
		this.evenement = evenement;
		this.quartier = quartier;
		this.rue= rue;
		this.ville = ville;
		this.tel = tel;
		this.identificationRestaurant = identificationRestaurant;
		
		
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
			
			if(className != ''){ 
				nouvelElement.className = className;
			}
			if(id != ''){
				nouvelElement.id = id + identifiantPlaceDApparition; 
			}
			nouvelElement.style.display = 'none';
			document.getElementById(idElementParent).appendChild(nouvelElement);
		};
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
		this.affiche = function(ouAfficher, i){
			
			
				// photo du restaurant
			this.createElement('img', ouAfficher, '', '', this.photo, i);
					
				// contenu a droite de la photo
			this.createElement('section', ouAfficher, 'section', '', '', i);
				
					// information restaurant
				this.createElement('article', 'section' +i, 'infoRestau', '', '', i);
					
						// nom restau
					var lienNomRestaurant = ''; //
					this.createElement('article', 'infoRestau' +i, 'nom', '', '', i);
						this.createElement('p', 'nom' +i, '' , '', i+ 1 + '. ', i);
						this.createElement('a', 'nom' +i, 'lienRestau', '', lienNomRestaurant, i);
							this.createElement('h4', 'lienRestau' +i, '', '', this.nom, i);	
						
					this.createElement('div', 'infoRestau' +i, 'etoileEtNbAvis', '', '', i);
					
							// note global restau
						this.createElement('div', 'etoileEtNbAvis' +i, 'noteGlobalRestau', '', '', i);
						
								var couleur;
							if(this.noteGlobalRestau <= 2){
								couleur = 'yellow';
							}
							else if(2.5 <= this.noteGlobalRestau && this.noteGlobalRestau <= 4){
								couleur = 'orange';
							}
							else if(this.noteGlobalRestau <= 5){
								couleur = 'red';
							}
							var demiEtoile;
							for(var j = 1; j <= this.noteGlobalRestau; ++j ){
								this.createEtoile('noteGlobalRestau' + i, 'etoileComplete', couleur);
								if(this.noteGlobalRestau - j == 0.5){
									this.createEtoile('noteGlobalRestau' + i, 'demiEtoile', couleur);
								}
							}
							// nb Avis
						this.createElement('p', 'etoileEtNbAvis' +i, 'nbAvis', 'avis', this.nbAvis, i); //
						
						// type de restau et prix
					this.createElement('section', 'infoRestau' +i, 'typeRestau', '', '', i);
							// prix
						var nbEuro = '';
						for(var j = 0; j<this.prix ; ++j){
							nbEuro += '$';
						}
						this.createElement('div', 'typeRestau' + i, '', '', nbEuro, i);
							// type de restaurant
						var type = '';
						for(var j = 0; j<this.typeRestaurant.length; ++j){
							type += this.typeRestaurant[j];
							if(j != this.typeRestaurant.length-1){
								type += ', ';
							}
						}
						this.createElement('p', 'typeRestau'+i, '', '', type, i);
						this.createElementAvecEvenement('span', 'typeRestau'+i, 'croixApparitionElement', '', '+', i, this.faireApparaitreEvenement);
					
						// evenement
					this.createElementCacher('aside', 'infoRestau' +i, 'evenement', '', '', i);
						for(var j = 0; j< this.evenement.length; ++j){
							var lienEvenememt = ''; //
							var titreEvenement = '<h6>' +this.evenement[j][0] +':' + '</h6>' + this.evenement[j][1];
							
							var nouvelElement = document.createElement('a');
							nouvelElement.href = lienEvenememt;
							nouvelElement.innerHTML = titreEvenement;
							document.getElementById('evenement' +i).appendChild(nouvelElement);

						}
			
					//les coordonnees
				this.createElement ('aside',  'section' +i, 'coordonnees','', '', i);
					var adresse =  this.rue+ '<br\>' +  this.ville + '<br\>' + this.tel;
					this.createElement ('p', 'coordonnees' +i, 'quartier','', this.quartier, i);
					this.createElement ('adress', 'coordonnees' +i, '','', adresse, i);

					
					// tableau des amis qui aiment ou pas
				this.createElement('section', 'section' +i, 'tableau', '', '', i);
						// gens qui aime
					this.createElement('ul', 'tableau' +i, 'gensQuiAime', '', '', i);
						this.createElement('h6', 'gensQuiAime' +i, '', 'gensQuiAime', '', i);	
						for(var j = 0; j<this.amisQuiAime.length; ++j){
							var lienAmis = '';
							var lienRevuRestau = '';
							this.createElement('li', 'gensQuiAime' +i, 'gensQuiAimeLi' + j, '', '' , i);
								this.createElement('a', 'gensQuiAimeLi' + j +i, 'lienAmisAime' + j, '', lienAmis , i);
									this.createElement('p', 'lienAmisAime' + j +i, '', '', this.amisQuiAime[j][0] + ':', i);	
								this.createElement('a', 'gensQuiAimeLi' + j +i, 'lienRevuRestauAmisAime' + j, '',lienRevuRestau , i);
									this.createElement('span', 'lienRevuRestauAmisAime' + j +i, '', 'avis', this.amisQuiAime[j][1], i);
						}
						
						
						// gens qui aime bof
					this.createElement('ul', 'tableau' +i, 'gensQuiAimeBof', '', '', i);
						this.createElement('h6', 'gensQuiAimeBof' +i, '', 'gensQuiAimeBof', '', i);	
						for(var j = 0; j<this.amisQuiAimeMoyen.length; ++j){
							var lienAmis = '';
							var lienRevuRestau = '';
							this.createElement('li', 'gensQuiAimeBof' +i, 'gensQuiAimeBofLi' + j, '', '' , i);
								this.createElement('a', 'gensQuiAimeBofLi' + j +i, 'lienAmisAmisBof' + j, '', lienAmis , i);
									this.createElement('p', 'lienAmisAmisBof' + j +i, '', '', this.amisQuiAimeMoyen[j][0] + ':', i);	
								this.createElement('a', 'gensQuiAimeBofLi' + j +i, 'lienRevuRestauAmisBof' + j, '',lienRevuRestau , i);
									this.createElement('span', 'lienRevuRestauAmisBof' + j +i, '', 'avis', this.amisQuiAimeMoyen[j][1], i);
						}
						
						// gens qui n'aime pas
					this.createElement('ul', 'tableau' +i, 'gensQuiAimePas', '', '', i);
						this.createElement('h6', 'gensQuiAimePas' +i, '', 'gensQuiAimePas', '', i);	
						for(var j = 0; j<this.amisQuiAimePas.length; ++j){
							var lienAmis = '';
							var lienRevuRestau = '';
							this.createElement('li', 'gensQuiAimePas' +i, 'gensQuiAimePasLi' + j, '', '' , i);
								this.createElement('a', 'gensQuiAimePasLi' + j +i, 'lienAmisAimePas' + j, '', lienAmis , i);
									this.createElement('p', 'lienAmisAimePas' + j +i, '', '', this.amisQuiAimePas[j][0] + ':', i);	
								this.createElement('a', 'gensQuiAimePasLi' + j +i, 'lienRevuRestauAimePas' + j, '',lienRevuRestau , i);
									this.createElement('span', 'lienRevuRestauAimePas' + j +i, '', 'avis', this.amisQuiAimePas[j][1], i);	
						}

					

		};
		
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
		
		this.faireApparaitreEvenement = function(){
			var i = this.id[22];
			var sectionAAfficher = document.getElementById('evenement' +i);
			if(sectionAAfficher.style.display == 'block'){
				sectionAAfficher.style.display = 'none';
				this.innerHTML = '+';
			}
			else if(sectionAAfficher.style.display == 'none'){
				sectionAAfficher.style.display = 'block';
				this.innerHTML = '--';	
			}
			
			
		}
		
	};
