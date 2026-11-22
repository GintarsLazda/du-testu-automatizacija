// Page Object: iepirkumu grozs.

class CartPage {
    get items() { return $$('.cart_item') }
    get itemNames() { return $$('.inventory_item_name') }
    get checkoutBtn() { return $('[data-test="checkout"]') }

    async checkout() {
        await this.checkoutBtn.click()
    }
}

export default new CartPage()
