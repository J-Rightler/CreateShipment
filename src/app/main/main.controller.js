(function() {
  'use strict';

  angular
    .module('createShipment')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, shipmentTypesService, createShipmentService) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1460744077813;
    vm.showToastr = showToastr;
    vm.showForm = true;
    vm.shipmentTypeOptions = [];
    vm.shipmentModeOptions = [];
    vm.selectedShipmentMode = {};
    vm.selectedShipmentType = {};
    vm.setShipmentTypeOptions = setShipmentTypeOptions;
    vm.shipmentNumbers = {};
    vm.createShipment = createShipment;
    vm.showIssueModal = true;
    
    activate();

    var allShipmentOptions = [];
    function getShipmentTypes(){
      shipmentTypesService.getShipmentTypes().then(function(response){
        vm.shipmentModeOptions = response.data;
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
    function createShipment(){
      createShipmentService.getShipments(vm.selectedShipmentType.url)
        .then(function (response){
          vm.shipmentNumbers = response;
        });
    }
    function setShipmentTypeOptions(){
      vm.shipmentTypeOptions = _.get(allShipmentOptions,vm.selectedShipmentMode);
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
