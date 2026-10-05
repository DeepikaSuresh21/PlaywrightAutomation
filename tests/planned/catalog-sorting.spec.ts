import { test, expect } from '@playwright/test';
import { login } from './test-helpers';

test.describe('Catalog And Cart', () => {
  test('Inventory sorting changes product order', async ({ page }) => {
    // 1. Log in, record order, and exercise all product sort options.
    await login(page);
    const products = page.locator('.inventory_item_name');
    const initialOrder = await products.allTextContents();
    const sort = page.getByRole('combobox', { name: 'Sort products' });

    await sort.selectOption('za');
    await expect(sort).toHaveValue('za');
    const reverseOrder = await products.allTextContents();
    expect(reverseOrder).toEqual([...initialOrder].reverse());

    await sort.selectOption('lohi');
    await expect(sort).toHaveValue('lohi');
    const lowToHighPrices = await page.locator('.inventory_item_price').allTextContents();
    expect(lowToHighPrices).toEqual([...lowToHighPrices].sort((a, b) => Number(a.slice(1)) - Number(b.slice(1))));

    await sort.selectOption('hilo');
    await expect(sort).toHaveValue('hilo');
    await expect(products).toHaveCount(6);
  });
});
