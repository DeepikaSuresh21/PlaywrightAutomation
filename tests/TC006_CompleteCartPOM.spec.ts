import { test, expect } from '@playwright/test';
import { LoginPage } from "../Pages/LoginPage"; 
import {ProductPage} from "../Pages/ProductPage";
import {YourCartPage} from '../Pages/YourCartPage';
import {CheckOutPage} from '../Pages/CheckOutPage';
import {OverviewPage} from '../Pages/OverviewPage';
import {CheckoutCompletePage} from '../Pages/CheckoutCompletePage';

test("Complete Project",async({page},testinfo)=>{

    
const loginPage = new LoginPage(page);
const productPage = new ProductPage(page);
const yourCart = new YourCartPage(page);
const checkoutPage = new CheckOutPage(page);
const overviewPage = new OverviewPage(page);
const checkoutCompletepage = new CheckoutCompletePage(page);

await page.goto('https://www.saucedemo.com/');

await test.step('Login to the application', async () => {
await loginPage.completeLogin("standard_user","secret_sauce");
await page.screenshot({ path: 'screenshot1.png' });
});

await productPage.CompleteproductPage();
await page.screenshot({ path: 'screenshot.png' });
await page.click('.shopping_cart_link');
await yourCart.CompleteYourCart();
await checkoutPage .CompleteCheckoutStepOne("Deepika","Suresh","D15WE02");
await overviewPage.CompleteCheckoutOverview();
await checkoutCompletepage.CompleteOrderConfirmation();
});