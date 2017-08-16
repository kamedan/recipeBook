import { RecipeStorePage } from './app.po';

describe('recipe-store App', () => {
  let page: RecipeStorePage;

  beforeEach(() => {
    page = new RecipeStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
