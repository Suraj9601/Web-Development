let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;

let max = -1;

for ( let i=0; i < array.length; i++) {
    if(max < array[i]) {
        max = array[i];
    }
}

console.log(max);