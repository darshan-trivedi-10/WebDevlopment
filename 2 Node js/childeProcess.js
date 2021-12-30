// let cp = require("child_process");
// console.log("Trying to Open Calculator"); 
// cp.execSync("calc");
// console.log("opende Calculator");

// let cp1 = require("child_process");
// console.log("Trying to Open Vs-code");
// cp1.execSync("code");
// console.log("opened Vs-code");

// let cp2 = require("child_process");
// console.log("Trying to Open Web-site");
// cp2.execSync("start chrome https://nados.pepcoding.com/");
// console.log("opende Web-site");

let cp3 = require("child_process");
let output = cp3.execSync("node main.js");
console.log("output 🔥 " + output);