// let arr = [];
let array = [1, 2, 3, 4, 5];
console.log(array);
// let len = array.length;
// let i = 0;
// while (i < len) {
//     console.log("Element at index ", i, " is ", array[i]);
//     i++;
// }

// push, unshift, pop
array.push("Last Value");
array.unshift("First Value");
console.log('\n``````````````````````````````````````````\n ');
console.log(array);
array.pop();
array.shift();
console.log('\n``````````````````````````````````````````\n ');
console.log(array);

// starting index , ending index
let partofanArray = array.slice(1, 3);
console.log(partofanArray);

partofanArray = array.slice(1);
console.log(partofanArray);

array.splice(2, 2);
console.log(array);

// indexof // contain
