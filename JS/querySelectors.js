const selectors = {
  footer: document.querySelector(".footer"),
  header: document.querySelector(".header"),
  buttons: document.querySelectorAll("button"),
  container: document.querySelector(".game-container__cell"),
  startButton: document.querySelector(".game-container__button"),
  stopButton: document.querySelector(".next-step-button"),
  infoButton: document.querySelector(".info-btn"),
  closeInfoButton: document.querySelector(".close-info-btn"),
  changeThemeButton: document.querySelector(".change-theme-button"),
  svg: document.querySelector("path"),
  rangeInput: document.getElementById("speed"),
  thumb: document.querySelector('input[type="range"]'),
  rangeArea: document.querySelector(".range-area"),
  gameInfo: document.querySelector(".game-container__info"),
  click: document.querySelector(".click"),
};

export default selectors;
