var nodes =[
    {
      "id": "n0",
      "label": "Jacques Derrida",
      "x": 0,
      "y": 0,
      "size": 3,
      "type": "goo"
    },
    {
      "id": "n1",
      "label": "Walter Benjamin",
      "x": 3,
      "y": 1,
      "size": 2,
      "type": "goo"
    },
    {
      "id": "n2",
      "label": "Emmanuel Kant",
      "x": 1,
      "y": 3,
      "size": 0.5,
      "type": "goo"
    },
    {
      "id": "n3",
      "label": "Aby Warburg",
      "x": 10,
      "y": 3,
      "size": 1,
      "type": "goo"
    },

    {
      "id": "n4",
      "label": "Ludwig Binswanger",
      "x": 10,
      "y": 10,
      "size": 1,
      "type": "goo"
    },
    {
      "id": "n5",
      "label": "Marcel Duchamp",
      "x": 1,
      "y": 10,
      "size": 1,
      "type": "goo"
    },
    {
      "id": "n6",
      "label": "Yves Klein",
      "x": 5,
      "y": 5,
      "size": 1,
      "type": "goo"
    },
    {
      "id": "n7",
      "label": "Nelson Goodman",
      "x": 6,
      "y": 8,
      "size": 1,
      "type": "goo"
    },
    {
      "id": "n8",
      "label": "Douglas Hoftstadter",
      "x": 8,
      "y": 2,
      "size": 1,
      "type": "goo"
    }
  ];
  
  var edges=[
    {
      "id": "e0",
      "source": "n0",
      "target": "n1"
    },
    {
      "id": "e1",
      "source": "n1",
      "target": "n2"
    },
    {
      "id": "e2",
      "source": "n2",
      "target": "n0"
    }
  ];



// ici appel bdd tableau nodes et arcs : var g = graphData(nodes,edges);

var g = {
        nodes: nodes,
        edges: edges
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
       mouseEnabled: true, 
       mouseWheelEnabled: true,
      nodesPowRatio: 1,
      edgesPowRatio: 1,
      defaultNodeColor: '#A0A0A0',
      edgeColor: 'default'
    }
   });


