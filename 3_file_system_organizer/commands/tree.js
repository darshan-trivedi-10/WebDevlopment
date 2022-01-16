let fs = require("fs");
const { type } = require("os");
let path = require("path");

function treeFn(dirPath) {

    if (dirPath == undefined) {
        treeHelper(process.cwd(), "");
        return;
    }

    // create folder --> organized file -> directory
    let isdirExists = fs.existsSync(dirPath);
    if (isdirExists) {
        treeHelper(dirPath, "");
    } else {
        console.log("Path is not Exist");
    }

}

function treeHelper(dirPath, indent) {
    // check is file or folder

    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true) {
        let dirName = path.basename(dirPath);
        console.log(indent + "├──" + dirName);
    } else {
        let dirName = path.basename(dirPath);
        console.log(indent + "└──" + dirName);
        let children = fs.readdirSync(dirPath);
        for (let i = 0; i < children.length; i++) {
            let childrenPath = path.join(dirPath, children[i]);
            treeHelper(childrenPath, indent + "\t");
        }
    }
}

module.exports = {
    treeKey: treeFn
};

