import { When } from '@cucumber/cucumber'
import { ElementKey } from '../../../global-config'
import { ScenarioWorld } from '../setup/world';
import { waitFor } from '../../../resources/common/wait-for-behavior';
import { getElementLocator } from '../../../resources/common/web-element-helper';
import { typeText } from '../../../resources/common/html-behavior';

When(
    /^I fill the "([^"]*)" input with the "(.*)" text$/,
    async function( this: ScenarioWorld, elementKey: ElementKey, textInput: string ) {
        const {
            screen: { page },
            globalConfig,
        } = this;
    
        console.log(`I fill the ${elementKey} input with the "${textInput}" text`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            const result = await page.waitForSelector(elementIdentifier, { state: 'visible' });
            if (result) {
                await typeText(page, elementIdentifier, textInput);
            }
            return result;
        });

    }
)