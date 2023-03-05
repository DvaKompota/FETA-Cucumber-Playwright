import { When } from '@cucumber/cucumber'
import { ScenarioWorld } from '../../setup/world';
 
When(
    /^I click "(accept|dismiss)" on the alert dialog$/,
    async function(
        this: ScenarioWorld,
        actionType: string 
    ) {
        const {
            screen: { page },
        } = this;
    
        console.log(`I click ${actionType} on the alert dialog`);

        if (actionType === 'dismiss') {
            page.on('dialog', dialog => dialog.dismiss())
        } else {
            page.on('dialog', dialog => dialog.accept())
        }

    }
)