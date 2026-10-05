import { test, expect } from '@playwright/test';
import { completeBackpackOrder } from './test-helpers';

test.describe('Checkout And Order Completion', () => {
  test('Complete an order and verify cart reset', async ({ page }) => {
    // 1. Complete a valid backpack order.
    await completeBackpackOrder(page);
    await expect(page).toHaveURL(/checkout-complete\.html/);
    await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();
    await expect(page.getByText(/Your order has been dispatched/)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Cart, empty' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Back Home' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Generate PDF order' })).toBeVisible();

    // 2. Return home after completion.
    await page.getByRole('button', { name: 'Back Home' }).click();
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByRole('button', { name: 'Cart, empty' })).toBeVisible();
  });
});
