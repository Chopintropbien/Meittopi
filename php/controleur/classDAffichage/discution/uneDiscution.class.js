
function UneDiscution(titreDiscution, dateDePublication, photoAuteur, speudoAuteur, discution, typeDiscution, infoLienAutieur){
	
	this.reponses = [];
	
	this.titreDiscution  = titreDiscution ;
	this.dateDePublication  = dateDePublication ;
	this.photoAuteur  = photoAuteur ;
	this.speudoAuteur  = speudoAuteur ;
	this.discution  = discution ;
	this.typeDiscution = typeDiscution;
	this.infoLienAutieur  = infoLienAutieur ;

	this.createElement = function(tagName, idElementParent, id, className, inner){
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
			nouvelElement.id = id; 
		}	
		document.getElementById(idElementParent).appendChild(nouvelElement);
	};
	this.createLien = function(lien, idElementParent, id, className, inner){
		var nouvelElement = document.createElement('a');
		nouvelElement.innerHTML = inner;
		nouvelElement.href = lien;
		if(className != ''){
			nouvelElement.className = className;
		}
		if(id != ''){
			nouvelElement.id = id; 
		}	
		document.getElementById(idElementParent).appendChild(nouvelElement);
	}
	this.createInput = function(type,idElementParent, id, className, value){
		var nouvelElement = document.createElement('input');
		nouvelElement.type = type;
		nouvelElement.value = value;
		nouvelElement.className = className;
		nouvelElement.id = id; 
		document.getElementById(idElementParent).appendChild(nouvelElement);
	}
	this.ajouteReponse = function(reponse){
		this.reponses.push(reponse);
	}
	
	
	this.affiche = function (ouOnAffiche){ 
			// ancre vers le bas de la page
		this.createLien('#basPage', ouOnAffiche, 'hautPage', '', ''); 
		
		
			// entete (premiere question) de la discution
		this.createElement('ul', ouOnAffiche, 'discution', '', '');

			this.createElement('li', 'discution', 'liEntete', 'liEntete', '');
			
					// titre 
				this.createElement('h3', 'liEntete', '', '', this.titreDiscution);
				
					// photo auteur
				this.createElement('div', 'liEntete', 'divEntete', '', '');
					this.createElement('img', 'divEntete', '', '', this.photoAuteur);
					this.createElement('a', 'divEntete', 'lienProfil', '', ''); // lien
						this.createElement('p', 'lienProfil', '', '', this.speudoAuteur);
						
					// reste partie droite
				this.createElement('article', 'liEntete', 'ArticleEntete', '', '');
						// titre, date de publication et texte
					this.createElement('p', 'ArticleEntete', '', '', this.discution);
					
						/* date */
					this.createElement('time', 'ArticleEntete', '', '', this.dateDePublication);
					
						// avis sur la discution
					this.createElement('section', 'ArticleEntete', 'sectionAvis', '', '');
						this.createLien('a', 'sectionAvis', '', 'compliement', '');
						this.createLien('a', 'sectionAvis', '', 'message', '');
						this.createLien('a', 'sectionAvis', '', 'contenueIndesirable', '');
					
					
					
		var reponseLength = this.reponses.length;
		for(var i= 0; i< reponseLength; ++i){
			this.createElement('hr', 'discution', '', '', '');
			this.createElement('li', 'discution', 'li' + i, 'reponse', '');
			this.reponses[i].affiche('li', i);
		}
		
			//  zone d' ecriture d'une réponse
		this.createElement('hr', 'discution', '', '', '');
		this.createElement('li', 'discution', 'ecrireReponse', 'ecrireReponse', '');
			this.createElement('h5', 'ecrireReponse', '', 'ecrireReponseTitre', '');
			this.createElement('textarea', 'ecrireReponse', '', '', '');
			this.createInput('button', 'ecrireReponse', 'repondre', 'repondre', '' );
			
			
		
		
			// ancre vers le gaut de la page
		this.createLien('#hautPage', ouOnAffiche, 'basPage', '', ''); 
		
		
		//~ this.createElement('', '', '', '', '');
	}
	
	
	


	
	
}
