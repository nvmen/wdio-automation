import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pages/login.page.ts';
import SecurePage from '../pages/secure.page.ts';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});
