import updateSate from "./updateState.js";
import showWorld from "./showWorld.js";

const nextPrint = (state, numberOfCells) => {
  state = updateSate(state, numberOfCells);

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.remove();
  });

  showWorld(state);
  return state;
};

export default nextPrint;
