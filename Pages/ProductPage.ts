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
    this.BackpackCart = page.locator("[data-test='add-to-cart-sauce-labs-backpack']");
    this.BikeLight = page.locator("//div[text()='Sauce Labs Bike Light']");
    this.BikeLightCart = page.locator("[data-test='add-to-cart-sauce-labs-bike-light']");
    this.SauceLabs = page.locator("//div[text()='Sauce Labs Bolt T-Shirt']");
    this.SaucelabsCart = page.locator("[data-test='add-to-cart-sauce-labs-bolt-t-shirt']");
    this. FleeJacket = page.locator("//div[text()='Sauce Labs Fleece Jacket']");
    this.FleeJacketCart = page.locator("[data-test='add-to-cart-sauce-labs-fleece-jacket']");
    this. Onesie = page.locator("//div[text()='Sauce Labs Onesie']");
    this.OnesieCart = page.locator("[data-test='add-to-cart-sauce-labs-onesie']");
    this.allTheThings = page.locator("//div[text()='Test.allTheThings() T-Shirt (Red)']");
    this.allTheThingsCart = page.locator("[data-test='add-to-cart-test.allthethings-(red)']");
    this.MainCart = page.locator('[data-test="shopping-cart-link"]');
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
    await this.BuyBackpackCart();
    await this.BuyBikeLightCart();
    await this.clickMainCart();
   }
}

