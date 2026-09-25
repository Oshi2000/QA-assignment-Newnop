# QA Assignment: Playwright Automation Suite

This repository contains a complete QA automation assignment for [SauceDemo](https://www.saucedemo.com). It demonstrates reusable page objects, functional UI tests, an end-to-end purchase flow, exploratory bug reporting, and bonus API testing.

## Assignment Tasks

### Task 1: Project Documentation

This file explains the solution, folder structure, test coverage, prerequisites, and commands required to install and run the project.

## Prerequisites

- Node.js 18 or later
- npm

## Installation

Run these commands from the repository root, `QA Assignment`:

```bash
npm install
npx playwright install
```

## Run Commands

Run the complete test suite (Tasks 3 and 5):

```bash
npm test
```

Run only the Task 3 UI and end-to-end tests:

```bash
npm run test:ui
```

Run only the login tests:

```bash
npm run test:login
```

Run only the end-to-end purchase test:

```bash
npm run test:e2e
```

Run the Task 5 bonus API tests:

```bash
npm run test:bonus
```

List all discovered tests without executing them:

```bash
npm run test:list
```

Open the HTML report after a test run:

```bash
npm run report
```


### Task 2: Page Objects

The `Task_2_Pages` folder contains the reusable page object classes used by the UI tests:

- `LoginPage.js`: login form, validation messages, and navigation to the login page
- `ProductsPage.js`: product selection, cart navigation, cart badge, and logout
- `CartPage.js`: cart item count and checkout navigation
- `CheckoutPage.js`: checkout details, order summary, and order confirmation

Keeping selectors and browser actions in page objects makes the test scenarios easier to read and maintain.

### Task 3: UI and End-to-End Tests

The `Task_3_Tests` folder contains the automated SauceDemo browser tests:

- `login.spec.js`: successful login, invalid credentials, empty-field validation, and logout
- `e2e.spec.js`: login, add two products, verify the cart, complete checkout, and verify order confirmation

### Task 4: Bug Report

`BUG_REPORT.md` documents defects observed with the SauceDemo `problem_user` account. Each finding includes severity, affected component, reproduction steps, expected behavior, and actual behavior.

### Task 5: Bonus API Tests

`Task_5_BONUS/api.spec.js` contains API tests against ReqRes:

- `GET /api/users?page=2` verifies a successful user list response
- `POST /api/users` verifies user creation
- `POST /api/login` verifies the missing-password validation response

## Project Structure

```text
QA Assignment/
|-- README.md
|-- Task_2_Pages/
|   |-- CartPage.js
|   |-- CheckoutPage.js
|   |-- LoginPage.js
|   `-- ProductsPage.js
|-- Task_3_Tests/
|   |-- e2e.spec.js
|   `-- login.spec.js
|-- BUG_REPORT.md
|-- Task_5_BONUS/
|   `-- api.spec.js
|-- screenshot_tests/
|   `-- README.md
|-- package.json
|-- package-lock.json
`-- playwright.config.js
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

### Task 5 API Tests

The API suite uses ReqRes and covers:

- `GET /api/users?page=2`
- `POST /api/users`
- `POST /api/login` with a missing password

### Bug Report

See [BUG_REPORT.md](BUG_REPORT.md) for the documented SauceDemo issues found using the `problem_user` account.

## Screenshot Tests

The `screenshot_tests` folder is reserved for screenshots that support the documented UI findings and test evidence.

## Repository

[GitHub: Oshi2000/QA-assignment-Newnop](https://github.com/Oshi2000/QA-assignment-Newnop)
