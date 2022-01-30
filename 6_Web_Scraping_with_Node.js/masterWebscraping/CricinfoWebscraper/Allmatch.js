const request = require("request");
const cheerio = require("cheerio");
const scoreCardObj = require("./scoreCard");

function getAllMatchedLink(url) {
    request(url, function (err, response, html) {
        if (err) {
            console.log(err);
        } else {
            extractMatch(html);
        }
    });
}


function extractMatch(html) {
    // a[data-hover='Scorecard']
    let $ = cheerio.load(html);
    let scorecardElems = $("a[data-hover='Scorecard']");
    for (let i = 0; i < scorecardElems.length; i++) {
        let scoreLink = $(scorecardElems[i]).attr("href");
        scoreLink = "https://www.espncricinfo.com" + scoreLink;
        scoreCardObj.ps(scoreLink);
    }
}

module.exports = {
    gAllmatch: getAllMatchedLink
}