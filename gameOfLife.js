import CellWorld from "./JS/cellsWorld.js";
import changeTheme from "./JS/changeTheme.js";
import selectors from "./JS/querySelectors.js";
import nextPrint from "./JS/nextPrint.js";
import hideButton from "./JS/hideButton.js";

export let color;

const playGame = (numberOfCells) => {
  const cellWorld = new CellWorld(numberOfCells);
  let state = nextPrint(cellWorld.cells, numberOfCells);

  hideButton("start");

  const stateUpdateInterval = setInterval(() => {
    state = nextPrint(state, numberOfCells);
  }, 150);

  selectors.stopButton.addEventListener("click", () => {
    clearInterval(stateUpdateInterval);
    hideButton("stop");
  });
};

selectors.startButton.addEventListener("click", () => {
  playGame(40);
});

selectors.changeThemeButton.addEventListener("click", () => {
  color = changeTheme();
});
