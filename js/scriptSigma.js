	var g = {
        nodes: [],
        edges: []
    };


    // Visuel des noeuds
    sigma.canvas.nodes.goo = function(node, ctx, settings) {
    var prefix = settings('prefix') || '';
    ctx.fillStyle =  settings('defaultNodeColor');
    // effet lumineux sur les noeuds
    ctx.shadowBlur = 60;
    ctx.shadowColor = "white";

    ctx.beginPath();
    ctx.arc(
      node[prefix + 'x'],
      node[prefix + 'y'],
      node[prefix + 'size'],
      0,
      Math.PI * 2,
      true
    );
    ctx.closePath();
    ctx.fill();
  };



/* Création de l'objet graphe sigma */

 s = new sigma({
   graph: g,
   container: 'graph-container',
   renderer: {
    container: document.getElementById('graph-container'),
    type: 'canvas'
   },
   settings: {
   	  minNodeSize: 5,
      maxNodeSize: 12,
      // autoRescale: false,
       mouseEnabled: true, // permet à la souris (mouseWheel) de zoomer dans le canvas
       mouseWheelEnabled: true,
      // doubleClickEnabled: false,
      // touchEnabled: false,
      nodesPowRatio: 1,
      edgesPowRatio: 1,
      // defaultEdgeColor: 'white', 
      defaultNodeColor: '#A0A0A0',
      edgeColor: 'default'
    }
   });

sigma.parsers.json('data/data_sigma.json', s ,  function() {
    s.refresh();
    console.log(s.graph.nodes());
    s.startForceAtlas2();

/*
* Attention, le graphe est parsé de manière asynchrone, donc toute fonction
*  devant précéder la création du graphe (forceAtlas2, ajout de nouveaux noeuds)
*  doit se faire dans ce bloc 
*
*/

document.querySelector("#newPost").addEventListener("click", 
      function(event){
        var layout=document.getElementById('d');
        this.style.display='none';
        var post=document.getElementById("myPost");
        post.style.display="block";
        document.getElementById("sent").style.display="block";
        
/*
* Ajout d'un noeud au clic sur le bouton Envoyer
* il reste à assurer que l'id soit unique, et faire le regroupement des noeuds par cluster de mots clés
*
*/
        document.querySelector("#sent").addEventListener("click",
          function(event){
            this.style.display="none";
            console.log("here!", post.value);
            post.style.display="none";
            document.getElementById("newPost").style.display='block';
            s.graph.addNode({
              id: 'n10',
              label: post.value,
              x: 1,
              y: 1,
              type: 'goo',
              size: 1
            });
  post.value="";
  console.log(s.graph.nodes());
  s.refresh();
  s.startForceAtlas2();

          });
      });
  });