// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputRangeElem = document.querySelector("#font-size-control");

const spanText = document.querySelector("#text");

console.log(inputRangeElem);
console.log(spanText);
console.log(inputRangeElem.value);
inputRangeElem.addEventListener("change", (event) => {
  console.log(event.currentTarget.value);
  spanText.style.fontSize = event.currentTarget.value + "px";
});
