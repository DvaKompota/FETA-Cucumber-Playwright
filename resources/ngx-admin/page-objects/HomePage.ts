import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  URL: string = "http://localhost:4200/pages";

  constructor(page: Page) {
    super(page)
  }

}