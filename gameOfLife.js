import CellWorld from "./JS/cellsWorld.js";
import Cell from "./JS/cell.js";

const container = document.querySelector(".game-container__cell");

const size = {
  small: "20px",
  medium: "40px",
  large: "60px",
};

console.log(size.large);

const playGame = (numberOfCells) => {
  let cellWorld = new CellWorld(numberOfCells);
  setContainerGrid(numberOfCells);
  let state = checkNeighbors(cellWorld.cells, numberOfCells);
  const myInterval = setInterval(() => {
    state = nextPrint(state, numberOfCells);
  }, 100);

  buttonNext.addEventListener("click", () => {
    clearInterval(myInterval);
  });
};

const setPlayStop = (isTrue) => {
  return !isTrue;
};

console.log(setPlayStop(false));

const nextPrint = (state, numberOfCells) => {
  const cells = document.querySelectorAll(".cell");

  cells.forEach(function (cell) {
    cell.remove();
  });
  state = checkNeighbors(state, numberOfCells);
  showWorldCells(state);
  return state;
};

const setContainerGrid = (numberColumns) => {
  container.style.gridTemplateColumns = `repeat(${numberColumns}, 1fr)`;
};

const showWorldCells = (array) => {
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array.length; y++) {
      if (
        x === 0 ||
        y === 0 ||
        x === array.length - 1 ||
        y === array.length - 1
      ) {
        array[x][y] = 2;
        new Cell(null);
      } else array[x][y] === 0 ? new Cell(true) : new Cell(false);
    }
  }
};

const checkNeighbors = (cell, numberOfCells) => {
  let cellCopy = Array.from({ length: numberOfCells }, () =>
    Array(numberOfCells).fill(0)
  );

  for (let x = 1; x <= cell.length - 2; x++) {
    for (let y = 1; y <= cell.length - 2; y++) {
      let neighbors = 0;

      // if (neighbors < 4) {
      // }

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

      if (cell[x][y] === 1 && neighbors <= 1) {
        cellCopy[x][y] = 0;
      }

      if (cell[x][y] === 1 && neighbors >= 4) {
        cellCopy[x][y] = 0;
      }

      if (cell[x][y] === 1 && neighbors === 2) {
        cellCopy[x][y] = 1;
      }

      if (cell[x][y] === 1 && neighbors === 3) {
        cellCopy[x][y] = 1;
      }
    }
  }
  return cellCopy;
};

const button = document.querySelector(".game-container__button");
const buttonNext = document.querySelector(".next-step-button");

button.addEventListener("click", () => {
  playGame(40);
});
