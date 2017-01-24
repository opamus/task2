import { T2w1Page } from './app.po';

describe('t2w1 App', function() {
  let page: T2w1Page;

  beforeEach(() => {
    page = new T2w1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
