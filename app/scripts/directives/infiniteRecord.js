'use strict';

angular.module('sophieyamapigithubioApp').directive('infiniteRecord', [
    '$window',
    function($window) {
        return {
            restrict: 'AE',
            templateUrl: '/views/record.html',
            link: function($scope) {
                var _currentNumber = 0;

                $scope.infinite = {
                    showGoUpButton: false
                };

                var loadMoreRecord = function(start, num) {
                    for (var i = start; i < num + start; i++) {
                        $scope.infinite.records.push('Record number ' + i);
                    }
                    _currentNumber += num;

                    if (_currentNumber > 20) {
                        $scope.infinite.showGoUpButton = true;
                    }
                };

                var init = function() {
                    $scope.infinite.records = [];
                    loadMoreRecord(0, 10);
                };

                $scope.loadMore = function() {
                    loadMoreRecord(_currentNumber, 10);
                };

                $scope.goUp = function() {
                    $window.scrollTo(0, 0);
                };

                init();
            }
        };
    }
]);
