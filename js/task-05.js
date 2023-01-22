let inputIn = document.querySelector("#name-input");
let inputOut = document.querySelector("#name-output");
inputIn.addEventListener("input", onInutChange);

function onInutChange(event) {
  inputOut.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    inputOut.textContent = "Anonymous";
  }
}
