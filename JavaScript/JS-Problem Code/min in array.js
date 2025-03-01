let array = [1,2,3,4,5,6,7,8,9,10];

let ans = array.reduce((min, el) => {
    if(min < el) {
        return min;
    } else {
        return el;
    }
})
console.log(ans);