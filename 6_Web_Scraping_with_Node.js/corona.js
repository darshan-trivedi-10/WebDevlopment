// const request = require('request');
// const cheerio = require("cheerio");
// const chalk = require("chalk");
import cheerio from "cheerio"
import request from "request"
import chalk from "chalk"

request('https://www.worldometers.info/coronavirus', cb)

function cb(error, response, html) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    } else {
        handleHtml(html);
    }
};

function handleHtml(html) {
    let selTool = cheerio.load(html);
    let contentArr = selTool("div.maincounter-number span");
    let tatalCases = selTool(contentArr[0]).text();
    let tatalDedth = selTool(contentArr[1]).text();
    let totalRecover = selTool(contentArr[2]).text();
    console.log(tatalCases, tatalDedth, totalRecover);

    console.log(chalk.yellow.bold("Total Cases :- ", tatalCases));
    console.log(chalk.red.bold("Total Cases :- ", tatalDedth));
    console.log(chalk.green.bold("Total Cases :- ", totalRecover));
}


