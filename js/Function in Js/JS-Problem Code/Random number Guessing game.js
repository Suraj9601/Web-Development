let max_num = prompt("Enter the max number :");

let random_num = Math.floor(Math.random() * max_num) + 1;

let guess = prompt("Entre your guess number :");

while(true) {
    if(guess == "quit") {
        console.log("User quit");
        break;
    }
    if(guess = random_num) {
        console.log("Right guess! congrats!! random number was", random_num);
        break;
    }
    else if(guess < random_num){
        guess = prompt("hint : your guess was too small. please try again.");
    }
    else if(guess < random_num){
        guess = prompt("hint : your guess was too large. please try again.");
    }
}