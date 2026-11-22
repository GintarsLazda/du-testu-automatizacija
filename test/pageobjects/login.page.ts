// Page Object: login lapa.
// Visi šīs lapas selektori un darbības ir vienā vietā.
// Ja mainās selektors, to labo tikai šeit, nevis katrā testā.

class LoginPage {
    get username() { return $('#user-name') }
    get password() { return $('#password') }
    get loginBtn() { return $('#login-button') }
    get error() { return $('[data-test="error"]') }

    async open() {
        await browser.url('https://www.saucedemo.com')
    }

    async login(user: string, pass: string) {
        await this.username.setValue(user)
        await this.password.setValue(pass)
        await this.loginBtn.click()
    }
}

export default new LoginPage()
