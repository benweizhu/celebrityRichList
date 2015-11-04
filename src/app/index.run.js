(function() {
  'use strict';

  angular
    .module('celebrityRichList')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
