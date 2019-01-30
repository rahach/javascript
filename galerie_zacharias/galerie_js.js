var infoArr = new Array();

infoArr[0] = 'Bewegen Sie die Maus über die Bilder, um eine Beschreibung zu erhalten.';

infoArr[1] = 'Der <strong>Eiffelturm</strong> (frz. <em>la tour Eiffel</em>) ist das Wahrzeichen von Paris und steht weltweit als Symbol für Frankreich. Der Stahlfachwerkturm ist nach seinem Erbauer Alexandre Gustave Eiffel benannt und liegt an der gleichnamigen Avenue im Parc …';

infoArr[2] = 'Die <strong>Tower Bridge</strong> ist eine Straßenbrücke über den Fluss Themse in London. Sie wurde 1894 eröffnet und verbindet die City of London auf der Nordseite mit dem Stadtteil Southwark im Stadtbezirk London Borough of Southwark auf der Südseite. Es handelt sich hierbei um eine …';

infoArr[3] = 'Das <strong>Kolosseum</strong> (antiker Name: <em>Amphitheatrum Novum</em> oder <em>Amphitheatrum Flavium)</em> ist das größte der im antiken Rom erbauten Amphitheater und der größte geschlossene Bau der römischen Antike überhaupt. Zwischen 72 und 80 n. Chr. erbaut, ist es heute eines der Wahrzeichen der …';

var landesCodes = new Array('','fr','gb','it');

function init() {
	document.getElementById('img1').addEventListener('mouseover', zeigeInfo);
	document.getElementById('img2').addEventListener('mouseover', zeigeInfo);
	document.getElementById('img3').addEventListener('mouseover', zeigeInfo);
	document.getElementById('galerie').addEventListener('mouseout', startInfo);
}
window.onload = init;

function zeigeInfo() {
	var bildNr = this.id.replace('img','');
	var alttext = this.alt;
	
	var boxInhalt = "<h3><img src='bilder/" + landesCodes[bildNr] + ".png' alt='" + alttext + "' />" + alttext + "</h3>" + "<p>" + infoArr[bildNr] + "</p>";
			
	document.getElementById("info_box").innerHTML = boxInhalt;
}

function startInfo() {
	document.getElementById("info_box").innerHTML = infoArr[0];
}

