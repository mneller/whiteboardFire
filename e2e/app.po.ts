import { browser, element, by } from 'protractor';

export class Whiteboard03Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ellzap-root h1')).getText();
  }

  getAllSticker() {
    return element.all(by.css('ellzap-sticker'));
  }

  getAddButton() {
    return element(by.id('addBtn'));
  }

  getDeleteButton() {
    return element(by.id('deleteBtn'));
  }

  getStickerById(id: number) {
    return element(by.id('ellzap-sticker-' + id));
  }
}
