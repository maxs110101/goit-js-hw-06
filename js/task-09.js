function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector('.change-color');
const colorNameRef = document.querySelector('.color');
const bodyRef = document.querySelector('body')

buttonRef.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor (params) {
  const currentColor = getRandomHexColor();

  bodyRef.style.backgroundColor = currentColor;
  colorNameRef.textContent = currentColor;
}