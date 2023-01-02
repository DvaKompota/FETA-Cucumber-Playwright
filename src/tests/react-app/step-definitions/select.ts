import { When } from '@cucumber/cucumber'
import { ElementKey } from '../../../global-config'
import { ScenarioWorld } from '../setup/world';
import { waitFor } from '../../../resources/common/wait-for-behavior';
import { getElementLocator } from '../../../resources/common/web-element-helper';
import { selectOptionFromMenu } from '../../../resources/common/html-behavior';

When(
    /^I select the "(.*)" option from the "([^"]*)" menu$/,
    async function( this: ScenarioWorld, option: string, elementKey: ElementKey ) {
        const {
            screen: { page },
            globalConfig,
        } = this;
    
        console.log(`I select the "${option}" option from the ${elementKey} menu`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            const result = await page.waitForSelector(elementIdentifier, { state: 'visible' });
            if (result) {
                await selectOptionFromMenu(page, elementIdentifier, option);
            }
            return result;
        });

    }
)