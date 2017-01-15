import {Whiteboard03Page} from './app.po';

describe('Whiteboard03 App', function() {
  let page: Whiteboard03Page;

  beforeEach(() => {
    page = new Whiteboard03Page();
  });

  it('should display message saying <Ellzap Learning>', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ellzap Learning');
  });
});
