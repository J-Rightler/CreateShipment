(function () {
  'use strict';

  angular
    .module('createShipment')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('manageOptions', {
        url: '/manageOptions',
        templateUrl: 'app/main/optionsManagement.html',
        controller: 'OptionsManagementController',
        controllerAs: 'optionsManagement'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
