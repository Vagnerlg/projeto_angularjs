angular.module('park').controller('SaidaController',function($scope,$location,$routeParams, carroService){

    carroService.getCarro($routeParams.idcarro,function(carro){
        $scope.carro = carro;

        var _now = new Date().getTime();
        $scope.carro.saida = _now;

        var _calculoSaida = function(){
            var diferenca = $scope.carro.saida - $scope.carro.data;
            var minutos = parseInt(diferenca / 60000);
            return minutos;
        }

        $scope.carro.total = _calculoSaida();

    });

    $scope.confirmarSaida = function(){
            carroService.delete($scope.carro,function(){
                    console.log("Item "+ $scope.carro.placa + " deletado com sucesso");
                    $location.path("/");
                });
    }

});