
	//Fonction d'instance permettant de vérifier si le navigateur supporte l'objet XMLHTTPRequest
function objet_XMLHttpRequest(){
		//On déclare une variable "mavariable" à null
	var mavariable = null;
	
		//Teste si le navigateur prend en charge les XMLHttpRequest
	if (window.XMLHttpRequest || window.ActiveXObject){
			// Si Internet Explorer alors on utilise les ActiveX
		if(window.ActiveXObject){
			//On teste IE7 ou supérieur
			try{
				mavariable = new ActiveXObject("Msxml2.XMLHTTP");
			}
			//Si une erreur est levée, alors c'est IE 6 ou inférieur
			catch(e){
				mavariable = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}
		
			//Navigateurs récents (Firefox, Opéra, Chrome, Safari, ...)
		else{
			mavariable = new XMLHttpRequest();
		}
	}
		//XMLHttpRequest non supporté par le navigateur
	else{
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
	return null;
	}
		//On retourne l'objet mavariable
	return mavariable;
}
