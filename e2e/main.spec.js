'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should contain title "Celebrity Rich List"', function() {
    expect(page.title.getText()).toBe('Celebrity Rich List');
  });

});
