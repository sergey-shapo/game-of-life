import selectors from "./querySelectors.js";

const hideButton = (buttonText) => {
  if (buttonText === "start") {
    selectors.startButton.classList.add("hidden");
    selectors.stopButton.style.display = "block";
  } else if (buttonText === "stop") {
    selectors.startButton.classList.remove("hidden");
    selectors.stopButton.style.display = "none";
  }
};

export default hideButton;
