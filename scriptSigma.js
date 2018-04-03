document.addEventListener("DOMContentLoaded",
	function(event){
		s.bind('clickNode', function(e) {
			var X=e['data']['node']['renderer1:x'];
			var Y=e['data']['node']['renderer1:y'];
  			// console.log(e.type, e.data.node.label, e.data.captor);
			console.log(e.type, e.data.node.label, X, Y);	

			// newSelectMenu(e.data.captor.clientX, e.data.captor.clientY);
			newSelectMenu(X,Y);
			console.log("elem=", mySelect);


			document.querySelector("select").addEventListener("click",
				function (event) {
					var choice=document.getElementById("mySelect").value;
					console.log("value=", choice);
					if(choice==="Lire"){
						console.log("Ouverture de la discussion");
						openDiscuss(event);
					}
					else{
						if(choice==="Répondre"){
							console.log("Commentaire");
							openDiscuss(event);
						}
						else console.log("Like");
					}
					document.body.removeChild(this);

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
			// Valeurs du menu déroulant:
			var array=["Lire", "Répondre", "J'aime"]; 
			for(var i=0; i < array.length; i++){
				var option= document.createElement("option");
				option.value=array[i];
				option.text=array[i];
				selectList.appendChild(option);
			}
}

