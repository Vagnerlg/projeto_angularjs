angular.module("park",['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/form', {
        controller : 'FormController',
        templateUrl: 'app/views/form.html'
  })
  .when('/lista', {
        controller : 'ListaController',
        templateUrl: 'app/views/lista.html'
  })
  .when('/saida/:idcarro', {
        controller : 'SaidaController',
        templateUrl: 'app/views/saida.html'
  })
  .otherwise({redirectTo : "/lista"});

});