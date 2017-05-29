//create the elements
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

// to add content, either use innerHTML
//newHeading.innerHTML = "DHello World!";
//newParagraph.innerHTML = "explore our wild and wonderful state any way you please. !";

// OR create child nodes manually
var h1Text = document.createTextNode("Hello World!");
var paraText = document.createTextNode("explore our wild and wonderful state any way you please. !");
// and add them as child nodes to the new elements
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

// and we still need to attach them to the document!
document.getElementById("trivia").appendChild(newHeading);
document.getElementById("trivia").appendChild(newParagraph);
