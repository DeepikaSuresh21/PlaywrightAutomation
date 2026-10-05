import { test, expect } from '@playwright/test';
import { login } from './test-helpers';

test.describe('Authentication', () => {
  test('Locked-out user cannot log in', async ({ page }) => {
    // 1. Submit the documented locked-out user's credentials.
    await login(page, 'locked_out_user', 'secret_sauce');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByRole('alert')).toContainText('Sorry, this user has been locked out');
    await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('locked_out_user');
    await expect(page).not.toHaveURL(/inventory\.html/);
  });
});
