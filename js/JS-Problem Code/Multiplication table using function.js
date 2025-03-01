function multiTable(num) {
    for(let i = 1; i<= 10; i++){
        let table = num * i;
        console.log(`${num} * ${i} = ${table}`);
    }
}

multiTable(num = prompt("Enter the number :"));