(function() {
  'use strict';

  angular
    .module('createShipment')
    .factory('githubService', githubService);

  /** @ngInject */
  function githubService($log, $http) {
    var apiHost = 'https://api.github.com/repos/jdiggs/createShipment';

    var service = {
      apiHost: apiHost,
      getContributors: getContributors,
      addIssue: addIssue
    };

    return service;

    function addIssue(issue){
      return $http.post(apiHost + '/issues', issue).then(addIssueComplete).catch(httpFailed);

      function addIssueComplete(response){
        return response.data;
      }
    }
    function getContributors(limit) {
      if (!limit) {
        limit = 30;
      }

      return $http.get(apiHost + '/contributors?per_page=' + limit)
        .then(getContributorsComplete)
        .catch(httpFailed);

      function getContributorsComplete(response) {
        return response.data;
      }


    }
    function httpFailed(error) {
      $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
    }
  }
})();
