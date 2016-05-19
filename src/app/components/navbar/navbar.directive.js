(function() {
  'use strict';

  angular
    .module('createShipment')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment,githubService) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
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
  }

})();
