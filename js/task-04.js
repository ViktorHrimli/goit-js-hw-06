// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = document.querySelector("#value");
let calc = Number(counterValue.innerHTML);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const handleClickIncrement = () => {
  console.log("Value was increment");
  counterValue.innerHTML = calc += 1;
};
const handleClickDecrement = () => {
  console.log("Value was decrement");
  counterValue.innerHTML = calc -= 1;
};

incrementBtn.addEventListener("click", handleClickIncrement);
decrementBtn.addEventListener("click", handleClickDecrement);

// short-hand

// incrementBtn.addEventListener("click", () => {
//   console.log("Value was increment");
//   counterValue.innerHTML = calc += 1;
// });

// decrementBtn.addEventListener("click", () => {
//   console.log("Value was decrement");
//   counterValue.innerHTML = calc -= 1;
// });
