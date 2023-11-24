import { Given, When, Then } from '@wdio/cucumber-framework';

// @ts-ignore
import LoginPage from '../pages/login.page.ts';
// @ts-ignore
import SecurePage from '../pages/secure.page.ts';

const pages = {
    login: LoginPage
}

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
