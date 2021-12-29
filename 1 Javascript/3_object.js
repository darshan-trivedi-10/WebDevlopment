// object --> Group of kry : value pair
// Key : value --> property
// Key : function --> method

let my = {
    fname: "Darshan",
    lname: "Trivedi",
    address: {
        city: "Dhanera",
        state: "Gujrat"
    },
    age: 19,
    isStudent: true,
    tag: ["Trader", "Engineer", "Devloper"],
    sayHi: function () {
        console.log("Darshan Say's Hi");
    }
}

// console.log(my.fname);
// console.log(my.age);
// console.log(my.tag[0]);
// my.sayHi();

// SET - Update
// console.log("My :", my);
// my.age = 20;
// my.isStudent = false;
// my.brother = ["Rajesh", "Pratik", "Dilip"];
// delete my.lname;
// console.log('\n``````````````````````````````````````````\n ');
// console.log("My :", my);
for (let Key in my) {
    console.log(Key, " : ", my[Key]);
}

let propKey = "age";
console.log(my[propKey]);
console.log(my["age"]);
console.log(my.xyz);