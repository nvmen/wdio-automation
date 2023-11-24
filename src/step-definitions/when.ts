import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pages/login.page.ts';
import SecurePage from '../pages/secure.page.ts';

const pages = {
    login: LoginPage
}

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});
