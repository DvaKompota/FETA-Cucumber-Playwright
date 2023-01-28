import { When } from '@cucumber/cucumber'
import { ElementKey } from '../../../../global-config'
import { ScenarioWorld } from '../../setup/world';
import { waitFor } from '../../../../resources/common/wait-for-behavior';
import { getElementLocator } from '../../../../resources/common/web-element-helper';
import { getIframeElement, fillTextInIframe } from '../../../../resources/common/html-behavior';

When(
    /^I fill the "([^"]*)" ([a-z]* )?in the "([^"]*)" iframe with the "(.*)" text$/,
    async function(
        this: ScenarioWorld,
        elementKey: ElementKey, 
        elementType: string,
        iframeName: string,
        textInput: string 
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;
    
        console.log(`I fill the ${elementKey} ${elementType?elementType:''}in the "${iframeName}" iframe with the "${textInput}" text`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);
        const iframeIdentifier: string = getElementLocator(page, iframeName, globalConfig);
        const elementIframe = await getIframeElement(page, iframeIdentifier);

        await waitFor( async () => {
            const result = await page.waitForSelector(iframeIdentifier, { state: 'visible' });
            if (result) {
                if (elementIframe) {
                    await fillTextInIframe(elementIframe, elementIdentifier, textInput);
                }
            }
            return result;
        });
    }
)