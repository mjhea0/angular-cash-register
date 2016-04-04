var app = angular.module('cashRegister', []);

app.controller('cashController', ['$scope', function($scope) {

  var taxRate = 0.0765;

  $scope.tax = 0;
  $scope.subTotal = 0;
  $scope.total = 0;

  $scope.itemList = {
    pizza: 0,
    salad: 0,
    burger: 0,
    cheeseburger: 0
  };

  // add item
  $scope.addItem = function(item, price) {
    $scope.itemList[item] += 1;
    $scope.subTotal += parseFloat(price);
    $scope.tax = taxRate * $scope.subTotal;
    $scope.total = $scope.subTotal + $scope.tax;
  };

}]);