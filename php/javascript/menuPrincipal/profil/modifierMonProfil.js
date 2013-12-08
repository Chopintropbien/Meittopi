	
					
	(function() { // On utilise une IEF pour ne pas polluer l'espace global
	
	    var storage = {}; // Contient l'objet du div en cours de déplacement
	    
	    
	    function addEvent(element, event, func) { // Une fonction pour gérer les événements sous tous les navigateurs
	        if (element.attachEvent) {
	            element.attachEvent('on' + event, func);
	        } else {
	            element.addEventListener(event, func, true);
	        }
	    }
	    
	    function init() { // La fonction d'initialisation    
			var transition = document.getElementsByTagName('p');
	        var elements = [];
				
				//prends les elements parents des elements de transitions				
			for(var i = 0; i<transition.length; ++i){
				elements.push(transition[i].parentNode);
			}
			
			var elementsLength = elements.length;
	            
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
	            
	            /*
	        var text = document.getElementsByTagName('textarea');
	        var textLength = text.length;
	        
	        for( var i = 0; i< textLength; ++i){
				
				if(text[i].className === 'textarea'){
					var element = text[i];
					addEvent(text[i], 'click', function(){
						element.focus();
						alert('focus');
					});
				}
				
				
				
			}*/
			
	            
	          				        
	        for (var i = 0 ; i < elementsLength ; i++) {
	            if (transition[i].className === 'croix') {
	
	        
	                addEvent(transition[i], 'mousedown', function(e) { // Initialise le drag & drop
	                    var s = storage;
	                    s.target = e.target.parentNode || event.srcElement.parentNode;
	                    
						var bordures = bordure(s.target);
						
	                    s.offsetX = e.clientX - bordures.left +100; // enlever la marge 
	                    s.offsetY = e.clientY - bordures.top;
	                    
	                 
	                });
	        
	                addEvent(elements[i], 'mouseup', function() { // Termine le drag & drop
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
					target.style.position = "absolute"
	                target.style.top = e.clientY - storage.offsetY + 'px';
	                target.style.left = e.clientX - storage.offsetX + 'px';
	                
	                 // si les elements déplacés dépasse le cadre, faire qu'il ne le dépasse pas
	                 var cadre = document.getElementById('cadre');
	                 
	                   //le nombre de pixel du cadre
					var pixelBordureCadreGaucheHaut = 2;
					var pixelBordureCadreDroitBas = 3;
	                
	                var bordures = bordure(cadre);
	                
						// contition de perte de l' element
					var conditionArret = 30;
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
	
