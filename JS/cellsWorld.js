import selectors from "./querySelectors.js";
import Cell from "./cell.js";
import { color } from "../game.js";

class CellWorld {
  constructor(numberCellsPerAxis, isEmpty = false) {
    this.numberCellsPerAxis = numberCellsPerAxis;
    this.cells = this.setCell(numberCellsPerAxis, isEmpty);
    this.isEmpty = isEmpty;
    this.setContainerGrid(numberCellsPerAxis);
    this.change = 4;
  }

  setContainerGrid(numberCellsPerAxis) {
    selectors.container.style.gridTemplateColumns = `repeat(${numberCellsPerAxis}, 1fr)`;
  }

  setCell(numberCellsPerAxis, isEmpty) {
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
          let cellValue;
          isEmpty
            ? (cellValue = 0)
            : (cellValue = Math.floor(Math.random() * 2));

          cell[x][y] = cellValue;
          cellValue === 0 ? new Cell(true) : new Cell(false, color);
        }
      }
    }

    return cell;
  }
}

export default CellWorld;
