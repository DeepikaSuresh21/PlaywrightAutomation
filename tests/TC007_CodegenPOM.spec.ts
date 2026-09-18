import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click({
    modifiers: ['ControlOrMeta']
  });
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="continue-shopping"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.getByText('Sauce Labs Backpackcarry.').click();
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Deepika');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Suresh');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('D15We02');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.goto('https://www.saucedemo.com/');
});