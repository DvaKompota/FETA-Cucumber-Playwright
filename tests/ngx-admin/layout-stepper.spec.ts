import { test } from '@playwright/test';
import { StepperPage } from '../../resources/ngx-admin/page-objects/StepperPage';


test.describe('Layout Stepper validation', () => {
    
    test.only('Validate page happy elements', async ({ page }) => {
        const stepperPage = new StepperPage(page);
        await stepperPage.visit();
        await stepperPage.hasProperURL();
        await stepperPage.allHappyElementsVisible();
    });
});
