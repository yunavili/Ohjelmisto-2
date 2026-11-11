"use strict";

let firstYear = parseInt(prompt("Write the first year:"));
let lastYear = parseInt(prompt("Write the last year:"));

let listEl = document.getElementById('leap-list');

for (let i = firstYear; i <= lastYear; i++) {
    let listItem = document.createElement("li");
    
    if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0)) {
        listItem.innerText = `${i} is a leap year`;
    } else {
        listItem.innerText = `${i} is NOT a leap year.`;
    }
    
    listEl.appendChild(listItem);
}