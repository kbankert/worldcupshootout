function gameplay($scope) {

	alert("Home Team Kicks First");

	//home team kicks first
	var home = true;

	var aim = [left, center, right]

	var kickerChoice;
	var goalieChoice;

// angular.element( document.getElementsByTagName("li")[1]).scope()
	$scope.leftShot = function() {
		kickerChoice = "left";
		goalieChoice = Math.random();

		if (goalieChoice < 0.34) {
			goalieChoice = "left";
		}
		else if(goalieChoice <= 0.67) {
			goalieChoice = "center";
		}
		else {
			goalieChoice = "right";
		}
	   
	    if (kickerChoice === goalieChoice) {
	        alert("What a save!");
	        }
	   	else {
	    	alert("Gooooooooool!");
		}
	}

		$scope.centerShot = function() {
		kickerChoice = "center";
		goalieChoice = Math.random();
		
		if (goalieChoice < 0.34) {
			goalieChoice = "left";
		}
		else if(goalieChoice <= 0.67) {
			goalieChoice = "center";
		}
		else {
			goalieChoice = "right";
		}
	   
	    if (kickerChoice === goalieChoice) {
	        alert("What a save!");
	        }
	   	else {
	    	alert("Gooooooooool!");
		}
	}

		$scope.rightShot = function() {
		kickerChoice = "right";
		goalieChoice = Math.random();
		
		if (goalieChoice < 0.34) {
			goalieChoice = "left";
		}
		else if(goalieChoice <= 0.67) {
			goalieChoice = "center";
		}
		else {
			goalieChoice = "right";
		}
	   
	    if (kickerChoice === goalieChoice) {
	        alert("What a save!");
	        }
	   	else {
	    	alert("Gooooooooool!");
		}
	}

	home != home;

}


