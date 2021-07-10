const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function onButtonClick() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  document.querySelector(".color").textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  document.getElementById("btn").style.backgroundColor = hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
