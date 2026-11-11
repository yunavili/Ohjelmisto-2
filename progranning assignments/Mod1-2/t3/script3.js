let num1 = Number(prompt("Input 1st number: "));
let num2 = Number(prompt("Input 2nd number: "));
let num3 = Number(prompt("Input 3rd number: "));
console.log(num1);
console.log(num2);
console.log(num3);

let sum = num1 + num2 +num3;
let product = num1 * num2 * num3;
let average = sum/3;

function appendParagraph(text, parent = document.body) {
    const p = document.createElement('p');
    p.textContent = text;
    parent.appendChild(p);
}

appendParagraph(`sum is ${sum}`);
appendParagraph(`product is ${product}`);
appendParagraph(`average is ${average}`);

