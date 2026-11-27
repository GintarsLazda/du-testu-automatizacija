import LoginPage from '../pageobjects/login.page'
import InventoryPage from '../pageobjects/inventory.page'
import { env } from '../support/env'

// 8. uzdevums: izlogojies.
//
// Soļi:
//   1. Ielogojies
//   2. Atver izvēlni (☰ augšā pa kreisi) un nospied "Logout"
//   3. Pārbaudi, ka atkal redzama "Login" poga
//
// Padoms: InventoryPage.logout()
// Padoms: redzamību pārbauda ar  expect(...).toBeDisplayed()

describe('Izlogošanās', () => {
    it('pēc izlogošanās redzama login lapa', async () => {
        await LoginPage.open()
        await LoginPage.login(env('SAUCE_USER'), env('SAUCE_PASSWORD'))

        await InventoryPage.logout()

        await expect(LoginPage.loginBtn).toBeDisplayed()
    })
})
