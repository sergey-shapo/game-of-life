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
