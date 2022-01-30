
//  Venue date opponet reault runs balls fours sixes runrate
const request = require("request");
const cheerio = require("cheerio");
const { is } = require("cheerio/lib/api/traversing");

function processScorecard(url) {
    request(url, cb);
}
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        findScoreDeatils(html);
    }
}


function findScoreDeatils(html) {
    //  Venue date opponet reault runs balls fours sixes sr
    // .event .description
    // .event .status-text
    let $ = cheerio.load(html);
    let descElem = $(".header-info .description");
    let reasult = $(".event .status-text");
    let stringArr = descElem.text().split(",");
    let venue = stringArr[1].trim();
    let date = stringArr[2].trim();
    let result = reasult.text();
    let innings = $(".card.content-block.match-scorecard-table .Collapsible");
    for (let i = 0; i < innings.length; i++) {
        let teamName = $(innings[i]).find("h5").text();
        teamName = teamName.split("INNINGS")[0].trim();
        let opponetIndex = (i == 0 ? 1 : 0);
        let opponetName = $(innings[opponetIndex]).find("h5").text();
        opponetName = opponetName.split("INNINGS")[0].trim();
        let currentInnigs = $(innings[i]);
        let allRows = currentInnigs.find(".table.batsman tbody tr");

        for (let j = 0; j < allRows.length; j++) {
            let allCols = $(allRows[j]).find("td");
            let isWorthy = $(allCols[0]).hasClass("batsman-cell");
            if (isWorthy == true) {
                let playerName = $(allCols[0]).text().trim();
                let runs = $(allCols[2]).text().trim();
                let balls = $(allCols[3]).text().trim();
                let fours = $(allCols[5]).text().trim();
                let sixes = $(allCols[6]).text().trim();
                let sr = $(allCols[7]).text().trim();
                console.log(`${playerName} || ${runs} `);
            }
        }
    }
    // .table.batsman
}


module.exports = {
    ps: processScorecard
}