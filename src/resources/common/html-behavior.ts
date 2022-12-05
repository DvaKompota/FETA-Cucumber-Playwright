import { Page } from 'playwright';
import { ElementLocator} from '../../global-config';

export const clickElement = async (
    page: Page,
    elementIdentifier: ElementLocator,
): Promise<void> => {
    await page.click(elementIdentifier)
};
