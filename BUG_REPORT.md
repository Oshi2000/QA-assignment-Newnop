# Bug Report - SauceDemo (`problem_user`)

This document outlines the bugs and UI oddities discovered while exploring [SauceDemo](https://www.saucedemo.com) using the `problem_user` account.

## Bug 1: Incorrect/Broken Product Images in Inventory

- Severity: Medium
- Affected Component: Product Catalog / Inventory Page
- Steps to Reproduce:
  1. Navigate to https://www.saucedemo.com.
  2. Log in using username `problem_user` and password `secret_sauce`.
  3. Observe the product catalog list, specifically looking at the "Sauce Labs Bolt T-Shirt" and other item cards.
- Expected Behaviour: Each product card should display its correct, high-resolution product image corresponding to the item name.
- Actual Behaviour: The "Sauce Labs Bolt T-Shirt" and multiple other items display an incorrect placeholder image instead of the actual product image.

## Bug 2: "Add to Cart" Interaction Fails for Sauce Labs Onesie

- Severity: High
- Affected Component: Inventory / Cart Interactivity
- Steps to Reproduce:
  1. Log in to SauceDemo as `problem_user`.
  2. Locate the "Sauce Labs Onesie" item in the inventory list.
  3. Click the "Add to cart" button for this item.
- Expected Behaviour: The button text should change to "Remove", and the shopping cart badge should increment correctly.
- Actual Behaviour: The button remains stuck on "Add to cart" and the shopping cart badge count does not update.

## Bug 3: Checkout Information Form Input Persistence / Field Reset Issue

- Severity: High
- Affected Component: Checkout: Your Information Page
- Steps to Reproduce:
  1. Log in as `problem_user`, add any available product to the cart, and navigate to the checkout form.
  2. Enter a valid string into the First Name field, such as "John".
  3. Attempt to enter text into the Last Name field or click Continue.
- Expected Behaviour: Both First Name and Last Name fields should retain their typed user inputs independently.
- Actual Behaviour: Typing into subsequent fields causes the First Name value to clear or behave erratically, triggering a validation error stating that the First Name is required.

## Bug 4: Product Sorting Dropdown Fails to Maintain Selection / Inconsistent Ordering

- Severity: Medium
- Affected Component: Product Catalog / Filter Dropdown
- Steps to Reproduce:
  1. Log in to https://www.saucedemo.com as `problem_user`.
  2. Locate the product sorting dropdown at the top right of the inventory page.
  3. Select a filter or sort option, such as "Price (low to high)".
- Expected Behaviour: Products should reorder according to the selected filter criteria and retain the selected state in the dropdown menu.
- Actual Behaviour: Changing the filter options yields inconsistent ordering or reverts unexpectedly without correctly sorting the product catalog.

## Bug 5: Broken Footer Social Media Layout and Imagery

- Severity: Low
- Affected Component: Footer Section / Social Media Graphics
- Steps to Reproduce:
  1. Log in to https://www.saucedemo.com as `problem_user`.
  2. Navigate to any page and scroll down to the footer.
  3. Inspect the social media icons, graphics, and layout alignment.
- Expected Behaviour: Footer social media links and graphics should display clean, aligned assets with working paths.
- Actual Behaviour: Footer social media links and graphics feature broken layouts or distorted asset paths under this specific user profile.

## Bug 6: Product Image Mismatch / Cross-Contaminated Asset Mapping

- Severity: Medium
- Affected Component: Product Catalog Inventory Cards
- Steps to Reproduce:
  1. Log in to https://www.saucedemo.com as `problem_user`.
  2. Compare the product images shown for the "Sauce Labs Backpack" and "Sauce Labs Bike Light".
- Expected Behaviour: The Backpack item card should display the backpack image, and the Bike Light card should display the bike light image.
- Actual Behaviour: Product images are globally swapped or misassigned across multiple inventory items. For example, the Backpack card displays the Bike Light asset, while other items display generic placeholder icons.

## Bug 7: "Remove" Button Target Mismatch in Inventory/Cart

- Severity: High
- Affected Component: Cart State / Inventory Item Removal
- Steps to Reproduce:
  1. Log in to https://www.saucedemo.com as `problem_user`.
  2. Add multiple items, such as Backpack and Bike Light, to the cart.
  3. Locate one of the items in the inventory view and click its "Remove" button.
- Expected Behaviour: Clicking "Remove" on a specific product card should remove that exact product from the cart and revert the button to "Add to cart".
- Actual Behaviour: Clicking "Remove" fails to remove the product or interacts with a different indexed item, leaving the cart state out of sync with the UI button states.

## Additional UI Oddities and Observations

- Product Sorting Dropdown: Changing the filter or sort options, such as "Price (low to high)", sometimes yields inconsistent ordering or reverts unexpectedly.
- Footer Imagery: Footer social media links and graphics feature broken layouts or distorted asset paths under this specific user profile.
