let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "purple" ];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game stated");
        started = true;
        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText =  `Level  ${level}`;
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    gameFlash(randomBtn);
}


function checkAns() {
    // console.log("`current level :",level);
    let idx = level - 1;

    if (userSeq[idx] === gameSeq[idx]) {
        console.log("Same Value");
    } else {
        console.log("Wrong value");
    }
}

function btnPress() {
    let btn = this;
    console.log(this);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}