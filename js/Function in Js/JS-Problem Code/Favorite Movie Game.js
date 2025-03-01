const favorite_movie = "Avatar";
guess = prompt("guess my favorite movie")

while ((guess != favorite_movie)&& (guess != "quite")) {
    guess = prompt("Wrong guess. Please try again.");
}
if (guess == favorite_movie) {
    console.log("Congrats!!");
}
else {
    console.log("You quite.")            
}