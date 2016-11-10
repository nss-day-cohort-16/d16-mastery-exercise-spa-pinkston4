"use strict";

var CarLot = (function(dm){
	var input = document.getElementById("input");
	var output;
	dm.resetBorderThickness = function () {
		console.log("running resetBorderThickness");
		var resetingAll = document.getElementsByClassName("col-sm-4");
		var resetForm = document.getElementById("myForm");
		for (var i = 0; i < resetingAll.length; i++) {
			resetingAll[i].classList.remove("selected");
		}
		input.blur();
		resetForm.reset();
		output = null;
	};

	dm.changeBC = function (event) {
		
		console.log("running changeBC");
		let targetEl = event.target.closest(".col-sm-4");
		targetEl.classList.toggle("selected");
		input.focus();
		output = targetEl.getElementsByTagName("p");
		input.addEventListener("keypress", function (event) {		
			output[0].innerHTML = input.value;
		});
		
			
		
	};

	return dm;

})(CarLot || {});