
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
		document.getElementById(idElementParent + identifiant).appendChild(nouvelElement);
	};
	this.createLien = function(lien, idElementParent, id, className, inner, identifiant){
		var nouvelElement = document.createElement('a');
		nouvelElement.innerHTML = inner;
		nouvelElement.href = lien;
		if(className != ''){
			nouvelElement.className = className;
		}
		if(id != ''){
			nouvelElement.id = id + identifiant; 
		}	
		document.getElementById(idElementParent + identifiant).appendChild(nouvelElement);
	}
		
	this.affiche = function(ouOnAffiche, i){
			// photo auteur
		this.createElement('div', ouOnAffiche, 'divEntete', '', '', i);
			this.createElement('img', 'divEntete', '', '', this.photoAuteur, i);
			this.createElement('a', 'divEntete', 'lienProfil', '', '', i); // lien
				this.createElement('p', 'lienProfil', '', '', this.speudoAuteur, i);
				
			// reste partie droite
		this.createElement('article', ouOnAffiche, 'ArticleEntete', '', '', i);
				// titre, date de publication et texte
			this.createElement('p', 'ArticleEntete', '', '', this.discution, i);
			
				/* date */
			this.createElement('time', 'ArticleEntete', '', '', this.dateDePublication, i);
			
				// avis sur la discution
			this.createElement('section', 'ArticleEntete', 'sectionAvis', '', '', i);
			
				this.createLien('a', 'sectionAvis', '', 'compliement', '', i);
				this.createLien('a', 'sectionAvis', '', 'message', '', i);
				this.createLien('a', 'sectionAvis', '', 'contenueIndesirable', '', i);
				
		
		
	}


	
	
}






