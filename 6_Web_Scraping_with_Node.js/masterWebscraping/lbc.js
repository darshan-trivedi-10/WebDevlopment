// lbc --> last ball commtery
import cheerio from "cheerio"
import request from "request"

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";

console.log("Before");
request(url, cb)

function cb(error, response, html) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    } else {
        handleHtml(html);
    }
};
console.log("After");

console.log("\n```````````````````````````````````````\n");
function handleHtml(html) {
    let selTool = cheerio.load(html);
    let contentArr = selTool(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");
    let text = selTool(contentArr[0]).text();
    console.log(text);
}