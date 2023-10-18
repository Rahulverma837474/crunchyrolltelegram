import { Injectable } from '@nestjs/common';
import { addExtra } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

@Injectable()
export class TasksService {
    async verifyCrunchyrollCredentials(email: string, password: string): Promise<{ [key: string]: number }> {
        const playwright = addExtra(require('playwright')).use(StealthPlugin());
        const browser = await playwright.firefox.launch({ headless: false });
        const context = await browser.newContext({
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 OPR/102.0.0.0'
        });
        const page = await context.newPage();
        const data = email + " " + password;
        await page.goto('https://mytoolz.net/tools/crunchyroll-account-checker');

        await page.fill('#cclist', data);
        await page.click('button#submit.btn.btn-success');  // Click the "Start" button

        await page.waitForTimeout(5000)

        const selectors = ['#die_count', '#live_count2', '#live_count', '#wrong_count'];
        const results = {};

        for (const selector of selectors) {
            const element = await page.waitForSelector(selector);
            if (element) {
                const value = parseInt(await element.innerText(), 10);
                if (value > 0) {
                    results[selector] = value;
                }
            }
        }

        await browser.close();

        return results;
    }
}