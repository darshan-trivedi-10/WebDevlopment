#!/usr/bin/env node
let inputArr = process.argv.slice(2);
import cheerio from "cheerio"
import request from "request"
import chalk from "chalk"
let userName = inputArr[0];
let link = 'https://codeforces.com/profile/' + userName;
request(link, cb)
// https://codeforces.com/profile/darshan_trivedi

function cb(error, response, html) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    } else {
        handleHtml(html);
    }
};

function handleHtml(html) {
    let selTool = cheerio.load(html);

    let contentArr = selTool(".info li");
    let data = selTool(contentArr[0]).text();
    // data = data.replace(/\s+/g,' ').trim();
    data = data.split(' ').filter(w => w !== '');
    data = data.filter(w => w !== '\n');
    if (data[2] == undefined) {
        console.log("Please, Enter Correct UserName 🙏");
        return;
    }
    let currentRating = " Current Rating :- " + data[2];
    let maxRating = " Max Rating :- " + data[data.length - 1];
    maxRating = maxRating.substring(0, maxRating.length - 1);
    console.log(chalk.green.bold(currentRating));
    console.log(chalk.green.bold(maxRating));
}
