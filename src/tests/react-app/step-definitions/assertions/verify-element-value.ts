import { Then } from '@cucumber/cucumber'
import { ScenarioWorld } from '../../setup/world';
import { ElementKey } from '../../../../global-config';
import { getElementLocator } from '../../../../resources/common/web-element-helper';
import { waitFor } from '../../../../resources/common/wait-for-behavior';

Then(
    /^the "([^"]*)" should (not )?contain the text "([^"]*)"$/,
    async function( this: ScenarioWorld, elementKey: ElementKey, negate: boolean, expectedElementText: string ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementKey} should ${negate?'not ':''}contain the text ${expectedElementText}`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            const elementText: string | null = await page.textContent(elementIdentifier);
            return elementText?.includes(expectedElementText) === !negate;
        });

    }
)
