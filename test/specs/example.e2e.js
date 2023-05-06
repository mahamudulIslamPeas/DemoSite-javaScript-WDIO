import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');
        await expect(browser).toHaveUrlContaining('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        
    })
})


// npm run wdio

// npx wdio run wdio.conf.js --spec example.e2e.js

// npx wdio run wdio.conf.js --suite LoginUser
