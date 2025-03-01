let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let max = array.reduce((max, el) => {
    if(max < el){
        return el;
    }
    else {
        return max;
    }
})

console.log(max);