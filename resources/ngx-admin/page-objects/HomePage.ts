import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

  constructor(page: Page) {
    super(page)
    this.URL = "http://localhost:4200/pages"
  }

}