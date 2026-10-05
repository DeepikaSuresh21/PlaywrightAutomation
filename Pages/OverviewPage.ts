import { Page, expect, Locator } from '@playwright/test';

export class OverviewPage{
    readonly page: Page;
  readonly pageTitle: Locator;
  readonly cartQuantity: Locator;
  readonly inventoryItemName: Locator;
  readonly inventoryItemPrice: Locator;
  readonly paymentInfoLabel: Locator;
  readonly shippingInfoLabel: Locator;
  readonly totalPriceLabel: Locator;
  readonly cancelButton: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.locator("//span[text()='Checkout: Overview']");
    this.cartQuantity = page.locator('.cart_quantity');
    this.inventoryItemName = page.locator('.inventory_item_name');
    this.inventoryItemPrice = page.locator('.inventory_item_price');
    this.paymentInfoLabel = page.locator('[data-test="payment-info-value"]');
    this.shippingInfoLabel = page.locator('[data-test="shipping-info-value"]');
    this.totalPriceLabel = page.locator('[data-test="total-label"]');
    this.cancelButton = page.locator('[data-test="cancel"]');
    this.finishButton = page.locator('[data-test="finish"]');
  }

  async verifythePage() {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.paymentInfoLabel).toBeVisible();
    await expect(this.shippingInfoLabel).toBeVisible();
    await expect(this.totalPriceLabel).toBeVisible();
    await expect(this.cancelButton).toBeVisible();
    await expect(this.finishButton).toBeVisible();
  }

  async hitCancel() {
    await this.cancelButton.click();
  }

  async hitFinish() {
    await this.finishButton.click();
  }

  async CompleteCheckoutOverview() {
    await this.verifythePage();
    await this.hitFinish();
  }
}