import selectors from "./querySelectors.js";

class Cell {
  constructor(isDead = false, cellColor = "black") {
    this.isDead = isDead;
    this.cellColor = cellColor;
    this.setCell(isDead);
  }

  setCell(isDead) {
    const cellElement = document.createElement("div");
    cellElement.className = "cell";

    if (isDead === null) {
      cellElement.style.border = "none";
      cellElement.style.backgroundColor = this.cellColor;
    } else if (isDead === false) {
      cellElement.style.backgroundColor = this.cellColor;
    }
    selectors.container.appendChild(cellElement);
  }
}

export default Cell;
