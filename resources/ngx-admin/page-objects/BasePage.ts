import { expect, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  URL: string;

  constructor(page: Page) {
    this.page = page;
    this.URL = "http://localhost:4200/"
  }

  async visit() {
    await this.page.goto(this.URL);
  }

  async pause(seconds: number) {
    await this.page.waitForTimeout(seconds * 1000)
  }

  async hasProperURL() {
    await expect(this.page).toHaveURL(this.URL);
  }

}