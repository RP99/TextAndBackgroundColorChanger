var colorChange = 'document.body.style.color = "#fff"';
document.addEventListener("click", (e) => {
  if(e.target.classList.contains("textColorChange")) {
    browser.tabs.executeScript(null, {
	code: colorChange,
	allFrames: true
    });
  }
  else if(e.target.classList.contains("reset")){
    browser.tabs.reload();
    window.close();
    return;	  
  }
});
