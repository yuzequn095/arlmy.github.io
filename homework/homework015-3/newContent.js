window.onload = prepare;

function prepareOnclick() {
	var list = document.getElementById('list');
	var links = document.getElementsByTagName('a');

	for ( var i=0; i < links.length; i++) {
	  links[i].onclick = function() {
	  	return newContent(this) ? false : true;
		}
	}
}


function newContent(whichHtml) {
	var request = getHTTPObject();
	request.open( "GET", whichHtml, true);
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			console.log(request);
			console.log(request.responseText);
			var h1 =
			var img
			var p
		}
	}
}



function showInfo(who) {
	var source = who.getAttribute("href");
	var place = document.getElementById('place');

}