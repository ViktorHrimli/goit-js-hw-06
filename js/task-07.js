// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const items = {
  inputRangeElem: document.querySelector("#font-size-control"),
  spanText: document.querySelector("#text"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(items.inputRangeElem);
console.log(items.spanText);

items.inputRangeElem.addEventListener("input", onChangeFontSizeInput);
items.spanText.style.fontSize = "56px";
function onChangeFontSizeInput(event) {
  items.spanText.style.fontSize = event.currentTarget.value + "px";
  items.spanText.style.color = getRandomHexColor();
}

//  short hand

// items.inputRangeElem.addEventListener("change", (event) => {
//   console.log(event.currentTarget.value);
//   items.spanText.style.fontSize = event.currentTarget.value + "px";
// });
