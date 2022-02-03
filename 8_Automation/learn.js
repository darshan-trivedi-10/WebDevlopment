const { cp } = require("fs");
const puppeteer = require("puppeteer");
console.log("Before");
let cPage;
// let browserOpenPromise = puppeteer.launch();
const browserOpenPromise = puppeteer.launch({
    headless: false,
    slowMo: true,
    defaultViewport: null,
    args: ["--start-maximized"]
});
browserOpenPromise
    .then(function (browser) {
        let pageArrpromise = browser.pages();
        return pageArrpromise;
    }).then(function (browserPages) {
        cPage = browserPages[0];
        let gotoPromise = cPage.goto("https://www.google.com/");
        return gotoPromise;
    }).then(function () {
        let elementWaitPromise = cPage.waitForSelector("input[type='text']", { visible: true });
        return elementWaitPromise;
    }).then(function () {
        let typingPromise = cPage.type("input[type='text']", "pepcoding");
        return typingPromise;
    }).then(function () {
        let pressEnterPromise = cPage.keyboard.press("Enter");
        return pressEnterPromise;
    }).then(function () {
        let elementWaitPromise = cPage.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", { visible: true });
        return elementWaitPromise;
    }).then(function () {
        let clickPromise = cPage.click("h3.LC20lb.MBeuO.DKV0Md");
        return clickPromise;
    }).catch(function (err) {
        console.log(err);
    })
console.log("After");