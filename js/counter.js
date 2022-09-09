const counterElement = document.getElementById('counter');
localStorage.setItem('Zero', counterElement.innerHTML);

// counter value increase
const counterUp = () => {
    const currentValueString = counterElement.innerText;
    const currentValue = parseInt(currentValueString);

    let increaseValue = currentValue + 1;
    counterElement.innerText = increaseValue;

    localStorage.setItem('Counter', increaseValue);
    counter();
}

// coounter value decrease
const counterDown = () => {
    const currentValueString = counterElement.innerText;
    const currentValue = parseInt(currentValueString);

    let decreaseValue = currentValue - 1;
    counterElement.innerText = decreaseValue;

    localStorage.setItem('Counter', decreaseValue)
    counter()
}

const counter = () => {
    const initialNumber = JSON.parse(localStorage.getItem('Counter'));
    counterElement.innerText = initialNumber;
}

counter()
