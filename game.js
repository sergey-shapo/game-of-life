import CellWorld from "./JS/cellsWorld.js";
import changeTheme from "./JS/changeTheme.js";
import selectors from "./JS/querySelectors.js";
import nextPrint from "./JS/nextPrint.js";
import hideButton from "./JS/hideButton.js";
import showWorld from "./JS/showWorld.js";

export let color;
let speed = selectors.rangeInput.value;
let stateUpdateInterval;
let cellWorld = new CellWorld(40);
let isFirstPlay = true;

const playGame = (numberOfCells) => {
  let isGameStopped = false;
  hideButton("start");

  if (!isFirstPlay) {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.remove();
    });
    cellWorld = new CellWorld(40);
  }
  showWorld(cellWorld.cells);

  let state = nextPrint(cellWorld.cells, numberOfCells);

  stateUpdateInterval = setInterval(() => {
    state = nextPrint(state, numberOfCells);
  }, speed);

  selectors.rangeInput.addEventListener("input", () => {
    clearInterval(stateUpdateInterval);
    speed = selectors.rangeInput.value;
    speed = selectors.rangeInput.max - speed + 50;

    if (!isGameStopped) {
      console.log(777);
      stateUpdateInterval = setInterval(() => {
        state = nextPrint(state, numberOfCells);
      }, speed);
    }
  });

  selectors.stopButton.addEventListener("click", () => {
    isFirstPlay = false;
    isGameStopped = true;
    hideButton("stop");
    selectors.startButton.textContent = "Play again";
    clearInterval(stateUpdateInterval);
  });
};

selectors.startButton.addEventListener("click", () => {
  playGame(40);
});

selectors.changeThemeButton.addEventListener("click", () => {
  color = changeTheme();
});

selectors.infoButton.addEventListener("click", () => {
  selectors.gameInfo.classList.remove("hidden");
});

selectors.closeInfoButton.addEventListener("click", () => {
  selectors.gameInfo.classList.add("hidden");
});
