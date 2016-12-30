/*document.body.style.color = "#fff";
document.body.style.backgroundColor = "#000";*/


var chosenColor;

document.addEventListener("click", (e) => {
	document.body.style.backgroundColor = "#000";
  if(e.target.classList.contains("color"){
    var anchor = e.target;
    
    chosenColor = anchor.value
    document.getElementById("selectedColor").innerHTML = chosenColor;
  }
}
