import CellWorld from "./JS/cellsWorld.js";
import changeTheme from "./JS/changeTheme.js";
import selectors from "./JS/querySelectors.js";
import updateSate from "./JS/updateState.js";
import nextPrint from "./JS/nextPrint.js";

export let color;

const playGame = (numberOfCells) => {
  let cellWorld = new CellWorld(numberOfCells);
  let state = updateSate(cellWorld.cells, numberOfCells);
  const gameSpeedInterval = setInterval(() => {
    state = nextPrint(state, numberOfCells);
  }, 100);

  selectors.stopButton.addEventListener("click", () => {
    clearInterval(gameSpeedInterval);
  });
};

selectors.startButton.addEventListener("click", () => {
  playGame(40);
});

selectors.changeThemeButton.addEventListener("click", () => {
  color = changeTheme();
});
