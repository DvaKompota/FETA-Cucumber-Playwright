import { When } from '@cucumber/cucumber'
import { ElementKey } from '../../../../global-config'
import { ScenarioWorld } from '../../setup/world';
import { clickElement } from '../../../../resources/common/html-behavior';
import { waitFor } from '../../../../resources/common/wait-for-behavior';
import { getElementLocator } from '../../../../resources/common/web-element-helper';

When(
    /^I click the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)"( [a-z]*)?$/,
    async function(
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey,
        elementType: string,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`I click the ${elementPosition?elementPosition+' ':''}${elementKey}${elementType?elementType:''}`);

        let elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            elementIdentifier += ` >> nth=${elementIndex}`;
        }

        await waitFor( async () => {
            const result = await page.waitForSelector(elementIdentifier, { state: 'visible' });
            if (result) {
                await clickElement(page, elementIdentifier);
            }
            return result;
        });

    }
)

When(
    /^I click the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)"( [a-z]*)?containing the "(.*)" text$/,
    async function(
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey,
        elementType: string,
        elementText: string
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`I click the ${elementPosition?elementPosition+' ':''}${elementKey}${elementType?elementType:''}containing the "${elementText}" text`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        let selectorWithText: string = `${elementIdentifier}:has-text("${elementText}")`;

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            selectorWithText += ` >> nth=${elementIndex}`;
        }

        await waitFor( async () => {
            const result = await page.waitForSelector(selectorWithText, { state: 'visible' });
            if (result) {
                await clickElement(page, selectorWithText);
            }
            return result;
        });

    }
)

When(
    /^I click the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)"( [a-z]*)?with text equal to "(.*)"$/,
    async function(
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey,
        elementType: string,
        elementText: string
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`I click the ${elementPosition?elementPosition+' ':''}${elementKey}${elementType?elementType:''}with text equal to "${elementText}"`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        let selectorWithText: string = `${elementIdentifier}:text-is("${elementText}")`;

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            selectorWithText += ` >> nth=${elementIndex}`;
        }

        await waitFor( async () => {
            const result = await page.waitForSelector(selectorWithText, { state: 'visible' });
            if (result) {
                await clickElement(page, selectorWithText);
            }
            return result;
        });

    }
)
