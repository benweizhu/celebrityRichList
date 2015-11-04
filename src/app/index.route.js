(function() {
  'use strict';

  angular
    .module('celebrityRichList')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          celebrityList: function (celebrityList) {
            return celebrityList.get().$promise;
          },
          currencyRate: function (currencyRate) {
            return currencyRate.get().$promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
