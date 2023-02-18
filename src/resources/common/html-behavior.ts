import { Frame, Page } from 'playwright';
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

export const fillText = async (
    page: Page,
    elementIdentifier: ElementLocator,
    textInput: string,
): Promise<void> => {
    await page.fill(elementIdentifier, textInput)
};

export const fillTextOnPage = async (
    pages: Array<Page>,
    pageIndex: number,
    elementIdentifier: ElementLocator,
    textInput: string,
): Promise<void> => {
    await pages[pageIndex].focus(elementIdentifier)
    await pages[pageIndex].fill(elementIdentifier, textInput)
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

export const getIframeElement = async (
    page: Page,
    iframeIdentifier: ElementLocator,
): Promise<Frame | undefined | null> => {
    page.waitForSelector(iframeIdentifier);
    const elementHandle = await page.$(iframeIdentifier);
    const elementIframe = await elementHandle?.contentFrame();
    return elementIframe;
};

export const fillTextInIframe = async (
    elementIframe: Frame,
    elementIdentifier: ElementLocator,
    textInput: string,
): Promise<void> => {
    await elementIframe.fill(elementIdentifier, textInput)
};

export const getTableAsArray = async (
    page: Page,
    elementIdentifier: ElementLocator,
): Promise<(string | null)[][]> => {
    await page.waitForSelector(elementIdentifier);

    const tableAsArray: (string | null)[][] = await page
        .locator(elementIdentifier)
        .locator("tbody tr")
        .evaluateAll((rows: HTMLElement[]) => {
            return rows.map(row => {
                const cells = row.querySelectorAll('td')
                return Array.from(cells).map(cell => cell.textContent)
            });
        });

    return tableAsArray
};
