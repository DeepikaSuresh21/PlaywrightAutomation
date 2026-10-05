import { Page } from '@playwright/test';

export const baseUrl = 'https://www.saucedemo.com/';

export async function login(page: Page, username = 'standard_user', password = 'secret_sauce') {
  await page.goto(baseUrl);
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
}

export async function addBackpack(page: Page) {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
}

export async function openCart(page: Page) {
  await page.locator('[data-test="shopping-cart-link"]').click();
}

export async function checkoutWithBackpack(page: Page) {
  await login(page);
  await addBackpack(page);
  await openCart(page);
  await page.getByRole('button', { name: 'Checkout' }).click();
}

export async function completeBackpackOrder(page: Page) {
  await checkoutWithBackpack(page);
  await page.getByRole('textbox', { name: 'First Name' }).fill('Test');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('User');
  await page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill('12345');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();
}
