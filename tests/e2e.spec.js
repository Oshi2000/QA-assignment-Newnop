const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const { ProductsPage } = require('../Pages/ProductsPage');
const { CartPage } = require('../Pages/CartPage');
const { CheckoutPage } = require('../Pages/CheckoutPage');

const users = {
  standard: 'standard_user',
  password: 'secret_sauce'
};

const checkoutInfo = {
  firstName: 'Test',
  lastName: 'User',
  postalCode: '12345'
};

test.describe('Task 3 - End-to-End Purchase Flow', () => {
  test('Complete E2E order flow from login to confirmation', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard, users.password);
    expect(page.url()).toContain('/inventory.html');

    await productsPage.addProductToCartByIndex(0);
    await productsPage.addProductToCartByIndex(1);
    expect(await productsPage.getCartBadgeCount()).toBe('2');

    await productsPage.goToCart();
    expect(await cartPage.getCartItemsCount()).toBe(2);

    await cartPage.proceedToCheckout();
    await checkoutPage.fillInformation(
      checkoutInfo.firstName,
      checkoutInfo.lastName,
      checkoutInfo.postalCode
    );

    expect(await checkoutPage.getSummaryItemsCount()).toBe(2);

    await checkoutPage.completeOrder();
    expect(await checkoutPage.getConfirmationMessage()).toContain(
      'Thank you for your order!'
    );
  });
});