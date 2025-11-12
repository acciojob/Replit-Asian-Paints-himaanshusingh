const gridItems = document.querySelectorAll(".grid-item");
const inputItem = document.querySelector("#block_id");
const inputColor = document.querySelector("#color_id");
const changeBtn = document.querySelector("#change_button");
const resetBtn = document.querySelector("#reset_button");

changeBtn.addEventListener("click", () => {
  gridItems.forEach((item) => (item.style.backgroundColor = "transparent"));
  const index = Number(inputItem.value) - 1;
  if (index >= 0 && index < gridItems.length)
    gridItems[index].style.backgroundColor = inputColor.value;
});

resetBtn.addEventListener("click", () => {
  const index = Number(inputItem.value) - 1;
  if (index >= 0 && index < gridItems.length)
    gridItems[index].style.backgroundColor = "transparent";
});
