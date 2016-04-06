angular.module('sophieyamapigithubioApp').controller('day4Ctrl', [
    '$scope',
    '$timeout',
    function ($scope, $timeout) {
        $scope.countDown = function() {
            if ($scope.counter <= 0) {
                return;
            }
            $scope.counter--;
            $timeout($scope.countDown, 1000);
        };

        $scope.startCount = function() {
            $scope.counter = $scope.input;
            $timeout($scope.countDown, 1000);
        };

    }
]);
