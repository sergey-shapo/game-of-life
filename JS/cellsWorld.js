import selectors from "./querySelectors.js";

class CellWorld {
  constructor(numberCellsPerAxis) {
    this.numberCellsPerAxis = numberCellsPerAxis;
    this.cells = this.setCell(numberCellsPerAxis);
    this.grid = this.setContainerGrid(numberCellsPerAxis);
  }

  setContainerGrid(numberCellsPerAxis) {
    selectors.container.style.gridTemplateColumns = `repeat(${numberCellsPerAxis}, 1fr)`;
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
        } else {
          const randomNumber = Math.floor(Math.random() * 2);
          cell[x][y] = randomNumber;
        }
      }
    }

    return cell;
  }
}

export default CellWorld;
