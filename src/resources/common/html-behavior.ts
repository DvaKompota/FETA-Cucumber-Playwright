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

export const clearText = async (
    page: Page,
    elementIdentifier: ElementLocator,
): Promise<void> => {
    await page.locator(elementIdentifier).clear()
};

export const typeText = async (
    page: Page,
    elementIdentifier: ElementLocator,
    textInput: string,
): Promise<void> => {
    await page.type(elementIdentifier, textInput)
};

export const selectOptionFromMenu = async (
    page: Page,
    elementIdentifier: ElementLocator,
    option: string,
): Promise<void> => {
    await page.selectOption(elementIdentifier, option)
};

export const getValue = async (
    page: Page,
    elementIdentifier: ElementLocator,
): Promise<string | null> => {
    const value = page.$eval<string, HTMLSelectElement>(elementIdentifier, el => {
        return el.value;
    });
    return value;
};
