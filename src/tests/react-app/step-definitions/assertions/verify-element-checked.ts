import { Then } from '@cucumber/cucumber'
import { ScenarioWorld } from '../../setup/world';
import { ElementKey } from '../../../../global-config';
import { getElementLocator } from '../../../../resources/common/web-element-helper';
import { waitFor } from '../../../../resources/common/wait-for-behavior';

Then(
    /^the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)"( [a-z]*)? should (not )?be checked$/,
    async function(
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey,
        elementType: string,
        negate: boolean,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`The ${elementPosition?elementPosition+' ':''}${elementKey}${elementType?elementType:''} should ${negate?'not ':''}be checked`);

        let elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            elementIdentifier += ` >> nth=${elementIndex}`;
        }

        await waitFor( async () => {
            const isElementChecked: boolean = await page.isChecked(elementIdentifier)
            return isElementChecked === !negate;
        });

    }
)
