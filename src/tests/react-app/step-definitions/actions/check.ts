import { When } from '@cucumber/cucumber'
import { ElementKey } from '../../../../global-config'
import { ScenarioWorld } from '../../setup/world';
import { checkElement, uncheckElement } from '../../../../resources/common/html-behavior';
import { waitFor } from '../../../../resources/common/wait-for-behavior';
import { getElementLocator } from '../../../../resources/common/web-element-helper';

When(
    /^I (check|uncheck) the "([^"]*)"$/,
    async function( this: ScenarioWorld, action: string, elementKey: ElementKey ) {
        const {
            screen: { page },
            globalConfig,
        } = this;
    
        console.log(`I ${action} the ${elementKey}`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

         const shouldBeChecked: boolean = (action == 'check');

        await waitFor( async () => {
            const result = await page.waitForSelector(elementIdentifier, { state: 'visible' });
            if (result) {
                if (shouldBeChecked) {
                    await checkElement(page, elementIdentifier);
                } else {
                    await uncheckElement(page, elementIdentifier);
                }
            }
            return result;
        });

    }
)