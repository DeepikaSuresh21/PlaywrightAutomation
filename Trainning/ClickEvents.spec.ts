import { test, expect } from '@playwright/test';

test('Verify all click events', async ({ page }) => {
    await page.goto('https://practice-automation.com/');
    await expect(page.getByRole('link', { name: 'Click Events' })).toBeVisible();
    await page.getByRole('link', { name: 'Click Events' }).click();
  await page.goto('https://practice-automation.com/click-events/');

  await page.getByRole('button', { name: 'Cat' }).click();
  await expect(page.getByText('Meow!')).toBeVisible();
  await page.getByRole('button', { name: 'Dog' }).click();
  await expect(page.getByText('Woof!')).toBeVisible();
  await page.getByRole('button', { name: 'Pig' }).click();
  await expect(page.getByText('Oink!')).toBeVisible();
  await page.getByRole('button', { name: 'Cow' }).click();
  await expect(page.getByText('Moo!')).toBeVisible();
});