/**
 * Created by RIGHJES on 4/27/2016.
 */
(function () {
  angular
    .module('createShipment')
    .factory('shipmentTypesService', shipmentTypesService);

  shipmentTypesService.$inject = ['$http', '$q'];

  function shipmentTypesService($http, $q) {
    var baseUrl = 'http://localhost:15019/UiOptions';

    return {
      createShipmentTypeOption: createShipmentTypeOption,
      updateShipmentTypeOption: updateShipmentTypeOption,
      deleteShipmentTypeOption: deleteShipmentTypeOption,
      getShipmentTypeOptions: getShipmentTypeOptions
    };
    function createShipmentTypeOption(mode, description, route) {
      return $http.post('../../assets/shipmentTypes.json');
    }

    function updateShipmentTypeOption(optionId, mode, description, route) {
      var data = {
        OptionId: optionId,
        Mode: mode,
        Description: description,
        Route: route
      };
      return $http.post(baseUrl + '/' + optionId, data).then(
        function (response) {
          return response;
        },
        function (error) {
          return $q.reject(error);
        }
      )
    }

    function deleteShipmentTypeOption(optionId) {
      return $http.delete(baseUrl + '/' + optionId, null).then(
        function (response) {
          return response;
        },
        function (error) {
          return $q.reject(error);
        }
      )
    }

    function getShipmentTypeOptions() {
      return $http.get(baseUrl + '/', null)
        .then(
          function (response) {
            return response.data;
          },
          function (error) {
            return $q.reject(error);
          });
    }
  }
})();
