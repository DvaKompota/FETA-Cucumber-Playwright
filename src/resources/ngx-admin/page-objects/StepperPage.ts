import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class StepperPage extends BasePage {
    URL: string = "/pages/layout/stepper";
    STEP_LABEL_TEXT1 = "First step"
    STEP_HEADING1 = "Step content #1"
    STEP_LABEL_TEXT2 = "Second step"
    STEP_HEADING2 = "Step content #2"
    STEP_LABEL_TEXT3 = "Third step"
    STEP_HEADING3 = "Step content #3"
    STEP_LABEL_TEXT4 = "Fourth step"
    STEP_HEADING4 = "Step content #4"
    WIZARD_HEADING = "Wizard completed!"

    constructor(page: Page) {
        super(page)
    };

    locators: Record<string, string> = {
        stepperCard: 'nb-card nb-card-body',
        stepIndex: ".label-index span",
        stepCheckmark: ".label-index nb-icon",
        stepLabel: ".label",
        stepContentHeading: ".step-content h3",
        stepContentText: ".step-content p.lorem",
        stepInput: "div input",
    };

    elements: Record<string, Function> = {
        stepperCard: (cardNo: number) => { return this.page.locator(this.locators.stepperCard).nth(cardNo - 1) },
        stepperSteps: (cardNo: number) => { return this.elements.stepperCard(cardNo).locator(".step") },
        stepperStep: (cardNo: number, stepNo: number) => { return this.elements.stepperSteps(cardNo).nth(stepNo - 1) },
        buttonPrev: (cardNo: number) => { return this.elements.stepperCard(cardNo).locator('button:has-text("prev")') },
        buttonNext: (cardNo: number) => { return this.elements.stepperCard(cardNo).locator('button:has-text("next")') },
        // buttonConfirm: (cardNo: number) => { return this.elements.stepperCard(cardNo).contains('button', 'Confirm') },
        // buttonAgain: (cardNo: number) => { return this.elements.stepperCard(cardNo).contains('button', 'Try again') },
    };

    stepperParams: Record<number, StepperParams> = {
        1: { steps: 4, heading: true, text: false, input: false, prev: true },
        2: { steps: 3, heading: false, text: true, firstStepText: 'consectetuer', input: true, prev: false },
        3: { steps: 4, heading: true, text: true, firstStepText: 'elit', input: false, prev: true },
    };

    async validateStepperCardVisible(cardNo: number) {
        expect(await this.elements.stepperCard(cardNo)).toBeVisible();
    };

    async validateStepsCount(cardNo: number, stepsCount: number) {
        expect(await this.elements.stepperSteps(cardNo).count()).toEqual(stepsCount);
    }

    async validateStepIndexVisible(cardNo: number, stepNo: number) {
        expect(await this.elements.stepperStep(cardNo, stepNo).locator(this.locators.stepIndex)).toBeVisible();
    };

    async validateAllStepIndicesVisible(cardNo: number, stepsCount: number) {
        for (let stepNo = 1; stepNo < stepsCount + 1; stepNo++) {
            this.validateStepIndexVisible(cardNo, stepNo);
        };
    };

    async validateStepLabelVisible(cardNo: number, stepNo: number) {
        expect(await this.elements.stepperStep(cardNo, stepNo).locator(this.locators.stepLabel)).toBeVisible();
    };

    async validateAllStepLabelsVisible(cardNo: number, stepsCount: number) {
        for (let stepNo = 1; stepNo < stepsCount + 1; stepNo++) {
            this.validateStepLabelVisible(cardNo, stepNo);
        };
    };

    async validateContentHeadingVisiblity(cardNo: number) {
        if (this.stepperParams[cardNo].heading) {
            expect(await this.elements.stepperCard(cardNo).locator(this.locators.stepContentHeading)).toBeVisible();
        } else {
            expect(await this.elements.stepperCard(cardNo).locator(this.locators.stepContentHeading)).not.toBeVisible();
        }
    };

    async validateContentTextVisiblity(cardNo: number) {
        if (this.stepperParams[cardNo].text) {
            expect(await this.elements.stepperCard(cardNo).locator(this.locators.stepContentText)).toBeVisible();
        } else {
            expect(await this.elements.stepperCard(cardNo).locator(this.locators.stepContentText)).not.toBeVisible();
        }
    };

    async validateInputFieldVisiblity(cardNo: number) {
        if (this.stepperParams[cardNo].input) {
            expect(await this.elements.stepperCard(cardNo).locator(this.locators.stepInput)).toBeVisible();
        } else {
            expect(await this.elements.stepperCard(cardNo).locator(this.locators.stepInput)).not.toBeVisible();
        }
    }

    async validatePrevButtonVisiblity(cardNo: number) {
        if (this.stepperParams[cardNo].prev) {
            expect(await this.elements.buttonPrev(cardNo)).toBeVisible();
        } else {
            expect(await this.elements.buttonPrev(cardNo)).not.toBeVisible();
        }
    }

    async validateNextButtonVisible(cardNo: number) {
        expect(await this.elements.buttonNext(cardNo)).toBeVisible();
    }

    async allHappyElementsVisible() {
        const steppersCount: number = Object.keys(this.stepperParams).length;
        for (let cardNo = 1; cardNo < steppersCount + 1; cardNo++) {
            this.validateStepperCardVisible(cardNo);
            this.validateStepsCount(cardNo, this.stepperParams[cardNo].steps);
            this.validateAllStepIndicesVisible(cardNo, this.stepperParams[cardNo].steps);
            this.validateAllStepLabelsVisible(cardNo, this.stepperParams[cardNo].steps);
            this.validateContentHeadingVisiblity(cardNo);
            this.validateContentTextVisiblity(cardNo);
            this.validateInputFieldVisiblity(cardNo)
            this.validatePrevButtonVisiblity(cardNo);
            this.validateNextButtonVisible(cardNo);
        };
    };
}

export interface StepperParams {
    steps: number;
    heading: boolean;
    text: boolean;
    firstStepText?: string;
    input: boolean;
    prev: boolean;
}
