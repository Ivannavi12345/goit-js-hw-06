let valueEl = Number(document.querySelector("#value").textContent);
let counterValue = document.querySelector("#value");

const firstBtn = document.querySelector("#counter").firstElementChild;
const lastBtn = document.querySelector("#counter").lastElementChild;

lastBtn.addEventListener("click", (event) => {
  valueEl += 1;
  counterValue.innerText = valueEl;
});

firstBtn.addEventListener("click", (event) => {
  valueEl -= 1;
  counterValue.innerText = valueEl;
});