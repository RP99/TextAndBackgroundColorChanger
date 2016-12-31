/*document.body.style.color = "#fff";
document.body.style.backgroundColor = "#000";*/

var colorChange, chosenColor;

var colors = ["#fff", "#000", "#abc", "#00f"];



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
