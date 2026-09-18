import { Page, expect, Locator } from '@playwright/test';

export class ProductPage{
    
    readonly page: Page;
    readonly Backpack: Locator;
    readonly BackpackCart: Locator
    readonly BikeLight: Locator
    readonly BikeLightCart: Locator
    readonly SauceLabs: Locator
    readonly SaucelabsCart: Locator
    readonly FleeJacket: Locator
    readonly FleeJacketCart: Locator
    readonly Onesie: Locator
    readonly OnesieCart: Locator
    readonly allTheThings: Locator
    readonly allTheThingsCart: Locator
    readonly MainCart: Locator

   constructor(page:Page){
    this.page =page;
    this.Backpack = page.locator("//div[text()='Sauce Labs Backpack']");
    this.BackpackCart = page.locator("(//button[text()='Add to cart'])[1]")
    this.BikeLight = page.locator("//div[text()='Sauce Labs Bike Light']");
    this.BikeLightCart = page.locator("(//button[text()='Add to cart'])[2]")
    this.SauceLabs = page.locator("//div[text()='Sauce Labs Bolt T-Shirt']");
    this.SaucelabsCart = page.locator("(//button[text()='Add to cart'])[3]")
    this. FleeJacket = page.locator("//div[text()='Sauce Labs Fleece Jacket']");
    this.FleeJacketCart = page.locator("(//button[text()='Add to cart'])[4]")
    this. Onesie = page.locator("//div[text()='Sauce Labs Onesie']");
    this.OnesieCart = page.locator("(//button[text()='Add to cart'])[5]")
    this.allTheThings = page.locator("//div[text()='Test.allTheThings() T-Shirt (Red)']");
    this.allTheThingsCart = page.locator("(//button[text()='Add to cart'])[6]")
    this.MainCart = page.locator('//a[@data-test="shopping-cart-link"]')
}

   async BuyBackpackCart(){
   await expect(this.Backpack).toBeVisible();
   await expect(this.BackpackCart).toBeVisible();
   await this.page.waitForLoadState();
   await this.BackpackCart.click();
   }

   async BuyBikeLightCart(){
   await expect(this.BikeLight).toBeVisible();
   await expect(this.BikeLightCart).toBeVisible();
   await this.page.waitForLoadState();
   await this.BikeLightCart.click();
   }

   async clickMainCart(){
    await expect(this.MainCart).toBeVisible();
    await this.MainCart.click();
   }


   async CompleteproductPage(){
    this.BuyBackpackCart();
    this.BuyBikeLightCart();
    this.clickMainCart();
   }
}

