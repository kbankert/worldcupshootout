//Gobal variables to display upon load
hometurn = true;
homekickcount = 0;
awaykickcount = 0;
homescorecount = 0;
awayscorecount = 0;
remaininghomeshots = 5;
remainingawayshots = 5;
var winner;
var hometeam_wins;
var awayteam_wins;

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
	$scope.homekickcount = 0;
	$scope.awaykickcount = 0;
	$scope.homescorecount = 0;
	$scope.awayscorecount = 0;
	$scope.remaininghomeshots = 5;
	$scope.remainingawayshots = 5;

	$scope.homegol0 = false;
	$scope.homegol1 = false;
	$scope.homegol2 = false;
	$scope.homegol3 = false;
	$scope.homegol4 = false;

	$scope.awaygol0 = false;
	$scope.awaygol1 = false;
	$scope.awaygol2 = false;
	$scope.awaygol3 = false;
	$scope.awaygol4 = false;

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
			 	if ($scope.hometurn == true) {
					$scope.homekickcount++;
					$scope.remaininghomeshots--;
				}
				else {
					$scope.awaykickcount++;
					$scope.remainingawayshots--;
				}
   		}
   		else {
    		alert("Gooooooooool!");

		//upon win condition
		    if ($scope.hometurn == true) {
				$scope.fillInHomeScore();
				$scope.homescorecount++;
				$scope.homekickcount++;
				$scope.remaininghomeshots--;

			} else {
				$scope.fillInAwayScore();
				$scope.awayscorecount++;
				$scope.awaykickcount++;
				$scope.remainingawayshots--;
		 	}
		 } 	
		
		$scope.winGame();
		$scope.hometurn = !$scope.hometurn;

	    // console.log("homekickcount: " + $scope.homekickcount);
	    // console.log("awaykickcount: " + $scope.awaykickcount);
	    // console.log("homescore: " + $scope.homescorecount);
	    // console.log("awayscore: " + $scope.awayscorecount);	
	    // console.log("home turn? " + $scope.hometurn);	
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
			 	if ($scope.hometurn == true) {
					$scope.homekickcount++;
					$scope.remaininghomeshots--;
				}
				else {
					$scope.awaykickcount++;
					$scope.remainingawayshots--;
				}
	    }
		else {
		alert("Gooooooooool!");

	//upon win condition
	    if ($scope.hometurn == true) {
				$scope.fillInHomeScore();
				$scope.homescorecount++;
				$scope.homekickcount++;
				$scope.remaininghomeshots--;
			}
			else {
				$scope.fillInAwayScore();
				$scope.awayscorecount++;
				$scope.awaykickcount++;
				$scope.remainingawayshots--;
	 		}
	 	} 
		$scope.winGame();
		$scope.hometurn = !$scope.hometurn;

	    // console.log("homekickcount: " + $scope.homekickcount);
	    // console.log("awaykickcount: " + $scope.awaykickcount);
	    // console.log("homescore: " + $scope.homescorecount);
	    // console.log("awayscore: " + $scope.awayscorecount);	
	    // console.log("home turn? " + $scope.hometurn);
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
		 	if ($scope.hometurn) {
				$scope.homekickcount++;
				$scope.remaininghomeshots--;
			}
			else {
				$scope.awaykickcount++;
				$scope.remainingawayshots--;
			}

    	}
		else {
		alert("Gooooooooool!");

	//upon win condition
	    if ($scope.hometurn) {
				$scope.fillInHomeScore();
				$scope.homescorecount++;
				$scope.homekickcount++;
				$scope.remaininghomeshots--;
			}
			else {
				$scope.fillInAwayScore();
				$scope.awayscorecount++;
				$scope.awaykickcount++;
				$scope.remainingawayshots--;
	 		}
		 } 	
	  $scope.winGame();
		$scope.hometurn = !$scope.hometurn;

	    // console.log("homekickcount: " + $scope.homekickcount);
	    // console.log("awaykickcount: " + $scope.awaykickcount);
	    // console.log("homescore: " + $scope.homescorecount);
	    // console.log("awayscore: " + $scope.awayscorecount);	
	    // console.log("home turn? " + $scope.hometurn);

	}

	$scope.fillInHomeScore = function() {
		if ($scope.homekickcount == 0) {
			$scope.homegol0 = !$scope.homegol0;
			}
		else if ($scope.homekickcount == 1) {
			$scope.homegol1 = !$scope.homegol1;
			}
		else if ($scope.homekickcount == 2) {
			$scope.homegol2 = !$scope.homegol2;
			}
		else if ($scope.homekickcount == 3) {
			$scope.homegol3 = !$scope.homegol3;
			}
		else if ($scope.homekickcount == 4) {
			$scope.homegol4 = !$scope.homegol4;
			}
		else {
				false
			}
		}
		

	$scope.fillInAwayScore = function() {
		if ($scope.awaykickcount == 0) {
			$scope.awaygol0 = !$scope.awaygol0;
		}
		else if ($scope.awaykickcount == 1) {
			$scope.awaygol1 = !$scope.awaygol1;
		}
		else if ($scope.awaykickcount == 2) {
			$scope.awaygol2 = !$scope.awaygol2;
		}
		else if ($scope.awaykickcount == 3) {
			$scope.awaygol3 = !$scope.awaygol3;
		}
		else if ($scope.awaykickcount == 4) {
			$scope.awaygol4 = !$scope.awaygol4;
		}
		else {
			false
		}
	}

	$scope.winGame = function() {
		if ($scope.homescorecount > ($scope.awayscorecount + $scope.remainingawayshots)) {
			winner = hometeam_wins;
			alert("Home Team Wins!")
		}
		else if ($scope.awayscorecount > ($scope.homescorecount + $scope.remaininghomeshots)) {
			winner = awayteam_wins;
			alert("Away Team Wins!")
		}
		else {
			false
		}
	}
}

