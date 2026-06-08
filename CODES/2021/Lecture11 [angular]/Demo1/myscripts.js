// javascript angular code
function CalculatorCtrl($scope) {
	// define variables
	$scope.var_a = 0;
	$scope.var_b = 0;
	$scope.operation = '+'; // default operator
  
    // udpate current value
	$scope.update_a = function() {
		return $scope.var_a - 0;
	}

	// udpate current value
	$scope.update_b = function() {
		return $scope.var_b - 0;
	}

	// handle button increase value
	$scope.increase_var_a = function() {
		$scope.var_a = $scope.update_a() + 1;
	}

	$scope.increase_var_b = function() {
		$scope.var_b = $scope.update_b() + 1;
	}

	// handle button decrease value
	$scope.decrease_var_a = function() {
		$scope.var_a = $scope.update_a() - 1;
	}

	$scope.decrease_var_b = function() {
		$scope.var_b = $scope.update_b() - 1;
	}

    // handle calculation function
	$scope.calculate = function() {
		if($scope.operation == '+') {
		  return $scope.update_a() + $scope.update_b();
		}
		if($scope.operation == '-') {
		  return $scope.var_a - $scope.var_b;
		}
		if($scope.operation == '*') {
		  return $scope.var_a * $scope.var_b;
		}
		if($scope.operation == '/') {
		  return $scope.var_a / $scope.var_b;
		}
		return "undef";
	}
}
