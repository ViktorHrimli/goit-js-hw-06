// Задание 3
// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>
// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulList = document.querySelector(".gallery");
ulList.style.display = "grid";
ulList.style.gridGap = "40px";
ulList.style.gridTemplateColumns = "repeat(3, 1fr)";
ulList.style.listStyle = "none";

function generateImage(url, alt) {
  return `
        <li> 
        <img class='items-img' src='${url}' alt='${alt}'> 
        </li>
  `;
}

const imgCalc = images
  .map((img) => {
    return generateImage(img.url, img.alt);
  })
  .join("");

ulList.insertAdjacentHTML("afterbegin", imgCalc);
console.log(ulList);

// ручками \\

// const elementLi = `
//               <li>
//               <img class='items-img' src =
//   "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "White and Black Long Fur Cat"> </li>
//               <li>
//               <img class='items-img' src =
//   "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "Orange and White Koi Fish Near Yellow Koi Fish"> </li>
//               <li>
//               <img class='items-img'  src =
//   "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "Group of Horses Running"></li>`;
// ulList.insertAdjacentHTML("afterbegin", elementLi);
