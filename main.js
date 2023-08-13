(function () {
  let h3 = document.querySelector("h3");
  h3.style.color = "black";
  let body = document.querySelector("body");
  body.addEventListener("click", (_) => (h3.style.color = "blue"));
})();
