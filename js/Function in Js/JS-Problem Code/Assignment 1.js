let numb = 20;

if(numb % 10 == 0){
    console.log("Good");
}
else{
    console.log("Bad");
}
//--------------------------------------------------------------------------

let U_name = prompt("Enter your name :");
let age = prompt("Enter your age :");

alert(`${U_name} is ${age} year old.`)

//--------------------------------------------------------------------------

let quarter = 1;
switch(quarter) {
    case 1:
        console.log("Months in quarter 1 : January, february, march");
        break;
    case 2:
        console.log("Months in quarter 2 : April, May, June");
        break;
    case 3:
        console.log("Months in quarter 3 : July, August, September");
        break;
    case 4:
        console.log("Months in quarter 4 : October, November, December");
        break;
    default:
        console.log("Invalid quarter");
}
//--------------------------------------------------------------------------
let str1 = "Apple";
if(("str1[0]== 'a' || str1[0] == 'A'  ") && (str1.length > 5)) {
    console.log("String is golden");
}
else {
    console.log("String is not golden");
}
//--------------------------------------------------------------------------

let a = 3;
let b = 5;
let c = 7;

if(a > b){
    if(b > c){
        console.log("b is Greater");
    }
    else {
        console.log("c is Greater");
    }
}
else {
    if(a > c){
        console.log("a is Greater");
        }
    else {
        console.log("c is Greater");
    }
}

//--------------------------------------------------------------------------

let num1 = 36;
let num2 = 47856;

if(num1 % 10 == num2 % 10) {
    console.log("Last digit of both numbers are same");
}
else {
    console.log("Last digit of both numbers are not same");
}

//--------------------------------------------------------------------------
