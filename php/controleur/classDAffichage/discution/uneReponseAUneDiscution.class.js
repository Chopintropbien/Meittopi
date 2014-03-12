
function UneReponseAUneDiscution(dateDePublication, photoAuteur, speudoAuteur, discution, infoLienAutieur){
	this.dateDePublication  = dateDePublication ;
	this.photoAuteur  = photoAuteur ;
	this.speudoAuteur  = speudoAuteur ;
	this.discution  = discution ;
	this.infoLienAutieur  = infoLienAutieur ;

	this.createElement = function(tagName, idElementParent, id, className, inner, identifiant){
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
			nouvelElement.id = id + identifiant; 
		}
		document.getElementById(idElementParent).appendChild(nouvelElement);
	};
		


	
	
}






