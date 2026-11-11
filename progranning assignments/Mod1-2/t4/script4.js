"use strict";

let playerName = prompt("What's your name?: ");

const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
let chosenHouse = "x";
let text = "x";
const num = Math.floor(Math.random() * houses.length);

if (num === 0) {
    chosenHouse = houses[0];
    text = document.getElementById("result");
    text.innerText = `${playerName}, from now you belong to the house of${chosenHouse}!`;

} else if (num === 1) {
    chosenHouse = houses[1];
    text = document.getElementById("result");
    text.innerText = `${playerName}, from now you belong to the house of ${chosenHouse}!`;
} else if (num === 2) {
    chosenHouse = houses[2];
    text = document.getElementById("result");
    text.innerText = `${playerName}, from now you belong to the house of ${chosenHouse}!`;
} else if (num === 3) {
    chosenHouse = houses[3];
    text = document.getElementById("result");
    text.innerText = `${playerName}, from now you belong to the house of ${chosenHouse}!`;
    }

    
