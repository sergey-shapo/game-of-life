import updateSate from "./updateState.js";
import showWorld from "./showWorld.js";
import selectors from "./querySelectors.js";

const nextPrint = (state, numberOfCells) => {
  state = updateSate(state, numberOfCells);

  const cells = document.querySelectorAll(".cell");
  const cell = document.querySelector(".cell");

  cells.forEach((cell) => {
    cell.remove();
  });

  showWorld(state);
  return state;
};

export default nextPrint;
