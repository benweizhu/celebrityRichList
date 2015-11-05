(function () {
  'use strict';
  angular
    .module('celebrityRichList')
    .directive('pageLoader', function ($rootScope) {
      return {
        restrict: 'E',
        replace: true,
        template: '<div class="alert alert-success text-center ng-hide">Please wait!!! Application is requesting for latest currency rate data.</div>',
        link: function (scope, element) {
          var routeChangeStartCallback = $rootScope.$on('$routeChangeStart', function () {
            element.removeClass('ng-hide');
          });
          var routeChangeSuccessCallback = $rootScope.$on('$routeChangeSuccess', function () {
            element.addClass('ng-hide');
          });
          $rootScope.$on('$destroy', routeChangeStartCallback);
          $rootScope.$on('$destroy', routeChangeSuccessCallback);
        }
      };
    });
})();
