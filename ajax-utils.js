(function (global){

// Nom de domaine
var ajaxUtils={};

function getRequestObject(){
	if(window.XMLHttpRequest){
		return (new XMLHttpRequest());
	}
	else if (window.ActiveXObject){
		return (new ActiveXObject("Microsoft.XMLHTTP"));
	}
	else{
		global.alert("Ajax is not supported!");
		return (null);
	}
}

// Envoi une requête GET au serveur
ajaxUtils.sendGetRequest =
	function (requestUrl, responseHandler, isJsonResponse){
		var request=getRequestObject();
		request.onreadystatechange=
			function(){
				handleResponse(request, responseHandler, isJsonResponse);
			};
		request.open("GET", requestUrl, true); //true rend la requête asynchrone
		request.send(null);
	};

function handleResponse(request, responseHandler, isJsonResponse){
	if((request.readyState == 4) &&
		(request.status == 200)){

		if(isJsonResponse===undefined){
			isJsonResponse=true; //defaut
		}

		if(isJsonResponse){
			responseHandler(JSON.parse(request.responseText))
		}

		else{
			responseHandler(request);
		}
	}
}

// Expose utility to the global object
global.$ajaxUtils=ajaxUtils;

})(window);