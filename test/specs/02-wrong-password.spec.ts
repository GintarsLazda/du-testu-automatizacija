// 2. uzdevums: login ar nepareizu paroli parāda kļūdas paziņojumu.

describe('Login ar nepareizu paroli', () => {
    it('parāda kļūdas paziņojumu', async () => {
        await browser.url('https://www.saucedemo.com')

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('nepareiza_parole')
        await $('#login-button').click()

        await expect($('[data-test="error"]')).toHaveText(
            'Username and password do not match',
            { containing: true }
        )
    })
})
