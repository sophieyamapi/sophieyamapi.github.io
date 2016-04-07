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
  		}];

  		$scope.products = food;
 
  		$scope.selectItem = function(itemIndex) {
  			console.log(itemIndex);
  			// if (products[itemIndex].selected === false){
  			// 	products[itemIndex].selected = true;
  			// }
  			// else {
  			// 	products[itemIndex].selected = false;
  			// }
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
      //$scope.searchBox = null;

      var searchMatch = function() {
        if($scope.searchBox === undefined) {
          return;
        }
        for(var i=0; i<food.length; i++) {
          for(var j=0; j<$scope.searchBox.length; j++) {
            if(food[i].name[j].toLowerCase() === $scope.searchBox[j].toLowerCase()) {
            food[i].show = true; 
          }
          else {
            food[i].show = false;
            break;
           }
          }
        }
      };

      $scope.$watch('searchBox', function(newItem, oldItem){
        console.log(newItem, ', ', oldItem);
        searchMatch();
      });


     $scope.selectRange1 = function() {
        for (var i = 0; i < food.length; i++) {
          if (food[i].price >6) {
            food[i].show = false;
          }
          else{
            food[i].show = true;
          }
        }
      };

      $scope.selectRange2 = function() {
        for (var i = 0; i < food.length; i++) {
          if (food[i].price < 7 || food[i].price > 13) {
            food[i].show = false;
          }
          else{
            food[i].show = true;
          }
        }
      };

      $scope.selectRange3 = function() {
        for (var i = 0; i < food.length; i++) {
          if (food[i].price < 14 || food[i].price > 20) {
            food[i].show = false;
          }
          else{
            food[i].show = true;
          }
        }
      };

  }
]);
