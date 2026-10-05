import { test, expect } from '@playwright/test';
import { checkoutWithBackpack } from './test-helpers';

test.describe('Checkout And Order Completion', () => {
  test('Required checkout information validation', async ({ page }) => {
    // 1. Open checkout with an item and submit the empty information form.
    await checkoutWithBackpack(page);
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page).toHaveURL(/checkout-step-one\.html/);
    await expect(page.getByRole('alert')).toContainText('First Name is required');

    // 2. Fill one field at a time and verify the next missing field blocks progression.
    await page.getByRole('textbox', { name: 'First Name' }).fill('Test');
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.getByRole('alert')).toContainText('Last Name is required');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('User');
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.getByRole('alert')).toContainText('Postal Code is required');
    await expect(page).toHaveURL(/checkout-step-one\.html/);
  });
});
