import LoginPage from '../pageobjects/login.page'
import InventoryPage from '../pageobjects/inventory.page'
import { env } from '../support/env'

// 4. piemērs (gatavs): tas pats login tests, bet ar Page Object un .env.
//
// Salīdzini ar 01-login.spec.ts:
//   - selektori ir pārcelti uz test/pageobjects/login.page.ts
//   - lietotājs un parole nāk no .env faila, nevis ir ierakstīti kodā

describe('Login ar Page Object', () => {
    it('lietotājs var ielogoties', async () => {
        await LoginPage.open()
        await LoginPage.login(env('SAUCE_USER'), env('SAUCE_PASSWORD'))

        await expect(InventoryPage.title).toHaveText('Products')
    })
})
