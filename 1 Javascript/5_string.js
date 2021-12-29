let s1 = "i am string";
let s2 = 'I am also a string';

console.log(s1)
console.log(s2)

let char = s1.charAt(2);
console.log(char);

let subStr = s1.substring(2, 8);
console.log(subStr);
s1 = s1.trim();
let arrStr = s1.split(" ");
console.log(arrStr);
let str = arrStr.join('+');
console.log(str);

/*
→ charAt() ⇒  turns a character at a specified position inside a string

→  charCodeAt() ⇒  Gives you the unicode(ansi value) of character at that position

→  concat() ⇒  Concatenates(joins) two or more strings into one

→  toLowerCase() ⇒  Convert strings to lowercase

→ toUpperCase() ⇒ Convert strings to uppercase

→ indexOf() ⇒  Provides the position of the first occurrence of a specified text within a string

→ lastIndexOf() ⇒  Same as indexOf() but with the last occurrence, searching backwards

→ replace() ⇒  Find and replace specific text in a 

→ fromCharCode() ⇒ Returns a string created from the specified sequence  UTF - 16 code units

→ match() ⇒ Retrieves the matches of a string against a search 
                        
→ search() ⇒ Executes a search for a matching text and returns its position

→ slice() ⇒ Extracts a section of a string and returns it as a new string

→ split() ⇒ Splits a string object into an array of strings at a specified position

→ substr() ⇒ Similar to slice() but extracts a substring depended on a specified number of characters

→ substring() ⇒ Also similar to slice() but can’t accept negative indices

→ valueOf() ⇒ Returns the primitive value(that has no properties or methods) of a string object
*/