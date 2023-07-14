const container = document.querySelector(".game-container__cell");

class Cell {
  constructor(isDead = false, isCornerCase) {
    this.isDead = isDead;
    this.isCornerCase = isCornerCase;
    this.setCell(isDead);
  }

  setCell(isDead) {
    const cellElement = document.createElement("div");
    cellElement.className = "cell";

    if (isDead === null) {
      cellElement.style.border = "none";
      cellElement.style.backgroundColor = "blue";
    } else
      isDead === true
        ? (cellElement.style.backgroundColor = "white")
        : (cellElement.style.backgroundColor = "blue");
    container.appendChild(cellElement);
  }
}

export default Cell;
