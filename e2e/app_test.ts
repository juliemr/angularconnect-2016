import {browser, element, by} from 'protractor';

describe('my app', () => {
  beforeEach(() => {
    browser.get('http://localhost:9095/dist');
  });

  it('should play a game by clicking', () => {
    var boxes = element.all(by.css('.ttt-box'));

    boxes.get(1).click();
    browser.sleep(500);

    boxes.get(0).click();
    browser.sleep(500);

    boxes.get(4).click();
    browser.sleep(500);

    boxes.get(2).click();
    browser.sleep(500);

    boxes.get(7).click();

    browser.sleep(500);

    expect(element(by.css('.outcome')).getText()).toEqual('Jane wins!');
  });


  it('should play a game by typing', () => {
    browser.actions().sendKeys("23").perform();
    browser.sleep(500);

    browser.actions().sendKeys("11").perform();
    browser.sleep(500);

    browser.actions().sendKeys("21").perform();
    browser.sleep(500);

    browser.actions().sendKeys("22").perform();
    browser.sleep(500);

    browser.actions().sendKeys("13").perform();
    browser.sleep(500);

    browser.actions().sendKeys("33").perform();
    browser.sleep(500);

    expect(element(by.css('.outcome')).getText()).toEqual('Elizabeth wins!');
  });
});
