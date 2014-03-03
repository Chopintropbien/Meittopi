// dans ou ca mettre innerHTML, value, placeholder
	function ajouterLeTexte(className, texte, ouCa){
		var ecrit = document.getElementsByClassName(className);
		var ecritLength = ecrit.length;
		for(var i = 0; i < ecritLength; ++i){
			if(ouCa == 'innerHTML'){
				ecrit[i].innerHTML = texte;
			}
			else if(ouCa == 'value'){
				
				ecrit[i].value= texte;
			}
			else if(ouCa == 'placeholder'){
				ecrit[i].placeholder= texte;
			}
			
		}
	}
	
	function ajouterLeTexteSansSuprimerceluiDAvant(className, texte, ouCa){
		var ecrit = document.getElementsByClassName(className);
		var ecritLength = ecrit.length;
		for(var i = 0; i < ecritLength; ++i){
			if(ouCa == 'innerHTML'){
				ecrit[i].innerHTML += texte; // la difference est ici
			}
			else if(ouCa == 'value'){
				
				ecrit[i].value= texte;
			}
			else if(ouCa == 'placeholder'){
				ecrit[i].placeholder= texte;
			}
			
		}
	}	
	
	
	function ajouterLeTexteParId(id, texte, ouCa){
		var ecrit = document.getElementById(id);
		if(ouCa == 'innerHTML'){
			ecrit.innerHTML = texte;
		}
		else if(ouCa == 'value'){
			
			ecrit.value= texte;
		}
		else if(ouCa == 'placeholder'){
			ecrit.placeholder= texte;
		}
		
	}
