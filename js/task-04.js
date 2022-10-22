const refs = {
    increment: document.querySelector('button[data-action="increment"]'),
    decrement: document.querySelector('button[data-action="decrement"]'),
    counter: document.querySelector('#value')
}

let counterValue = 0;

refs.increment.addEventListener('click', () => {
    counterValue += 1;

    refs.counter.textContent = counterValue;
})

refs.decrement.addEventListener('click', () => {
    counterValue -= 1;

    refs.counter.textContent = counterValue;
})