import { browser, by, element } from 'protractor';

export class SidebarPage {
    navigateTo() {
        return browser.get(`/#/dashboard`);
    }

    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }

    async getItemsMenu() {
        await element
            .all(by.css(`#exampleAccordion li.nav-item`))
            .count();
    }
}
