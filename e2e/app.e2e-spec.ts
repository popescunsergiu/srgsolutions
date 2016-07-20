import { SrgSolutionsSitePage } from './app.po';

describe('srg-solutions-site App', function() {
  let page: SrgSolutionsSitePage;

  beforeEach(() => {
    page = new SrgSolutionsSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
