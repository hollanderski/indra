<!DOCTYPE HTML>
<html>
  <head>
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 
    <style>
      body {
        margin: 0px;
        padding: 0px;
        background: black;
      }
    </style>
 
 	<script> 	
	$(document).ready(iamready);

	var context; // var globale
	var canvas;
      
    hasInput = false;

	function iamready(){
		console.log("document pret !");
	      canvas = document.getElementById('myCanvas');
	      context = canvas.getContext('2d'); // stylo pour dessiner dans le canvas

	      drawOneMillionStars();

	      $('#myCanvas').on('mousedown', function(e){
	    	        var pos = getMousePos(canvas, e);
	    	        console.log(pos);
	    	        drawStar(pos.x, pos.y);
                    if (hasInput) return; // un input à la fois
                    addInput(pos.x, pos.y);
	    	        // 
	    	    });
	}

	function drawStar(x,y){
      	var i = 100 + Math.floor(Math.random() * 155); // intensité		      	
      	context.fillStyle = "rgb(" + i + ", " + i + ", " + i + ")";
      	//console.log(context.fillStyle);
      	context.fillRect(x,y,1,1);
	} 

	function getMousePos(canvas, evt) {
	    var rect = canvas.getBoundingClientRect();
	    return {
	        x: evt.clientX - rect.left,
	        y: evt.clientY - rect.top
	    };
	}

	function drawOneMillionStars(){

	      for (i=0; i<1000; i++){
		      	x=Math.random() * 800;
		      	y=Math.random() * 800;
		      	drawStar(x,y);
	      }
	}	


function addInput(x, y) {
    
    var input = document.createElement('input');
    //var input1 = document.createElement('input');
    
    input.type = 'text';
    input.style.position = 'fixed';
    input.style.left = (x - 4) + 'px';
    input.style.top = (y - 4) + 'px';
    input.size='20';
    
    //input1.type = 'submit';
    //input1.style.position = 'fixed';
    //input1.style.left = (x +65) + 'px';
    //input1.style.top = (y + 30) + 'px';

    input.onkeydown = handleEnter;
    
    document.body.appendChild(input);
    //document.body.appendChild(input1);

    input.focus();
    
    hasInput = true;
}

function handleEnter(e) {
    //e = e || window.event;
    var keyCode = e.keyCode;
    if (keyCode === 13) {
    	context.font="20px Georgia";
        context.fillText(this.value,parseInt(this.style.left, 10), parseInt(this.style.top, 10));
        //drawText(this.value,parseInt(this.style.left, 10), parseInt(this.style.top, 10));
        document.body.removeChild(this);
        hasInput = false;
    }
}

/*function drawText(txt, x, y) {
    context.textBaseline = 'top';
    context.textAlign = 'left';
    context.font = font;
    context.fillText(txt, x - 4, y - 4);
}  */


	
	</script>
    
  </head> 
 
 
 
  <body>
    <canvas id="myCanvas" width="800" height="800" style="border:1px solid #FFFFFF;"></canvas>
   </body>
</html>     
