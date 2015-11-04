(function () {
  'use strict';

  describe('controllers', function () {
    var vm;

    var celebrityList = {
      "pageTitleH1": "Technical Test",
      "description": "A list of the Top 50 Richest Celebrities of 2014",
      "referenceLink": "http://www.therichest.com/top-lists/top-100-richest-celebrities/",
      "usDollarValue": "1",
      "australianDollarValue": "0.78",
      "euroValue": "0.92",
      "celebrityList": [
        {
          "rank": 1,
          "name": "John Walton",
          "netWorth": 21000000000,
          "age": "68",
          "country": "United States"
        }, {
          "rank": 2,
          "name": "Rupert Murdoch",
          "netWorth": 14000000000,
          "age": "84",
          "country": "Australia"
        }, {
          "rank": 3,
          "name": "Arnon Milchan",
          "netWorth": 3800000000,
          "age": "70",
          "country": "Israel"
        }
      ]
    };

    beforeEach(module('celebrityRichList'));
    beforeEach(inject(function (_$controller_) {
      vm = _$controller_('MainController', {celebrityList: celebrityList});
    }));

    it('should assign celebrityList to vm.celebrityList', function () {
      expect(vm.celebrityList).toEqual(celebrityList);
    });

    it('should add "show all" and sorted options for birthPlace', function () {
      expect(vm.allInputs.birthPlace.options).toEqual([
        {id: "Show All", name: "Show All"},
        {id: "Australia", name: "Australia"},
        {id: "Israel", name: "Israel"},
        {id: "United States", name: "United States"}]);
    });

  });
})();
