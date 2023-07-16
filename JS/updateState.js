const updateState = (cell, numberOfCells) => {
  const cellCopy = Array.from({ length: numberOfCells }, () =>
    Array(numberOfCells).fill(0)
  );

  for (let x = 1; x <= cell.length - 2; x++) {
    for (let y = 1; y <= cell.length - 2; y++) {
      let neighbors = 0;

      const addNeighbor = (row, col) => {
        if (cell[row][col] === 1) {
          neighbors++;
        }
      };

      addNeighbor(x - 1, y - 1);
      addNeighbor(x - 1, y);
      addNeighbor(x - 1, y + 1);
      addNeighbor(x, y - 1);
      addNeighbor(x, y + 1);
      addNeighbor(x + 1, y - 1);
      addNeighbor(x + 1, y);
      addNeighbor(x + 1, y + 1);

      if (cell[x][y] === 0 && neighbors === 3) {
        cellCopy[x][y] = 1;
      } else if (cell[x][y] === 1 && (neighbors <= 1 || neighbors >= 4)) {
        cellCopy[x][y] = 0;
      } else if (cell[x][y] === 1 && (neighbors === 2 || neighbors === 3)) {
        cellCopy[x][y] = 1;
      }
    }
  }

  return cellCopy;
};

export default updateState;
