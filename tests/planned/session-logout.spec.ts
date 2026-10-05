import { test, expect } from '@playwright/test';
import { login } from './test-helpers';

test.describe('Session And Application State', () => {
  test('Logout ends the authenticated session', async ({ page }) => {
    // 1. Log in, open the menu, and log out.
    await login(page);
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('button', { name: 'Logout' }).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page).not.toHaveURL(/inventory\.html/);

    // 2. Attempt to revisit the protected inventory route.
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});
