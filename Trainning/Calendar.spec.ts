import { test, expect } from '@playwright/test';

test('Select a date using the calendar', async ({ page }) => {
  await page.goto('https://practice-automation.com/');

  await page.getByRole('link', { name: 'Calendars' }).click();

  await expect(page).toHaveURL('https://practice-automation.com/calendars/');

  await page.getByLabel('Select or enter a date').click();

  await page.getByRole('button', {name: /Month picker/}).click();

  await page.getByRole('button', { name: 'November',exact: true}).click();

  await page.getByRole('button', {name: /Year Picker/ }).click();

  await page.getByRole('button', {name: '2026',exact: true}).click();

  await page.getByRole('button', { name: /Sun Nov 15 2026/}).click();

  await expect( page.getByRole('textbox', { name: 'Select or enter a date' })).toHaveValue('2026-11-15');

  await page.getByRole('button', { name: 'Submit' }).click();
});