//  Non - primitve => Array, objects, function
// Function definastion
function sayHi(param) {
    console.log("Hello From sayHi");
    console.log("Param recieved ", param);
}
function GiveRandom() {
    let rVal = Math.random() > 0.5 ? true : "Less than 0.5";
    return rVal;
}
//  Function Call
sayHi(10);
sayHi("Hello");
sayHi([1, 2, 3, 4, 5]);

console.log(GiveRandom());
