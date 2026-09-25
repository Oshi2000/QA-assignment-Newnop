const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Task_2_Pages/LoginPage');
const { ProductsPage } = require('../Task_2_Pages/ProductsPage');

const users = {
  standard: 'standard_user',
  password: 'secret_sauce'
};

test.describe('Task 3 - Login Flow & Negative Scenarios', () => {
  let loginPage;
  let productsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.goto();
  });

  test('Happy path: standard_user successfully logs in', async ({ page }) => {
    await loginPage.login(users.standard, users.password);
    expect(page.url()).toContain('/inventory.html');
    expect(await productsPage.getTitleText()).toBe('Products');
  });

  test('Invalid credentials: bad password shows error message', async () => {
    await loginPage.login(users.standard, 'wrong_password');
    expect(await loginPage.getErrorMessage()).toContain(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });

  test('Empty fields: submitting blank form shows error message', async () => {
    await loginPage.login('', '');
    expect(await loginPage.getErrorMessage()).toContain(
      'Epic sadface: Username is required'
    );
  });

  test('Logout flow: verify user returns to login page', async () => {
    await loginPage.login(users.standard, users.password);
    await productsPage.logout();
    expect(loginPage.page.url()).toBe('https://www.saucedemo.com/');
  });
});