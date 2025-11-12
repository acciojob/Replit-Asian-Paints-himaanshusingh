const gridItems = document.querySelectorAll(".grid-item");
const changeBtn = document.querySelector("#change_button");
const resetBtn = document.querySelector("#reset_button");
const inputItem = document.querySelector("#block_id");
const inputColor = document.querySelector("#colour_id");
changeBtn.addEventListener("click", () => {
  gridItems.forEach((item) => (item.style.backgroundColor = "transparent"));
  gridItems[inputItem.value - 1].style.backgroundColor = inputColor.value;
});
resetBtn.addEventListener("click", () => {
  gridItems[inputItem.value - 1].style.backgroundColor = "transparent";
});
