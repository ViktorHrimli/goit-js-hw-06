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

const refList = document.querySelector("#ingredients");

const generateString = (string) => {
  let conteinerList;
  conteinerList = document.createElement("li");
  conteinerList.textContent = string;
  conteinerList.classList.add("item");

  refList.append(conteinerList);
  return conteinerList;
};

const liCalc = ingredients.map((ingredient) => {
  return generateString(ingredient);
});

console.log(refList);
