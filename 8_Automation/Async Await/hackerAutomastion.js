const puppeteer = require('puppeteer');
const loginLink = 'https://www.hackerrank.com/auth/login';
const userName = 'noxode6805@porjoton.com';
const passWord = 'shivaji@10';
const answersObj = require('./code');
console.log("Before");

async function waitAndClick(selector, cPage) {
    console.log(selector);
    await cPage.waitForSelector(selector);
    let selectorClick = cPage.click(selector);
    return selectorClick;
}

(async function () {
    try {
        let browserOpen = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });

        let newTab = await browserOpen.newPage();
        await newTab.goto(loginLink);
        await newTab.type("input[id='input-1']", userName, { delete: 50 });
        await newTab.type("input[id='input-2']", passWord, { delete: 50 });
        await newTab.click('button[data-analytics="LoginPassword"]', { delete: 50 });
        await waitAndClick('.topic-card a[data-attr1="algorithms"]', newTab);
        await waitAndClick('input[value="warmup"]', newTab);
        let allChallenges = await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', { delete: 50 });
        let totalQuestion = allChallenges.length;
        console.log("Total Question ", totalQuestion);
        await questionSolver(newTab, allChallenges[0], answersObj.answers[0]);
    } catch (err) {
        console.log(err);
    }
})();


async function waitAndClick(selector, cPage) {
    await cPage.waitForSelector(selector);
    let selectorClick = cPage.click(selector);
    return selectorClick;
}

async function questionSolver(page, question, answers) {
    try {
        let questionClick = question.click();
        await waitAndClick('.monaco-editor.no-user-select.vs', page);
        await waitAndClick('.checkbox-input', page);
        await page.waitForSelector('textarea.custominput', page);
        await page.type('textarea.custominput', answers);
        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.press('X');
        await page.keyboard.up('Control');
        await waitAndClick('.monaco-editor.no-user-select.vs', page);
        await page.keyboard.down('Control', { delay: 100 });
        await page.keyboard.press('A', { delay: 100 });
        await page.keyboard.press('V', { delay: 100 });
        await page.keyboard.up('Control');
        await page.click('.hr-monaco__run-code');


    } catch (error) {
        console.log(error);
    }
}

console.log("After");