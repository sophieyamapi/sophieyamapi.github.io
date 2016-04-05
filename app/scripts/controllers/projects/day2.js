angular.module('sophieyamapigithubioApp').controller('day2Ctrl', [
    '$scope',
    function ($scope) {

        var food = [{
            name: 'Beer',
            price: 10,
            selcted: false
        },{
            name: 'Apple',
            price: 5,
            selcted: false
        },{
            name: 'Pasta',
            price: 15,
            selcted: false
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
    }
]);
