(function() {
  'use strict';

  angular
    .module('createShipment')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, shipmentTypesService) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1460744077813;
    vm.showToastr = showToastr;
    vm.showForm = true;
    vm.shipmentOptions = [{
      id:1,name:'Bob',url:'/CreateMeThisOne'
    }];
    vm.shipmentTypes = [];
    vm.selectedShipmentType = {};
    activate();

    var allShipmentOptions = [];
    function getShipmentTypes(){
      shipmentTypesService.getShipmentTypes().then(function(response){
        vm.shipmentTypes = response.data;
        shipmentTypesService.getShipmentTypeOptions().then(function(response){
          allShipmentOptions = response.data.shipmentTypes;
        });
      });
    }
    function activate() {
      getWebDevTec();
      getShipmentTypes();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
