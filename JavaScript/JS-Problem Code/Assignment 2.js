let num_array = [7, 9, 0, -2];
let n = 3;
let ans = num_array.slice(0, n);
console.log(ans);

let arr = [7, 9, 0, -2];
let ans1 = arr.slice(0, n);
console.log(ans1);

let str_1 = prompt("Please enter a string");

if(str_1.length==0) {
    console.log("The string is empty");
}
else {
    console.log("The string is not empty");
}

let str_2 = "ApNaCoLlEgE";
let ind = 3;

if(str_2[ind]==str_2.toLowerCase()) {
    console.log("The character at index " + ind + " is lowercase");
}
else {
    console.log("The character at index " + ind + " is uppercase");
}

let space_str ="   Hello   ";
space_str.trim();
console.log(space_str);

let arr1 = [ "hello", 'a', 23, 64, 99,-6];
let item = 64;

if(arr1.indexOf(item) != -1) {
    console.log("The item " + item + " is in the array");
}
else {
    console.log("The item " + item + " is not in the array");
}
