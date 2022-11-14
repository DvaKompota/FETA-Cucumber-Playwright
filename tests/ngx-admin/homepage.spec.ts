import { test } from '@playwright/test';
import { LeftNav } from '../../resources/ngx-admin/page-objects/components/LeftNav';
import { TopPanel } from '../../resources/ngx-admin/page-objects/components/TopPanel';
import { HomePage } from '../../resources/ngx-admin/page-objects/HomePage';


test.describe('Validate Home Page loads correctly in all resolutions', () => {
    
    test('Validate Home Page loads correctly in full HD resolution', async ({ page }) => {
        const homePage = new HomePage(page);
        const topPanel = new TopPanel(page);
        const leftNav = new LeftNav(page);
        await page.setViewportSize({ width: 1920, height: 1080 }); // Full HD
        await homePage.visit();
        await homePage.hasProperURL();
        await homePage.hasProperURL();
        await topPanel.logoIsVisible();
        await topPanel.navToggleIsVisible();
        await leftNav.allMenuIconsVisible();
        await leftNav.allMenuTitlesVisible();
    });

    test('Validate Home Page loads correctly in laptop resolution', async ({ page }) => {
        const homePage = new HomePage(page);
        const topPanel = new TopPanel(page);
        const leftNav = new LeftNav(page);
        await page.setViewportSize({ width: 1280, height: 800 }); // macbook-13
        await homePage.visit();
        await homePage.hasProperURL();
        await homePage.hasProperURL();
        await topPanel.logoIsVisible();
        await topPanel.navToggleIsVisible();
        await leftNav.allMenuIconsVisible();
        await leftNav.allMenuTitlesVisible();
    });

    test('Validate Home Page loads correctly in tablet resolution', async ({ page }) => {
        const homePage = new HomePage(page);
        const topPanel = new TopPanel(page);
        const leftNav = new LeftNav(page);
        await page.setViewportSize({ width: 810, height: 1080 }); // iPad
        await homePage.visit();
        await homePage.hasProperURL();
        await homePage.hasProperURL();
        await topPanel.logoIsVisible();
        await topPanel.navToggleIsVisible();
        await leftNav.allMenuIconsVisible();
        await leftNav.allMenuTitlesNotVisible();
    });

    test('Validate Home Page loads correctly in mobile resolution', async ({ page }) => {
        const homePage = new HomePage(page);
        const topPanel = new TopPanel(page);
        const leftNav = new LeftNav(page);
        await page.setViewportSize({ width: 375, height: 812 }); // iPhone X
        await homePage.visit();
        await homePage.hasProperURL();
        await homePage.hasProperURL();
        await topPanel.logoIsVisible();
        await topPanel.navToggleIsVisible();
        await leftNav.allMenuIconsNotVisible();
        // assertion incorrectly fails — filed a bug: https://github.com/microsoft/playwright/issues/18775
        //   await leftNav.allMenuTitlesNotVisible(); // fails despite titles not being visible
    });
});
