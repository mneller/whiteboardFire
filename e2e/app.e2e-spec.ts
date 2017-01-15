import {Whiteboard03Page} from './app.po';
import {by, browser} from 'protractor';

describe('Whiteboard03 App', function() {
  const nbOfInitialPages = 3;
  let page: Whiteboard03Page;

  beforeEach(() => {
    page = new Whiteboard03Page();
    page.navigateTo();
  });

  it('should display message saying <Ellzap Learning>', () => {
    expect(page.getParagraphText()).toEqual('Ellzap Learning');
  });

  it('should have 3 initial stickers', () => {
    expect(page.getAllSticker().count()).toEqual(nbOfInitialPages);
  });

  it('should be possible to add stickers', () => {
    // page.getAllSticker().count().then((res) => nbOfSticker = res);
    let addButton = page.getAddButton();
    addButton.click();
    expect(page.getAllSticker().count()).toEqual(nbOfInitialPages + 1);
  });

  it('should be possible to delete a new created sticker', () => {
    let addButton = page.getAddButton();
    addButton.click();
    let sticker = page.getStickerById(nbOfInitialPages);
    let ta = sticker.element(by.css('textarea'));
    ta.sendKeys('Here was hugo');
    let deleteButton = page.getDeleteButton();
    deleteButton.click();
    expect(page.getAllSticker().count()).toEqual(nbOfInitialPages + 1);
  });

  it('should be possible to move stickers', () => {
    let sticker = page.getStickerById(1);
    let x: number;
    let y: number;
    sticker.getLocation().then( (location) => {
        x = location.x;
        y = location.y;
    });

    browser.sleep(1000);
    // ToDo: Why is this not working?
    browser.actions()
        .mouseMove(sticker, {x: 0, y: 0})
        .mouseDown()
        .mouseMove({x: 10, y: 10})
        .mouseUp()
        .perform();
    browser.sleep(1000);
    sticker.getLocation().then( (location) => {
        expect(location.x).toBe(x);
        expect(location.y).toBe(y);
    });
  });
});
