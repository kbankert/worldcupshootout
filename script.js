hometurn = true;
homescorecount = 0;
awayscorecount = 0;

function gameplay($scope) {

	$scope.aim = [left, center, right];

	$scope.kickerChoice = "";
	$scope.goalieChoice = Math.random();

	$scope.score = [
		['','','','',''],
		['','','','','']
	];

	//home team kicks first
	$scope.hometurn = true;
	$scope.homescorecount = 0;
	$scope.awayscorecount = 0;

	alert("Home Team Kicks First");

	$scope.leftShot = function() {
		console.log($scope.hometurn);
		//kicker and goalie choices
		$scope.kickerChoice = "left";
		$scope.goalieChoice = Math.random();

		if ($scope.goalieChoice < 0.34) {
			$scope.goalieChoice = "left";
		}
		else if($scope.goalieChoice <= 0.67) {
			$scope.goalieChoice = "center";
		}
		else {
			$scope.goalieChoice = "right";
		}
	   
	   //win condition
	   
    	if ($scope.kickerChoice === $scope.goalieChoice) {
        	alert("What a save!");
        	$scope.hometurn = !$scope.hometurn;
        }
   		else {
    		alert("Gooooooooool!");

		//upon win condition
		    if ($scope.hometurn == true) {
				$scope.homescorecount++;
				$scope.hometurn = !$scope.hometurn;
			} else {
				$scope.awayscorecount++;
				$scope.hometurn = !$scope.hometurn;
				alert('');
		 	}
		 } 	
		    
		    console.log($scope.homescorecount);
		    console.log($scope.awayscorecount);	
		    console.log($scope.hometurn);
		
	}
	
	$scope.centerShot = function() {
	$scope.kickerChoice = "center";
	$scope.goalieChoice = Math.random();
	
	if ($scope.goalieChoice < 0.34) {
		$scope.goalieChoice = "left";
	}
	else if($scope.goalieChoice <= 0.67) {
		$scope.goalieChoice = "center";
	}
	else {
		$scope.goalieChoice = "right";
	}
   
    if ($scope.kickerChoice === $scope.goalieChoice) {
        alert("What a save!");
        	$scope.hometurn = !$scope.hometurn;
    }
		else {
		alert("Gooooooooool!");

	//upon win condition
	    if ($scope.hometurn == true) {
			$scope.homescorecount++;
			$scope.hometurn = !$scope.hometurn;
		} else {
			$scope.awayscorecount++;
			$scope.hometurn = !$scope.hometurn;
			alert('');
	 	}
	 } 	
	    
	    console.log($scope.homescorecount);
	    console.log($scope.awayscorecount);	
	    console.log($scope.hometurn);
	}

	$scope.rightShot = function() {
	$scope.kickerChoice = "right";
	$scope.goalieChoice = Math.random();
	
	if ($scope.goalieChoice < 0.34) {
		$scope.goalieChoice = "left";
	}
	else if($scope.goalieChoice <= 0.67) {
		$scope.goalieChoice = "center";
	}
	else {
		$scope.goalieChoice = "right";
	}
   
    if ($scope.kickerChoice === $scope.goalieChoice) {
        alert("What a save!");
        	$scope.hometurn = !$scope.hometurn;
    	}
		else {
		alert("Gooooooooool!");

	//upon win condition
	    if ($scope.hometurn == true) {
			$scope.homescorecount++;
			$scope.hometurn = !$scope.hometurn;
		} else {
			$scope.awayscorecount++;
			$scope.hometurn = !$scope.hometurn;
			alert('');
	 	}
	 } 	
	    
	    console.log($scope.homescorecount);
	    console.log($scope.awayscorecount);	
	    console.log($scope.hometurn);
	}
}


