function startMakingBoxes() {
  timerID = setInterval(timedAction, 2000);
}

function stopMakingBoxes() {
  console.log("Stop making boxes :(");
  clearInterval(timerID);
}

function deleteBox(evt) {
  let parentDiv = evt.currentTarget.parentElement;
  parentDiv.removeChild(evt.currentTarget);
}

function timedAction() {
  let boxDiv = document.querySelector('.box');
  let newPara = document.createElement("p");
  if (boxDiv.offsetTop + boxDiv.offsetHeight >= document.documentElement.clientHeight) {
    stopMakingBoxes();
    let allBoxes = document.querySelectorAll(".box");
    for (let box of allBoxes) {
      box.remove();
   }
  }
  newPara.textContent = "I am a box";
  newPara.setAttribute("class", "div-green");
  newPara.addEventListener("click", deleteBox);

  boxDiv.appendChild(newPara);
} 

let startButton = document.getElementById("start");
startButton.addEventListener("click", startMakingBoxes);
let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopMakingBoxes);