// lbc --> higest wicket taker by winning team
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
    let contentArr = selTool(".match-info.match-info-MATCH.match-info-MATCH-half-width .team");
    let winningTeam;
    for (let i = 0; i < contentArr.length; i++) {
        let hasClass = selTool(contentArr[i]).hasClass("team-gray");
        if (!hasClass) {
            winningTeam = selTool(contentArr[i]).find(".name").text().trim();
        }
    }

    let innigsArr = selTool(".card.content-block.match-scorecard-table>.Collapsible");
    for (let i = 0; i < innigsArr.length; i++) {
        let teamNameElem = selTool(innigsArr[i]).find(".header-title.label");
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        let hwtName = "";
        let hwt = 0;
        if (winningTeam == teamName) {

            let tableElem = selTool(innigsArr[i]).find(".table.bowler");
            let allBowlers = selTool(tableElem).find("tr");
            for (let j = 0; j < allBowlers.length; j++) {
                let allColsOfPlayer = selTool(allBowlers[j]).find("td");
                let playerName = selTool(allColsOfPlayer[0]).text();
                let wickets = selTool(allColsOfPlayer[4]).text();
                if (wickets >= hwt) {
                    hwt = wickets;
                    hwtName = playerName;
                }
            }
            // console.log()
            console.log(`Winning Team ${winningTeam} highest wicket Taker playerName: ${hwtName} wickets: ${hwt}`)

        }

    }

}
