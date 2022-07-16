// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnClass = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const bodyColor = document.querySelector("body");

btnClass.addEventListener("click", handleClick);

function handleClick() {
  spanColor.textContent = getRandomHexColor();
  bodyColor.style.background = getRandomHexColor();
}
