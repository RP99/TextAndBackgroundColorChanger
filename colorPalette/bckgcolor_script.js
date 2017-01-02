var backgroundColorChange;
var chosenBckgColor;
var colors = ["#fff","#000","#abc","#00f","#f00","#0f0"];

  var colorBox = document.createElement("tr");

  for(let i = 0; i < colors.length; i++){
    let colorElement = document.createElement("td");
	let valueAttr = document.createAttribute("value");

    colorElement.style.backgroundColor = colors[i];
	valueAttr.value = colors[i];
	colorElement.setAttributeNode(valueAttr);
    colorElement.classList.add("bckgColor");
    colorBox.appendChild(colorElement);
  }
  document.getElementById("bckgColorPalette").appendChild(colorBox);

document.addEventListener("click", (e) => {
  if(e.target.classList.contains("bckgColor")){
    var anchor = e.target;
    chosenBckgColor = anchor.getAttribute("value");
    document.getElementById("selectedBckgColor").innerHTML = chosenBckgColor;
    backgroundColorChange = 'document.body.style.backgroundColor = "' + chosenBckgColor + '"';
    browser.tabs.executeScript({
      code: backgroundColorChange
    });
  }
});

