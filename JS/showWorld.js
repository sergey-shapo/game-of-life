import Cell from "./cell.js";
import { color } from "../gameOfLife.js";

const showWorld = (array) => {
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array.length; y++) {
      if (
        x === 0 ||
        y === 0 ||
        x === array.length - 1 ||
        y === array.length - 1
      ) {
        array[x][y] = 2;
        new Cell(null, color);
      } else array[x][y] === 0 ? new Cell(true) : new Cell(false, color);
    }
  }
};

export default showWorld;
