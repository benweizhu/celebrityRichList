(function () {
  'use strict';

  angular
    .module('celebrityRichList')
    .filter('countryFilter', function () {
      return function (items, selectedCountry) {
        return selectedCountry === "Show All" ? items : filterCountry(items, selectedCountry);
      };
    });

  function filterCountry(items, selectedCountry) {
    var filtered = [];
    _.each(items, function (item) {
      if (selectedCountry === item.country) {
        filtered.push(item);
      }
    });
    return filtered;
  }

})();
