const fs = require("fs");

console.log("Before");
// fs.readFile("f1.txt", function (err, data) {
//     console.log(data.toString());
// });
let promise = fs.promises.readFile("f1.txt");
console.log(promise);

//  fullfilled
promise.then(function (data) {
    console.log(data.toString());
});

//  rejected
promise.catch(function (err) {
    console.log(err);
})

console.log("After");