import { test, expect } from '@playwright/test';
import { login } from './test-helpers';

test.describe('Session And Application State', () => {
  test('Reset App State clears shopping state', async ({ page }) => {
    // 1. Add a product, reset application state, and verify the authenticated page is retained.
    await login(page);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('button', { name: 'Reset App State' }).click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByRole('button', { name: 'Cart, empty' })).toBeVisible();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
  });
});
