'use strict';

describe('The main view', function () {
    var page;
    const number = 500;
    beforeEach(function () {
        browser.get('/');
        page = require('./main.po');
    });

    it('should only contain 3 celebrities when select "Australia" as birth place', function () {
        expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(50);
        page.birthPlace.element(by.cssContainingText('option', 'Australia')).click();
        browser.sleep(number);
        expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(3);
    });

    it('should only contain 50 celebrities when select "Show All" as birth place', function () {
        expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(50);
        page.birthPlace.element(by.cssContainingText('option', 'Australia')).click();
        browser.sleep(number);
        expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(3);
        page.birthPlace.element(by.cssContainingText('option', 'Show All')).click();
        browser.sleep(number);
        expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(50);
    });

    it('should only contain 1 celebrity when type in "johnson" in search text field', function () {
        expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(50);
        page.searchText.sendKeys('johnson');
        browser.sleep(number);
        expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(1);
    });

    it('should convert US dollar to Australia dollar when change currency select to "Australia Dollar"', function () {
        expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(50);
        page.searchText.sendKeys('johnson');
        browser.sleep(number);
        page.currency.element(by.cssContainingText('option', 'Australia Dollar')).click();
        browser.sleep(number);
        expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(1);
        expect(element(by.binding('celebrity.netWorth')).getText()).toMatch(/Net Worth:\$AUD.+/);
    });

    it('should convert US dollar to Australia dollar when change currency select to "Australia Dollar"', function () {
        expect(element.all(by.repeater('celebrity in main.data.celebrityList')).count()).toEqual(50);
        page.order.element(by.cssContainingText('option', 'Age')).click();
        browser.sleep(number);
        element.all(by.repeater('celebrity in main.data.celebrityList')).then(function (celebrities) {
            expect(celebrities[0].element(by.css('.rank')).getText()).toEqual('No.40');
            expect(celebrities[1].element(by.css('.rank')).getText()).toEqual('No.39');
            expect(celebrities[2].element(by.css('.rank')).getText()).toEqual('No.41');
        });
    });

});
