// 2. uzdevums: login ar nepareizu paroli parāda kļūdas paziņojumu.
//
// Soļi:
//   1. Atver https://www.saucedemo.com
//   2. Ievadi lietotāju: standard_user
//   3. Ievadi nepareizu paroli, piem.: nepareiza_parole
//   4. Nospied "Login"
//   5. Pārbaudi, ka kļūdas paziņojums satur tekstu:
//      "Username and password do not match"
//
// Padoms: kļūdas paziņojumu atradīsi ar selektoru [data-test="error"]
// Padoms: daļēju tekstu pārbauda ar toHaveText(..., { containing: true })

import { error } from "node:console"

describe('Login ar nepareizu paroli', () => {
    it('parāda kļūdas paziņojumu', async () => {
        // Tavs kods šeit
        await browser.url('https://www.saucedemo.com')
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('nepareiza_parole')
        await $('#login-button').click() //.getText

        const errorMessage = await $('[data-test="error"]')

        await errorMessage.waitForDisplayed({timeout: 5000, timeoutMsg: "Kļūdas pazīņojums"})

        await expect(errorMessage).toHaveText(
            'Username and password do not match',
            { containing: true }
        )
        
    })
})
