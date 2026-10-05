import { test, expect } from '@playwright/test';
import { login } from './test-helpers';

test.describe('Catalog And Cart', () => {
  test('Product detail and back navigation', async ({ page }) => {
    // 1. Log in and open the Sauce Labs Backpack detail page.
    await login(page);
    await page.getByRole('button', { name: 'View details for Sauce Labs Backpack' }).first().click();
    await expect(page).toHaveURL(/inventory-item\.html\?id=4/);
    await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible();
    await expect(page.getByText('$29.99', { exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Cart, empty' })).toBeVisible();

    // 2. Return to the product list.
    await page.getByRole('button', { name: 'Back to products' }).click();
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('.inventory_item')).toHaveCount(6);
  });
});
