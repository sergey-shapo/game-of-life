import selectors from "./querySelectors.js";

const hideButton = (buttonText) => {
  if (buttonText === "start") {
    selectors.startButton.style.display = "none";
    selectors.stopButton.style.display = "block";
  }

  if (buttonText === "stop") {
    selectors.stopButton.style.display = "none";
    selectors.startButton.style.display = "block";
  }
};

export default hideButton;
