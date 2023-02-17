import { Then } from '@cucumber/cucumber'
import { ScenarioWorld } from '../../setup/world';
import { ElementKey } from '../../../../global-config';
import { getElementLocator } from '../../../../resources/common/web-element-helper';
import { waitFor } from '../../../../resources/common/wait-for-behavior';
import { getIframeElement } from '../../../../resources/common/html-behavior';

Then(
    /^the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)"( [a-z]*)?in the "([^"]*)"(?: iframe)? should (not )?be displayed$/,
    async function(
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey, 
        elementType: string,
        iframeName: string,
        negate: boolean,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`The ${elementPosition?elementPosition+' ':''}${elementKey}${elementType?elementType:''}in the "${iframeName}" iframe should ${negate ? 'not ' : ''}be displayed`);

        let elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            elementIdentifier += ` >> nth=${elementIndex}`;
        }

        const iframeIdentifier: string = getElementLocator(page, iframeName, globalConfig);
        const elementIframe = await getIframeElement(page, iframeIdentifier);

        await waitFor(async () => {
            const isElementVisible: boolean = (await elementIframe?.$(elementIdentifier)) != null;
            return isElementVisible === !negate;
        });
    }
)

Then(
    /^the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)"( [a-z]*)?in the "([^"]*)"(?: iframe)? should (not )?contain the text "([^"]*)"$/,
    async function(
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey, 
        elementType: string,
        iframeName: string,
        negate: boolean,
        expectedText: string 
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`The ${elementPosition?elementPosition+' ':''}${elementKey}${elementType?elementType:''}in the "${iframeName}" iframe should ${negate?'not ':''}contain the text "${expectedText}"`);

        let elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            elementIdentifier += ` >> nth=${elementIndex}`;
        }

        const iframeIdentifier: string = getElementLocator(page, iframeName, globalConfig);
        const elementIframe = await getIframeElement(page, iframeIdentifier);

        await waitFor( async () => {
            const elementText = await elementIframe?.textContent(elementIdentifier);
            return elementText?.includes(expectedText) === !negate;
        });
    }
)

Then(
    /^the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)"( [a-z]*)?text in the "([^"]*)"(?: iframe)? should (not )?be equal to "([^"]*)"$/,
    async function(
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey, 
        elementType: string,
        iframeName: string,
        negate: boolean,
        expectedText: string 
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`The ${elementPosition?elementPosition+' ':''}${elementKey}${elementType?elementType:''}text in the "${iframeName}" iframe should ${negate?'not ':''}be equal to "${expectedText}"`);

        let elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            elementIdentifier += ` >> nth=${elementIndex}`;
        }

        const iframeIdentifier: string = getElementLocator(page, iframeName, globalConfig);
        const elementIframe = await getIframeElement(page, iframeIdentifier);

        await waitFor( async () => {
            const elementText = await elementIframe?.textContent(elementIdentifier);
            return (elementText === expectedText) === !negate;
        });

    }
)
