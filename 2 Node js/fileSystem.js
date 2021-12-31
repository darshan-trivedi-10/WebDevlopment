// file --> create, read, update, date

let fs = require("fs");
// read
// let buffer = fs.readFileSync("main.js");
// console.log("Bin Data", buffer);
// console.log("Bin Data " + buffer);

// create
// fs.openSync("abc.txt", "w");

// write
// no file --> create and file exist --> content replace
// fs.writeFileSync("abc.txt", "This is replaced by node.js 😜")
// fs.appendFileSync("abc.txt", " this is also written by Node.js 😂");

// fs.mkdirSync("MyDirectory");
// fs.writeFileSync("MyDirectory/myfile.txt", "My Contain");

// let content = fs.readdirSync("MyDirectory");
// console.log(content);
// for (let i = 0; i < content.length; i++) {
//     console.log(content[i], " is removed");
//     // remove file
//     fs.unlinkSync("MyDirectory/" + content[i]);
// }

// // remove folder
// fs.rmdirSync("MyDirectory");

// fs.existsSync --> if file exist at a path give true else give flase
// let isExits = fs.existsSync("main.js");
// console.log(isExits);

// fs.lstatSync --> if a file exist at a path --> true/folder
// let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");
// console.log(detailsObj);
// console.log(detailsObj.isDirectory());

for (let i = 1; i <= 10; i++) {
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\" + "readme.md", `#readme for ${dirPathToMake}`);
}





