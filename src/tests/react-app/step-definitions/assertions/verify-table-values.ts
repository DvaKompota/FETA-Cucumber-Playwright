import { DataTable, Then } from '@cucumber/cucumber'
import { ScenarioWorld } from '../../setup/world';
import { ElementKey } from '../../../../global-config';
import { getElementLocator } from '../../../../resources/common/web-element-helper';
import { waitFor } from '../../../../resources/common/wait-for-behavior';
import { getTableAsArray } from '../../../../resources/common/html-behavior';
import { getTableFromCsvAsArray } from '../../../../resources/common/table-helper';
import { env } from '../../../../parseEnv';

Then(
    /^the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)"(?: table)? should (not )?be equal to the following:$/,
    async function(
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey, 
        negate: boolean,
        expectedTable: DataTable,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementPosition?elementPosition+' ':''}${elementKey} should ${negate?'not ':''}be equal to the provided table`);

        let elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            elementIdentifier += ` >> nth=${elementIndex}`;
        }

        const actualTable = await getTableAsArray(page, elementIdentifier)

        await waitFor( async () => {
            return (JSON.stringify(actualTable) === JSON.stringify(expectedTable.raw())) === !negate;
        });

    }
)

Then(
    /^the( ([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th))? "([^"]*)"(?: table)? should (not )?be equal to the "([^"]*)" file$/,
    async function(
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey, 
        negate: boolean,
        fileName: string,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementPosition?elementPosition+' ':''}${elementKey} should ${negate?'not ':''}be equal to the provided table`);

        let elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        if (elementPosition) {
            const elementIndex: number = Number(elementPosition.match(/\d+/)?.join('')) - 1;
            elementIdentifier += ` >> nth=${elementIndex}`;
        }

        const actualTable = await getTableAsArray(page, elementIdentifier)

        const expectedTable = await getTableFromCsvAsArray(env('TEST_DATA_PATH'), fileName)

        await waitFor( async () => {
            return (JSON.stringify(actualTable) === JSON.stringify(expectedTable)) === !negate;
        });
    }
)
