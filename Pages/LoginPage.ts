import { Page, expect, Locator } from '@playwright/test';

export class LoginPage{
    
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly swagLabsText: Locator;
    readonly userNameFieldText: Locator;
    readonly errorCheck: Locator;

   constructor(page:Page){
    this.page =page;
    this.username = page.locator("//input[@data-test='username']");
    this.password = page.locator("//input[@data-test='password']");
    this.loginButton = page.locator("//input[@data-test='login-button']");
    this.swagLabsText = page.locator("//div[normalize-space()='Swag Labs']");
    this.userNameFieldText = page.locator("//h4[normalize-space()='Accepted usernames are:']");
    this.errorCheck = page.locator("//h3[@data-test='error']")
   }

   async launchSwagWebApp(){
    await this.page.goto("https://www.saucedemo.com/");
   }

   async VerifyloginPageVisible(){
    await expect(this.username).toBeVisible();
    await expect(this.password).toBeVisible();
    await expect(this.loginButton).toBeVisible();
    await expect(this.swagLabsText).toBeVisible();
    await expect(this.userNameFieldText).toBeVisible();
   }

   async enterUserNameAndPassword(usernameData:string, passwordData:string ){
    await this.username.fill(usernameData);
    await this.password.fill(passwordData);
   }

   async hitLoginButton(){
   await this.loginButton.click();
   }

   async errorVisibleCheck(){
   await this.hitLoginButton();
   await expect(this.errorCheck).toBeVisible()
   }

   async completeLogin(usernameData:string, passwordData:string ){
    await this.launchSwagWebApp();
    await this.VerifyloginPageVisible();
    await this.hitLoginButton();
    await this.errorVisibleCheck();
    await this.enterUserNameAndPassword(usernameData, passwordData);
    await this.hitLoginButton();
   }
}

