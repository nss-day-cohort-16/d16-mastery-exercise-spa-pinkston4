"use strict";

var CarLot = (function (dm) {

	var cardClick = function (event){
		console.log("running cardClick", event.target.closest(".col-sm-4"));
		CarLot.resetBorderThickness();
		CarLot.changeBC(event);
	};

	dm.activateEvents = function () {
			console.log("running activate events");
			var listen = document.getElementById("container");
			listen.addEventListener("click", cardClick);
			

	};

	return dm;
		

})(CarLot || {});