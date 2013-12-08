var liste = new Liste("x");


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



var cuisine = document.getElementById('cuisinesAvancees');
cuisine.onclick = function(){
	var elementAAfficher = document.getElementById('cuisineCachees');
	var elementACacher = document.getElementById('cuisineVisible');
	
	if(elementAAfficher.style.display == 'none'){
		elementAAfficher.style.display = 'block';
		elementACacher.style.display = 'none';
		this.innerHTML = '- Moins de types de cuisine';
	}
	else if(elementAAfficher.style.display == 'block'){
		elementAAfficher.style.display = 'none';
		elementACacher.style.display = 'block';
		this.innerHTML = '+ Plus de types de cuisine';
	}
}
var fonction = document.getElementById('fonctionsAvancees');


fonction.onclick = function(){
	var elementAAfficher = document.getElementById('fonctionsCachees');
	var elementACacher = document.getElementById('fonctionsVisible');
	if(elementAAfficher.style.display == 'none'){
		elementAAfficher.style.display = 'block';
		elementACacher.style.display = 'none';
		this.innerHTML = '- Moins de fonctionnalités';
	}
	else if(elementAAfficher.style.display == 'block'){
		elementAAfficher.style.display = 'none';
		elementACacher.style.display = 'block';
		this.innerHTML = '+ Plus de fonctionnalités';
	}
}

