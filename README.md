# QA Assignment

Playwright test automation project for [SauceDemo](https://www.saucedemo.com), including page objects, UI tests, an end-to-end purchase flow, API tests, and a documented bug report.

## Project Structure

```text
QA Assignment/
+-- BONUS/
|   `-- api.spec.js             # ReqRes API tests
+-- Pages/
|   |-- CartPage.js             # Cart page object
|   |-- CheckoutPage.js         # Checkout page object
|   |-- LoginPage.js            # Login page object
|   `-- ProductsPage.js         # Products page object
+-- tests/
|   |-- e2e.spec.js             # End-to-end purchase flow
|   `-- login.spec.js           # Login and negative scenarios
+-- BUG_REPORT.md               # SauceDemo problem_user findings
+-- package.json
`-- package-lock.json
```

## Prerequisites

- Node.js 18 or later
- npm

## Installation

```bash
npm install
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run the login tests:

```bash
npx playwright test tests/login.spec.js
```

Run the end-to-end purchase test:

```bash
npx playwright test tests/e2e.spec.js
```

Run the BONUS API tests:

```bash
npx playwright test BONUS/api.spec.js
```

List discovered tests without executing them:

```bash
npx playwright test --list
```

## Test Coverage

### Login Tests

- Successful login with `standard_user`
- Invalid password validation
- Empty-field validation
- Logout flow

### End-to-End Purchase Test

- Login to SauceDemo
- Add two products to the cart
- Verify cart item count
- Complete checkout information
- Verify the order summary
- Complete the order and verify confirmation

### BONUS API Tests

The API suite uses ReqRes and covers:

- `GET /api/users?page=2`
- `POST /api/users`
- `POST /api/login` with a missing password

### Bug Report

See [BUG_REPORT.md](BUG_REPORT.md) for the documented SauceDemo issues found using the `problem_user` account.

## Repository

[GitHub: Oshi2000/QA-assignment-Newnop](https://github.com/Oshi2000/QA-assignment-Newnop)
