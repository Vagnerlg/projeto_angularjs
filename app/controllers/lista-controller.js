angular.module('park').controller('ListaController',function($scope,carroService){

    carroService.get(function(resp){
            $scope.carros = resp;
    });
});