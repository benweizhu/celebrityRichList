(function () {
  'use strict';

  describe('Main directives', function () {
    var $compile, $rootScope;

    beforeEach(module('celebrityRichList'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function () {
      var element = $compile("<page-loader></page-loader>")($rootScope);

      $rootScope.$digest();
      expect(element.html()).toEqual('Please wait!!! Application is requesting for latest currency rate data.');

      $rootScope.$broadcast("$routeChangeStart");
      expect(element.hasClass('ng-hide')).toEqual(false);

      $rootScope.$broadcast("$routeChangeSuccess");
      expect(element.hasClass('ng-hide')).toEqual(true);
    });
  });
})();
