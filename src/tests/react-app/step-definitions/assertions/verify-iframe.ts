import { Then } from '@cucumber/cucumber'
import { ScenarioWorld } from '../../setup/world';
import { ElementKey } from '../../../../global-config';
import { getElementLocator } from '../../../../resources/common/web-element-helper';
import { waitFor } from '../../../../resources/common/wait-for-behavior';
import { getIframeElement } from '../../../../resources/common/html-behavior';

Then(
    /^the "([^"]*)" in the "([^"]*)" iframe should (not )?be displayed$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, iframeName: string, negate: boolean) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementKey} in the "${iframeName}" iframe should ${negate ? 'not ' : ''}be displayed`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);
        const iframeIdentifier: string = getElementLocator(page, iframeName, globalConfig);
        const elementIframe = await getIframeElement(page, iframeIdentifier);

        await waitFor(async () => {
            const isElementVisible: boolean = (await elementIframe?.$(elementIdentifier)) != null;
            return isElementVisible === !negate;
        });
    }
)
