const puppeteer = require('puppeteer');
const loginLink = 'https://www.hackerrank.com/auth/login';
const userName = 'noxode6805@porjoton.com';
const passWord = 'shivaji@10';
const answersObj = require('./code');

console.log("Before");
let browserOpen = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]
});

let page;
browserOpen.
    then(function (browserObj) {
        let newPagepromise = browserObj.pages();
        return newPagepromise;
    }).then(function (newTab) {
        page = newTab[0];
        let hackerRankOpenPromise = page.goto(loginLink);
        return hackerRankOpenPromise;
    }).then(function () {
        let userNameEnter = page.type("input[id='input-1']", userName);
        return userNameEnter;
    }).then(function () {
        let passWordEnter = page.type("input[id='input-2']", passWord);
        return passWordEnter;
    }).then(function () {
        let loginbuttClick = page.click('button[data-analytics="LoginPassword"]');
        return loginbuttClick;
    }).then(function () {
        let selector = '.topic-card a[data-attr1="algorithms"]';
        let clickOnAlgoPromise = waitAndClick(selector, page);
        return clickOnAlgoPromise;
    }).then(function () {
        let selector = 'input[value="warmup"]';
        let getTowarmUp = waitAndClick(selector, page);
        return getTowarmUp;
    }).then(function () {
        let waitTime = page.waitForTimeout(5000);
        return waitTime;
    }).then(function () {
        let allChallengesPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', { delete: 50 })
        // ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled
        return allChallengesPromise;
    }).then(function (questionARR) {
        let totalQuestion = questionARR.length;
        console.log("Total Question ", questionARR.length);
        let questionWillBeSolved = questionSolver(page, questionARR[0], answersObj.answers[0]);
        return questionWillBeSolved;
    }).then(function () {

    })



function waitAndClick(selector, cPage) {
    return new Promise(function (resolve, reject) {
        let waitForModelPromise = cPage.waitForSelector(selector);
        waitForModelPromise.
            then(function () {
                let clickModel = cPage.click(selector);
                return clickModel;
            }).then(function () {
                resolve();
            }).catch(function (err) {
                reject();
            })
    })
}

function questionSolver(page, question, answers) {
    return new Promise((resolve, reject) => {
        let questionClick = question.click();
        questionClick.
            then(function () {
                let selector = ".monaco-editor.no-user-select.vs";
                let editorInFocusPromise = waitAndClick(selector, page);
                return editorInFocusPromise;
            }).then(function () {
                let selector = '.checkbox-input';
                let checkboxClick = waitAndClick(selector, page);
                return checkboxClick;
            }).then(function () {
                return page.waitForSelector('textarea.custominput', page);
            }).then(function () {
                return page.type('textarea.custominput', answers);
            }).then(function () {
                let ctrlIsPressed = page.keyboard.down('Control');
                return ctrlIsPressed;
            }).then(function () {
                let AisPressed = page.keyboard.press('A');
            }).then(function () {
                let XisPressed = page.keyboard.press('X');
                return XisPressed;
            }).then(function () {
                let CtrlisUnpressed = page.keyboard.up('Control');
                return CtrlisUnpressed;
            }).then(function () {
                let selector = ".monaco-editor.no-user-select.vs";
                let editorInFocusPromise = waitAndClick(selector, page);
                return editorInFocusPromise;
            }).then(function () {
                let ctrlIsPressed = page.keyboard.down('Control', { delay: 100 });
                return ctrlIsPressed;
            }).then(function () {
                let AisPressed = page.keyboard.press('A', { delay: 100 });
                return AisPressed;
            }).then(function () {
                let VisPressed = page.keyboard.press('V', { delay: 100 });
                return VisPressed;
            }).then(function () {
                let CtrlisUnpressed = page.keyboard.up('Control');
                return CtrlisUnpressed;
            }).then(function () {
                let submitNow = page.click('.hr-monaco__run-code');
                return submitNow;
            }).then(function () {
                resolve();
            }).catch(function (err) {
                reject();
            })
    });
}


console.log("After");