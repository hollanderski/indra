function newPie(outerR, innerR, counter){
	// NouveauCalque : 
	var newLayout= document.createElement("div");
	newLayout.id='layout'+counter;
	// console.log("lay=", newLayout);
	document.getElementById("myDiv").appendChild(newLayout);

	var color =d3.scaleOrdinal(["indigo", "purple", "pink", "violet"]);

var svg = d3.select('#layout'+counter).append("svg")
    .attr("viewBox", "0 0 1959 2593")
    .attr("preserveAspectRatio", "xMaxYMax meet");

var g = svg.append("g")
	.attr("transform", "translate(1000, 1000)"); // set center of pie 

var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d.population; });

 var label = d3.arc()
 		.innerRadius(innerR)
		.outerRadius(outerR);
    
 var path = d3.arc()
 		.innerRadius(0)
		.outerRadius(outerR);

   d3.json("data.json", function(error, data) {
    if (error) throw error;

    var arc = g.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");

    arc.append("path")
	.attr("d", label) // here the arc function works on every record d of data 
	.attr("fill", function(d){ return color(d.data.age); });


    arc.append("text")
        .attr("transform", function(d){ return "translate(" + label.centroid(d) + ")"; }) // put text at the center of every arc
		.attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .text(function(d) {
            return d.data.age;
        });
});

}


function openDiscuss(event){
    var outerR = 90; 
    var innerR=50;
    document.getElementById('myDiv').style.display="block";
    for(var i=0; i<15; i++)
    {
        newPie(outerR, innerR, i);
        outerR+=50;
        innerR+=60;
    }

}


