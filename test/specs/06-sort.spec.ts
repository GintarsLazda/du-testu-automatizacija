import LoginPage from '../pageobjects/login.page'
import InventoryPage from '../pageobjects/inventory.page'
import { env } from '../support/env'

// 6. uzdevums: sakārto produktus pēc cenas.
//
// Soļi:
//   1. Ielogojies
//   2. Izvēlies kārtošanu "Price (low to high)"
//   3. Pārbaudi, ka pirmās preces cena ir $7.99
//
// Padoms: InventoryPage.sortBy('cena augoši')
// Padoms: visas cenas:  const prices = await InventoryPage.itemPrices
//         pirmā cena:   prices[0]
// Bonuss: pievieno vēl vienu it(...) ar 'cena dilstoši'. Pirmā cena: $49.99

describe('Produktu kārtošana', () => {
    it('lētākā prece ir pirmā', async () => {
        // Tavs kods šeit

        // Izdzēs šo rindu, kad tests ir uzrakstīts:
        throw new Error('Uzdevums vēl nav izpildīts')
    })
})
