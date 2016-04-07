var app = angular.module('cashRegister', []);

app.controller('cashController', ['$scope', function($scope) {

  var taxRate = 0.0765;

  $scope.tax = 0;
  $scope.subTotal = 0;
  $scope.total = 0;

  $scope.itemList = [
    {
      name: 'pizza',
      price: 12.99,
      amount: 0
    },
    {
      name: 'salad',
      price: 5.99,
      amount: 0
    },
    {
      name: 'burger',
      price: 12.99,
      amount: 0
    },
    {
      name: 'cheeseburger',
      price: 12.99,
      amount: 0
    }
  ];

  // add item
  $scope.addItem = function(item) {
    $scope.itemList.forEach(function(el){
      if(el.name === item) {
        el.amount +=1;
        $scope.subTotal += parseFloat(el.price);
      }
    });
    $scope.tax = taxRate * $scope.subTotal;
    $scope.total = $scope.subTotal + $scope.tax;
  };

}]);