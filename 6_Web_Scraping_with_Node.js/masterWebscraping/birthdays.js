// lbc --> higest wicket taker by winning team
import chalk from "chalk";
import cheerio from "cheerio"
import request from "request"
// import chalk from "chalk"

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";

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
    let innigsArr = selTool(".card.content-block.match-scorecard-table>.Collapsible");
    for (let i = 0; i < innigsArr.length; i++) {
        let teamNameElem = selTool(innigsArr[i]).find(".header-title.label");
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        let tableElem = selTool(innigsArr[i]).find(".table.batsman");
        let allBatsMan = selTool(tableElem).find("tr");
        for (let j = 0; j < allBatsMan.length; j++) {
            let allColsOfPlayer = selTool(allBatsMan[j]).find("td");
            let isbatsMancol = selTool(allColsOfPlayer[0]).hasClass("batsman-cell");
            if (isbatsMancol) {
                let href = selTool(allColsOfPlayer[0]).find("a").attr("href");
                let name = selTool(allColsOfPlayer[0]).text();
                href = "https://www.espncricinfo.com" + href;
                getBirthday(href, name, teamName);
            }
        }

    }

}


function getBirthday(url, name, teamName) {
    request(url, cb);
    function cb(err, response, html) {
        if (err) {
            console.error('error:', error); // Print the error if one occurred
        } else {
            findBithday(html, name, teamName);
        }
    }

}


function findBithday(html, name, teamName) {
    let selTool = cheerio.load(html);
    let deatilsArr = selTool(".player-card-description");
    let birthDay = selTool(deatilsArr[1]).text();
    console.log("--> ",chalk.green.bold(`${name} plays for ${teamName} was born on ${birthDay}\n`));
}