# QA Assignment: Playwright Automation Suite

This repository contains the completed QA assignment for [SauceDemo](https://www.saucedemo.com). It demonstrates page object model design, functional UI testing, a complete purchase journey, API testing, and exploratory bug reporting.

## Assignment Tasks

### Task 1: Project Documentation

This README explains the project structure, test coverage, installation requirements, and commands an examiner can use to run the solution.

### Task 2: Page Objects

The `Task_2_Pages` folder contains reusable page object classes:

- `LoginPage.js`: login, validation errors, and logout interactions
- `ProductsPage.js`: product selection, cart navigation, and inventory interactions
- `CartPage.js`: cart item verification and checkout navigation
- `CheckoutPage.js`: checkout form, order summary, and order confirmation interactions

The page objects keep selectors and browser actions separate from test scenarios.

### Task 3: UI and End-to-End Tests

The `Task_3_Tests` folder contains:

- `login.spec.js`: successful login, invalid credentials, empty-field validation, and logout
- `e2e.spec.js`: login, add two products, verify the cart, complete checkout, and verify the order confirmation

### Task 4: Bug Report

`Task_4_BUG_REPORT.md` documents issues found while testing SauceDemo with the `problem_user` account. Each finding includes severity, affected component, reproduction steps, expected behavior, and actual behavior.

### Task 5: Bonus API Tests

`Task_5_BONUS/api.spec.js` contains API tests against ReqRes:

- `GET /api/users?page=2` returns a user list
- `POST /api/users` creates a user
- `POST /api/login` returns a validation error when the password is missing

## Project Structure

```text
QA Assignment/
|-- Task_1_README.md
|-- Task_2_Pages/
|   |-- CartPage.js
|   |-- CheckoutPage.js
|   |-- LoginPage.js
|   `-- ProductsPage.js
|-- Task_3_Tests/
|   |-- e2e.spec.js
|   `-- login.spec.js
|-- Task_4_BUG_REPORT.md
|-- Task_5_BONUS/
|   `-- api.spec.js
|-- package.json
|-- package-lock.json
`-- playwright.config.js
```

## Prerequisites

- Node.js 18 or later
- npm

## Installation

Run these commands from the repository root, `QA Assignment`:

```bash
npm install
npx playwright install
```

## Test Commands

Run the complete test suite:

```bash
npm test
```

Run only Task 3 UI and end-to-end tests:

```bash
npm run test:task3
```

Run only the login scenarios:

```bash
npm run test:login
```

Run only the end-to-end purchase flow:

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

The tests use SauceDemo credentials defined in the test files: `standard_user` / `secret_sauce`.

## Repository Information

- Repository: [Oshi2000/QA-assignment-Newnop](https://github.com/Oshi2000/QA-assignment-Newnop)
- Test framework: Playwright Test
- Test target: SauceDemo
- API target: ReqRes
