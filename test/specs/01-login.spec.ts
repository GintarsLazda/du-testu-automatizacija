// 1. uzdevums: palaid šo testu un apskaties rezultātu terminālī.
//    npm test

describe('Login', () => {
    it('lietotājs var ielogoties', async () => {
        await browser.url('https://www.saucedemo.com')

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()

        await expect($('.title')).toHaveText('Products')
        await browser.pause(3000)
    })
})
