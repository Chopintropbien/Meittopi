<script>
			// rajouter les regex	
	( function() {
		var element = document.getElementById('creerUnCompte');
		element.onclick = function() {
			var check = {};
			
			check['nomjava'] = function(id){
				var nom = document.getElementById(id);
				
				
				
				if(nom.value.length <1){
					var valeur;
					if(id == 'nomjava'){
						valeur = 'nom';
					}
					if(id == 'prenomjava'){
						valeur= 'prénom';
					}
					nom.placeholder = 'Saisissez votre ' + valeur;
					nom.className = 'petitChampErreur';
					return false;
				}
				else{
					nom.className = 'petitChamp';
					return true;
				}
			}
			check['prenomjava'] = check['nomjava'];
			
			check['email'] = function(){
				
				var email = document.getElementById('email');
				var confirmemail = document.getElementById('confirmemail');
				if(email.value.length <1){
					email.placeholder = 'Saisissez votre adresse e-mail';
					email.className = 'grandChampErreur';
					confirmemail.className = 'grandChampErreur';
					return false;
				}
				else if (email.value != confirmemail.value){
					confirmemail.value = "";
					confirmemail.placeholder = 'Saisissez deux e-mail identique';
					confirmemail.className = 'grandChampErreur';
					return false;
				}
				else{
					email.className = 'grandChamp';
					confirmemail.className = 'grandChamp';
					return true;
				}
			}
			
			check['motdepasse'] = function() {
				var motdepasse = document.getElementById('motdepasse');
				if(motdepasse.value.length == 0){
					motdepasse.placeholder = 'Saisissez votre de passe';
					motdepasse.className = 'grandChampErreur';
					return false;
				}
				else if (motdepasse.value.length <6){
					motdepasse.value = '';
					motdepasse.placeholder = '6 caratère au minimum'
					motdepasse.className = 'grandChampErreur';
					return false; 
				}
				else{
					motdepasse.className = 'grandChamp';
					return true;
				}
			}
			check['jour'] = function(id) {
				 var list = document.getElementById(id);
				 if(list.options[list.selectedIndex].value == id){
					 list.className = 'dateErreur';
					 return false;
				 }
				 else{
					list.className = 'date';
					 return true;
				 }
			}
			
			check['mois'] = check['jour'];
			check['annee'] = check['jour'];
			
			check['dateConcordance'] = function(){
			
				var mois = document.getElementById('mois');
				var moisVal = mois.options[mois.selectedIndex].value;
				
				var jour = document.getElementById('jour');
				var jourVal = jour.options[jour.selectedIndex].value;
				// n'autaurise pas 30 et 31 frevier
				if( (moisVal == 2 || moisVal=='mois') && (jourVal == 30 || jourVal == 31 || jourVal == 'jour')){
					jour.className = 'dateErreur';
					mois.className = 'dateErreur';
					return false;
				}
				// n'autaurise pas les 31 quand il n'y en a pas
				if((moisVal == 4 || moisVal == 6 || moisVal == 9 || moisVal == 11 || moisVal == 'mois')
					&& (jourVal == 31 || jourVal == 'jour')){
					jour.className = 'dateErreur';
					mois.className = 'dateErreur';
					return false;
				}
				else{
					jour.className = 'date';
					mois.className = 'date';
					return true;
				}
				
				
			}
			
			check['femme'] = function() {
				var sex = document.getElementsByName('sexe');
				var genre = document.getElementsByName('sex');
				if(sex[0].checked || sex[1].checked){
					genre[1].className = 'genre';
					genre[0].className = 'genre';
					return true;
				}
				else{
					genre[1].className = 'sexErreur';
					genre[0].className = 'sexErreur';
					return false;
				}
			}

			var formulaire = document.getElementById('inscription');
			var result = true;
			for (var i in check){
				result = check[i](i) && result;
			}
			
			if(result){			
				formulaire.submit();
			}
		}
	}
	) ();
	
</script>
