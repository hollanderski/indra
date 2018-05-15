/*
*
*	Ensemble des évènements de la page principale du forum 
*	Deux modes d'interaction possibles avec les noeuds du graphe sigma.js : 
*	Lecture (ouverture d'une discussion), Ecriture (commentaire ou like)
*
*/
document.addEventListener("DOMContentLoaded",
	function(event){
		s.bind('clickNode', function(e) {
			var X=e['data']['node']['renderer1:x'];
			var Y=e['data']['node']['renderer1:y'];
			newSelectMenu(X,Y);

			document.querySelector("select").addEventListener("click",
				function (event) {
					var choice=document.getElementById("mySelect").value;
					console.log("value=", choice);
					if(choice==="Lire"){
						console.log("Ouverture de la discussion");
						openDiscuss(event); // création du graphe de conversation D3.js 
					}
					else{
						if(choice==="Répondre"){
							console.log("Commentaire");
							openDiscuss(event); 
						}
						else console.log("Like");
					}
					document.body.removeChild(this); 
					// voir si la suppression systématique de l'élément est pertinent avec ForceAtlas2

					document.querySelector("#myDiv").addEventListener("click",
						function(event){
							this.style.display='none';
					});
			});
	});
});

function newSelectMenu(x, y){
	var selectList= document.createElement("select");
			selectList.id="mySelect";
			selectList.style.position = 'fixed';
    		selectList.style.left =(x-4) + 'px';
    		selectList.style.top =(y-4) + 'px';
    		selectList.size='5';
			document.body.appendChild(selectList);
			
			var array=["Lire", "Répondre", "J'aime"];  // Valeurs du menu déroulant
			for(var i=0; i < array.length; i++){
				var option= document.createElement("option");
				option.value=array[i];
				option.text=array[i];
				selectList.appendChild(option);
			}
}

