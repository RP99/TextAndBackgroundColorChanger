document.addEventListener("click", (e) => {
  browser.tabs.executeScript(null, 
	  {file: "/content_scripts/script.js"
  });
  
});
