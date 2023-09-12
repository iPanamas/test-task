// Находим ссылку на DOM елемент с помощью document.document.querySelector(".square")
const square = document.querySelector(".square");

// Переменной colors присваиваем массив который содержит hex код цветов на которые будет менять цвет елемент square
const colors = ["#FF0000", "#FFA500", "#008000"];

// Переменная currentIndex отслеживает текуий индекс цвета в массиве colors
let currentIndex = 0;

// Обьявляем функцию changeColorSquare
const changeColorSquare = () => {
  // Устанавливаем инлайн стили свойствo background для элемента square равным текущему цвету из массива colors. currentIndex используем для выбора текущего цвета ээтот цвет присваивается как фон элементу.
  square.style.background = colors[currentIndex];

  // Увеличиваем значение currentIndex на 1 для перехода к следующему цвету в массиве colors, если currentIndex превышает длинну массива colors используется остаток от деления % что бы перейти в начало массива colors и циклически менять цвета.
  currentIndex = (currentIndex + 1) % colors.length;
};

// Используем функцию setInterval для вызова функции changeColorSquare каждую секунду
setInterval(changeColorSquare, 1000);
