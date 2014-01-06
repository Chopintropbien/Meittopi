	// je ne vois pas comment ca pourrais etre generique car je n'arrrive pas afaire sortir le xhr.responseText du onreadystatechange
function load_file(file){
	var xhr = objet_XMLHttpRequest();
	xhr.open('POST', file);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
	        var text = xhr.responseText;
	        var donnee = text.split('?--informationSuivante--?');
	        var profil = new Profil(donnee[2], donnee[3], donnee[4], donnee[5], donnee[6],donnee[7],donnee[8], donnee[9]);
			profil.affiche('profil_profil');
	    }
	};
	 xhr.send(null);
}


load_file('http://localhost/Meittopi/php/texte/reponse/menuPrincipal/profil/profil.txt');

