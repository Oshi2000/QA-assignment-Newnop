class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = '#checkout';
    this.cartItem = '.cart_item';
  }

  async getCartItemsCount() {
    return await this.page.locator(this.cartItem).count();
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = { CartPage };