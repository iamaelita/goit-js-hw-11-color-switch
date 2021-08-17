import colors from './colors'; // Массив цветов
import { startBtn, stopBtn } from './refs'; // Ссылки на кнопки

let intervalId = null; // Будет хранить айдишник интервала

onLoading();

// Меняет цвет фона боди на рандомный
function changeBodyBgColor() {
  const index = Math.floor(Math.random() * colors.length); // Получение рандомного индекса из массива цветов

  document.body.style.backgroundColor = colors[index]; // Смена цвета фона
}

function onStart() {
  startBtn.disabled = true; // Даективация кнопки "Старт"
  stopBtn.disabled = false; // Активация кнопки "СТОП"
  stopBtn.style.animationDuration = '4s'; // Включение анимации кнопки

  intervalId = setInterval(changeBodyBgColor, 1000); // Установка интервала для смены цвета фона
}

function onStop() {
  clearInterval(intervalId); // Очистка интервала
  document.body.style.backgroundColor = '#000'; // Установка фона по-умолчанию
  startBtn.disabled = false; // Активация кнопки "Старт"
  stopBtn.disabled = true; //  Деактивация кнопки "СТОП"
  stopBtn.style.animationDuration = '0s'; // Выключение анимации кнопки "СТОП"
}

function onLoading() {
  stopBtn.disabled = true; // Деактивация кнопки "СТОП" при загрузке страницы

  // Появление кнопок при загрузке страницы
  setTimeout(() => {
    startBtn.style.opacity = 1;
  }, 1000);

  setTimeout(() => {
    stopBtn.style.opacity = 1;
  }, 2000);
}
// Слушатели
startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);
