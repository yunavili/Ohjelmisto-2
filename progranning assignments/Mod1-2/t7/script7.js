"use strict";

let dicerolls = parseInt(prompt("Write a number of dice rolls:"));
const diceFaces = 6;
let sum = 0;

function rollingDices () {
    if (isNaN(rolls) || rolls <= 0) {
        let text = document.createElement("p");
        document.body.appendChild(text);
        text.innerText = "Please enter a valid positive number.";
    } else {
        for (let i = 0; i < dicerolls; i++) {
            const diceValue = Math.floor(Math.random() * diceFaces + 1);
            let newPara = document.createElement("p");
            document.body.appendChild(newPara);
            newPara.innerText = `${i+1}. This time the dice landed on ${diceValue}`;
            sum += diceValue;
        }
        let result = document.createElement('p');
        document.body.appendChild(result);
        result.innerText = `The sum of all dice rolls is ${sum}.`;
    }
}

rollingDices();
