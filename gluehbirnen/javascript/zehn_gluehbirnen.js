function alleEinschalten(){

	var bilder = document.getElementsByTagName("img");
	var schalter = document.getElementsByTagName("button");
	var classes = document.getElementsByClassName("lampe");

	for(var i=0; i<bilder.length; i++){

		console.log(classes[i].querySelectorAll("img")[0]);
		bilder[i].src = "images/birne_an.png";
		schalter[i].innerHTML = "Aus";		
	}

}

function alleAusschalten(){

	var bilder = document.getElementsByTagName("img");
	var schalter = document.getElementsByTagName("button");

	for(var i=0; i<bilder.length; i++){
		bilder[i].src = "images/birne_aus.png";
		schalter[i].innerHTML = "Ein";		
	}

}


function alleUmschalten(){


	var bilder = document.getElementsByTagName("img");
	var schalter = document.getElementsByTagName("button");

	for(var i=0; i<bilder.length; i++){
		if(	schalter[i].innerHTML === "Ein"){
			schalter[i].innerHTML = "Aus";		
			bilder[i].src = "images/birne_an.png";
		}
		else if(	schalter[i].innerHTML === "Aus"){
			schalter[i].innerHTML = "Ein";
			bilder[i].src = "images/birne_aus.png";		
		}
	}


}



function alleUmschaltenjQ(){

	$("div.lampe").each(function(){
		if($(this).children("button").val() === "Ein"){
				console.log($(this).children("img").attr("src"));					
				console.log($(this).children("button").html());									
			$(this).children("img").attr("src", "images/birne_an.png");
			$(this).children("button").html("ee");		
		}	
		else{	
			console.log($(this).children("img").attr("src"));			
				console.log($(this).children("button").html());												
			$(this).children("img").attr("src", "images/birne_aus.png");
			$(this).children("button").html("dd");		
		}
	});	
}



function schalteLampeUm(nummer){

var schalter = document.getElementById("button"+nummer);		
var bild = document.getElementById("lampe"+nummer);

	if(	schalter.innerHTML === "Ein"){
		schalter.innerHTML = "Aus";		
		bild.src = "images/birne_an.png";
	}
	else if(	schalter.innerHTML === "Aus"){
		schalter.innerHTML = "Ein";
		bild.src = "images/birne_aus.png";		
	};


}




