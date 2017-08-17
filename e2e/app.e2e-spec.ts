import { Ng2AdminPage } from './app.po';

describe('ng2-admin App', () => {
  let page: Ng2AdminPage;

  beforeEach(() => {
    page = new Ng2AdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
