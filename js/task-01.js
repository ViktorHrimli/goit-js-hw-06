// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

const refItemsList = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${refItemsList.length}`);

const refNameCategories = document.querySelectorAll("h2");
const elListname = document.querySelectorAll("#categories ul");

// const refNameCategories = document.querySelectorAll("h2");
// const elListname = document.querySelectorAll("#categories ul");

console.log("");

console.log(`Category: ${refNameCategories[0].textContent}`);
console.log(`Elements: ${elListname[0].children.length}`);
console.log("");

console.log(`Category: ${refNameCategories[1].textContent}`);
console.log(`Elements: ${elListname[1].children.length}`);
console.log("");

console.log(`Category: ${refNameCategories[2].textContent}`);
console.log(`Elements: ${elListname[2].children.length}`);

// const arrayElCategory = [...refNameCategories];
// const refNumElement = [...elListname];

// const aray = indexeOf(arrayElCategory);
// console.log(aray);

// ++++++++++++++++++++++++++++++++++++\\\
// function calcElements(num) {
//   console.log(`Element: ${num}`);
//   console.log("");
// }

// function calcAnimalsLeg(name) {
//   console.log(`Category: ${name}`);
// }

// const numElement = refNumElement.map((num) => {
//   return calcElements(num.children.length);
// });

// const nameCatCalc = arrayElCategory.map((cat) => {
//   return calcAnimalsLeg(cat.textContent);
// });
// arrayElCategory.map((element) => {
//   all(element.textContent);
// });

// refNumElement.map((el) => {
//   all(el.children.length);
// });

// function all(categories, num) {
//   console.log(categories);
//   console.log(num);
//   console.log("");
// }

// all(arrayElCategory, refNumElement);
