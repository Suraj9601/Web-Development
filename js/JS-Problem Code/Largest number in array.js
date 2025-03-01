let array = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;

for(let i = 0; i < array.length; i++) {
    if(array[i] > largest) {
        largest = array[i];
    }
}
console.log(largest);