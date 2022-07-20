// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refsItems = {
  btnClass: document.querySelector(".change-color"),
  spanColor: document.querySelector(".color"),
  bodyColor: document.querySelector("body"),
};

refsItems.btnClass.addEventListener("click", handleClick);

function handleClick() {
  refsItems.spanColor.textContent = getRandomHexColor();
  refsItems.bodyColor.style.background = getRandomHexColor();
}
