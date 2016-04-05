angular.module('sophieyamapigithubioApp').controller('day3Ctrl', [
	'$scope',
  	function ($scope) {

  		var food = [{
  			name: 'Beer',
  			price: 10,
  			selcted: false,
			show: true
  		},{
  			name: 'Apple',
  			price: 5,
  			selcted: false,
			show: true
  		},{
  			name: 'Pasta',
  			price: 15,
  			selcted: false,
			show: true
  		},{
  			name: 'ApplePie',
  			price: 7,
  			selcted: false,
			show: true
  		}];

  		$scope.products = food;
 
  		$scope.selectItem = function(itemIndex) {
  			console.log(itemIndex);
  			food[itemIndex].selected = !food[itemIndex].selected;

  			console.log(food[itemIndex].selected);

  			if (food[itemIndex].selected){
  				$scope.totalPrice += food[itemIndex].price;
  			}
  			else {
  				$scope.totalPrice -= food[itemIndex].price;
  			}
  		};

  		$scope.totalPrice = 0;

		var prefixMatch = function(itemName, searchName) {
			if (itemName.length < searchName.length) return false;
			for (var i = 0; i < searchName.length; i++) {
				if (itemName[i].toLowerCase() !== searchName[i].toLowerCase()) {
					return false;
				}
			}

			return true;
		};

		$scope.$watch('searchTerm', function(newTerm, oldTerm) {
			if (newTerm == undefined) {
				return;
			}

			for (var i = 0; i < food.length; i++) {
				if (prefixMatch(food[i].name, newTerm)) {
					food[i].show = true;
				} else {
					food[i].show = false;
				}
			}
		});
  }
]);
