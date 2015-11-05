(function () {
  'use strict';

  var currencyMap = {
    AUD: '$AUD',
    EUR: '€'
  };

  var orderMap = {
    Rank: function (items) {
      return items;
    },
    Age: function (items) {
      return _.sortBy(items, 'age');
    },
    Name: function (items) {
      return _.sortBy(items, 'name');
    }
  };

  angular
    .module('celebrityRichList')
    .filter('countryFilter', function () {
      return function (items, selectedCountry) {
        return selectedCountry === "Show All" ? items : filterCountry(items, selectedCountry);
      };
    })
    .filter('rankFilter', function () {
      return function (items, selectedOrderType) {
        return orderMap[selectedOrderType](items);
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
