// Page Object: produktu saraksts (lapa pēc ielogošanās).
//
// Produkta nosaukums selektoros ir rakstīts mazajiem burtiem ar defisēm:
//   "Sauce Labs Backpack"  ->  "sauce-labs-backpack"
//   "Sauce Labs Bike Light" -> "sauce-labs-bike-light"

class InventoryPage {
    get title() { return $('.title') }
    get cartBadge() { return $('[data-test="shopping-cart-badge"]') }
    get cartLink() { return $('[data-test="shopping-cart-link"]') }
    get sortSelect() { return $('[data-test="product-sort-container"]') }
    get itemNames() { return $$('.inventory_item_name') }
    get itemPrices() { return $$('.inventory_item_price') }
    get menuBtn() { return $('#react-burger-menu-btn') }
    get logoutLink() { return $('#logout_sidebar_link') }

    addToCartBtn(product: string) { return $(`[data-test="add-to-cart-${product}"]`) }
    removeBtn(product: string) { return $(`[data-test="remove-${product}"]`) }

    async addToCart(product: string) {
        await this.addToCartBtn(product).click()
    }

    async removeFromCart(product: string) {
        await this.removeBtn(product).click()
    }

    // Kārtošana. Izvēlamies pēc teksta, ko lietotājs redz izvēlnē.
    async sortBy(order: 'nosaukums A-Z' | 'nosaukums Z-A' | 'cena augoši' | 'cena dilstoši') {
        const options = {
            'nosaukums A-Z': 'Name (A to Z)',
            'nosaukums Z-A': 'Name (Z to A)',
            'cena augoši': 'Price (low to high)',
            'cena dilstoši': 'Price (high to low)'
        }
        await this.sortSelect.selectByVisibleText(options[order])
    }

    async openCart() {
        await this.cartLink.click()
    }

    async logout() {
        await this.menuBtn.click()
        await this.logoutLink.click()
    }
}

export default new InventoryPage()
