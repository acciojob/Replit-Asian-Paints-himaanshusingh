//your JS code here. If required.
const gridContainer = document.getElementById("grid-container");
for (let i = 1; i <= 9; i++) {
  const gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  gridItem.id = i;
  gridItem.textContent = i;
  gridContainer.appendChild(gridItem);
}

const blockIdInput = document.getElementById("block_id");
const colorInput = document.getElementById("colour_id");
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("reset");

changeButton.addEventListener("click", function () {
  const blockId = blockIdInput.value;
  const color = colorInput.value.trim();
  if (!blockId || blockId < 1 || blockId > 9) {
    alert("Please enter a valid Block ID between 1 and 9");
    return;
  }
  if (!color) {
    alert("Please enter a color");
    return;
  }
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "transparent";
  });
  const targetBlock = document.getElementById(blockId);
  targetBlock.style.backgroundColor = color;
  blockIdInput.value = "";
  colorInput.value = "";
});

resetButton.addEventListener("click", function () {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "transparent";
  });
  blockIdInput.value = "";
  colorInput.value = "";
});
