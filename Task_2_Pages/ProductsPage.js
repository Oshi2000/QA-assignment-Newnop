class ProductsPage {
  constructor(page) {
    this.page = page;
    this.titleSpan = '.title';
    this.cartBadge = '.shopping_cart_badge';
    this.cartLink = '.shopping_cart_link';
    this.menuButton = '#react-burger-menu-btn';
    this.logoutLink = '#logout_sidebar_link';
  }

  async getTitleText() {
    return await this.page.textContent(this.titleSpan);
  }

  async addProductToCartByIndex(index = 0) {
    await this.page.locator('[id^="add-to-cart"]').nth(index).click();
  }

  async getCartBadgeCount() {
    return await this.page.textContent(this.cartBadge);
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }

  async logout() {
    await this.page.click(this.menuButton);
    await this.page.click(this.logoutLink);
  }
}
module.exports = { ProductsPage };