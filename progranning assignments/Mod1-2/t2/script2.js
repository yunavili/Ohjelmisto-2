const userName = prompt('Tell your namee: ');
const para = document.createElement('p');
para.innerText = `Hello, ${userName}`;
body = document.body;
body.appendChild(para);