console.log("Hello JS:");

// Declare Variable
// JS only tells you that it is a variable
// let a;
// console.log(a); // undefined
// a = 10;
// a = 10.1;
// console.log(a) // 10.1
// a = "Hello I am a String";
// a = 'Hello I am also a string';
// console.log(a); // Hello I am also a string

// variable type : Primitive types : number, string, boolean, null;

// let num = 10;
// for (let i = 1; i <= num; i++) {
//     console.log("Number is ", i);
// }

let number = 23;
let flag = true;
for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        flag = false;
        break;
    }
}

if (flag) {
    console.log(number, "Number is Prime");
} else {
    console.log(number, "Number is not Prime");
}