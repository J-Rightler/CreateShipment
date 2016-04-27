/**
 * Created by RIGHJES on 4/27/2016.
 */
(function () {
  angular
    .module('createShipment')
    .factory('shipmentTypesService', shipmentTypesService);

  shipmentTypesService.$inject = ['$http'];

  function shipmentTypesService($http) {
    return {
      getShipmentTypes: getShipmentTypes,
      getShipmentTypeOptions: getShipmentTypeOptions
    };
    function getShipmentTypes() {
      return $http.get('../../assets/shipmentTypes.json');
    }

    function getShipmentTypeOptions() {
      return $http.get('../../assets/shipmentTypeOptions.json');
    }
  }
})();
