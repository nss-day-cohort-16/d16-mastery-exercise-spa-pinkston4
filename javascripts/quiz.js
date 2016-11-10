"use strict";
	

	
var containerContentIdCounter = 1;
var container = document.getElementById("container");
var containerContent;

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  console.log("populatePage",inventory);
  inventory.forEach( function(car) {
	containerContent = document.createElement('div');
	containerContent.setAttribute("class", "col-sm-4");
	containerContent.setAttribute("id", "counter" + containerContentIdCounter );
	containerContent.innerHTML = 
		"<img class='photo' src='" + car.image + "'>" +
		"<h3>" + car.make + " " + car.model + "</h3>" +
		"<h5>" + car.year + "</h5>" + 
		"<h5>" + "$" + car.price + "</h5>" +
		"<p>" + car.description + "</p>";
	container.appendChild(containerContent);
	containerContentIdCounter++;	
  });


  // Now that the DOM is loaded, establish all the event listeners needed
 
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
// console.log("CarLot", CarLot);
CarLot.loadInventory(populatePage);
// CarLot.getInventory();
CarLot.resetBorderThickness();
// CarLot.changeBC();
	
		
	


