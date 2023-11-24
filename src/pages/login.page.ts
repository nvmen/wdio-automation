import Page from "./page.js";
import moveTo from '../support/action/moveTo.js';
import setInputField from "../support/action/setInputField.js";
/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    private Elements = {
        username: '#username',
        password: '#password'
    };
    public get inputUsername () {
        return $(this.Elements.username);
    }

    public get inputPassword () {
        return $(this.Elements.password);
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        //await moveTo(this.Elements.username, '10', '10');
        setInputField('set',username,this.Elements.username)
       // await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}
export default new LoginPage();
