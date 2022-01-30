const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const request = require("request");
const cheerio = require("cheerio");
const allmatchObj = require("./Allmatch");

request(url, cb);

function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractLink(html);
    }
}


function extractLink(html) {
    let $ = cheerio.load(html);
    let anchorElem = $("a[data-hover='View All Results']");
    let link = anchorElem.attr("href");
    link = "https://www.espncricinfo.com" + link;
    allmatchObj.gAllmatch(link);
}

