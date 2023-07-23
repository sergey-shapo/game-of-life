import Cell from "./cell.js";
import { color } from "../game.js";

const showWorld = (array) => {
  const cellColor = color ? color : "#000000";
  let counter = 0;
  const cells = document.querySelectorAll(".cell");

  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array.length; y++) {
      if (
        x === 0 ||
        y === 0 ||
        x === array.length - 1 ||
        y === array.length - 1
      ) {
        array[x][y] = 2;
        cells[counter].style.backgroundColor = cellColor;
        counter++;
      } else {
        array[x][y] === 0
          ? (cells[counter].style.backgroundColor = "white")
          : (cells[counter].style.backgroundColor = cellColor);
        counter++;
      }
    }
  }
};

export default showWorld;
