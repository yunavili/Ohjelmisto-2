"use strict";

let playerInput = parseInt(prompt("Write a random year: "));
let text = document.getElementById("result");

if ((playerInput % 4 == 0 && playerInput % 100 != 0) || (playerInput % 400 == 0)) {
    text.innerText = `${playerInput} is a leap year.`;
} else {
    text.innerText = `${playerInput} is NOT a leap year.`;
}