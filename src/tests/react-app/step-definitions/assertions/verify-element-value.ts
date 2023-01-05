import { Then } from '@cucumber/cucumber'
import { ScenarioWorld } from '../../setup/world';
import { ElementKey } from '../../../../global-config';
import { getElementLocator } from '../../../../resources/common/web-element-helper';
import { waitFor } from '../../../../resources/common/wait-for-behavior';
import { getValue } from '../../../../resources/common/html-behavior';

Then(
    /^the "([^"]*)" ([a-z]* )?should (not )?contain the text "([^"]*)"$/,
    async function(
        this: ScenarioWorld,
        elementKey: ElementKey, 
        elementType: string,
        negate: boolean,
        expectedText: string 
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementKey} ${elementType?elementType:''}should ${negate?'not ':''}contain the text "${expectedText}"`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            const elementText: string | null = await page.textContent(elementIdentifier);
            return elementText?.includes(expectedText) === !negate;
        });

    }
)

Then(
    /^the "([^"]*)" ([a-z]* )?text should (not )?be equal to "([^"]*)"$/,
    async function(
        this: ScenarioWorld,
        elementKey: ElementKey, 
        elementType: string,
        negate: boolean,
        expectedText: string 
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementKey} ${elementType?elementType:''}text should ${negate?'not ':''}be equal to "${expectedText}"`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            const elementText: string | null = await page.textContent(elementIdentifier);
            return (elementText === expectedText) === !negate;
        });

    }
)

Then(
    /^the "([^"]*)" ([a-z]* )?should (not )?contain the value "([^"]*)"$/,
    async function(
        this: ScenarioWorld,
        elementKey: ElementKey, 
        elementType: string,
        negate: boolean,
        expectedValue: string 
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementKey} ${elementType?elementType:''}should ${negate?'not ':''}contain the value "${expectedValue}"`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            const elementAttribute: string | null = await getValue(page, elementIdentifier);
            return elementAttribute?.includes(expectedValue) === !negate;
        });

    }
)

Then(
    /^the "([^"]*)" ([a-z]* )?value should (not )?be equal to "([^"]*)"$/,
    async function(
        this: ScenarioWorld,
        elementKey: ElementKey, 
        elementType: string,
        negate: boolean,
        expectedValue: string 
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementKey} ${elementType?elementType:''}value should ${negate?'not ':''}be equal to "${expectedValue}"`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            const elementAttribute: string | null = await getValue(page, elementIdentifier);
            return (elementAttribute === expectedValue) === !negate;
        });

    }
)

Then(
    /^the "([^"]*)" ([a-z]* )?should (not )?be enabled$/,
    async function(
        this: ScenarioWorld,
        elementKey: ElementKey, 
        elementType: string,
        negate: boolean 
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementKey} ${elementType?elementType:''}should ${negate?'not ':''}be enabled`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            const isEnabled: boolean = await page.isEnabled(elementIdentifier);
            return isEnabled === !negate;
        });

    }
)
