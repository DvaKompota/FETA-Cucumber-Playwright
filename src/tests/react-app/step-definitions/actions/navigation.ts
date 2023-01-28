import { Given } from '@cucumber/cucumber'
import { PageId } from '../../../../global-config'
import { ScenarioWorld } from '../../setup/world';
import { navigateToPage, currentPathMatchesPageId } from '../../../../resources/common/navigation-behavior'
import { waitFor } from '../../../../resources/common/wait-for-behavior';

Given(
    /^I am on the "([^"]*)" page$/,
    async function( this: ScenarioWorld, pageId: PageId ) {
        const {
            screen: { page },
            globalConfig,
        } = this;
    
        console.log(`I am on the ${pageId} page`);

        await navigateToPage(page, pageId, globalConfig);

        await waitFor(() => currentPathMatchesPageId(page, pageId, globalConfig));

    }
)

Given(
    /^I am directed to the "([^"]*)" page$/,
    async function( this: ScenarioWorld, pageId: PageId ) {
        const {
            screen: { page },
            globalConfig,
        } = this;
    
        console.log(`I am directed to the ${pageId} page`);

        await waitFor(() => currentPathMatchesPageId(page, pageId, globalConfig));

    }
)