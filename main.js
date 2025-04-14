// Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

const input = document.querySelector(".myInput");
const button = document.querySelector(".myButton");

button.addEventListener("click", function () {
  button.innerHTML = input.value;
});

// Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.

const imageElement = document.querySelector(".myImage");
const buttonElement = document.querySelector(".changeImageButton");

buttonElement.addEventListener("click", function () {
  imageElement.src =
    "https://avatanplus.com/files/photos/mid/5ed4f2557b9271726fd29e02.png";
});

// Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.

const link = document.querySelector(".myLink");
link.href = "https://getbootstrap.com/";
link.textContent = "Перейти на нове посилання";

const imageLink = document.querySelector(".myImageElement");
imageLink.alt = "SuperB";
imageLink.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png";






//   Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

document.querySelector(".changeTextButtonList").addEventListener("click", function() {

    const list = document.querySelector(".myList");

    const firstItem = list.firstElementChild;

    firstItem.innerHTML = "Новий текст (через firstElementChild)";
});

