import { SkillsquadAppPage } from './app.po';

describe('skillsquad-app App', () => {
  let page: SkillsquadAppPage;

  beforeEach(() => {
    page = new SkillsquadAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
