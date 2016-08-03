angular.module('park')
.directive('detalheCarro', function() {
  return {
    restrict: 'AE',
    templateUrl: "app/directives/detalhe-carro.html"
  };
});