import { test, expect } from '@playwright/test';

test('File Upload', async ({ page }) => {
  await page.goto('https://practice-automation.com/file-upload/');
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.locator('input[type="file"]').click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('testData/Sample.txt');
  await page.getByRole('button', { name: 'Upload' }).click();
});