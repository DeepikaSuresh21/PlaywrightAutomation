# Sauce Demo Web Application Test Plan

## Application Overview

Functional and negative test plan for https://www.saucedemo.com/ using the documented credentials standard_user / secret_sauce. The plan covers authentication, inventory browsing and sorting, product details, cart management, checkout validation and totals, order completion, session navigation, and state reset. Each scenario is independent and assumes a fresh browser context and blank application state unless stated otherwise. Use Chromium with the existing Playwright seed file tests/seed.spec.ts.

## Test Scenarios

### 1. Authentication

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login with standard user

**File:** `tests/planned/auth-success.spec.ts`

**Steps:**
  1. Start from a fresh browser context at https://www.saucedemo.com/ with no stored session. Enter standard_user in Username and secret_sauce in Password, then click Login.
    - expect: The user is authenticated and navigated to /inventory.html.
    - expect: The Products heading and six product cards are visible.
    - expect: The cart control reports an empty cart.

#### 1.2. Required-field validation on login

**File:** `tests/planned/auth-required-fields.spec.ts`

**Steps:**
  1. Start from a fresh browser context at the login page. Leave Username and Password empty and click Login.
    - expect: The user remains on the login page.
    - expect: A validation alert identifies Username as required.
    - expect: No authenticated inventory page is opened.
  2. Reload the login page, enter standard_user, leave Password empty, and click Login.
    - expect: The user remains on the login page.
    - expect: A validation alert identifies Password as required.

#### 1.3. Locked-out user cannot log in

**File:** `tests/planned/auth-locked-user.spec.ts`

**Steps:**
  1. Start from a fresh browser context at the login page. Enter locked_out_user and secret_sauce, then click Login.
    - expect: The user remains on the login page.
    - expect: An alert displays: Epic sadface: Sorry, this user has been locked out.
    - expect: The entered username and password remain available for correction and no inventory access is granted.

#### 1.4. Invalid credentials are rejected

**File:** `tests/planned/auth-invalid-credentials.spec.ts`

**Steps:**
  1. Start from a fresh browser context at the login page. Enter an unknown username and an incorrect password, then click Login.
    - expect: The user remains on the login page.
    - expect: An authentication error is displayed.
    - expect: The inventory page is not accessible through the failed login attempt.

### 2. Catalog And Cart

**Seed:** `tests/seed.spec.ts`

#### 2.1. Inventory sorting changes product order

**File:** `tests/planned/catalog-sorting.spec.ts`

**Steps:**
  1. Log in as standard_user. Record the initial product order, then select Name (Z to A), Price (low to high), and Price (high to low) from Sort products.
    - expect: The selected option remains selected after each change.
    - expect: The visible product order changes to match the selected criterion.
    - expect: Prices remain associated with the correct product names and no product disappears.

#### 2.2. Product detail and back navigation

**File:** `tests/planned/catalog-product-detail.spec.ts`

**Steps:**
  1. Log in as standard_user and open the Sauce Labs Backpack product detail from its image or name.
    - expect: The URL is /inventory-item.html?id=4.
    - expect: The detail page shows the product name, description, price, and cart action.
    - expect: The cart remains empty before adding the product.
  2. Click Back to products.
    - expect: The user returns to /inventory.html.
    - expect: The inventory list and current cart state are preserved.

#### 2.3. Add multiple products and remove one from cart

**File:** `tests/planned/cart-add-remove.spec.ts`

**Steps:**
  1. Log in as standard_user. Add Sauce Labs Backpack and Sauce Labs Bike Light, then open the cart.
    - expect: The cart badge reports 2 items.
    - expect: The cart lists both selected products with quantity 1 and the correct prices.
    - expect: Each selected inventory button changes to a remove action.
  2. Remove Sauce Labs Bike Light from the cart.
    - expect: Only Sauce Labs Backpack remains in the cart.
    - expect: The cart badge updates to 1 item.
    - expect: The remaining item and price are unchanged.
  3. Click Continue Shopping.
    - expect: The user returns to the inventory page with the remaining cart state preserved.

#### 2.4. Empty cart cannot proceed to checkout

**File:** `tests/planned/cart-empty-checkout.spec.ts`

**Steps:**
  1. Log in as standard_user, open the empty cart, and inspect the available cart controls.
    - expect: The cart shows no line items.
    - expect: The cart badge reports an empty cart.
    - expect: Checkout is unavailable or cannot advance while the cart is empty.

### 3. Checkout And Order Completion

**Seed:** `tests/seed.spec.ts`

#### 3.1. Required checkout information validation

**File:** `tests/planned/checkout-required-fields.spec.ts`

**Steps:**
  1. Log in as standard_user, add Sauce Labs Backpack, open the cart, and click Checkout. Leave First Name, Last Name, and Zip/Postal Code empty, then click Continue.
    - expect: The user remains on /checkout-step-one.html.
    - expect: A validation alert identifies the first missing required field.
    - expect: No order overview is shown.
  2. Enter a first name and submit with Last Name and Zip/Postal Code empty; repeat with only Last Name filled; then repeat with only Zip/Postal Code filled.
    - expect: Each submission remains on the information step.
    - expect: The alert identifies the currently missing required field.
    - expect: The form does not advance until all three fields are populated.

#### 3.2. Checkout overview calculates order totals

**File:** `tests/planned/checkout-overview-totals.spec.ts`

**Steps:**
  1. Log in as standard_user, add Sauce Labs Backpack, open Checkout, enter Test, User, and 12345 sequentially, and click Continue.
    - expect: The user reaches /checkout-step-two.html.
    - expect: The overview lists Sauce Labs Backpack with quantity 1 and item total $29.99.
    - expect: Payment information shows SauceCard #31337 and shipping information shows Free Pony Express Delivery!.
    - expect: Tax is shown as $2.40 and Total is shown as $32.39.
    - expect: Cancel and Finish controls are visible.

#### 3.3. Complete an order and verify cart reset

**File:** `tests/planned/checkout-complete.spec.ts`

**Steps:**
  1. From a fresh state, complete checkout for Sauce Labs Backpack with valid customer information and click Finish on the overview.
    - expect: The user reaches /checkout-complete.html.
    - expect: The page displays Thank you for your order! and the dispatch message.
    - expect: The cart control reports empty after completion.
    - expect: Back Home and Generate PDF order controls are visible.
  2. Click Back Home.
    - expect: The user returns to the inventory page.
    - expect: The completed order's cart is not carried into the new shopping session.

#### 3.4. Cancel checkout preserves expected navigation state

**File:** `tests/planned/checkout-cancel.spec.ts`

**Steps:**
  1. Log in as standard_user, add Sauce Labs Backpack, open Checkout, and click Cancel from the information step.
    - expect: The user leaves checkout without placing an order.
    - expect: The user is returned to the cart or the documented previous shopping page.
    - expect: The product remains available in the cart and no completion confirmation is displayed.

### 4. Session And Application State

**Seed:** `tests/seed.spec.ts`

#### 4.1. Logout ends the authenticated session

**File:** `tests/planned/session-logout.spec.ts`

**Steps:**
  1. Log in as standard_user, open the navigation menu, and click Logout.
    - expect: The user is returned to the login page.
    - expect: Authenticated inventory and cart content are no longer visible.
    - expect: A direct attempt to revisit the inventory page does not provide authenticated access.

#### 4.2. Reset App State clears shopping state

**File:** `tests/planned/session-reset-state.spec.ts`

**Steps:**
  1. Log in as standard_user, add at least one product, open the navigation menu, and click Reset App State.
    - expect: The cart badge returns to empty.
    - expect: Added products return to their Add to cart state.
    - expect: The user remains authenticated on the current application page unless the product explicitly documents otherwise.
