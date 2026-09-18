import {test,expect} from '@playwright/test'
test('playwright first test',async({page})=>
{
await page.goto(https://www.saucedemo.com/)
await page.locator("//input[@placeholder='Username']").click()
await page.locator("//input[@placeholder='Username']").fill('standard_user')
await page.locator("//input[@placeholder='Password']").click()
await page.locator("//input[@placeholder='Password']").fill('secret_sauce')
await page.locator("//input[@id="login-button"]").click()
}