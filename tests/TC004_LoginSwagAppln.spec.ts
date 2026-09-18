import {test,expect} from '@playwright/test'
test('playwright first test',async({page})=>
{
await page.goto('https://www.saucedemo.com/');

await page.locator('//input[@id="user-name"]').fill('standard_user');
await page.locator('//input[@id="password"]').fill('secret_sauce');
await page.locator('//input[@id="login-button"]').click();

await expect(page).toHaveURL(/inventory.html/);
 //add item to cart & navigate
await page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]').click();
await page.locator('//a[@class="shopping_cart_link"]').click();
//proceed to checkout
await page.locator('//button[@id="checkout"]').click();
//fillout checkout info
await page.locator('//input[@id="first-name"]').fill('Deepika');
await page.locator('//input[@id="last-name"]').fill('Suresh');
await page.locator('//input[@id="postal-code"]').fill('D15WE02');
await page.locator('//input[@id="continue"]').click();
//complete order
await page.locator('//button[@id="finish"]').click();
// verify order completion --> new comment verified in google
const completeHeader = page.locator('//h2[@class="complete-header"]');
await expect(completeHeader).toHaveText('Thank you for your order!');
//Reset state &logout
await page.locator('//button[@id="react-burger-menu-btn"]').click();
await page.locator('//a[@id="logout_sidebar_link"]').click();
//verify the redirected back to login page --> verified in google
await expect(page).toHaveURL('https://www.saucedemo.com/');
});
