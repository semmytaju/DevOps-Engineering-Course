// javascript angular code
function CalculatorCtrl($scope) {
	// define variables
	$scope.var_a = 0;
	$scope.var_b = 0;
	$scope.var_c = 0;
	$scope.var_d = 0;
	$scope.operation_1 = '+'; // default operator
	$scope.operation_2 = '+';
    $scope.operation_3 = '+';
  
    // udpate current variable a
	$scope.update_a = function() {
		return $scope.var_a - 0;
	}

	// udpate current variable b
	$scope.update_b = function() {
		return $scope.var_b - 0;
	}

	// udpate current variable c
	$scope.update_c = function() {
		return $scope.var_c - 0;
	}

	// udpate current variable d
	$scope.update_d = function() {
		return $scope.var_d - 0;
	}

	// handle button increase value
	$scope.increase_var_a = function() {
		$scope.var_a = $scope.update_a() + 1;
	}

	$scope.increase_var_b = function() {
		$scope.var_b = $scope.update_b() + 1;
	}

	$scope.increase_var_c = function() {
		$scope.var_c = $scope.update_c() + 1;
	}

	$scope.increase_var_d = function() {
		$scope.var_d = $scope.update_d() + 1;
	}

	// handle button decrease value
	$scope.decrease_var_a = function() {
		$scope.var_a = $scope.update_a() - 1;
	}

	$scope.decrease_var_b = function() {
		$scope.var_b = $scope.update_b() - 1;
	}

    $scope.decrease_var_c = function() {
		$scope.var_c = $scope.update_c() - 1;
	}

    $scope.decrease_var_d = function() {
		$scope.var_d = $scope.update_d() - 1;
	}

    // handle calculation function
	$scope.calculate = function() {
		return eval($scope.update_a() +$scope.operation_1+ $scope.update_b() +$scope.operation_2+ $scope.update_c() +$scope.operation_3+ $scope.update_d());
	}
}
