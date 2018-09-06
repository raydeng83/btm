import { NgAnglandPage } from './app.po';

describe('ng-angland App', () => {
  let page: NgAnglandPage;

  beforeEach(() => {
    page = new NgAnglandPage();
  });

  it('Angland is working', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
