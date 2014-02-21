(function(){
	

	function coche (idTout, classNameResteDeLaListe){
			// si on selectionne tout, alors toutes les cases sont coché
		var touteDistance = document.getElementById(idTout);
		touteDistance.onclick = function(){
			if(this.checked){
				var toutesLesDistance = document.getElementsByClassName(classNameResteDeLaListe);
				var toutesLesDistanceLength = toutesLesDistance.length;
				for(var i = 0; i < toutesLesDistanceLength; ++i){
					toutesLesDistance[i].checked = true;
				}
			}
		}
		
			// si on desectionne une des cases alors que "tout" est coché, alors on deselectionne "tout"
		var toutesLesDistance = document.getElementsByClassName(classNameResteDeLaListe);
		var toutesLesDistanceLength = toutesLesDistance.length;
		
		for(var i = 0; i < toutesLesDistanceLength; ++i){
			if(toutesLesDistance[i].id != idTout){
				toutesLesDistance[i].onclick = function(){
					touteDistance.checked = false;
				}
			}
		}
	
	}
	
		
	coche('toutDistance', 'distance');
	coche('toutPrix', 'sous');
	coche('toutCuisine', 'cuisine');
	coche('toutFonction', 'fonction');

})();
