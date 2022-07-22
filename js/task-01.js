// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

const refItemsList = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${refItemsList.length}`);
const refItemsAnimal = {
  NameCategories: document.querySelectorAll("h2"),
  elListname: document.querySelectorAll("#categories ul"),
};

console.log("");

const categoriesList = [...refItemsAnimal.NameCategories];
const elementList = [...refItemsAnimal.elListname];

let i = [];
for (i = 0; i < categoriesList; i += 1) {}
elementList.map((element, i) => {
  let itemName = [];

  for (const categori of categoriesList) {
    itemName.push(categori.textContent);
  }

  console.log(`Categories: ${itemName[i]}`);
  console.log(`Elements: ${element.children.length}`);
  console.log("");
});
