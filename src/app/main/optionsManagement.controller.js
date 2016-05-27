/**
 * Created by RIGHJES on 5/20/2016.
 */
(function () {
  'use strict';

  angular
    .module('createShipment')
    .controller('OptionsManagementController', OptionsManagementController);

  /** @ngInject */
  function OptionsManagementController($scope,shipmentTypesService,toastr,$timeout) {
    var vm = this;

    //objects
    vm.shipmentOptions = [];
    vm.newOption = {};
    vm.requestSuccess = false;

    //functions
    vm.checkOptionEdit = checkOptionEdit;
    vm.deleteOption = deleteOption;
    vm.updateOption = updateOption;
    vm.createOption = createOption;


    activate();

    function activate() {
      $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
      });
      getShipmentTypes();
      //bootbox.alert("BootBoxin iiiiiiiiit!");
    }

    function getShipmentTypes() {

      shipmentTypesService.getShipmentTypeOptions().then(
        function (response) {
          vm.shipmentOptions = response.options;
          _.forEach(vm.shipmentOptions, function (o) {
            o.noEdit = true;
            o.requestSuccess = false;
          });
        }
      );
    }

    function createOption(){
      shipmentTypesService.createShipmentTypeOption(vm.newOption.Mode,vm.newOption.Description,vm.newOption.Route)
        .then(function(response){
          vm.newOption.OptionId = response.data;
          vm.newOption.noEdit = false;
          vm.shipmentOptions.push(vm.newOption);
          vm.newOption = {};
        },function (error) {
            displayError(error)
        });
    }
    function updateOption(option) {
      option.noEdit = !option.noEdit;
      shipmentTypesService.updateShipmentTypeOption(option.OptionId,option.Mode,option.Description,option.Route)
        .then(function(response){
          //toastr.success('Yea!');
          option.requestSuccess = true;
          //$timeout(removeCheck(option),6000);
        });
    }

    function deleteOption(option) {
      shipmentTypesService.deleteShipmentTypeOption(option.OptionId).then(function (response) {

      });
    }

    var currentOptionId = 0;

    function checkOptionEdit(option) {
      if (option.OptionId !== currentOptionId) {
        option.noEdit = !option.noEdit;
      }
      currentOptionId = option.OptionId;
    }

    function displayError(error){
      toastr.error(error.ResponseStatus.Message,error.ResponseStatus.ErrorCode,{timeout: 4000});
    }

    function removeCheck(option){
      option.requestSuccess = false;
    }
  }

})();
