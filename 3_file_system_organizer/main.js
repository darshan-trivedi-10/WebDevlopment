#!/usr/bin/env node
let inputArr = process.argv.slice(2);
const { count } = require("console");
// console.log(inputArr);
let fs = require("fs");
const { type } = require("os");
let path = require("path");
const { helpkey } = require("./commands/help");
let helpObject = require("./commands/help");
let treeObject = require("./commands/tree");
let organizeObject = require("./commands/organize");



// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help

let command = inputArr[0];
switch (command) {
    case "tree":
        treeObject.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObject.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObject.helpkey(inputArr[1]);
        break;
    default:
        console.log("Please🙏 Input Right command");
}







