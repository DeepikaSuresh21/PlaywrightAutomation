import { test, expect } from '@playwright/test';
import path from 'path';
import ExcelUtils from '../Utils/excelUtils';

const filePath = path.resolve(__dirname, '../testData/saucedemotestdata.xlsx');

const excelUtils = new ExcelUtils(filePath);

const loginSheetName = 'DataAA';
const loginData = excelUtils.getSheetData(loginSheetName);

const currentFileName = path.basename(__filename, '.spec.ts');
const matchingRow = excelUtils.findRowByTCID(loginData, currentFileName);

if (!matchingRow) {
  throw new Error(`Test case ID ${currentFileName} does not match any TC_ID in the data.`);
}

const { User_Name, Password, First_Name, Last_Name, Postal_Code } = matchingRow;

test('addtocart', async ({ page }, testInfo) => {

    async function takeStepScreenshot(stepName: string) {
        const screenshot = await page.screenshot({ fullPage: true });

        await testInfo.attach(stepName, {
            body: screenshot,
            contentType: 'image/png'
        });
    }

    await page.goto("https://www.saucedemo.com/");
    await takeStepScreenshot("01-Application Opened");

    await expect(page.locator("#user-name")).toBeVisible();
    await page.fill("#user-name", String(User_Name));
    await takeStepScreenshot("02-Username Entered");

    await expect(page.locator("#password")).toBeVisible();
    await page.fill("#password", String(Password));
    await takeStepScreenshot("03-Password Entered");

    await page.click("#login-button");
    await takeStepScreenshot("04-Clicked Login");

    await expect(page.locator("text=Products")).toBeVisible();
    await takeStepScreenshot("05-Products Page");

    await page.click("#add-to-cart-sauce-labs-backpack");
    await takeStepScreenshot("06-Product Added");

    await page.click("#shopping_cart_container");
    await takeStepScreenshot("07-Cart Opened");

    await expect(page.locator("text=Sauce Labs Backpack")).toBeVisible();

    await page.click("#checkout");
    await takeStepScreenshot("08-Checkout");

    await page.fill("[placeholder='First Name']", String(First_Name));
    await takeStepScreenshot("09-First Name");

    await page.fill("[placeholder='Last Name']", String(Last_Name));
    await takeStepScreenshot("10-Last Name");

    await page.fill("[placeholder='Zip/Postal Code']", String(Postal_Code));
    await takeStepScreenshot("11-Zip Code");

    await page.click("[name='continue']");
    await takeStepScreenshot("12-Overview");

    await page.click("[name='finish']");
    await takeStepScreenshot("13-Order Completed");
});