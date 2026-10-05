import { Page, expect, Locator } from '@playwright/test';

export class YourCartPage{

  readonly page: Page;
  readonly cartTitle: Locator;
  readonly removeBackpack: Locator;
  readonly removeBikelight: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;


  constructor(page: Page) {
    this.page = page;

    this.cartTitle = page.locator("//span[text()='Your Cart']");
    this.removeBackpack = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.removeBikelight = page.locator('[data-test="remove-sauce-labs-bike-light"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
  }
  
  async verifythePage(){
    await expect(this.cartTitle).toBeVisible();
    await expect(this.removeBackpack).toBeVisible();
    await expect(this.removeBikelight).toBeVisible();
    await expect(this.checkoutButton).toBeVisible();
    await expect(this.continueShoppingButton).toBeVisible();
  }

  async ModifyCartItems(){
    await this.removeBikelight.click()
}

async hitcheckOut(){
  await this.checkoutButton.click()
}

async CompleteYourCart(){
  await this.verifythePage();
  await this.ModifyCartItems();
  await this.hitcheckOut();
}
  }