import updateSate from "./updateState.js";
import showWorld from "./showWorld.js";

const nextPrint = (state, numberOfCells) => {
  state = updateSate(state, numberOfCells);
  showWorld(state);
  return state;
};

export default nextPrint;
