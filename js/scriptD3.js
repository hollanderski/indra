/*
*   Fonctions spécifiques aux graphes de conversation D3.js 
*   Mode lecture : superposition de graphes D3 concentriques, pour l'instant à partir d'un fichier JSON
*   Mode écriture : en construction
*
*/


/* Pour chaque intervalle temporelle significative de conversation, on crée un nouveau graphe dans un calque superposé aux calques antérieurs */

function newPie(outerR, innerR, counter, year){    // rayon extérieur et intérieur, index chronologique, intervalle de temps
	var newLayout= document.createElement("div"); // nouveau calque 
	newLayout.id='layout'+counter;
	document.getElementById("myDiv").appendChild(newLayout);
    console.log("child?",document.getElementById("myDiv").children[1]);

	var color =d3.scaleOrdinal(["indigo", "purple", "pink", "violet" , "DarkViolet", "DarkOrchid"]); // couleurs des commentaires

var svg = d3.select('#layout'+counter).append("svg")
    .attr("viewBox", "0 0 1959 2593")
    .attr("preserveAspectRatio", "xMaxYMax meet")
    .attr("style", "");

var g = svg.append("g")
	.attr("transform", "translate(1000, 1000)"); // définit le centre du cercle 

var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d[year]; });  // définition de la plage de donnée à utiliser : d.population

console.log("year=", year);
 var label = d3.arc()
 		.innerRadius(innerR)
		.outerRadius(outerR);
    
 var path = d3.arc()
 		.innerRadius(0)
		.outerRadius(outerR);


   d3.json("data/data1.json", function(error, data) {
    if (error) throw error;

    var arc = g.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");
        console.log("pie=",pie(data));

    arc.append("path")
	.attr("d", label) // here the arc function works on every record d of data 
	.attr("fill", function(d){  return color(d.data.age); // association enregistrement de données et couleurs
    });  


/*
*   fonction pas assez optimale, la sélection des données du fichier ordonnées par date utilise un test sur chaque enregistrement pour vérifier qu'il 
*   s'agit de la bonne intervalle de temps. Il serait préférable d'extraire un sous-ensemble du fichier JSON
*/

    arc.append("text")
        .attr("transform", function(d){ return "translate(" + label.centroid(d) + ")"; }) // définit l'emplacement des labels au milieu des arcs
		.attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .text(function(d) {
            if(d.data[year]) return d.data.age;  // Selection du label à afficher en légende
        });
});

}

/*
*   Fonction provisoire pour tester l'affichage d'une discussion sur un petit ensemble de données
*   -l'effet de profondeur est réalisé par aggrandissement progressif des graphes d3 superposés, à terme cette fonction utilisera la caméra-zoom webGL
*   -la sélection des enregistrements JSON par date est réalisée au moyen d'un tableau, mais il faudra mettre en place un index général de correspondance date-enregistrements
*/
function openDiscuss(event){
    var outerR = 90; 
    var innerR=50;
    var annees = ["annee0", "annee1", "annee2", "annee3", "annee4","annee5", "annee6", "annee7", "annee8", "annee9"];
    document.getElementById('myDiv').style.display="block";
    for(var i=0; i<10; i++)
    {
        newPie(outerR, innerR, i, annees[i]);
        outerR+=50;
        innerR+=60;
    }

}


