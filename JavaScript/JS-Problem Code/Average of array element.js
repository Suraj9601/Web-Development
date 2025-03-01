let array = [1, 2, 3, 4, 5];

const arrayAverage = (array) => {
    let total = 0;
    for(let number of array) {
        total += number;
    }
    return total / array.length;
}
console.log(arrayAverage(array));