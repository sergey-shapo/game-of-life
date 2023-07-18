import selectors from "./querySelectors.js";

const getRandomDarkColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomChar = letters.charAt(randomIndex);

    color += randomChar;
  }
  return color;
};

const changeTheme = () => {
  const color = getRandomDarkColor();

  selectors.footer.style.border = `2px solid ${color}`;
  selectors.header.style.border = `2px solid ${color}`;
  selectors.rangeArea.style.border = `2px solid ${color}`;
  selectors.thumb.style.backgroundColor = color;
  selectors.svg.style.fill = color;
  selectors.buttons.forEach(
    (button) => (button.style.border = `2px solid ${color}`)
  );

  return color;
};

export default changeTheme;
