// Page Object: pirkuma noformēšana (3 soļi).
//   1. solis: vārds, uzvārds, pasta indekss -> Continue
//   2. solis: pārskats                     -> Finish
//   3. solis: "Thank you for your order!"

class CheckoutPage {
    get firstName() { return $('[data-test="firstName"]') }
    get lastName() { return $('[data-test="lastName"]') }
    get postalCode() { return $('[data-test="postalCode"]') }
    get continueBtn() { return $('[data-test="continue"]') }
    get finishBtn() { return $('[data-test="finish"]') }
    get completeHeader() { return $('[data-test="complete-header"]') }
    get error() { return $('[data-test="error"]') }

    async fillInformation(first: string, last: string, postal: string) {
        await this.firstName.setValue(first)
        await this.lastName.setValue(last)
        await this.postalCode.setValue(postal)
        await this.continueBtn.click()
    }

    async finish() {
        await this.finishBtn.click()
    }
}

export default new CheckoutPage()
