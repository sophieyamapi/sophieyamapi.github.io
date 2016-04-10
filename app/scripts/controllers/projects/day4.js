angular.module('sophieyamapigithubioApp').controller('day4Ctrl', [
	'$scope', 
  '$timeout',
  function ($scope, $timeout) {

    $scope.counter = 0;

    var promise; 

    $scope.count = function(){
      if ($scope.counter == 0) {
        return;
      }
      $scope.counter -= 1;
      promise = $timeout($scope.count, 1000);    
    };

    $scope.start = function() {
      if ($scope.counter != $scope.input) {
        $timeout.cancel(promise);
      }
      $scope.counter = $scope.input;
      $scope.count();
    };

    $scope.stop = function() {
      $timeout.cancel(promise);
    };

  }
]);
