import {test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage"; 
import {ProductPage} from "../Pages/ProductPage";
import { YourCartPage } from '../Pages/YourCartPage';

test.only("Page Object Model Test Case No: TC001",async({page})=>{ 

const loginPage = new LoginPage(page);
const productPage = new ProductPage(page);

await loginPage.completeLogin("standard_user","secret_sauce");
await productPage.BuyBackpackCart()
await productPage.clickMainCart()
});

test("Page Object Model Test Case No: TC002",async({page})=>{ 

const loginPage = new LoginPage(page);

await loginPage.completeLogin("locked_out_user","secret_sauce");
});

test("Page Object Model Test Case No: TC003",async({page})=>{ 

const loginPage = new LoginPage(page);

await loginPage.completeLogin("problem_user","secret_sauce");
});

test("Page Object Model Test Case No: TC004",async({page})=>{ 

const loginPage = new LoginPage(page);

await loginPage.completeLogin("performance_glitch_user","secret_sauce");
});
test("Page Object Model Test Case No: TC005",async({page})=>{ 

const loginPage = new LoginPage(page);

await loginPage.completeLogin("error_user","secret_sauce");
});