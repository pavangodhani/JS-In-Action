var count = 0;

function onIncreaseButtonClick() {
  count += 1;
  document.getElementById("count").textContent = count;
}
function onResetButtonClick() {
  count = 0;
  document.getElementById("count").textContent = count;
}
function onDecreaseButtonClick() {
  count += -1;
  document.getElementById("count").textContent = count;
}
