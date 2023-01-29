import { When } from '@cucumber/cucumber'
import { ElementKey } from '../../../../global-config'
import { ScenarioWorld } from '../../setup/world';
import { checkElement, uncheckElement } from '../../../../resources/common/html-behavior';
import { waitFor } from '../../../../resources/common/wait-for-behavior';
import { getElementLocator } from '../../../../resources/common/web-element-helper';

When(
    /^I (check|uncheck) the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)"( [a-z]*)?$/,
    async function(
        this: ScenarioWorld,
        action: string,
        elementPosition: string,
        elementKey: ElementKey,
        elementType: string,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`I ${action} the ${elementPosition?elementPosition+' ':''}${elementKey}${elementType?elementType:''}`);

        let elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            elementIdentifier += ` >> nth=${elementIndex}`;
        }

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