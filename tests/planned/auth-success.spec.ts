import { test, expect } from '@playwright/test';
import { login } from './test-helpers';

test.describe('Authentication', () => {
  test('Successful login with standard user', async ({ page }) => {
    // 1. Start from a fresh browser context, enter valid credentials, and click Login.
    await login(page);

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products', { exact: true })).toBeVisible();
    await expect(page.locator('.inventory_item')).toHaveCount(6);
    await expect(page.getByRole('button', { name: 'Cart, empty' })).toBeVisible();
  });
});
