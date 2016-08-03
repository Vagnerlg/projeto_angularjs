angular.module('park').controller('FormController',function($scope,$location,carroService){

    $scope.marcas = carroService.marcas;

    $scope.carro = {};

    $scope.add = function(){
            carroService.add($scope.carro);
            $scope.carro = {};
            $location.path('/lista');
    }

});