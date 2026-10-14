import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'JavaScript Delays' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByText('Liftoff!', { exact: true }).click();
});