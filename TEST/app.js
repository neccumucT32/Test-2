let textField = document.getElementById("textField");
let allSymbol = document.querySelector("#numberSymbol");
let remainingSymbol = document.querySelector("#limitSymbol");
const maxSymbols = 50;

textField.addEventListener("input", limitLetters);

function limitLetters() {
  let currentLength = textField.value.length;
  let remainingLetters = maxSymbols - currentLength;

  allSymbol.textContent = "Всего: " + currentLength;
  remainingSymbol.textContent = "Осталось: " + remainingLetters;

  if (currentLength > maxSymbols) {
    textField.value = textField.value.slice(0, maxSymbols);
    allSymbol.textContent = "Всего: " + maxSymbols;
    remainingSymbol.textContent = "Осталось: " + 0;
  }
}
sad;
