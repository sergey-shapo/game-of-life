import updateSate from "./updateState.js";
import showWorld from "./showWorld.js";

const nextPrint = (state, numberOfCells) => {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.remove();
  });

  state = updateSate(state, numberOfCells);
  showWorld(state);
  return state;
};

export default nextPrint;