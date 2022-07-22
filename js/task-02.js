// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JavaScript есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let conteinerList;
const onItems = [];
const refList = document.querySelector("#ingredients");

const generateString = (event) => {
  conteinerList = document.createElement("li");
  conteinerList.textContent = event;
  conteinerList.classList.add("item");
  onItems.push(conteinerList);
};

const liCalc = ingredients.map(generateString).join("");
refList.append(...onItems);
