import selectors from "./querySelectors.js";
import Cell from "./cell.js";
import { color } from "../game.js";

class CellWorld {
  constructor(numberCellsPerAxis) {
    this.numberCellsPerAxis = numberCellsPerAxis;
    this.cells = this.setCell(numberCellsPerAxis);
    this.setContainerGrid(numberCellsPerAxis);
  }

  setContainerGrid(numberCellsPerAxis) {
    selectors.container.style.gridTemplateColumns = `repeat(${numberCellsPerAxis}, 1fr)`;
  }

  setCell(numberCellsPerAxis) {
    const cell = Array.from({ length: numberCellsPerAxis }, () =>
      Array(numberCellsPerAxis)
    );

    for (let x = 0; x < numberCellsPerAxis; x++) {
      for (let y = 0; y < numberCellsPerAxis; y++) {
        if (
          x === 0 ||
          y === 0 ||
          x === numberCellsPerAxis - 1 ||
          y === numberCellsPerAxis - 1
        ) {
          cell[x][y] = 2;
          new Cell(null, color);
        } else {
          const randomNumber = Math.floor(Math.random() * 2);
          cell[x][y] = randomNumber;
          randomNumber === 0 ? new Cell(true) : new Cell(false, color);
        }
      }
    }

    return cell;
  }
}

export default CellWorld;
