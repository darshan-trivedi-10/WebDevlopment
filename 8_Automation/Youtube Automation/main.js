const playlistLink = 'https://www.youtube.com/playlist?list=PL-Jc9J83PIiFU_evuYnTGHVXU_LeZryNP';
const puppeteer = require('puppeteer');
console.log("Before");

//  No Complete

(async function playlistDeatils() {
    try {
        let browserOpen = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });
        let newPage = await browserOpen.pages();
        let currPage = newPage[0];
        await currPage.goto(playlistLink);
        // Complete Open Playlist
        await currPage.waitForSelector('h1#title');
        let playListTitle = await currPage.evaluate(function (select) {
            let name = document.querySelector(select);
            return name.innerHTML;
        }, 'h1#title a');
        // console.log(playListTitle);
        let pageData = await currPage.evaluate(getPlaylistData, '#stats .style-scope.ytd-playlist-sidebar-primary-info-renderer');
        console.log(pageData);





    } catch (error) {
        console.log(error);
    }
})();


function getPlaylistData(selector) {
    let allElement = document.querySelector(selector);
    console.log(allElement);
    // let totalVideo = allElement[0].innerText;
    // let totalView = allElement[1].innerText;
    // return { totalVideo, totalView };
    return allElement;
}


console.log("After");