import { browser, element, by } from 'protractor';

export class Whiteboard03Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ellzap-root h1')).getText();
  }
}
