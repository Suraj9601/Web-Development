let number = 287152;
let sum = 0;

let copy = number;

while(copy > 0) {
    digits = copy % 10;
    sum += digits;
    copy = Math.floor(copy/10);
}

console.log(sum);