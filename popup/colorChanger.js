document.addEventListener("click", (e) => {
  if(!e.target.classList.contains("reset")) {
    browser.tabs.executeScript(null, 
	  {file: "/content_scripts/script.js"});
  }
  else if(e.target.classList.contains("reset")){
    browser.tabs.reload();
    window.close();
    return;	  
  }
});
