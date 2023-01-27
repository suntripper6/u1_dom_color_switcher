const red = document.querySelector(".red");
const white = document.querySelector(".white");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const body = document.getElementsByTagName("body")[0];

const makeRed = () => {
  body.className = "";
  body.style.backgroundColor = "red";
  body.style.color = "white";
};

const makeWhite = () => {
  body.className = "";
  body.style.backgroundColor = "white";
  body.style.color = "black";
};

const makeBlue = () => {
  body.className = "";
  body.style.backgroundColor = "blue";
  body.style.color = "white";
};

const makeYellow = () => {
  body.className = "";
  body.style.backgroundColor = "yellow";
  body.style.color = "black";
};

red.addEventListener("click", makeRed);
white.addEventListener("click", makeWhite);
blue.addEventListener("click", makeBlue);
yellow.addEventListener("click", makeYellow);
