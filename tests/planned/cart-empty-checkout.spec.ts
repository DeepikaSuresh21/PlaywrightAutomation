import { test, expect } from '@playwright/test';
import { login, openCart } from './test-helpers';

test.describe('Catalog And Cart', () => {
  test('Empty cart cannot proceed to checkout', async ({ page }) => {
    // 1. Log in and open the empty cart.
    await login(page);
    await openCart(page);
    await expect(page.locator('.cart_item')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Cart, empty' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await expect(page).toHaveURL(/cart\.html/);
    await expect(page.locator('.cart_item')).toHaveCount(0);
  });
});
