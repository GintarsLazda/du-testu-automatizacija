// 3. uzdevums: pievieno preci grozam un pārbaudi, ka grozā ir 1 prece.
//
// Soļi:
//   1. Ielogojies (tāpat kā 1. uzdevumā)
//   2. Nospied "Add to cart" pogu pie "Sauce Labs Backpack"
//   3. Pārbaudi, ka groza ikonā (augšā labajā stūrī) redzams skaitlis 1
//
// Padoms: pogas selektors  [data-test="add-to-cart-sauce-labs-backpack"]
// Padoms: groza skaitlis   [data-test="shopping-cart-badge"]


describe('Iepirkumu grozs', () => {
    it('pēc pievienošanas grozā ir 1 prece', async () => {
        // Open the website
        await browser.url('https://www.saucedemo.com')

        // Log in
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()

        // Add Sauce Labs Backpack to cart
        await $('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        // Check that the cart contains 1 item
        const cartBadge = await $('[data-test="shopping-cart-badge"]')

        await expect(cartBadge).toHaveText('1')
        
    })
})

