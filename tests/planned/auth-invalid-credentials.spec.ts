import { test, expect } from '@playwright/test';
import { login } from './test-helpers';

test.describe('Authentication', () => {
  test('Invalid credentials are rejected', async ({ page }) => {
    // 1. Submit unknown credentials.
    await login(page, 'unknown_user', 'incorrect_password');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByRole('alert')).toContainText('Username and password do not match');
    await expect(page).not.toHaveURL(/inventory\.html/);
  });
});
