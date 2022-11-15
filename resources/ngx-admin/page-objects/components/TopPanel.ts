import { expect, Locator, Page } from '@playwright/test';

export class TopPanel {
  readonly page: Page;
  readonly LEFT_NAV_TOGGLE = 'a.sidebar-toggle';
  readonly LOGO = 'a.logo';

  constructor(page: Page) {
    this.page = page;
  }

  async navToggleIsVisible() {
    await expect(this.page.locator(this.LEFT_NAV_TOGGLE)).toBeVisible();
  }

  async logoIsVisible() {
    await expect(this.page.locator(this.LOGO)).toBeVisible();
  }
}