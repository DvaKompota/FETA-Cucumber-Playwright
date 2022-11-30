import { expect, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  URL: string = "";

  constructor(page: Page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto(this.URL);
    await this.page.waitForLoadState('load');
    await this.page.waitForLoadState('networkidle');
  }

  async pause(seconds: number) {
    await this.page.waitForTimeout(seconds * 1000)
  }

  async hasProperURL() {
    await expect(this.page).toHaveURL(this.URL);
  }

  async setDesktopViewport() {
    await this.page.setViewportSize({ width: 1920, height: 1080 });
  }

  async setLaptopViewport() {
    await this.page.setViewportSize({ width: 1280, height: 800 });
  }

  async setTabletViewport() {
    await this.page.setViewportSize({ width: 810, height: 1080 });
  }

  async setMobileViewport() {
    await this.page.setViewportSize({ width: 375, height: 812 });
  }

}