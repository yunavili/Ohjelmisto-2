"use strict";

        let numDice = parseInt(prompt("Enter the number of dice:"));
        let targetSum = parseInt(prompt("Enter the target sum of the eyes:"));
        let resultEl = document.getElementById("result");

        if (isNaN(numDice) || isNaN(targetSum) || numDice <= 0 || targetSum < numDice || targetSum > numDice * 6) {
            resultEl.innerText = "Please enter valid numbers (target sum must be between number of dice and dice * 6).";
        } else {
            const simulations = 10000;
            let matchCount = 0;

            for (let i = 0; i < simulations; i++) {
                let currentSum = 0;

                for (let j = 0; j < numDice; j++) {
                    let diceValue = Math.floor(Math.random() * 6) + 1;
                    currentSum += diceValue;
                }

                if (currentSum === targetSum) {
                    matchCount++;
                }
            }

            let probability = (matchCount / simulations) * 100;

            resultEl.innerText = `Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%`;
        }