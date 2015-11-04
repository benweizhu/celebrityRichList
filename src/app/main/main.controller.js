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
      }
    };

    function birthPlaceOptions(celebrityList) {
      return _.chain(celebrityList)
        .map(function (item) {
          return {id: item.country, name: item.country}
        })
        .uniq(function (item) {
          return item.id;
        })
        .sort(sortByAlphabet)
        .unshift({id: 'Show All', name: 'Show All'})
        .value()
    }

    function sortByAlphabet(itemA, itemB) {
      if (itemA.id < itemB.id) {
        return -1;
      } else if (itemB.id < itemA.id) {
        return 1;
      } else {
        return 0;
      }
    }
  }
})();
