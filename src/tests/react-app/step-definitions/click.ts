import { When } from '@cucumber/cucumber'
import { ElementKey } from '../../../global-config'
import { ScenarioWorld } from '../setup/world';
import { clickElement } from '../../../resources/common/html-behavior';
import { waitFor } from '../../../resources/common/wait-for-behavior';
import { getElementLocator } from '../../../resources/common/web-element-helper';

When(
    /^I click the "([^"]*)"( [a-z]*)?$/,
    async function( this: ScenarioWorld, elementKey: ElementKey, elementType: string ) {
        const {
            screen: { page },
            globalConfig,
        } = this;
    
        console.log(`I click the ${elementKey}${elementType?elementType:''}`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            const result = await page.waitForSelector(elementIdentifier, { state: 'visible' });
            if (result) {
                await clickElement(page, elementIdentifier);
            }
            return result;
        });

    }
)

When(
    /^I click the "([^"]*)" ([a-z]* )?containing the "(.*)" text$/,
    async function(
        this: ScenarioWorld,
        elementKey: ElementKey, 
        elementType: string,
        elementText: string
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;
    
        console.log(`I click the ${elementKey} ${elementType?elementType:''}containing the "${elementText}" text`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        const selectorWithText: string = `${elementIdentifier}:has-text("${elementText}")`;

        await waitFor( async () => {
            const result = await page.waitForSelector(selectorWithText, { state: 'visible' });
            if (result) {
                await clickElement(page, selectorWithText);
            }
            return result;
        });

    }
)

When(
    /^I click the "([^"]*)" ([a-z]* )?with text equal to "(.*)"$/,
    async function(
        this: ScenarioWorld,
        elementKey: ElementKey, 
        elementType: string,
        elementText: string
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;
    
        console.log(`I click the ${elementKey} ${elementType?elementType:''}with text equal to "${elementText}"`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        const selectorWithText: string = `${elementIdentifier}:text-is("${elementText}")`;

        await waitFor( async () => {
            const result = await page.waitForSelector(selectorWithText, { state: 'visible' });
            if (result) {
                await clickElement(page, selectorWithText);
            }
            return result;
        });

    }
)