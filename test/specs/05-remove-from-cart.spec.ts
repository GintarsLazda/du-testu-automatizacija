import LoginPage from '../pageobjects/login.page'
import InventoryPage from '../pageobjects/inventory.page'
import { env } from '../support/env'

// 5. uzdevums: izņem preci no groza.
//
// Soļi:
//   1. Ielogojies (LoginPage.open() un LoginPage.login(...))
//   2. Pievieno grozam "Sauce Labs Backpack"
//   3. Pārbaudi, ka groza ikonā ir 1
//   4. Nospied "Remove" pie tās pašas preces
//   5. Pārbaudi, ka groza skaitlis vairs NAV redzams
//
// Padoms: InventoryPage.addToCart('sauce-labs-backpack')
// Padoms: InventoryPage.removeFromCart('sauce-labs-backpack')
// Padoms: ka elementa nav, pārbauda ar  expect(...).not.toBeExisting()

describe('Iepirkumu grozs', () => {
    it('pēc izņemšanas grozs ir tukšs', async () => {
        await LoginPage.open()
        await LoginPage.login(env('SAUCE_USER'), env('SAUCE_PASSWORD'))

        await InventoryPage.addToCart('sauce-labs-backpack')
        await expect(InventoryPage.cartBadge).toHaveText('1')

        await InventoryPage.removeFromCart('sauce-labs-backpack')
        await expect(InventoryPage.cartBadge).not.toBeExisting()
    })
})
