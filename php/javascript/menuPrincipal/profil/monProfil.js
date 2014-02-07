
function informationProfil(json){
	var information = [];
	for(node in json){
			// pour le tableau de description de la personne (les info qu'elle peux ajouter à son profil et qui ne sont pas obligatoire)
		var tableauDeCaracteristique;
		if(node == "tableauDeCaracteristique" && json[node] instanceof Array){
			var tableauDeCaracteristique = json[node];
		}
		else{
			information.push(json[node]);
		}		
	 }
	 
		// creer le profil avec toutes les informations recolter
	 var profil = new Profil(information[0], information[1], information[2], information[3], information[4],information[5],information[6], tableauDeCaracteristique);
	 profil.affiche('profil_profil');
};



//~ function load_file(file){
	//~ var xhr = objet_XMLHttpRequest();
	//~ xhr.open('POST', file);
	//~ xhr.onreadystatechange = function() {
		//~ if (xhr.readyState == 4 && xhr.status == 200) {
	        //~ var text = xhr.responseText;
	        //~ var donnee = text.split('?--informationSuivante--?');
	        //~ var profil = new Profil(donnee[2], donnee[3], donnee[4], donnee[5], donnee[6],donnee[7],donnee[8], donnee[9]);
			//~ profil.affiche('profil_profil');
	    //~ }
	//~ };
	 //~ xhr.send(null);
//~ }
//~ 
//~ load_file('http://localhost/Meittopi/php/texte/reponse/menuPrincipal/profil/profil.txt');

