(function () {
  'use strict';
  angular
    .module('celebrityRichList')
    .directive('pageLoader', function () {
      return {
        restrict: 'E',
        replace: true,
        template: '<div class="alert alert-success text-center" ng-show="showAlert">Please wait!!! Application is' +
        ' requesting for latest currency rate data.</div>',
        link: function (scope) {
          scope.$on('$routeChangeStart', function () {
            scope.showAlert = true;
          });
          scope.$on('$routeChangeSuccess', function () {
            scope.showAlert = false;
          });
        }
      };
    });
})();
