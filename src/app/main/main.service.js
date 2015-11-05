(function () {
  'use strict';

  angular
    .module('celebrityRichList')
    .constant('celebrityUrl', '/app/json/celebrityRichList.json')
    .constant('currencyRateUrl', '/app/json/currencyRate.json')
    .factory('celebrityList', function ($resource, celebrityUrl) {
      return $resource(celebrityUrl);
    })
    .factory('currencyRate', function ($resource, currencyRateUrl) {
      return $resource(currencyRateUrl);
    });
})();
