import LoginPage from '../pageobjects/login.page'

// 9. uzdevums: bloķēts lietotājs nevar ielogoties.
//
// Soļi:
//   1. Atver login lapu
//   2. Ielogojies ar  locked_out_user / secret_sauce
//   3. Pārbaudi, ka kļūdas paziņojums satur "locked out"
//
// Padoms: LoginPage.error
// Padoms: daļēju tekstu pārbauda ar toHaveText(..., { containing: true })

describe('Bloķēts lietotājs', () => {
    it('redz kļūdu par bloķēšanu', async () => {
        await LoginPage.open()
        await LoginPage.login('locked_out_user', 'secret_sauce')

        await expect(LoginPage.error).toHaveText('locked out', { containing: true })
    })
})
