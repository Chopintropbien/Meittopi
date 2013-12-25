function createElement(tagName, idElementParent, id, inner, identifiantAmi, indentifiantListe){
		
		var nouvelElement = document.createElement(tagName);
		if(tagName == 'img'){
			nouvelElement.src = inner; 
		}
		else{
			nouvelElement.innerHTML = inner; 
		}
		nouvelElement.id = identifiantAmi + id + indentifiantListe; 
		document.getElementById(idElementParent).appendChild(nouvelElement);
};
