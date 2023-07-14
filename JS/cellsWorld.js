import Cell from "./cell.js";

class CellWorld {
  constructor(numberCellsPerAxis) {
    this.numberCellsPerAxis = numberCellsPerAxis;
    this.cells = this.setCell(numberCellsPerAxis);
  }
  setCell(numberCellsPerAxis) {
    const cell = Array(numberCellsPerAxis)
      .fill()
      .map(() => Array(numberCellsPerAxis));

    for (let x = 0; x < cell.length; x++) {
      for (let y = 0; y < cell.length; y++) {
        if (
          x === 0 ||
          y === 0 ||
          x === cell.length - 1 ||
          y === cell.length - 1
        ) {
          cell[x][y] = 2;
          new Cell(true);
        } else {
          const randomNumber = Math.floor(Math.random() * 2);
          cell[x][y] = randomNumber;
          randomNumber === 0 ? new Cell(true) : new Cell(false);
        }
      }
    }
    return cell;
  }
}

export default CellWorld;
