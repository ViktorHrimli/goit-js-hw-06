// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refInput = document.querySelector("#name-input");
const refSpan = document.querySelector("#name-output");

refInput.addEventListener("blur", () => {
  refSpan.textContent = "Anonymous";
});

refInput.addEventListener("input", (event) => {
  refSpan.textContent = event.currentTarget.value;

  console.log(event.currentTarget.value);
});
