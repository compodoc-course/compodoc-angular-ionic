import { AppPage } from './../po/app.po';
import { SidebarPage } from '../po/sidebar.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let sidebarPage: SidebarPage;

  beforeEach(() => {
    page = new AppPage();
    sidebarPage = new SidebarPage();
  });

  it('should display welcome message', async () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to starterBootstrapAdminAngular6!');
    await console.log(sidebarPage.getItemsMenu());
  });
});
