angular.module('myApp', []).controller('userCtrl', function($scope) {
	// global variables
	$scope.fName = '';
	$scope.lName = '';
	$scope.passw1 = '';
	$scope.passw2 = '';

	// simple array data
	$scope.users = [
		{id:1, fName:'Hege', lName:"Pege" },
		{id:2, fName:'Kim',  lName:"Pim" },
		{id:3, fName:'Sal',  lName:"Smith" },
		{id:4, fName:'Jack', lName:"Jones" },
		{id:5, fName:'John', lName:"Doe" },
		{id:6, fName:'Peter',lName:"Pan" }
	];

	$scope.edit = true;
	$scope.error = false;
	$scope.incomplete = false;
	$scope.hideform = true;
	
	// method edit user
	$scope.editUser = function(id) {
		$scope.hideform = false;
		if (id == 'new') {
			$scope.edit = true;
			$scope.incomplete = true;
			$scope.fName = '';
			$scope.lName = '';
		} else {
			$scope.edit = false;
			$scope.fName = $scope.users[id-1].fName;
			$scope.lName = $scope.users[id-1].lName;
		}
	};

	$scope.$watch('passw1',function() {$scope.errorhandle();});
	$scope.$watch('passw2',function() {$scope.errorhandle();});
	$scope.$watch('fName', function() {$scope.errorhandle();});
	$scope.$watch('lName', function() {$scope.errorhandle();});

	// method handle error 
	$scope.errorhandle = function() {
		// check password
		if ($scope.passw1 !== $scope.passw2) {
			$scope.error = true;
		}else{
			$scope.error = false;
		}
		
		$scope.incomplete = false;
		
		if ($scope.edit && (!$scope.fName.length || !$scope.lName.length || !$scope.passw1.length || !$scope.passw2.length)) {
			$scope.incomplete = true;
		}
	};

});