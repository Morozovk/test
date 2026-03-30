import { BasePage } from "./base.page";
import { expect } from '@playwright/test';
export class MainPage extends BasePage {
constructor(page) {
    super(page);
}

async registerUser(firstName, lastName, email, number) {
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('name@example.com').fill(email);
    await this.page.locator('.form-check-input[value="Male"]').click()
    await this.page.getByPlaceholder('Mobile Number').click();
    await this.page.getByPlaceholder('Mobile Number').fill(number);
    await this.page.click('#dateOfBirthInput');
    await this.page.selectOption('.react-datepicker__year-select', '1998');
    await this.page.selectOption('.react-datepicker__month-select', '7');
    await this.page.click('.react-datepicker__day--023:not(.react-datepicker__day--outside-month)');
    await this.page.locator('#hobbies-checkbox-1').click();
    await this.page.getByRole('button', { name: 'Submit' }).click();
}

async checkModal() {    
    await expect(this.page.locator('.modal-content')).toBeVisible();
}
}

/*
test('Test DemoQA', async ({page}) => {
    await page.goto('https://demoqa.com/automation-practice-form');

    await page.getByPlaceholder('First Name').fill('Kir');
    await page.getByPlaceholder('Last Name').fill('Morozov');
    await page.getByPlaceholder('name@example.com').fill('Morozov@gmail.com');
    await page.locator('.form-check-input[value="Male"]').click()
    await page.getByPlaceholder('Mobile Number').click();
    await page.getByPlaceholder('Mobile Number').fill('0987654321');
    await page.click('#dateOfBirthInput');
    await page.selectOption('.react-datepicker__year-select', '1998');
    await page.selectOption('.react-datepicker__month-select', '7');
    await page.click('.react-datepicker__day--023:not(.react-datepicker__day--outside-month)');
    await page.locator('#hobbies-checkbox-1').click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('.modal-content')).toBeVisible();
*/
