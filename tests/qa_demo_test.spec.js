import {test, expect} from '@playwright/test';
import { MainPage } from '../src/pages/main.page';
import { BasePage } from '../src/pages/base.page';



test('Test DemoQA', async ({ page }) => {

    const basePage = new BasePage(page);
    const mainPage = new MainPage(page);
    

    await mainPage.open('https://demoqa.com/automation-practice-form');
    await mainPage.registerUser('Kir','Morozov','Morozov@gmail.com','0987654321');
    await mainPage.checkModal();
    });
