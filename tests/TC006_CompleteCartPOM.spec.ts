import { test, expect } from '@playwright/test';
import { LoginPage } from "../Pages/LoginPage"; 
import {ProductPage} from "../Pages/ProductPage";
import {YourCartPage} from '../Pages/YourCartPage';

test("Complete Project",async({page})=>{

const loginPage = new LoginPage(page);
const productPage = new ProductPage(page);
const yourCart = new YourCartPage(page);

await page.goto('https://www.saucedemo.com/');
await loginPage.completeLogin("standard_user","secret_sauce");
await productPage.CompleteproductPage();
await page.click('.shopping_cart_link');
await yourCart.CompleteYourCart();
});