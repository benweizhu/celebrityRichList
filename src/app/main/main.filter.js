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
    .filter('currencyConverter', function (currencyFilter) {
      return function (amount, selectedCurrency, currencyRate) {
        var rate = currencyRate.rates[selectedCurrency];
        return rate ? currencyFilter(amount * rate, currencyMap[selectedCurrency], 0) : currencyFilter(amount, '$', 0);
      };
    });

  function filterCountry(items, selectedCountry) {
    return _.chain(items).filter(function(item){ return item.country === selectedCountry;}).value();
  }

})();
