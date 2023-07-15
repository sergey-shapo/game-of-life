const updateSate = (cell, numberOfCells) => {
  let cellCopy = Array.from({ length: numberOfCells }, () =>
    Array(numberOfCells).fill(0)
  );

  for (let x = 1; x <= cell.length - 2; x++) {
    for (let y = 1; y <= cell.length - 2; y++) {
      let neighbors = 0;

      if (cell[x - 1][y - 1] === 1) {
        neighbors++;
      }

      if (cell[x - 1][y] === 1) {
        neighbors++;
      }

      if (cell[x - 1][y + 1] === 1) {
        neighbors++;
      }

      if (cell[x][y - 1] === 1) {
        neighbors++;
      }

      if (cell[x][y + 1] === 1) {
        neighbors++;
      }

      if (cell[x + 1][y - 1] === 1) {
        neighbors++;
      }
      if (cell[x + 1][y] === 1) {
        neighbors++;
      }
      if (cell[x + 1][y + 1] === 1) {
        neighbors++;
      }

      if (cell[x][y] === 0 && neighbors === 3) {
        cellCopy[x][y] = 1;
      }

      if ((cell[x][y] === 1 && neighbors <= 1) || neighbors >= 4) {
        cellCopy[x][y] = 0;
      }

      if ((cell[x][y] === 1 && neighbors === 2) || neighbors === 3) {
        cellCopy[x][y] = 1;
      }
    }
  }
  return cellCopy;
};

export default updateSate;
