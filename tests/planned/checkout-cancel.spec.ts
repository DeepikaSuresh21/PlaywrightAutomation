import { test, expect } from '@playwright/test';
import { checkoutWithBackpack } from './test-helpers';

test.describe('Checkout And Order Completion', () => {
  test('Cancel checkout preserves expected navigation state', async ({ page }) => {
    // 1. Cancel from the checkout information step.
    await checkoutWithBackpack(page);
    await page.getByRole('button', { name: 'Cancel' }).click();

    await expect(page).toHaveURL(/cart\.html/);
    await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();
    await expect(page).not.toHaveURL(/checkout-complete\.html/);
  });
});
