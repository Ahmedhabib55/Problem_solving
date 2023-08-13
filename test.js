let container = document.querySelector("#container");

container.addEventListener("click", function (ele) {
  if (ele.target.classList.contains("remove-button")) {
    console.log(ele.target.parentNode.remove());
  } else {
    return;
  }
});
