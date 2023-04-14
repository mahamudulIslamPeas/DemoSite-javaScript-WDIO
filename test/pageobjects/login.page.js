import Page from './page.js';

class LoginPage extends Page {
    
    get inputUsername () {
        return $("input[placeholder='Username']"); 
    }

    get inputPassword () {
        return $("input[placeholder='Password']");
    }

    get btnSubmit () {
        return $("button[type='submit']");
    }

    // Encapsulation of 
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await browser.pause(1500);
        await console.log('UserName insertion successfull');
        await this.inputPassword.setValue(password);
        await browser.pause(1500);
        await console.log('Password insertion successfull');
        await this.btnSubmit.click();
        await browser.pause(1500);
        await console.log('Successfully clicked on the login button');
    }

    open () {
        return super.open('/auth/login');
    }
}

export default new LoginPage();