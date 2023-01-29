import { Then } from '@cucumber/cucumber'
import { ScenarioWorld } from '../../setup/world';
import { ElementKey } from '../../../../global-config';
import { getElementLocator } from '../../../../resources/common/web-element-helper';
import { waitFor } from '../../../../resources/common/wait-for-behavior';
import { getValue } from '../../../../resources/common/html-behavior';

Then(
    /^the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)" ([a-z]* )?should (not )?contain the text "([^"]*)"$/,
    async function(
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey, 
        elementType: string,
        negate: boolean,
        expectedText: string 
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementPosition?elementPosition+' ':''}${elementKey} ${elementType?elementType:''}should ${negate?'not ':''}contain the text "${expectedText}"`);

        let elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            elementIdentifier += ` >> nth=${elementIndex}`;
        }

        await waitFor( async () => {
            const elementText: string | null = await page.textContent(elementIdentifier);
            return elementText?.includes(expectedText) === !negate;
        });

    }
)

Then(
    /^the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)" ([a-z]* )?text should (not )?be equal to "([^"]*)"$/,
    async function(
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey, 
        elementType: string,
        negate: boolean,
        expectedText: string 
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementPosition?elementPosition+' ':''}${elementKey} ${elementType?elementType:''}text should ${negate?'not ':''}be equal to "${expectedText}"`);

        let elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            elementIdentifier += ` >> nth=${elementIndex}`;
        }

        await waitFor( async () => {
            const elementText: string | null = await page.textContent(elementIdentifier);
            return (elementText === expectedText) === !negate;
        });

    }
)

Then(
    /^the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)" ([a-z]* )?should (not )?contain the value "([^"]*)"$/,
    async function(
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey, 
        elementType: string,
        negate: boolean,
        expectedValue: string 
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementPosition?elementPosition+' ':''}${elementKey} ${elementType?elementType:''}should ${negate?'not ':''}contain the value "${expectedValue}"`);

        let elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            elementIdentifier += ` >> nth=${elementIndex}`;
        }

        await waitFor( async () => {
            const elementAttribute: string | null = await getValue(page, elementIdentifier);
            return elementAttribute?.includes(expectedValue) === !negate;
        });

    }
)

Then(
    /^the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)" ([a-z]* )?value should (not )?be equal to "([^"]*)"$/,
    async function(
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey, 
        elementType: string,
        negate: boolean,
        expectedValue: string 
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementPosition?elementPosition+' ':''}${elementKey} ${elementType?elementType:''}value should ${negate?'not ':''}be equal to "${expectedValue}"`);

        let elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            elementIdentifier += ` >> nth=${elementIndex}`;
        }

        await waitFor( async () => {
            const elementAttribute: string | null = await getValue(page, elementIdentifier);
            return (elementAttribute === expectedValue) === !negate;
        });

    }
)

Then(
    /^the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)" ([a-z]* )?should (not )?be enabled$/,
    async function(
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey, 
        elementType: string,
        negate: boolean 
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementPosition?elementPosition+' ':''}${elementKey} ${elementType?elementType:''}should ${negate?'not ':''}be enabled`);

        let elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            elementIdentifier += ` >> nth=${elementIndex}`;
        }

        await waitFor( async () => {
            const isEnabled: boolean = await page.isEnabled(elementIdentifier);
            return isEnabled === !negate;
        });

    }
)
