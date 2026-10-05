import { Page, expect, Locator } from '@playwright/test';

export class CheckoutCompletePage {

  readonly page: Page;
  readonly pageTitle: Locator;
  readonly completeHeader: Locator;
  readonly completeText: Locator;
  readonly ponyExpressImage: Locator;
  readonly backHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.locator("//span[text()='Checkout: Complete!']");
    this.completeHeader = page.locator('[data-test="complete-header"]');
    this.completeText = page.locator('[data-test="complete-text"]');
    this.ponyExpressImage = page.locator('[data-test="pony-express"]');
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
  }

  async verifythePage() {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.completeHeader).toBeVisible();
    await expect(this.completeText).toBeVisible();
    await expect(this.ponyExpressImage).toBeVisible();
    await expect(this.backHomeButton).toBeVisible();
  }

  async hitBackHome() {
    await this.backHomeButton.click();
  }

  async CompleteOrderConfirmation() {
    await this.verifythePage();
    await this.hitBackHome();
  }
}