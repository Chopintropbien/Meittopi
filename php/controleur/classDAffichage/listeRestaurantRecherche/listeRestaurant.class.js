
	
function Liste(){
	this.listeRestau = [];
	
	this.ajouteRestau = function(restaurant){								
		this.listeRestau.push(restaurant);				  		
	};

		//renvoie le 1 eme restau
	this.restaurant = function (i){
		return (this.listeRestau)[i];
	};
	this.createElement = function(tagName, idElementParent, id){
		var nouvelElement = document.createElement(tagName);
		nouvelElement.id = id; 
		document.getElementById(idElementParent).appendChild(nouvelElement);
		
	};
	this.affiche = function (ouAfficher){
			//la liste des restaurants
		var listeLength = this.listeRestau.length;
		for(var i = 0; i<listeLength; ++i){
			this.createElement('li', ouAfficher, 'li' + i);
			this.listeRestau[i].affiche('li' + i, i);
			if(i != listeLength -1){
				this.createElement('hr', ouAfficher, '');
			}
			
		}
	};
}
