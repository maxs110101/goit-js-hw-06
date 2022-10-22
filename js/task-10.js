function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  mainBox: document.querySelector('#boxes')
}


let height = 20;
let width = 20;
let boxArreyEl = []  


refs.createBtn.addEventListener('click', handleCreateBtn);
refs.destroyBtn.addEventListener('click', handleDestroyBtn)


function handleCreateBtn() {
  const numberOfBox = refs.input.value;
  createBoxes(numberOfBox)
}


function handleDestroyBtn() {
  destroyBoxes();
}


function destroyBoxes() {
  refs.mainBox.innerHTML = ``;
  boxArreyEl = [];
  height = 20;
  width = 20;
}


function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const boxRef = document.createElement('div')
    
    boxRef.style.width = `${width += 10}px`
    boxRef.style.height = `${height += 10}px`
    boxRef.style.backgroundColor = getRandomHexColor();

    boxArreyEl.push(boxRef)
  }
  
  refs.mainBox.append(...boxArreyEl);
  }




