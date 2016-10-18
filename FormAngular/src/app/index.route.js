(function() {
  'use strict';

  angular
    .module('crudParaWeb')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/template.html',
        controller: 'MainController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
