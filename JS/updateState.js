const updateState = (grid, numberOfCells) => {
  const cellCopy = Array.from({ length: numberOfCells }, () =>
    Array(numberOfCells).fill(0)
  );

  for (let row = 1; row <= grid.length - 2; row++) {
    for (let col = 1; col <= grid.length - 2; col++) {
      let neighbors = 0;

      const addNeighbor = (row, col) => {
        if (grid[row][col] === 1) {
          neighbors++;
        }
      };

      addNeighbor(row - 1, col - 1);
      addNeighbor(row - 1, col);
      addNeighbor(row - 1, col + 1);
      addNeighbor(row, col - 1);
      addNeighbor(row, col + 1);
      addNeighbor(row + 1, col - 1);
      addNeighbor(row + 1, col);
      addNeighbor(row + 1, col + 1);

      if (grid[row][col] === 0 && neighbors === 3) {
        cellCopy[row][col] = 1;
      } else if (grid[row][col] === 1 && (neighbors <= 1 || neighbors >= 4)) {
        cellCopy[row][col] = 0;
      } else if (grid[row][col] === 1 && (neighbors === 2 || neighbors === 3)) {
        cellCopy[row][col] = 1;
      }
    }
  }

  return cellCopy;
};

export default updateState;
