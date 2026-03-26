import {test, expect} from '@playwright/test';

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
});