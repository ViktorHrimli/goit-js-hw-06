// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const items = {
  onCreateBtn: document.querySelector("button[data-create]"),
  onDestroyBtn: document.querySelector("button[data-destroy]"),
  inputEl: document.querySelector("input"),
  divGaleryBoxes: document.querySelector("#boxes"),
  onAppendDiv: document.createElement("div"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let numberInput;
items.inputEl.addEventListener("blur", (event) => {
  numberInput = event.currentTarget.value;
});

function createBoxes(amount) {
  const step = items.divGaleryBoxes.children.length;
  let divElMagic;

  for (let i = 0; i <= amount; i += 1) {
    divElMagic = document.createElement("div");
    divElMagic.classList.add("magic-div");
    divElMagic.style.width = `${(step + i) * 10}px`;
    divElMagic.style.height = `${(step + i) * 10}px`;
    divElMagic.style.background = getRandomHexColor();

    items.onAppendDiv.append(divElMagic);
  }
}

function destroyBoxes() {
  items.divGaleryBoxes.innerHTML = "";
}

items.onDestroyBtn.addEventListener("click", destroyBoxes);
items.onCreateBtn.addEventListener("click", () => {
  createBoxes(numberInput);
  items.divGaleryBoxes.append(items.onAppendDiv);
});
