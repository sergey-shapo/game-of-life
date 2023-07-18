import selectors from "./querySelectors.js";
class Cell {
  constructor(isDead = false, cellColor = "#044548") {
    this.isDead = isDead;
    this.cellColor = cellColor;
    this.setCell(isDead);
  }

  setCell(isDead) {
    const cellElement = document.createElement("div");
    cellElement.className = "cell";

    if (isDead === null || !isDead) {
      cellElement.style.backgroundColor = this.cellColor;
    }

    if (isDead === null) {
      cellElement.style.border = "none";
    }

    selectors.container.appendChild(cellElement);
  }
}

export default Cell;
