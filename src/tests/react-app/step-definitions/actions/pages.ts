import { When } from '@cucumber/cucumber'
import { ElementKey } from '../../../../global-config'
import { ScenarioWorld } from '../../setup/world';
import { waitFor } from '../../../../resources/common/wait-for-behavior';
import { getElementLocator } from '../../../../resources/common/web-element-helper';
import { fillTextOnPage } from '../../../../resources/common/html-behavior';

When(
    /^I fill the "([^"]*)" ([a-z]* )?on the "([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th)" (tab|window) with the "(.*)" text$/,
    async function(
        this: ScenarioWorld,
        elementKey: ElementKey, 
        elementType: string,
        tabPosition: string,
        tabOrWindow: string,
        textInput: string 
    ) {
        const {
            screen: { page, context },
            globalConfig,
        } = this;
    
        console.log(`I fill the ${elementKey} ${elementType?elementType:''}on the ${tabPosition} ${tabOrWindow} with the "${textInput}" text`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);
        const pageIndex: number = Number(tabPosition.match(/\d+/)?.join('')) - 1;

        await waitFor(async () => {
            let pages = context.pages();
            const result = await pages[pageIndex].waitForSelector(elementIdentifier, { state: 'visible' });
            if (result) {
                await fillTextOnPage(pages, pageIndex, elementIdentifier, textInput);
            }
            return result;
        });
    }
)