(function() {
  'use strict';

  angular
    .module('celebrityRichList')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, celebrityList) {
    var vm = this;
    vm.celebrityList = celebrityList;
  }
})();
