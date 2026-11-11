"use strict";

let text = document.getElementById("result");
let toConfirm = confirm("Should I calculate the square root?");

if (toConfirm) {
    let userInput = prompt("Enter a number:");
    let number = parseFloat(userInput);

    if (isNaN(number) || (number < 0)) {
        text.innerText = "Enter a valid number.";
    } else {
        let numberSqrt = Math.sqrt(number);
        text.innerText = `The square root of ${number} is ${numberSqrt}`
    }

} else {
    text.innerText = "The square root is not calculated.";
}
