let inputplayer = document.getElementById("inputEcriture");

let btnplayer = document.getElementById("btnValiderMot");

let word = document.querySelector(".zoneProposition");
let printsocre = document.querySelector(".zoneScore span");

let btnRadio = document.querySelectorAll(".optionSource input")

let saisi_input = document.querySelectorAll(".zoneSaisie input")

let score = 0;
let nbWord = "zero";

function printresult(score, nbWord) {
    printsocre.innerText = `score | ${score} | nombre de mots : ${nbWord}`;
}



printresult(score, nbWord);


function gameStart(){
    btnplayer.addEventListener("click", () => {
        console.log(inputplayer.value)
    });
}


gameStart()