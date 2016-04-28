/**
 * Created by RIGHJES on 4/21/2016.
 */
(function(){
  angular
    .module('createShipment')
    .factory('createShipmentService', createShipmentService);

  createShipmentService.$inject = ['$q','$http'];
  function createShipmentService($q, $http){
    var baseUrl = 'http://chrit323:8083/';
    return{
      getShipments: getShipments
    };
    function getShipments(url){
      return $http.get(baseUrl + url,{}).then(
        function (response){
          return response.data;
        },
        function (error){
          return $q.reject(error);
        }
      )
    }
  }
})();
