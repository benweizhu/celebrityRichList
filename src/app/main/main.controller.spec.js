(function() {
  'use strict';

  describe('controllers', function(){
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
        }
      ]
    };

    beforeEach(module('celebrityRichList'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController',{celebrityList: celebrityList});
    }));

    it('should assign celebrityList to vm.celebrityList', function() {
      expect(vm.celebrityList).toEqual(celebrityList);
    });

  });
})();
