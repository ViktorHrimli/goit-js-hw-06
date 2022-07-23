// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

const refItemsList = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${refItemsList.length}`);
console.log("");
const tag = document.querySelector("#categories");
const calc = [...tag.children];

calc.forEach((item) => {
  console.log(`Categories: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
  console.log("");
});
