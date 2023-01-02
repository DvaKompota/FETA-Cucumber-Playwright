import { When } from '@cucumber/cucumber'
import { ElementKey } from '../../../global-config'
import { ScenarioWorld } from '../setup/world';
import { checkElement } from '../../../resources/common/html-behavior';
import { waitFor } from '../../../resources/common/wait-for-behavior';
import { getElementLocator } from '../../../resources/common/web-element-helper';

When(
    /^I check the "([^"]*)"$/,
    async function( this: ScenarioWorld, elementKey: ElementKey ) {
        const {
            screen: { page },
            globalConfig,
        } = this;
    
        console.log(`I click the ${elementKey}`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            const result = await page.waitForSelector(elementIdentifier, { state: 'visible' });
            if (result) {
                await checkElement(page, elementIdentifier);
            }
            return result;
        });

    }
)