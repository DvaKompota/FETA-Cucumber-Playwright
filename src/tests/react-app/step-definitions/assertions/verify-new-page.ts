import { Then } from '@cucumber/cucumber'
import { ScenarioWorld } from '../../setup/world';
import { ElementKey } from '../../../../global-config';
import { getElementLocator } from '../../../../resources/common/web-element-helper';
import { waitFor } from '../../../../resources/common/wait-for-behavior';
import { getIframeElement } from '../../../../resources/common/html-behavior';

Then(
    /^the "([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th)" (tab|window) should (not )?contain the title "(.*)"$/,
    async function(
        this: ScenarioWorld,
        tabPosition: string,
        tabOrWindow: string,
        negate: boolean,
        expectedTitle: string 
    ) {
        const {
            screen: { page, context },
        } = this;

        console.log(`the ${tabPosition} ${tabOrWindow} should ${negate ? 'not ' : ''}contain the title "${expectedTitle}"`);

        const pageIndex: number = Number(tabPosition.match(/\d/g)?.join('')) - 1;

        await page.waitForTimeout(1000)

        await waitFor(async () => {
            let pages = context.pages();
            const pageTitle = await pages[pageIndex].title()
            return pageTitle?.includes(expectedTitle) === !negate;
        });
    }
)

Then(
    /^the "([^"]*)" on the "([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th)" (tab|window) should (not )?be displayed$/,
    async function(
        this: ScenarioWorld,
        elementKey: ElementKey,
        tabPosition: string,
        tabOrWindow: string,
        negate: boolean,
    ) {
        const {
            screen: { page, context },
            globalConfig,
        } = this;

        console.log(`the ${elementKey} on the ${tabPosition} ${tabOrWindow} should ${negate?'not ':''}be displayed`);

        const pageIndex: number = Number(tabPosition.match(/\d/g)?.join('')) - 1;
        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            let pages = context.pages();
            const isElementVisible: boolean = (await pages[pageIndex].$(elementIdentifier)) != null;
            return isElementVisible === !negate;
        });

    }
)

Then(
    /^the "([^"]*)" ([a-z]* )?on the "([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th)" (tab|window) should (not )?contain the text "([^"]*)"$/,
    async function(
        this: ScenarioWorld,
        elementKey: ElementKey, 
        elementType: string,
        tabPosition: string,
        tabOrWindow: string,
        negate: boolean,
        expectedText: string 
    ) {
        const {
            screen: { page, context },
            globalConfig,
        } = this;

        console.log(`the ${elementKey} ${elementType?elementType:''}on the ${tabPosition} ${tabOrWindow} should ${negate?'not ':''}contain the text "${expectedText}"`);

        const pageIndex: number = Number(tabPosition.match(/\d/g)?.join('')) - 1;
        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            let pages = context.pages();
            const elementText: string | null = await pages[pageIndex].textContent(elementIdentifier);
            return elementText?.includes(expectedText) === !negate;
        });

    }
)

Then(
    /^the "([^"]*)" ([a-z]* )?text on the "([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th)" (tab|window) should (not )?be equal to "([^"]*)"$/,
    async function(
        this: ScenarioWorld,
        elementKey: ElementKey, 
        elementType: string,
        tabPosition: string,
        tabOrWindow: string,
        negate: boolean,
        expectedText: string 
    ) {
        const {
            screen: { page, context },
            globalConfig,
        } = this;

        console.log(`the ${elementKey} ${elementType?elementType:''}on the ${tabPosition} ${tabOrWindow} should ${negate?'not ':''}contain the text "${expectedText}"`);

        const pageIndex: number = Number(tabPosition.match(/\d/g)?.join('')) - 1;
        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            let pages = context.pages();
            const elementText: string | null = await pages[pageIndex].textContent(elementIdentifier);
            return (elementText === expectedText) === !negate;
        });

    }
)
