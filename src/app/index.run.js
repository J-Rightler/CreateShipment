(function() {
  'use strict';

  angular
    .module('createShipment')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
