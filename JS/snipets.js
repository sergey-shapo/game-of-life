const createCell = (cellColumnsLength) => {
  let cellsCounter = 0;

  const cell = Array(cellColumnsLength)
    .fill()
    .map(() => Array(cellColumnsLength));

  for (let x = 0; x < cell.length; x++) {
    for (let y = 0; y < cell.length; y++) {
      if (
        x === 0 ||
        y === 0 ||
        x === cell.length - 1 ||
        y === cell.length - 1
      ) {
        cell[x][y] = 2;
        const cellElement = document.createElement("div");
        setCell(false);
        cellElement.style.backgroundColor = "black";
      } else {
        cell[x][y] = Math.floor(Math.random() * 2);

        if (cell[x][y] === 0) {
          setCell(true);
        } else {
          const cellElement = document.createElement("div");
          cellElement.className = "cell";
          container.appendChild(cellElement);
        }
      }
      cellsCounter++;
    }
  }
  return cell;
};

// const playGame = (numberOfCells) => {
//   let cell = createCell(numberOfCells);
//   setContainerGrid(numberOfCells);
//   console.log(cell);
//   // printCell(cell);
//   liveOrDie(cell);
// };

// const setCell = (isDead) => {
//   const cellElement = document.createElement("div");
//   cellElement.className = "cell";
//   isDead === true ? (cellElement.style.backgroundColor = "black") : null;
//   container.appendChild(cellElement);
// };

// setCell(numberCellsPerAxis) {
//     const cell = Array(numberCellsPerAxis)
//       .fill()
//       .map(() => Array(numberCellsPerAxis));

//     for (let x = 0; x < cell.length; x++) {
//       for (let y = 0; y < cell.length; y++) {
//         if (
//           x === 0 ||
//           y === 0 ||
//           x === cell.length - 1 ||
//           y === cell.length - 1
//         ) {
//           cell[x][y] = 2;
//           new Cell(true);
//         } else {
//           const randomNumber = Math.floor(Math.random() * 2);
//           cell[x][y] = randomNumber;
//           randomNumber === 0 ? new Cell(true) : new Cell(false);
//         }
//       }
//     }
//     return cell;
//   }

// const printCell = (cell) => {
//   let counter = 0;
//   for (let i = 0; i < cell.length; i++) {
//     for (let y = 0; y < cell.length; y++) {
//       if (i !== 0 || y !== 0) {
//         document.querySelector(`.cell:nth-child(${counter})`).innerHTML =
//           "counter";
//       }

//       if (cell[i][y] === 0) {
//         document.querySelector(
//           `.cell:nth-child(${counter})`
//         ).style.backgroundColor = "black";
//       }
//       counter++;
//     }
//   }
// };
