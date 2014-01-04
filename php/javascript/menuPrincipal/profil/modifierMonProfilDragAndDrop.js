	
					
	(function() { // On utilise une IEF pour ne pas polluer l'espace global

	    
	    function addEvent(element, event, func) { // Une fonction pour gérer les événements sous tous les navigateurs
	        if (element.attachEvent) {
	            element.attachEvent('on' + event, func);
	        } else {
	            element.addEventListener(event, func, true);
	        }
	    }
	    
	    // calcule la marge exterieur total de l'éléments
	    function bordure(element){
			var bordures = {};
			var top = 0, left = 0;
			var b = element;
			
		    while (b != null) {
		        top += b.offsetTop;
				left += b.offsetLeft;
				b = b.offsetParent;
			}
			
			bordures.top = top;
			bordures.left = left;
			
			return bordures;
			
		}
	    
	    function init() { // La fonction d'initialisation   
			
			

	           /*
	        var text = document.getElementsByTagName('textarea');
	        var textLength = text.length;
	        
	       
				// donne le focus au texteare
				// mais ca nemarche pas!!!!!!!
	        for( var i = 0; i< textLength; ++i){
					addEvent(text[i], 'click', function(){
						this.focus();
					});
			}*/
					
				// prends les crois sur lequel il faut cliquer pour deplacer l'element 
			var transition = document.getElementsByTagName('p');
			var transitionLength = transition.length;	
				
			var storage = {}; // Contient l'objet du div en cours de déplacement				
							        
	        for (var i = 0 ; i < transitionLength ; i++) {
	            if (transition[i].className === 'croix') {

						//fait la norme du z-index 
					transition[i].parentNode.style.zIndex = '1';
					

	                addEvent(transition[i], 'mousedown', function(e) { // Initialise le drag & drop
	                    var s = storage;
	                    // prends l'element parents c'est a dire le bloc que l'on veut déplacer
	                    s.target = e.target.parentNode || event.srcElement.parentNode;
	                    
						var bordures = bordure(s.target);
						
	                    s.offsetX = e.clientX - bordures.left; // enlever la marge 
	                    s.offsetY = e.clientY - bordures.top;
						
							//pour que l element deplace soit au dessus des autre
						this.parentNode.style.zIndex = '2';
	                });
	        
	                addEvent(transition[i], 'mouseup', function() { // Termine le drag & drop
						this.parentNode.style.zIndex = '1';
	                    storage = {};
	                });
	                
	                
	                // a mieux gerer les depassement quand on dessnds vers le bas
							// d'une part pour que ca s'adapte a toute les fenetre 
							// et de l'autre pour que ca suive quand on desseends
							// ca beug comme s'est ecrit
	                
	                /*
	                addEvent(elements[i], 'mouseout', function(e) { // Termine le drag & drop
						var target = storage.target;
			            if (target) {
							
							var hauteurFenetre= 600;
							if(e.clientY > hauteurFenetre){
								storage = {};
								
							}
						}
			         });
			         */
	              
	            }
	          
	        }
	        
	        addEvent(document, 'mousemove', function(e) { // Permet le suivi du drag & drop
	            var target = storage.target;
	            if (target) {
					target.style.position = "absolute";
	                target.style.top = e.clientY - storage.offsetY + 'px';
	                target.style.left = e.clientX - storage.offsetX + 'px';
	                
	                 // si les elements déplacés dépasse le cadre, faire qu'il ne le dépasse pas
	                 var cadre = document.getElementById('cadre');
	                 
	                   //le nombre de pixel du cadre
					var pixelBordureCadreGaucheHaut = 2;
					var pixelBordureCadreDroitBas = 3;
	                
	                var bordures = bordure(cadre);
	                
						// contition de perte de l' element
					var conditionArret = 50;
						//pour le bas
	                if((e.clientY - storage.offsetY + target.offsetHeight) > cadre.offsetHeight + bordures.top -pixelBordureCadreDroitBas){
						target.style.top = cadre.offsetHeight - target.offsetHeight + bordures.top - pixelBordureCadreDroitBas + 'px';
							//perte de l element
						if((e.clientY - storage.offsetY + target.offsetHeight) > cadre.offsetHeight + bordures.top -pixelBordureCadreDroitBas + conditionArret){
							storage = {};
						}
					}
						//pour le haut
					if((e.clientY - storage.offsetY) < bordures.top + pixelBordureCadreGaucheHaut) {
						target.style.top = bordures.top + pixelBordureCadreGaucheHaut + 'px';
							//perte de l element
						if((e.clientY - storage.offsetY) < bordures.top + pixelBordureCadreGaucheHaut - conditionArret) {
							storage = {};
						}
					}
					
						//pour la droit
					if((e.clientX - storage.offsetX + target.offsetWidth) > cadre.offsetWidth + cadre.offsetLeft -pixelBordureCadreDroitBas){
						target.style.left = cadre.offsetWidth - target.offsetWidth + cadre.offsetLeft - pixelBordureCadreDroitBas + 'px';
							//perte de l element
						if((e.clientX - storage.offsetX + target.offsetWidth) > cadre.offsetWidth + cadre.offsetLeft -pixelBordureCadreDroitBas + 30){
							storage = {};
						}
					}
						
						//pour la gauche
					if((e.clientX - storage.offsetX)< cadre.offsetLeft+ pixelBordureCadreGaucheHaut ){
						target.style.left = cadre.offsetLeft + pixelBordureCadreGaucheHaut + 'px';
							//perte de l element
						if((e.clientX - storage.offsetX)< cadre.offsetLeft+ pixelBordureCadreGaucheHaut - conditionArret){
							storage = {};
						}
					}
	            }
	        });
	    }
	      
	    init(); // On initialise le code avec notre fonction toute prête
	    
	})();
	
