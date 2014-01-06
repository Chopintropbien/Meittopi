	// dans tableauDeCaracteristique, mettre toutes les caracterisques que l'utilisateur a rentré
	// ex: adresse
	// peut etre faire une classe de se tableau, a voir avec Andrei
function Profil(prenom, nom, alias, photo, nbAmis, nbAvis, nbFollowers, tableauDeCaracteristique){
	this.nom = nom;
	this.prenom = prenom;
	this.photo = photo;
	this.alias = alias;
	this.tableauDeCaracteristique = tableauDeCaracteristique;
	this.nbAmis = nbAmis;
	this.nbAvis =  nbAvis;
	this.nbFollowers = nbFollowers;
	
	this.createElement = function(tagName, idElementParent, id, classe, inner, identifiantListe){
		var nouvelElement = document.createElement(tagName);
		if(tagName == 'img'){
			nouvelElement.src = inner; 
			nouvelElement.class = classe;
		}
		else if(tagName == 'a'){
			nouvelElement.href = inner;
			nouvelElement.innerHTML = classe;
		}
		else{
			nouvelElement.innerHTML = inner; 
			nouvelElement.class = classe;
		}
		nouvelElement.id = identifiantListe + id ; 
		document.getElementById(idElementParent).appendChild(nouvelElement);	
	};
	
	this.affiche = function(ouOnAffiche){
		this.createElement('h2', ouOnAffiche, '', '', this.prenom + ' ' + this.nom, '' );
		this.createElement('h2', ouOnAffiche, 'alias', '', 'Alias :', '' );
			this.createElement('strong', 'alias', '', '',  ' ' + this.alias, '');
		
		this.createElement('article', ouOnAffiche, 'profilComplet', '', '', '' );
			this.createElement('figure','profilComplet', 'profil' ,'', '', '' );
				this.createElement('img','profil', '' ,'', this.photo, '' );
				this.createElement('figcaption', 'profil', 'legendeProfil', '', '', '');
					// changer unlien pour le lien pour changer sa photo de profil
					this.createElement('a', 'legendeProfil', '', 'Changer de photo de profil', 'unlien', '');
					this.createElement('ul', 'legendeProfil', 'notif', '', '', '');
						this.createElement('li', 'notif', '', '', this.nbAmis + ' Amis', '');
						this.createElement('li', 'notif', '', '', this.nbAvis + ' Avis', '');
						this.createElement('li', 'notif', '', '', this.nbFollowers + ' Followers', '');
						
			this.createElement('ul','profilComplet', 'infoPersonnelles' ,'', '', '');
			
			//~ var nbCaracteristique = tableauDeCaracteristique.length;
			//~ for(var i = 0; i < nbCaracteristique; ++i){
				//~ 
				//~ if(!empty(tableauDeCaracteristique[i].description)){
					//~ this.createElement('li','infoPersonnelles', '' ,'infoPersonnelles', '', i);
					//~ this.createElement('h6', i, '' ,'', tableauDeCaracteristique[i].titre, '');
					//~ this.createElement('p', i, '' ,'', tableauDeCaracteristique[i].description, '');
				//~ }	
			//~ }
			this.createElement('li','infoPersonnelles', 'mettreAJour' ,'infoPersonnelles', '', '');
					this.createElement('a', 'mettreAJour' , '' ,'Mettre à jour votre profil', 'http://localhost/Meittopi/php/vue/menuPrincipal/profil/modifierMonProfil.php', '');
		
	}
}

//~ function Caracteristique (titre, description){
	//~ this.titre = titre;
	//~ this.description = description;
//~ } 
//~ 
//~ function ListeDeCaracteristique(nom, prenom){
	//~ this.liste = [];
	//~ 
	//~ // a voir avec la doc
//~ }


