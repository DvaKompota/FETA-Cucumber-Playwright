import { When } from '@cucumber/cucumber'
import { ElementKey } from '../../../../global-config'
import { ScenarioWorld } from '../../setup/world';
import { waitFor } from '../../../../resources/common/wait-for-behavior';
import { getElementLocator } from '../../../../resources/common/web-element-helper';
import { fillText } from '../../../../resources/common/html-behavior';

When(
    /^I fill the "([^"]*)" ([a-z]* )?with the "(.*)" text$/,
    async function(
        this: ScenarioWorld,
        elementKey: ElementKey, 
        elementType: string,
        textInput: string 
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;
    
        console.log(`I fill the ${elementKey} ${elementType?elementType:''}with the "${textInput}" text`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            const result = await page.waitForSelector(elementIdentifier, { state: 'visible' });
            if (result) {
                await fillText(page, elementIdentifier, textInput);
            }
            return result;
        });

    }
)