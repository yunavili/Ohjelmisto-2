"use strict";

let number = parseInt(prompt("Enter a number:"));
let text = document.getElementById("result");

    if (isNaN(number)) {
        text. innerText = "Please enter a valid integer";
    } else if (number <= 1) {
        text.innerText = `${number} is NOT a prime number`
    } else {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(number); i++ ) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
    }
        if (isPrime) {
            text.innerText = `${number} is a prime number.`;
        } else {
            text.innerText = `${number} is NOT a prime number`;
        }
    }