(function () {
  'use strict';

  describe('main filters', function () {

    var $filter;
    var items = [
      {
        "rank": 1,
        "name": "John Walton",
        "netWorth": 21000000000,
        "age": "68",
        "country": "United States"
      },
      {
        "rank": 2,
        "name": "Rupert Murdoch",
        "netWorth": 14000000000,
        "age": "84",
        "country": "Australia"
      },
      {
        "rank": 3,
        "name": "Donald Newhouse",
        "netWorth": 8400000000,
        "age": "85",
        "country": "United States"
      }
    ];

    var currencyRate = {
      "base": "USD",
      "date": "2015-11-03",
      "rates": {
        "AUD": 1.5
      }
    };

    beforeEach(function () {
      module('celebrityRichList');

      inject(function (_$filter_) {
        $filter = _$filter_;
      });
    });

    it('should filter out countries which do not match', function () {
      var result = $filter('countryFilter')(items, 'Australia');

      expect(result).toEqual([{
        "rank": 2,
        "name": "Rupert Murdoch",
        "netWorth": 14000000000,
        "age": "84",
        "country": "Australia"
      }]);
    });

    it('should change US Dollar to Australia Dollar', function () {
      var result = $filter('currencyConverter')(100, 'AUD', currencyRate);

      expect(result).toEqual('$AUD150');
    });
  });
})();
