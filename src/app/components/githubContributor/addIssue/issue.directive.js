/**
 * Created by RIGHJES on 5/3/2016.
 */
/**
 * Created by RIGHJES on 5/3/2016.
 */
(function() {
  'use strict';

  angular
    .module('createShipment')
    .directive('issueModal', issueModal);

  /** @ngInject */
  function issueModal() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/githubContributor/addIssue/issue.html',
      scope: {
        show: '='
      },
      controller: issueController,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;
  }
  
  /** @ngInject */
  function issueController(githubService){
    var vm = this;

    vm.addGitHubIssue = addGitHubIssue;
    vm.issueTitle = '';
    vm.issueBody = '';

    function addGitHubIssue(){
      githubService.addIssue({
        "title" : vm.issueTitle,
        "body" : vm.issueBody
      }).then(function(repsonse){
        var br;
      });
    }
  }

})();

