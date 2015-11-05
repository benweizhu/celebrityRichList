(function () {
  'use strict';

  angular
    .module('celebrityRichList')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(celebrityList, currencyRate) {
    var vm = this;
    vm.data = celebrityList;
    vm.currencyRate = currencyRate;
    vm.allInputs = {
      birthPlace: {
        options: birthPlaceOptions(celebrityList.celebrityList),
        selected: 'Show All'
      },
      currency: {
        options: [
          {id: 'USD', name: 'US Dollar'},
          {id: 'EUR', name: 'Euro'},
          {id: 'AUD', name: 'Australia Dollar'}
        ],
        selected: 'USD'
      },
      order: {
        options: [
          {id: 'Rank', name: 'Rank'},
          {id: 'Age', name: 'Age'},
          {id: 'Name', name: 'Name'}
        ],
        selected: 'Rank'
      }
    };

    function birthPlaceOptions(celebrityList) {
      return _.chain(celebrityList)
        .uniq(function (item) {
          return item.country;
        })
        .map(function (item) {
          return {id: item.country, name: item.country}
        })
        .sortBy('id')
        .value()
    }
  }
})();
