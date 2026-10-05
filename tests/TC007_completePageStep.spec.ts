import { test, expect } from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
import { ProductPage } from "../Pages/ProductPage"
import { YourCartPage } from "../Pages/YourCartPage"
import { CheckOutPage } from "../Pages/CheckOutPage"
import { CheckoutCompletePage } from "../Pages/CheckoutCompletePage"
//const testData = require("../TestData/SwagLabs.json")
//import { testData } from "../TestData/SwagLabs.json"
import swagLabsData from '../TestData/SwagLabs.json'


test("Swaglab labs flow In POM", async ({ page }, testInfo) => {

    const loginPage = new LoginPage(page);
    const productpage = new ProductPage(page);
    const yourcartpage = new YourCartPage(page);
    const checkoutpage = new CheckOutPage(page);
    const checkoutcompletepage = new CheckoutCompletePage(page);

    await page.goto("https://www.saucedemo.com/");

    let step = 1
    let stepNo=1
    await test.step(`STEP ${step++}- Enter username and password`, async () => {
    await loginPage.enterUserNameAndPassword(swagLabsData.data1.userId, swagLabsData.data1.passforword);
    const screenshot = await page.screenshot();
    await testInfo.attach(`STEP ${stepNo++}- Enter username and password`, {body: screenshot,contentType: "image/png",});
  });

    await test.step(`STEP ${step++}-Click Login`, async () => {
        await loginPage.hitLoginButton();
        const screenshot = await page.screenshot();
        await testInfo.attach(`STEP ${stepNo++}-Click login`, { body: screenshot, contentType: 'image/png' });
    });

    await test.step(`STEP ${step++}- Click Add to cart`, async () => {
        await productpage.BuyBackpackCart();
        const screenshot = await page.screenshot();
        await testInfo.attach(`STEP ${stepNo++}- Click Add to cart`, { body: screenshot, contentType: 'image/png' });
    });
    await test.step(`STEP ${step++}- Click Shopping cart`, async () => {
        await productpage.clickMainCart();
        const screenshot = await page.screenshot();
        await testInfo.attach(`STEP ${stepNo++}- Click Shopping cart`, { body: screenshot, contentType: 'image/png' });
    });
    await test.step(`STEP ${step++}- Click Checkout`, async () => {
        await yourcartpage.hitcheckOut();
        const screenshot = await page.screenshot();
        await testInfo.attach(`STEP ${stepNo++}- Click Checkout`, { body: screenshot, contentType: 'image/png' });
    });

    await test.step(`STEP ${step++}-Enter firstname,last name,postal code`, async () => {
        await checkoutpage.fillCheckoutInformation("deepika", "suresh", "D15WE02");
        const screenshot = await page.screenshot();
        await testInfo.attach(`STEP ${stepNo++}-Enter firstname,last name,postal code `, { body: screenshot, contentType: 'image/png' });
    });
        await test.step(`STEP ${step++}- Click continue`, async () => {
        await checkoutpage.hitContinue();
        const screenshot = await page.screenshot();
        await testInfo.attach(`STEP ${stepNo++}- Click continue`, { body: screenshot, contentType: 'image/png' });
    });

});