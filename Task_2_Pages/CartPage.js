class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = '#checkout';
    this.cartItem = page.getByRole('button', { name: /View details for/ });
  }

  async getCartItemsCount() {
    return await this.cartItem.count();
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = { CartPage };