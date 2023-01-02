import { When } from '@cucumber/cucumber'
import { ElementKey } from '../../../global-config'
import { ScenarioWorld } from '../setup/world';
import { clickElement } from '../../../resources/common/html-behavior';
import { waitFor } from '../../../resources/common/wait-for-behavior';
import { getElementLocator } from '../../../resources/common/web-element-helper';

When(
    /^I click the "([^"]*)" (?:button|link|icon|element)$/,
    async function( this: ScenarioWorld, elementKey: ElementKey ) {
        const {
            screen: { page },
            globalConfig,
        } = this;
    
        console.log(`I click the ${elementKey} button|link|icon|element`);

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