 import { test,expect,chromium} from '@playwright/test'
 test('playwright first test',async()=>{
const browser = await chromium.launch();
const context = await browser.newContext();
const context1 = await browser.newContext();
const page = await context.newPage();
const page1 = await context.newPage();
const page2 = await context1.newPage();
   await page.goto("https://www.saucedemo.com/");
   await expect(page.locator("//input[@placeholder='Username']")).toBeVisible();
   await page.locator("//input[@placeholder='Username']").fill("standard_user");
   await expect(page.locator("//input[@placeholder='Password']")).toBeVisible()
   await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
   await expect(page.locator("#login-button")).toBeEnabled()
   await page.locator("#login-button").click();
   await expect(page.locator("//span[normalize-space()='Products']")).toBeVisible();
   await page1.goto("https://www.saucedemo.com/");
    await expect(page1.locator("//input[@placeholder='Username']")).toBeVisible();
   await page1.locator("//input[@placeholder='Username']").fill("standard_user");
   await expect(page1.locator("//input[@placeholder='Password']")).toBeVisible()
   await page1.locator("//input[@placeholder='Password']").fill("secret_sauce");
   await expect(page1.locator("#login-button")).toBeEnabled()
   await page1.locator("#login-button").click();
   await expect(page1.locator("//span[normalize-space()='Products']")).toBeVisible();
   await page2.goto("https://www.saucedemo.com/");
    await expect(page2.locator("//input[@placeholder='Username']")).toBeVisible();
   await page2.locator("//input[@placeholder='Username']").fill("standard_user");
   await expect(page2.locator("//input[@placeholder='Password']")).toBeVisible()
   await page2.locator("//input[@placeholder='Password']").fill("secret_sauce");
   await expect(page2.locator("#login-button")).toBeEnabled()
   await page2.locator("#login-button").click();
   await expect(page2.locator("//span[normalize-space()='Products']")).toBeVisible();
   await browser.close();
});