'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/');
    page = require('./main.po');
  });

  it('should only contain 3 celebrities when select "Australia" as birth place', function() {
    expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(50);
    page.birthPlace.sendKeys('Australia');
    expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(3);
  });

  it('should only contain 50 celebrities when select "Show All" as birth place', function() {
    page.birthPlace.sendKeys('Show All');
    expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(50);
  });

  it('should only contain 1 celebrity when type in "johnson" in search text field', function() {
    expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(50);
    page.searchText.sendKeys('johnson');
    expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(1);
  });

  it('should convert US dollar to Australia dollar when change currency select to "Australia Dollar"', function() {
    expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(50);
    page.searchText.sendKeys('johnson');
    page.currency.sendKeys('AUD');
    expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(1);
    expect(element(by.binding('celebrity.netWorth')).getText()).toMatch(/Net Worth:\$AUD.+/);
  });

  it('should convert US dollar to Australia dollar when change currency select to "Australia Dollar"', function() {
    expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(50);
    page.order.sendKeys('Age');
    element.all(by.repeater('celebrity in main.data.celebrityList')).then(function(celebrities) {
      expect(celebrities[0].element(by.css('.rank')).getText()).toEqual('No.40');
      expect(celebrities[1].element(by.css('.rank')).getText()).toEqual('No.39');
      expect(celebrities[2].element(by.css('.rank')).getText()).toEqual('No.41');
    });
  });

});
