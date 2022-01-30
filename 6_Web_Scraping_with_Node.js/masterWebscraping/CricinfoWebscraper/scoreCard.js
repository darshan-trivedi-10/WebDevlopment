
//  Venue date opponet reault runs balls fours sixes runrate
const request = require("request");
const xlsx = require("xlsx");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const { is } = require("cheerio/lib/api/traversing");
const { serialize } = require("cheerio/lib/api/forms");

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
                processPlayer(teamName, playerName, runs, balls, fours, sixes, serialize, sr, opponetName, venue, date, result);
            }
        }
    }
    // .table.batsman
}

function processPlayer(teamName, playerName, runs, balls, fours, sixes, serialize, sr, opponetName, venue, date, result) {
    let teamPath = path.join(__dirname, "ipl",teamName);
    dirCreater(teamPath);
    let filePath = path.join(teamPath, playerName + ".xlsx");
    let content = excelReader(filePath, playerName);
    
    let playerObj = {
        teamName,
        playerName,
        runs,
        balls,
        fours,
        sixes,
        sr,
        opponetName,
        venue,
        date,
        result
    }
    content.push(playerObj);
    excleWriter(filePath, content, playerName);
    
}

function dirCreater(filePath) {
    if (fs.existsSync(filePath) == false) {
        fs.mkdirSync(filePath);
    }
}


function excleWriter(filepath, json, sheetName) {

    let newWB = xlsx.utils.book_new();
    let newWS = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    xlsx.writeFile(newWB, filepath);
}

function excelReader(filePath, sheetName) {
    if (fs.existsSync(filePath) == false) {
        return [];
    }
    let wb = xlsx.readFile(filePath);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans;
}


module.exports = {
    ps: processScorecard
}