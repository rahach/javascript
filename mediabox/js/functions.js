function aktiviereKlicks(elem){
/*
	docs = document.getElementsByClassName("thumbnail");
	for(doc in docs){
		doc.className = "thumbnail";
	}
	elem.className += " highlighted";
*/



	if(elem.className.indexOf("highlighted") == -1){
		var alleDivs = document.getElementById("overview").getElementsByTagName("div");

		for(var i=0; i< alleDivs.length; i++){
			alleDivs[i].className = "thumbnail";
		}
		zeigeFooter(elem);
		elem.className += " highlighted";
	}
	else{
		zeigeVideo(elem);
	}

}

function zeigeVideo(elem){ 


	var videoName = elem.getElementsByTagName("img")[0].getAttribute("alt");

	var htmlString = '<video width="720" height="300" controls="controls" muted="muted" autoplay="autoplay" >' +
	'<source src="videos/' + videoName + '.mp4" type="video/mp4" />' +
	'<source src="videos/' + videoName + '.webm" type="video/webm" />' +						
	'</video>';

//	document.getElementById("video_headline").innerHTML = elem.getElementsByTagName("strong")[0].innerHTML;
	document.getElementById("video_content").innerHTML = htmlString;
	document.getElementById("video_overlay").className = "";

}

function zeigeFooter(elem){

	document.getElementsByTagName("footer")[0].setAttribute("style", "bottom:0;");

	document.getElementById("footer_headline").innerHTML = elem.getElementsByTagName("strong")[0].innerHTML;	
	document.getElementById("footer_description").innerHTML = elem.getElementsByTagName("span")[0].innerHTML;	
}

function schliesseFenster(){
	document.getElementById("video_overlay").className = "verborgen";	
	document.getElementById("video_content").innerHTML = "";	
}