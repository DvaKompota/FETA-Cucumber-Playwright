import { expect, Locator, Page } from '@playwright/test';

export class LeftNav {
  readonly page: Page;
  private readonly MENU_HEADING = 'li.menu-item:has-text("FEATURES")'
  private readonly MENU_ITEM = 'li.menu-item .menu-title'
  private readonly LAYOUT = 'a[title="Layout"]'
  private readonly LAYOUT_TITLE = this.LAYOUT + ' span.menu-title'
  private readonly LAYOUT_ICON = this.LAYOUT + ' nb-icon.menu-icon'
  private readonly FORMS = 'a[title="Forms"]'
  private readonly FORMS_TITLE = this.FORMS + ' span.menu-title'
  private readonly FORMS_ICON = this.FORMS + ' nb-icon.menu-icon'
  private readonly MODAL_OVERLAYS = 'a[title="Modal & Overlays"]'
  private readonly MODAL_OVERLAYS_TITLE = this.MODAL_OVERLAYS + ' span.menu-title'
  private readonly MODAL_OVERLAYS_ICON = this.MODAL_OVERLAYS + ' nb-icon.menu-icon'
  private readonly EXTRA_COMPONENTS = 'a[title="Extra Components"]'
  private readonly EXTRA_COMPONENTS_TITLE = this.EXTRA_COMPONENTS + ' span.menu-title'
  private readonly EXTRA_COMPONENTS_ICON = this.EXTRA_COMPONENTS + ' nb-icon.menu-icon'
  private readonly TABLES_DATA = 'a[title="Tables & Data"]'
  private readonly TABLES_DATA_TITLE = this.TABLES_DATA + ' span.menu-title'
  private readonly TABLES_DATA_ICON = this.TABLES_DATA + ' nb-icon.menu-icon'
  private readonly AUTH = 'a[title="Auth"]'
  private readonly AUTH_TITLE = this.AUTH + ' span.menu-title'
  private readonly AUTH_ICON = this.AUTH + ' nb-icon.menu-icon'

  constructor(page: Page) {
    this.page = page;
  }

  async allMenuIconsVisible() {
    await expect(this.page.locator(this.LAYOUT_ICON)).toBeVisible();
    await expect(this.page.locator(this.FORMS_ICON)).toBeVisible();
    await expect(this.page.locator(this.MODAL_OVERLAYS_ICON)).toBeVisible();
    await expect(this.page.locator(this.EXTRA_COMPONENTS_ICON)).toBeVisible();
    await expect(this.page.locator(this.TABLES_DATA_ICON)).toBeVisible();
    await expect(this.page.locator(this.AUTH_ICON)).toBeVisible();
  }

  async allMenuIconsNotVisible() {
    await expect(this.page.locator(this.LAYOUT_ICON)).not.toBeVisible();
    await expect(this.page.locator(this.FORMS_ICON)).not.toBeVisible();
    await expect(this.page.locator(this.MODAL_OVERLAYS_ICON)).not.toBeVisible();
    await expect(this.page.locator(this.EXTRA_COMPONENTS_ICON)).not.toBeVisible();
    await expect(this.page.locator(this.TABLES_DATA_ICON)).not.toBeVisible();
    await expect(this.page.locator(this.AUTH_ICON)).not.toBeVisible();
  }

  async allMenuTitlesVisible() {
    await expect(this.page.locator(this.MENU_HEADING)).toBeVisible();
    await expect(this.page.locator(this.LAYOUT_TITLE)).toBeVisible();
    await expect(this.page.locator(this.FORMS_TITLE)).toBeVisible();
    await expect(this.page.locator(this.MODAL_OVERLAYS_TITLE)).toBeVisible();
    await expect(this.page.locator(this.EXTRA_COMPONENTS_TITLE)).toBeVisible();
    await expect(this.page.locator(this.TABLES_DATA_TITLE)).toBeVisible();
    await expect(this.page.locator(this.AUTH_TITLE)).toBeVisible();
  }

  async allMenuTitlesNotVisible() {
    await expect(this.page.locator(this.MENU_HEADING)).not.toBeVisible();
    await expect(this.page.locator(this.LAYOUT_TITLE)).not.toBeVisible();
    await expect(this.page.locator(this.FORMS_TITLE)).not.toBeVisible();
    await expect(this.page.locator(this.MODAL_OVERLAYS_TITLE)).not.toBeVisible();
    await expect(this.page.locator(this.EXTRA_COMPONENTS_TITLE)).not.toBeVisible();
    await expect(this.page.locator(this.TABLES_DATA_TITLE)).not.toBeVisible();
    await expect(this.page.locator(this.AUTH_TITLE)).not.toBeVisible();
  }
}
