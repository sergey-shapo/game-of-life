import CellWorld from "./JS/cellsWorld.js";
import changeTheme from "./JS/changeTheme.js";
import selectors from "./JS/querySelectors.js";
import nextPrint from "./JS/nextPrint.js";
import hideButton from "./JS/hideButton.js";

export let color;
let speed = selectors.rangeInput.value;
let isInTheGame = false;
let stateUpdateInterval;

const playGame = (numberOfCells) => {
  hideButton("start");

  const cellWorld = new CellWorld(numberOfCells);
  let state = nextPrint(cellWorld.cells, numberOfCells);

  stateUpdateInterval = setInterval(() => {
    state = nextPrint(state, numberOfCells);
  }, speed);

  selectors.rangeInput.addEventListener("input", () => {
    clearInterval(stateUpdateInterval);
    speed = selectors.rangeInput.value;
    speed = selectors.rangeInput.max - speed + 50;

    if (isInTheGame) {
      stateUpdateInterval = setInterval(() => {
        state = nextPrint(state, numberOfCells);
      }, speed);
    }
  });

  selectors.stopButton.addEventListener("click", () => {
    selectors.startButton.textContent = "Play again";
    clearInterval(stateUpdateInterval);
    hideButton("stop");
    isInTheGame = false;
  });
};

selectors.startButton.addEventListener("click", () => {
  playGame(40);
  isInTheGame = true;
});

selectors.changeThemeButton.addEventListener("click", () => {
  color = changeTheme();
});
