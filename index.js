//////// PROJECT 5 //////

/// Generate a random color -

let randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let interval;
const startChangingColor = function () {
  let changeBg = function () {
    document.body.style.backgroundColor = randomColor();
    console.log(randomColor());
  };
  interval = setInterval(changeBg, 1000);
};

const stopChangingColor = function () {
  clearInterval(interval);
  interval = null;
};

// cannot initialize before declaration
document.querySelector(".start").addEventListener("click", startChangingColor);

document.querySelector(".stop").addEventListener("click", stopChangingColor);
