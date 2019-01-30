function schalteLampeUm(){

var schalter = document.getElementsByTagName("button")[0];		
var bild = document.getElementById("lampe");

	if(	schalter.innerHTML === "Ein"){
		schalter.innerHTML = "Aus";		
		bild.src = "images/birne_an.png";
	}
	else if(	schalter.innerHTML === "Aus"){
		schalter.innerHTML = "Ein";
		bild.src = "images/birne_aus.png";		
	};

}