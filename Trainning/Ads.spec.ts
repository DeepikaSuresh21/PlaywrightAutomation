import { test, expect } from '@playwright/test';

test('Verify ad', async ({ page }) => {
    await page.goto('https://practice-automation.com/ads/');
    const closeButton = page.getByRole('button', { name: /close/i });
    await expect(closeButton).toBeVisible({ timeout: 30000 });
    await closeButton.click();
    await expect(closeButton).toBeHidden();
});