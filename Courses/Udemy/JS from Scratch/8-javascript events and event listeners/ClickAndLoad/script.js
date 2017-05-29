

function prepareEventHandlers() {

	var myImage = document.getElementById("mainImage");

	myImage.onclick = function() {
	alert("You've clicked the image");
};
}




window.onload = function() {
	//prep anything we need to
	prepareEventHandlers();
}