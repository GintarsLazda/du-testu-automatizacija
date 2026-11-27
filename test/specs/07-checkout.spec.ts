import LoginPage from '../pageobjects/login.page'
import InventoryPage from '../pageobjects/inventory.page'
import CartPage from '../pageobjects/cart.page'
import CheckoutPage from '../pageobjects/checkout.page'
import { env } from '../support/env'

// 7. uzdevums: nopērc preci no sākuma līdz beigām.
//
// Soļi:
//   1. Ielogojies
//   2. Pievieno grozam "Sauce Labs Backpack"
//   3. Atver grozu un nospied "Checkout"
//   4. Ievadi vārdu, uzvārdu un pasta indeksu, nospied "Continue"
//   5. Nospied "Finish"
//   6. Pārbaudi, ka redzams "Thank you for your order!"
//
// Padoms: InventoryPage.openCart(), CartPage.checkout()
// Padoms: CheckoutPage.fillInformation('Anna', 'Bērziņa', 'LV-5401'), CheckoutPage.finish()
// Padoms: paziņojums ir CheckoutPage.completeHeader

describe('Pirkums', () => {
    it('lietotājs var nopirkt preci', async () => {
        await LoginPage.open()
        await LoginPage.login(env('SAUCE_USER'), env('SAUCE_PASSWORD'))

        await InventoryPage.addToCart('sauce-labs-backpack')
        await InventoryPage.openCart()
        await CartPage.checkout()

        await CheckoutPage.fillInformation('Anna', 'Bērziņa', 'LV-5401')
        await CheckoutPage.finish()

        await expect(CheckoutPage.completeHeader).toHaveText('Thank you for your order!')
    })
})
