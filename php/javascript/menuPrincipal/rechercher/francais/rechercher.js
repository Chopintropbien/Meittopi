(function(){
	
	
		// texte 
	
		// titre de la page dans l'onglet
	document.getElementById('titre').innerHTML = 'Rechercher';
	
		// inclure dans la page options.js qui donne les nom au options
	
	
	var liste = new Liste("x");
	
	
	// c'est Andrei qui se charge de mettre les restaurant dans la liste
	// s'il n'y a pas de recherche par l'utilisateur, on lui affiche des proposition de restaurant
	// et Lauriane modifie le titre
	//pas de recherche de la part de lutilisateur'
	if(true){
		document.getElementById('titreRecherche').innerHTML = "Vous n'avez pas d'idée de restaus? Meittopie en a trouvé pour vous!"
		
	}
	
	liste.ajouteRestauComplet('Chez j aime', 'http://localhost/Meittopi/image/restau.jpg',
										4, 3 ,'tres bon', 'une rdfggfffff',
										'Marie', 'Jules', 'Tous les lundi, pizza a 13$', '20 rue du mont veyrier', '74960 cran', '04415622978');								
	liste.ajouteRestauComplet('lqsdf', 'http://localhost/Meittopi/image/restau.jpg',
										4, 2, 'tres bon', 'une rdfggfffff',
										'Marie', 'Jules', 'n', '20 rue du mont veyrier', '74960 cran', '04415622978');
	liste.ajouteRestauComplet('lqsdf', 'http://localhost/Meittopi/image/restau.jpg',
										4, 8,'tres bon', 'une rdfggfffff',
										'Marie', 'Jules', 'n', '20 rue du mont veyrier', '74960 cran', '04415622978');
	liste.ajouteRestauComplet('lqsdf', 'http://localhost/Meittopi/image/restau.jpg',
										4, 7,'tres bon', 'une rdfggfffff',
										'Marie', 'Jules', 'n', '20 rue du mont veyrier', '74960 cran', '04415622978');
	liste.ajouteRestauComplet('lqsdf', 'http://localhost/Meittopi/image/restau.jpg',
										4, 4,'tres bon', 'une rdfggfffff',
										'Marie', 'Jules', 'n', '20 rue du mont veyrier', '74960 cran', '04415622978');
	liste.ajouteRestauComplet('lqsdf', 'http://localhost/Meittopi/image/restau.jpg',
										4, 8,'tres bon', 'une rdfggfffff',
										'Marie', 'Jules', 'n', '20 rue du mont veyrier', '74960 cran', '04415622978');
									
									
								
																			
	liste.afficheRestauComplet();
	
	
	
	
	
		// partie d'affichage des options suplémentaire
		
		// cuisines
	var cuisine = document.getElementById('cuisinesAvancees');
	cuisine.onclick = function(){
		var elementAAfficher = document.getElementsByClassName('cacheCuisine');
		var elementInputAAfficher = document.getElementsByClassName('cuisine');
		
		var length = elementAAfficher.length;
		var lengthInput = elementInputAAfficher.length;
		
			
		if(this.innerHTML == '+ Plus de types de cuisine'){
				// affiche les labels et les br
			for(var i = 0; i < length; ++i){
				elementAAfficher[i].style.display = 'inline-block';	
			}
			
				// affiche les inputs
			
			for(var i = 0; i < lengthInput; ++i){
				elementInputAAfficher[i].style.display = 'inline-block';
			}
			
			this.innerHTML = '- Moins de types de cuisine';
		}
		else{
				// cache les input
			for(var i = 0; i < length; ++i){
				elementAAfficher[i].style.display = 'none';
			}
			for(var i = 0; i < lengthInput; ++i){
				if(elementInputAAfficher[i].id != 'italienne' 
					&& elementInputAAfficher[i].id != 'francaise' 
					&& elementInputAAfficher[i].id != 'chinoise' 
					&& elementInputAAfficher[i].id != 'toutCuisine' 
					&& elementInputAAfficher[i].id != 'japonaise'){
				
				elementInputAAfficher[i].style.display = 'none';	
						
				}
			}
			this.innerHTML = '+ Plus de types de cuisine';
		}
	}
	
		// fonctionnalite
	var cuisine = document.getElementById('fonctionsAvancees');
	cuisine.onclick = function(){
		var elementAAfficher = document.getElementsByClassName('cacheFonction');
		var elementInputAAfficher = document.getElementsByClassName('fonction');
		
		var length = elementAAfficher.length;
		var lengthInput = elementInputAAfficher.length;
		
			
		if(this.innerHTML == '+ Plus de fonctionnalités'){
				// affiche les labels et les br
			for(var i = 0; i < length; ++i){
				elementAAfficher[i].style.display = 'inline-block';	
			}
			
				// affiche les inputs
			for(var i = 0; i < lengthInput; ++i){
				elementInputAAfficher[i].style.display = 'inline-block';
			}
			
			this.innerHTML = '- Moins de fonctionnalités';
		}
		else{
				// cache les input
			for(var i = 0; i < length; ++i){
				elementAAfficher[i].style.display = 'none';
			}
			for(var i = 0; i < lengthInput; ++i){
				if(elementInputAAfficher[i].id != 'toutFonction' 
					&& elementInputAAfficher[i].id != 'aEmporter' 
					&& elementInputAAfficher[i].id != 'enfantBasAge' 
					&& elementInputAAfficher[i].id != 'ouvertMaintenant' 
					&& elementInputAAfficher[i].id != 'terrasse'){
				
				elementInputAAfficher[i].style.display = 'none';	
						
				}
			}
			this.innerHTML = '+ Plus de fonctionnalités';
		}
	}

})();

