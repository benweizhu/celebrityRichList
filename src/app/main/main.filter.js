(function () {
  'use strict';

  var currencyMap = {
    AUD: '$AUD',
    EUR: '€'
  };

  angular
    .module('celebrityRichList')
    .filter('countryFilter', function () {
      return function (items, selectedCountry) {
        return selectedCountry === "Show All" ? items : filterCountry(items, selectedCountry);
      };
    })
    .filter('currencyConverter', function ($filter) {
      return function (amount, selectedCurrency, currencyRate) {
        var rate = currencyRate.rates[selectedCurrency];
        return rate ? $filter('currency')(amount * rate, currencyMap[selectedCurrency], 0) : $filter('currency')(amount, '$', 0);
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
