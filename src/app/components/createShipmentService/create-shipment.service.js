/**
 * Created by RIGHJES on 4/21/2016.
 */
(function(){
  angular
    .module('createShipment')
    .factory('createShipmentService', createShipmentService);

  createShipmentService.$inject = ['$resource'];

  function createShipmentService($resource){
    var baseUrl = 'http://chrit323:8083/';
    return $resource(baseUrl,null,{
      getShipments:{
        method: 'GET',
        params:{Url: '@Url'},
        url: baseUrl + ':Url'
      }
    });
  }
})();
