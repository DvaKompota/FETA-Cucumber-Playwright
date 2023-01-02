import { Page } from 'playwright';
import { ElementLocator} from '../../global-config';

export const clickElement = async (
    page: Page,
    elementIdentifier: ElementLocator,
): Promise<void> => {
    await page.click(elementIdentifier)
};

export const checkElement = async (
    page: Page,
    elementIdentifier: ElementLocator,
): Promise<void> => {
    await page.check(elementIdentifier)
};

export const uncheckElement = async (
    page: Page,
    elementIdentifier: ElementLocator,
): Promise<void> => {
    await page.uncheck(elementIdentifier)
};
