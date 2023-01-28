import { Then } from '@cucumber/cucumber'
import { ScenarioWorld } from '../../setup/world';
import { ElementKey } from '../../../../global-config';
import { getElementLocator } from '../../../../resources/common/web-element-helper';
import { waitFor } from '../../../../resources/common/wait-for-behavior';
import { getIframeElement } from '../../../../resources/common/html-behavior';

Then(
    /^the "([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th)" tab should (not )?contain the title "(.*)"$/,
    async function (this: ScenarioWorld, elementPosition: string, negate: boolean, expectedTitle: string ) {
        const {
            screen: { page, context },
        } = this;

        console.log(`the ${elementPosition} tab should ${negate ? 'not ' : ''}contain the title "${expectedTitle}"`);

        const pageIndex: number = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        await page.waitForTimeout(1000)

        await waitFor(async () => {
            let pages = context.pages();
            const pageTitle = await pages[pageIndex].title()
            return pageTitle?.includes(expectedTitle) === !negate;
        });
    }
)
