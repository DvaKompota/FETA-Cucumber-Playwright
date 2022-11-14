import { expect, Locator, Page } from '@playwright/test';

export class TopPanel {
  readonly page: Page;
  readonly LEFT_NAV_TOGGLE: Locator;
  readonly LOGO: Locator;

  constructor(page: Page) {
    this.page = page;
    this.LEFT_NAV_TOGGLE = page.locator('a.sidebar-toggle');
    this.LOGO = page.locator('a.logo');
  }

  async navToggleIsVisible() {
    await expect(this.LEFT_NAV_TOGGLE).toBeVisible();
  }

  async logoIsVisible() {
    await expect(this.LOGO).toBeVisible();
  }
}