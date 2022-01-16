let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


let fs = require("fs");
const { type } = require("os");
let path = require("path");

function organizeFn(dirPath) {
    // check the path
    let destPath;
    if (dirPath == undefined) {
        dirPath = process.cwd();
    }
    // create folder --> organized file -> directory
    let isdirExists = fs.existsSync(dirPath);
    if (isdirExists) {
        destPath = path.join(dirPath, "organized_files");
        createDirectory(destPath);
        origanizeHelper(dirPath, destPath);
    } else {
        console.log("Path is not Exist");
    }
    // read all file and add in subcatogry

}

// To create Directory
function createDirectory(newdestPath) {
    if (fs.existsSync(newdestPath)) {
        return;
    } else {
        fs.mkdirSync(newdestPath);
    }
}

function origanizeHelper(src, destpath) {
    //  identify categories of all the files present in that input directory --> 
    let childrenName = fs.readdirSync(src);
    // console.log(childrenName);
    for (let i = 0; i < childrenName.length; i++) {
        let childAddress = path.join(src, childrenName[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
            // Copy - Cut files and change directory --> 
            let category = getCategory(childrenName[i]);
            sendFile(childAddress, destpath, category);
        }
    }
}

function sendFile(srcFilePath, dest, category) {
    let catogryPath = path.join(dest, category);
    createDirectory(catogryPath);
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(catogryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    console.log(fileName, " Copied to ", category);
    // For cut
    fs.unlinkSync(srcFilePath);
}

function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);
    for (let type in types) {
        let cTypeArray = types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                return type;
            }
        }
    }

    return "other";
}

module.exports = {
    organizeKey: organizeFn
}