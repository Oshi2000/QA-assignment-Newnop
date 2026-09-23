const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const { ProductsPage } = require('../Pages/ProductsPage');

const users = {
  standard: 'standard_user',
  password: 'secret_sauce'
};

test.describe('Login flow and negative scenarios', () => {
  let loginPage;
  let productsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.goto();
  });

  test('standard user successfully logs in', async ({ page }) => {
    await loginPage.login(users.standard, users.password);
    expect(page.url()).toContain('/inventory.html');
    expect(await productsPage.getTitleText()).toBe('Products');
  });

  test('bad password shows an error message', async () => {
    await loginPage.login(users.standard, 'wrong_password');
    expect(await loginPage.getErrorMessage()).toContain(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });

  test('blank form shows a required username error', async () => {
    await loginPage.login('', '');
    expect(await loginPage.getErrorMessage()).toContain(
      'Epic sadface: Username is required'
    );
  });

  test('logout returns the user to the login page', async () => {
    await loginPage.login(users.standard, users.password);
    await productsPage.logout();
    expect(loginPage.page.url()).toBe('https://www.saucedemo.com/');
  });
});