(function () {
  'use strict';

  describe('Main directives', function () {
    var $compile, $scope, $document;

    beforeEach(module('celebrityRichList'));

    beforeEach(inject(function (_$compile_, _$rootScope_,_$document_) {
      $compile = _$compile_;
      $scope = _$rootScope_.$new();
      $document = _$document_;
    }));

    it('Replaces the element with the appropriate content', function () {
      var element = $compile("<page-loader></page-loader>")($scope);
      element.appendTo($document.find('body'));
      expect(element.html()).toEqual('Please wait!!! Application is requesting for latest currency rate data.');

      $scope.$broadcast("$routeChangeStart");
      expect($scope.showAlert).toEqual(true);

      $scope.$broadcast("$routeChangeSuccess");
      expect($scope.showAlert).toEqual(false);
    });
  });
})();
