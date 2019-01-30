$(document).ready(function(){

var theTexts = {
	'eiffelturm': "<img src='bilder/fr.png' alt=''><br />Der <strong>Eiffelturm</strong> (frz. <em>la tour Eiffel</em>) ist das Wahrzeichen von Paris und steht weltweit als Symbol für Frankreich. Der Stahlfachwerkturm ist nach seinem Erbauer Alexandre Gustave Eiffel benannt und liegt an der gleichnamigen Avenue im Parc …", 
	'towerbridge': "<img src='bilder/gb.png' alt=''><br />Die <strong>Tower Bridge</strong> ist eine Straßenbrücke über den Fluss Themse in London. Sie wurde 1894 eröffnet und verbindet die City of London auf der Nordseite mit dem Stadtteil Southwark im Stadtbezirk London Borough of Southwark auf der Südseite. Es handelt sich hierbei um eine …", 
	'kolosseum': "<img src='bilder/it.png' alt=''><br />Das <strong>Kolosseum</strong> (antiker Name: <em>Amphitheatrum Novum</em> oder <em>Amphitheatrum Flavium)</em> ist das größte der im antiken Rom erbauten Amphitheater und der größte geschlossene Bau der römischen Antike überhaupt. Zwischen 72 und 80 n. Chr. erbaut, ist es heute eines der Wahrzeichen der …"};

    var cachedText = $("#info_box").text(); 

$("#galerie > img").mouseover(function(){
	var theId = $(this).attr("alt").toLowerCase().replace(/ /g,'');
	$("#info_box").html(theTexts[theId]);	
});

$("#galerie > img").mouseout(function(){
	$("#info_box").html(cachedText);	
});


});