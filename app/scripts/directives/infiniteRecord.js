'use strict';


angular.module('sophieyamapigithubioApp').directive('infiniteRecord', [
	'$window',
	function ($window) {
    	return {
    		restrict: 'AE',
    		templateUrl: '/views/record.html',
    		link: function($scope) {
    			$scope.records = [];
    			$scope.showBackbutton = false;

    			var init = function() {
    				for (var i = 0; i < 10; i++) {
    					$scope.records.push({selected: false, value: i+1});
    				}
    			};

    			init();

    			$scope.showRecord = function() {
    				for (var i = 0; i < 10; i++) {
    					$scope.records.push({selected: false, value: $scope.records.length + 1});
    				}
    				if ($scope.records.length > 19) {
    					$scope.showBackbutton = true;
    				}
    			};

    			$scope.expandRecord = function(record) {
    				for (var i = 0; i < $scope.records.length; i++){
    					if ($scope.records[i] == record) {
    						continue;
    					}
    					$scope.records[i].selected = false;
    				}
    				record.selected = !record.selected;
    			}

    			$scope.goUp = function() {
    				$window.scrollTo(0, 0);
    			};

    		}
    	};
  }
]);