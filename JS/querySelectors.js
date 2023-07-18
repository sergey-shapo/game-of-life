const selectors = {
  footer: document.querySelector(".footer"),
  header: document.querySelector(".header"),
  buttons: document.querySelectorAll("button"),
  container: document.querySelector(".game-container__cell"),
  cells: document.querySelectorAll(".cell"),
  cell: document.querySelector(".cell"),
  startButton: document.querySelector(".game-container__button"),
  stopButton: document.querySelector(".next-step-button"),
  changeThemeButton: document.querySelector(".change-theme-button"),
  svg: document.querySelector("path"),
  rangeInput: document.getElementById("speed"),
  thumb: document.querySelector('input[type="range"]'),
  rangeArea: document.querySelector(".range-area"),
};

export default selectors;
