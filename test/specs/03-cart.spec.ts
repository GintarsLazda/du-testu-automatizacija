// 3. uzdevums: pievieno preci grozam un pārbaudi, ka grozā ir 1 prece.

describe('Iepirkumu grozs', () => {
    it('pēc pievienošanas grozā ir 1 prece', async () => {
        await browser.url('https://www.saucedemo.com')

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()

        await $('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        await expect($('[data-test="shopping-cart-badge"]')).toHaveText('1')
    })
})
