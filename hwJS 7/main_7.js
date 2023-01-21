const textEl = document.getElementById("text");
const fontEl = document.getElementById("font-size-control");

fontEl.addEventListener("input", (e) => {
  const size = fontEl.value;

  textEl.style.fontSize = size + "px";
});
