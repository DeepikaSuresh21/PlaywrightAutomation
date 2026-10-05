import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('Required-field validation on login', async ({ page }) => {
    // 1. Submit the empty login form.
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByRole('alert')).toContainText('Username is required');

    // 2. Submit with only the username populated.
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('alert')).toContainText('Password is required');
    await expect(page).not.toHaveURL(/inventory\.html/);
  });
});
