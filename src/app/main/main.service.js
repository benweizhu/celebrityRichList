(function() {
  'use strict';

  angular
    .module('celebrityRichList')
    .factory('celebrityList', function($resource) {
      return $resource('/app/json/celebrityRichList.json');
    })
    .factory('currencyRate', function($resource){
      return $resource('/app/json/currentyRate.json');
    });
})();
