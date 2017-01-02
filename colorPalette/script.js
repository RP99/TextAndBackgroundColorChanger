/*document.body.style.color = "#fff";
document.body.style.backgroundColor = "#000";*/

var colorChange, chosenColor;

var colors = ["#fff","#000","#abc","#00f","#f00","#0f0"];

var colorBox = document.createElement("tr");

for(let i = 0; i < colors.length; i++){
  let colorElement = document.createElement("td");
  let valueAttr = document.createAttribute("value");
  
  colorElement.style.backgroundColor = colors[i];
  valueAttr.value = colors[i];
  colorElement.setAttributeNode(valueAttr);
  colorElement.classList.add("color");
  colorBox.appendChild(colorElement);
}
document.getElementById("colorPalette").appendChild(colorBox);

document.addEventListener("click", (e) => {
	document.body.style.backgroundColor = "#000";
  if(e.target.classList.contains("color"){
    var anchor = e.target;
    
    chosenColor = anchor.getAttribute("value");
    document.getElementById("selectedColor").innerHTML = chosenColor;
    colorChange = 'document.body.style.color = "' + chosenColor + '"';
    
    browser.tabs.executeScript({
      code: colorChange
    });
	
  }
});
