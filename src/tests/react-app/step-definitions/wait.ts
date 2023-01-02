import { When } from '@cucumber/cucumber'
import { ScenarioWorld } from '../setup/world';

When(
    /^I wait for "([0-9]*)" (milliseconds?|seconds?|minutes?)$/,
    async function( this: ScenarioWorld, timeoutNumber: string,  timeoutUnit: string ) {
        const {
            screen: { page },
            globalConfig,
        } = this;
    
        console.log(`I wait for ${timeoutNumber} ${timeoutUnit}`);

        let timeoutLenght: number = Number(timeoutNumber);

        if (timeoutUnit == "second" || timeoutUnit == "seconds") {
            timeoutLenght *= 1000;
        } else if (timeoutUnit == "minute" || timeoutUnit == "minutes") {
            timeoutLenght *= 1000 * 60;
        }   

        return await page.waitForTimeout(timeoutLenght);

    }
)